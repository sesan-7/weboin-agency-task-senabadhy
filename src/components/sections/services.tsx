"use client";

import { motion } from "framer-motion";
import { Service } from "@/types";
import { servicesData } from "@/data";

export default function Services() {
    return (
        <section id="services" className="w-full py-24 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                        Comprehensive digital solutions to help your business thrive in the modern landscape.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {servicesData.map((service: Service, index: number) => {

                        const isHero = index === 0;
                        const spanCols = isHero ? "md:col-span-2 lg:col-span-2" : "col-span-1";

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                                className={`group relative p-8 sm:p-10 rounded-[2rem] bg-gradient-to-br from-background/80 to-muted/30 border border-white/10 dark:border-white/5 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden ${spanCols}`}
                            >
                                {/* Glow Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="relative z-10 flex flex-col h-full gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-inner">
                                        {service.icon}
                                    </div>
                                    <div className="space-y-4 flex-1">
                                        <h3 className={`${isHero ? 'text-3xl' : 'text-2xl'} font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300`}>
                                            {service.title}
                                        </h3>
                                        <p className={`${isHero ? 'text-lg max-w-xl' : 'text-base'} text-muted-foreground leading-relaxed`}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
