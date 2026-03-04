"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface SmoothScrollLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
}

export const SmoothScrollLink = React.forwardRef<HTMLAnchorElement, SmoothScrollLinkProps>(
    ({ href, onClick, children, ...props }, ref) => {
        const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

            if (onClick) onClick(e);


            if (href.startsWith("#")) {
                e.preventDefault();

                const targetId = href.substring(1); // remove '#'
                const elem = document.getElementById(targetId);

                if (elem) {
                    elem.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });


                    window.history.pushState(null, "", href);
                }
            } else if (href.includes("#")) {
                const parts = href.split("#");
                const path = parts[0];
                const hash = parts[1];


                if (window.location.pathname === path) {
                    e.preventDefault();
                    const elem = document.getElementById(hash);
                    if (elem) {
                        elem.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                        window.history.pushState(null, "", href);
                    }
                }
            }
        };

        return (
            <Link href={href} onClick={handleScroll} ref={ref} {...props}>
                {children}
            </Link>
        );
    }
);

SmoothScrollLink.displayName = "SmoothScrollLink";
