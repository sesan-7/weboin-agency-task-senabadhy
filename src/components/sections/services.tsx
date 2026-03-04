"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Service } from "@/types";
import { servicesData } from "@/data";

export default function Services() {
    return (
        <section id="services" className="w-full py-24 md:py-32 bg-muted/20">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center space-y-4 mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="text-sm font-mono tracking-[0.2em] uppercase text-muted-foreground"
                    >
                        What We Do
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-3xl"
                    >
                        Services Built for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">
                            Impact
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-xl text-muted-foreground text-base md:text-lg leading-relaxed"
                    >
                        Thoughtful digital craft across design, engineering, and strategy — everything you need to grow.
                    </motion.p>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {servicesData.map((service: Service, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                            className="group relative flex flex-col gap-6 p-8 rounded-2xl border border-border bg-background hover:bg-muted/30 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-400 overflow-hidden cursor-default"
                        >
                            {/* Subtle top-left glow on hover */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Icon */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 dark:bg-primary/15 group-hover:scale-110 group-hover:rotate-2 transition-transform duration-300 shadow-sm">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-2">
                                <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Arrow indicator */}
                            <div className="self-end">
                                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-border bg-muted/50 text-muted-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
                                    <ArrowUpRight className="w-4 h-4" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
