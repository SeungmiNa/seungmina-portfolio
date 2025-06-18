"use client";
import React, { useRef } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const sceneData = [
    {
        title: "Scene 1: Measuring with Precision",
        summary: "A koala carefully examines the texture of tree bark, their paw tracing the subtle grooves with deliberate attention.",
        designIntention: "I designed this scene to capture the essence of obsessive detail work. Every groove in the bark, every subtle shadow, serves as a metaphor for how I approach design—measuring, testing, and refining until every pixel feels intentional. When users see this level of care, they feel understood, as if someone has taken the time to craft something specifically for them.",
        image: "/images/koala/koala-detail1.png",
        imageAlt: "Koala examining tree bark texture"
    },
    {
        title: "Scene 2: Finding Beauty in Imperfection",
        summary: "The koala discovers a dewdrop on a leaf, watching as light refracts through its imperfect surface.",
        designIntention: "This scene embodies my belief that the most beautiful designs often emerge from embracing imperfection. The dewdrop isn't perfectly round, but it creates something extraordinary when light passes through it. I want users to feel that same sense of wonder—that their experience has been crafted with such attention that even the 'flaws' become features that enhance the emotional connection.",
        image: "/images/koala/scene2-thumbnail.jpg",
        imageAlt: "Koala observing dewdrop on leaf"
    },
    {
        title: "Scene 3: Creating Magic from the Ordinary",
        summary: "As the koala interacts with these details, they begin to glow and transform, revealing hidden patterns and connections.",
        designIntention: "This transformation represents the moment when meticulous attention to detail creates something transcendent. Every interaction, every micro-animation, every carefully considered spacing—they all work together to create an experience that feels magical. Users should feel that sense of discovery, that moment when they realize someone has thought about every aspect of their journey.",
        image: "/images/koala/scene3-thumbnail.jpg",
        imageAlt: "Magical transformation of koala's discoveries"
    }
];

const KoalaSceneBreakdown: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-24">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Storyboard & Scene Breakdown
                    </h2>
                    <p className="text-lg text-slate-200 max-w-2xl mx-auto">
                        How obsessive attention to detail creates emotional connections
                    </p>
                </motion.div>
                <div
                    ref={containerRef}
                    className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-8"
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    {sceneData.map((scene, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.9, delay: 0.1 * idx }}
                            className="min-w-[340px] md:min-w-[480px] lg:min-w-[600px] snap-center bg-gradient-to-br from-slate-800/90 to-slate-900/80 rounded-3xl shadow-2xl border border-slate-700 overflow-hidden flex flex-col"
                        >
                            <div className="relative aspect-[21/9] w-full">
                                <Image
                                    src={scene.image}
                                    alt={scene.imageAlt}
                                    fill
                                    className="object-cover rounded-b-none rounded-t-3xl"
                                    sizes="(max-width: 768px) 100vw, 600px"
                                />
                                {/* Vignette overlay */}
                                <div className="absolute inset-0 pointer-events-none rounded-t-3xl" style={{
                                    background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.32) 100%)',
                                }} />
                            </div>
                            <div className="flex-1 flex flex-col justify-between p-8 md:p-10">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                                        {scene.title}
                                    </h3>
                                    <p className="text-base md:text-lg text-slate-100 font-semibold mb-3">
                                        {scene.summary}
                                    </p>
                                    <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                                        {scene.designIntention}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KoalaSceneBreakdown;
