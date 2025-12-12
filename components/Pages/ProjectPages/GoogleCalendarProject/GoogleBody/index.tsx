'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import TableOfContents from './TableOfContents';
import OverviewSection from './sections/OverviewSection';
import ProblemSection from './sections/ProblemSection';
import OpportunitySection from './sections/OpportunitySection';
import InsightSection from './sections/InsightSection';
import DesignSystemSection from './sections/DesignSystemSection';
import FinalSolutionSection from './sections/FinalSolutionSection';
import ImpactSection from './sections/ImpactSection';

const GoogleBody: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('overview');
    
    const overviewRef = useRef<HTMLDivElement>(null);
    const problemRef = useRef<HTMLDivElement>(null);
    const opportunityRef = useRef<HTMLDivElement>(null);
    const insightRef = useRef<HTMLDivElement>(null);
    const designSystemRef = useRef<HTMLDivElement>(null);
    const finalSolutionRef = useRef<HTMLDivElement>(null);
    const impactRef = useRef<HTMLDivElement>(null);
    
    const sections = useMemo(() => [
        { id: 'overview', ref: overviewRef },
        { id: 'problem', ref: problemRef },
        { id: 'opportunity', ref: opportunityRef },
        { id: 'insight', ref: insightRef },
        { id: 'design-system', ref: designSystemRef },
        { id: 'final-solution', ref: finalSolutionRef },
        { id: 'impact', ref: impactRef },
    ], []);

    useEffect(() => {
        // Intersection Observer를 사용하여 더 정확하고 빠른 섹션 감지
        const observerOptions = {
            root: null,
            rootMargin: '-33% 0px -33% 0px', // 화면 상단 1/3 지점 기준
            threshold: [0, 0.1, 0.5, 1] // 여러 threshold로 더 정확한 감지
        };

        const observer = new IntersectionObserver((entries) => {
            // 현재 보이는 섹션들을 찾기
            const visibleSections = entries
                .filter(entry => entry.isIntersecting)
                .map(entry => ({
                    id: entry.target.getAttribute('data-section-id') || '',
                    intersectionRatio: entry.intersectionRatio,
                    boundingClientRect: entry.boundingClientRect
                }))
                .sort((a, b) => {
                    // 화면 상단 1/3 지점에 더 가까운 섹션 우선
                    const targetY = window.innerHeight / 3;
                    const distanceA = Math.abs(a.boundingClientRect.top - targetY);
                    const distanceB = Math.abs(b.boundingClientRect.top - targetY);
                    return distanceA - distanceB;
                });

            if (visibleSections.length > 0) {
                // 가장 많이 보이고 화면 상단 1/3 지점에 가까운 섹션 선택
                const bestSection = visibleSections.reduce((prev, current) => {
                    const prevDistance = Math.abs(prev.boundingClientRect.top - window.innerHeight / 3);
                    const currentDistance = Math.abs(current.boundingClientRect.top - window.innerHeight / 3);
                    
                    // 거리가 비슷하면 intersectionRatio가 큰 것 선택
                    if (Math.abs(prevDistance - currentDistance) < 50) {
                        return current.intersectionRatio > prev.intersectionRatio ? current : prev;
                    }
                    return currentDistance < prevDistance ? current : prev;
                });
                
                setActiveSection(bestSection.id);
            }
        }, observerOptions);

        // 모든 섹션을 observer에 등록
        sections.forEach(({ id, ref }) => {
            if (ref.current) {
                ref.current.setAttribute('data-section-id', id);
                observer.observe(ref.current);
            }
        });

        // 초기 상태 설정을 위한 fallback
        const handleInitialScroll = () => {
            let closestSection = 'overview';
            let minDistance = Infinity;

            sections.forEach(({ id, ref }) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const targetY = window.innerHeight / 3;

                    // 섹션이 화면에 보이는 경우
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const distance = Math.abs(rect.top - targetY);
                        if (distance < minDistance) {
                            minDistance = distance;
                            closestSection = id;
                        }
                    }
                }
            });

            setActiveSection(closestSection);
        };

        // 초기 상태 설정
        handleInitialScroll();

        return () => {
            observer.disconnect();
        };
    }, [sections]);

    const scrollToSection = (sectionId: string) => {
        const sectionMap: { [key: string]: React.RefObject<HTMLDivElement> } = {
            'overview': overviewRef,
            'problem': problemRef,
            'opportunity': opportunityRef,
            'insight': insightRef,
            'design-system': designSystemRef,
            'final-solution': finalSolutionRef,
            'impact': impactRef,
        };

        const ref = sectionMap[sectionId];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const tocItems = [
        { id: 'overview', label: 'Overview' },
        { id: 'problem', label: 'Problem' },
        { id: 'opportunity', label: 'Opportunity' },
        { id: 'insight', label: 'Insight' },
        { id: 'design-system', label: 'Designing the Design System' },
        { id: 'final-solution', label: 'Final Solution' },
        { id: 'impact', label: 'Impact & Key Learnings' },
    ];

    return (
        <div className="pt-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-10 space-y-24 lg:space-y-40">
                        <OverviewSection ref={overviewRef} />
                        <ProblemSection ref={problemRef} />
                        <OpportunitySection ref={opportunityRef} />
                        <InsightSection ref={insightRef} />
                        <DesignSystemSection ref={designSystemRef} />
                        <FinalSolutionSection ref={finalSolutionRef} />
                        <ImpactSection ref={impactRef} />
                    </div>

                    {/* Table of Contents - Right Side */}
                    <TableOfContents
                        tocItems={tocItems}
                        activeSection={activeSection}
                        onItemClick={scrollToSection}
                    />
                </div>
            </div>
        </div>
    );
};

export default GoogleBody;

