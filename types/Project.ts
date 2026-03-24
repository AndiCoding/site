import { PortableTextBlock } from "@portabletext/react";

export type Project = {
    title: string;
    order: number;
    description?: PortableTextBlock[];
    shortDescription?: string;
    slug: string;
    technologies?: string[];
    categories?: string[];
    githubUrl?: string;
}

