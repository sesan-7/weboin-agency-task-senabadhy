"use client";

import { motion } from "framer-motion";
import { Sparkles, Layers, PenTool, Code2, ArrowRight } from "lucide-react";
import { SmoothScrollLink } from "@/components/layout/smooth-scroll-link";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background">
            {/* Background Designs*/}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-primary)_0%,transparent_100%)] opacity-[0.02] dark:opacity-[0.04] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-[120px] opacity-50 z-0 pointer-events-none" />


            <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="hidden lg:flex absolute top-1/4 left-[15%] w-16 h-16 bg-background/40 backdrop-blur-xl border border-white/10 rounded-2xl items-center justify-center shadow-2xl z-0"
            >
                <PenTool className="w-8 h-8 text-blue-500 opacity-80" />
            </motion.div>

            <motion.div
                animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
                className="hidden lg:flex absolute bottom-1/4 right-[15%] w-20 h-20 bg-background/40 backdrop-blur-xl border border-white/10 rounded-full items-center justify-center shadow-2xl z-0"
            >
                <Code2 className="w-10 h-10 text-purple-500 opacity-80" />
            </motion.div>

            <motion.div
                animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
                className="hidden md:flex absolute top-1/3 right-[20%] w-12 h-12 bg-background/40 backdrop-blur-xl border border-white/10 rounded-xl items-center justify-center shadow-2xl z-0"
            >
                <Layers className="w-6 h-6 text-indigo-500 opacity-80" />
            </motion.div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-5xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-8 flex flex-col items-center"
                >
                    <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium mb-2 backdrop-blur-sm">
                        <Sparkles className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-muted-foreground mr-1">Welcome to</span>
                        <span className="font-semibold">Modern Design Agency</span>
                    </div>

                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                        We Craft <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 drop-shadow-sm">Digital</span> Experiences
                    </h1>

                    <p className="mx-auto max-w-[700px] text-muted-foreground text-lg sm:text-xl leading-relaxed">
                        Elevate your brand with our cutting-edge design and development solutions. We transform complex problems into elegant, intuitive digital products that users love.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
                        <SmoothScrollLink
                            href="#contact"
                            className="group inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            Get Started
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </SmoothScrollLink>
                        <SmoothScrollLink
                            href="#portfolio"
                            className="inline-flex w-full sm:w-auto h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                            View Our Work
                        </SmoothScrollLink>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
