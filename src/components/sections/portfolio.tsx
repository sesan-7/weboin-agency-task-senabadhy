"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { projectsData } from "@/data";

export default function Portfolio() {
    return (
        <section id="portfolio" className="w-full py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Section Header */}
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase"
                    >
                        Selected Works
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
                    >
                        Pioneering Digital Landscapes
                    </motion.h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project: Project, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative overflow-hidden rounded-2xl bg-muted aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
                        >
                            {/* Project Image */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            />

                            {/*
                             * Overlay:
                             * - Mobile/tablet: always visible (opacity-100, translate-y-0)
                             * - Desktop (md+): hidden by default, revealed on hover
                             */}
                            <div className="
                                absolute inset-0 flex flex-col justify-end
                                bg-gradient-to-t from-black/90 via-black/40 to-transparent
                                p-6 md:p-8 backdrop-blur-[2px]
                                opacity-100 md:opacity-0 md:group-hover:opacity-100
                                transition-opacity duration-500 ease-in-out
                            ">
                                <div className="
                                    translate-y-0 opacity-100
                                    md:translate-y-8 md:opacity-0
                                    md:group-hover:translate-y-0 md:group-hover:opacity-100
                                    transition-all duration-500 ease-out delay-75
                                ">
                                    <div className="flex items-center justify-between mb-2 md:mb-3">
                                        <p className="font-mono text-xs uppercase tracking-[0.15em] text-white/80">
                                            {project.category}
                                        </p>
                                        <span className="
                                            flex items-center justify-center
                                            w-9 h-9 md:w-10 md:h-10 rounded-full
                                            border border-white/20 bg-white/10 backdrop-blur-md
                                            text-white md:group-hover:bg-white md:group-hover:text-black
                                            transition-colors duration-300
                                        ">
                                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug text-white">
                                        {project.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="mt-16 text-center">
                    <Link
                        href="#"
                        className="group inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-blue-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                        View All Projects
                        <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
}
