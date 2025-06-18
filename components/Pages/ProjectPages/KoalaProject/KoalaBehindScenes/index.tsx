"use client";
import React from 'react';
import { motion } from "framer-motion";

interface KoalaBehindScenesProps {
    failImages: string[];
    failGifs: string[];
}

const KoalaBehindScenes: React.FC<KoalaBehindScenesProps> = ({ failImages, failGifs }) => {
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
                duration: 0.6, 
                ease: "easeOut" 
            }
        },
        hover: {
            scale: 1.05,
            y: -5,
            transition: { 
                duration: 0.3, 
                ease: "easeOut" 
            }
        }
    };

    const imageHoverVariants = {
        initial: { scale: 1, filter: "brightness(1)" },
        hover: { 
            scale: 1.08, 
            filter: "brightness(1.1)",
            transition: { 
                duration: 0.4, 
                ease: "easeOut" 
            }
        }
    };

    return (
        <section className="py-24 bg-black">
            <div className="mx-auto px-4 lg:px-12">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
                >
                    🎬 Behind the Scenes
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-16"
                >
                    Every masterpiece has its journey. Here's a peek into the creative process — the trials, errors, and moments that shaped the final piece.
                </motion.p>

                <div className="grid grid-cols-6 grid-rows-5 gap-2 p-4">
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 0.1 }}
                        className="col-start-2 col-end-3 row-start-1 row-end-2 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failImages[0]} 
                            alt="Failed attempt 1" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 0.3 }}
                        className="col-start-3 col-end-4 row-start-1 row-end-2 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failGifs[3]} 
                            alt="Failed attempt 4 GIF" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 0.5 }}
                        className="col-start-4 col-end-5 row-start-1 row-end-3 h-full overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failImages[1]} 
                            alt="Failed attempt 2" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 0.2 }}
                        className="col-start-5 col-end-6 row-start-1 row-end-2 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failImages[2]} 
                            alt="Failed attempt 3" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 0.7 }}
                        className="col-start-1 col-end-2 row-start-2 row-end-4 h-full overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failGifs[5]} 
                            alt="Failed attempt 6 GIF" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 0.9 }}
                        className="col-start-2 col-end-4 row-start-2 row-end-4 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failGifs[0]} 
                            alt="Failed attempt 1 GIF" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 0.4 }}
                        className="col-start-5 col-end-6 row-start-2 row-end-3 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failGifs[1]} 
                            alt="Failed attempt 2 GIF" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 1.1 }}
                        className="col-start-4 col-end-6 row-start-3 row-end-5 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failGifs[2]} 
                            alt="Failed attempt 3 GIF" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 1.3 }}
                        className="col-start-2 col-end-3 row-start-4 row-end-6 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failImages[3]} 
                            alt="Failed attempt 4" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 0.6 }}
                        className="col-start-3 col-end-4 row-start-4 row-end-5 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failImages[4]} 
                            alt="Failed attempt 5" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 0.8 }}
                        className="col-start-3 col-end-4 row-start-4 row-end-5 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failGifs[4]} 
                            alt="Failed attempt 5 GIF" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 1.0 }}
                        className="col-start-3 col-end-4 row-start-5 row-end-6 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failGifs[5]} 
                            alt="Failed attempt 6 GIF" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 1.2 }}
                        className="col-start-4 col-end-5 row-start-5 row-end-6 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failGifs[6]} 
                            alt="Failed attempt 2 GIF" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 1.4 }}
                        className="col-start-5 col-end-6 row-start-5 row-end-6 aspect-[5/4] overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failImages[5]} 
                            alt="Failed attempt 6" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        whileHover="hover"
                        variants={imageVariants}
                        transition={{ delay: 1.5 }}
                        className="col-start-6 col-end-7 row-start-3 row-end-5 h-full overflow-hidden rounded-lg cursor-pointer group"
                    >
                        <motion.img 
                            variants={imageHoverVariants}
                            initial="initial"
                            whileHover="hover"
                            src={failImages[6]} 
                            alt="Failed attempt 7" 
                            className="w-full h-full object-cover rounded-lg shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default KoalaBehindScenes;
