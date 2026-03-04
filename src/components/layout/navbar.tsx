"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SmoothScrollLink } from "@/components/layout/smooth-scroll-link";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        if (typeof window !== "undefined") {
            window.history.replaceState(null, "", "/");
            window.scrollTo({ top: 0, behavior: "instant" });
        }
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto max-w-7xl flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex bg-transparent">
                    <Link href="/" className="flex items-center space-x-2 group">
                        <span className="font-extrabold sm:inline-block text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70 group-hover:to-blue-500 transition-all duration-300">
                            Modern Design Agency
                        </span>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-6 w-full">
                    <nav className="flex items-center space-x-4">
                        {mounted && (
                            <button
                                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {theme === "dark" ? (
                                    <Moon className="h-4 w-4" />
                                ) : (
                                    <Sun className="h-4 w-4" />
                                )}
                                <span className="sr-only">Toggle theme</span>
                            </button>
                        )}
                        <SmoothScrollLink
                            href="#contact"
                            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-transform hover:scale-105"
                        >
                            Let&apos;s Talk
                        </SmoothScrollLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}
