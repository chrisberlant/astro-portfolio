import { GlobeIcon } from "lucide-react";
import GithubIcon from "./Icons/GithubIcon";
import { buttonVariants } from "./ui/button";

interface ExternalLinkProps {
    link: string;
    text: string;
    title: string;
    type: "repo" | "app";
}

export default function ExternalLink({
    link,
    text,
    title,
    type,
}: ExternalLinkProps) {
    return (
        <a
            href={link}
            title={title}
            target="_blank"
            className={`overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-500 relative hover:before:translate-x-[0%] hover:before:translate-y-[0%] ${buttonVariants({ variant: "outline", size: "sm" })}`}
        >
            {type === "repo" && <GithubIcon className="mr-2 size-5" />}
            {type === "app" && <GlobeIcon className="mr-2 size-5" />}
            {text}
        </a>
    );
}
