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
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3; // 화면 상단 1/3 지점

            // 각 섹션의 위치를 확인하고 현재 보이는 섹션 찾기
            let currentSection = 'overview';
            let maxVisibleRatio = 0;
            
            sections.forEach(({ id, ref }) => {
                if (ref.current) {
                    const element = ref.current;
                    const rect = element.getBoundingClientRect();
                    const elementTop = rect.top + window.scrollY;
                    const elementBottom = elementTop + rect.height;
                    
                    // 화면 상단 1/3 지점이 섹션 내에 있는지 확인
                    if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
                        // 섹션이 얼마나 보이는지 계산
                        const visibleTop = Math.max(elementTop, window.scrollY);
                        const visibleBottom = Math.min(elementBottom, window.scrollY + window.innerHeight);
                        const visibleRatio = (visibleBottom - visibleTop) / rect.height;
                        
                        // 더 많이 보이는 섹션을 선택
                        if (visibleRatio > maxVisibleRatio) {
                            maxVisibleRatio = visibleRatio;
                            currentSection = id;
                        }
                    }
                }
            });

            setActiveSection(currentSection);
        };

        // 스크롤 이벤트 리스너 추가 (throttle 적용)
        let ticking = false;
        const throttledHandleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledHandleScroll, { passive: true });
        handleScroll(); // 초기 상태 설정

        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
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
        <div className="px-6 lg:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Main Content - Left Side */}
                    <div className="lg:col-span-10 space-y-40">
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

