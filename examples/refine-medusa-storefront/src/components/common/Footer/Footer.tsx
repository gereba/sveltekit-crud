import { FC } from "react";
import Link from "next/link";
import cn from "clsx";

import { Github, Twitter, Discord } from "@components/icons";
import { Logo, Container } from "@components/ui";
import s from "./Footer.module.css";

interface Props {
    className?: string;
    children?: any;
    pages?: any[];
}

const links = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Quikstart",
        url: "https://refine.dev/docs/getting-started/overview/",
    },
    {
        name: "Tutorial",
        url: "https://refine.dev/docs/",
    },
    {
        name: "Examples",
        url: "https://refine.dev/docs/examples/tutorial/headless-tutorial/",
    },
    {
        name: "Blog",
        url: "https://refine.dev/blog/",
    },
];

export const Footer: FC<Props> = ({ className, pages }) => {
    const rootClassName = cn(s.root, className);

    return (
        <footer className={rootClassName}>
            <Container>
                <div className="border-accent-2 text-primary bg-primary grid grid-cols-1 gap-8 border-b py-12 transition-colors duration-150 lg:grid-cols-12">
                    <div className="col-span-1 lg:col-span-2">
                        <Link href="/">
                            <Logo />
                        </Link>
                    </div>
                    <div className="col-span-1 lg:col-span-8">
                        <div className="grid md:grid-flow-col md:grid-cols-3 md:grid-rows-4">
                            {[...links].map((page) => (
                                <span
                                    key={page.url}
                                    className="py-3 md:py-0 md:pb-4"
                                >
                                    <Link
                                        href={page.url ?? ""}
                                        className="text-accent-9 hover:text-accent-6 transition duration-150 ease-in-out"
                                    >
                                        {page.name}
                                    </Link>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="text-primary col-span-1 flex items-start lg:col-span-2 lg:justify-end">
                        <div className="flex h-10 items-center space-x-6">
                            <a
                                aria-label="Github Repository"
                                href="https://github.com/pankod/refine"
                            >
                                <Github />
                            </a>
                            <a
                                aria-label="Twitter"
                                href="https://twitter.com/refine_dev"
                            >
                                <Twitter />
                            </a>{" "}
                            <a
                                aria-label="Discord"
                                href="https://discord.gg/refine"
                            >
                                <Discord />
                            </a>
                            {/* // i18n */}
                        </div>
                    </div>
                </div>
                <div className="text-accent-6 flex flex-col items-center justify-between  pt-6 pb-10 text-sm md:flex-row">
                    <div>
                        <span>
                            &copy; 2022 refine, Inc. All rights reserved.
                        </span>
                    </div>
                    <div className="text-primary flex items-center ">
                        <span className="text-primary mr-2  pt-2.5">
                            Created by
                        </span>
                        <a
                            rel="noopener noreferrer"
                            href="https://refine.dev"
                            aria-label="refine Link"
                            target="_blank"
                        >
                            <Logo height={28} />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
