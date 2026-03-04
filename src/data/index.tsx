import React from "react";
import { Monitor, Paintbrush, Megaphone, Smile } from "lucide-react";
import { Project, Service } from "@/types";

export const projectsData: Project[] = [
    {
        title: "E-Commerce Replatforming",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        title: "Fintech Dashboard App",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        title: "Eco-Brand Identity",
        category: "Branding",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        title: "Healthtech Mobile App",
        category: "UI/UX Design",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        title: "SaaS Marketing Website",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600",
    },
    {
        title: "Global Coffee Campaign",
        category: "Digital Marketing",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800&h=600",
    },
];

export const servicesData: Service[] = [
    {
        title: "UI/UX Design",
        description: "Crafting intuitive and engaging user experiences with pixel-perfect designs.",
        icon: <Paintbrush className="w-8 h-8 text-primary" />,
    },
    {
        title: "Web Development",
        description: "Building fast, scalable, and responsive web applications using modern technologies.",
        icon: <Monitor className="w-8 h-8 text-primary" />,
    },
    {
        title: "Branding",
        description: "Creating memorable brand identities that resonate with your target audience.",
        icon: <Smile className="w-8 h-8 text-primary" />,
    },
    {
        title: "Digital Marketing",
        description: "Driving growth through data-driven SEO, social media, and content strategies.",
        icon: <Megaphone className="w-8 h-8 text-primary" />,
    },
];
