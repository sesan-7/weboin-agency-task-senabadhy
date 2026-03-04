import { ReactNode } from "react";

export interface Project {
    title: string;
    category: string;
    image: string;
}

export interface Service {
    title: string;
    description: string;
    icon: ReactNode;
}
