import { buttonVariants } from "../ui/button";

interface SocialLinkProps {
    link: string;
    title: string;
    download?: string;
    children: React.ReactNode;
}

export default function SocialLink({
    link,
    title,
    download = undefined,
    children,
}: SocialLinkProps) {
    return (
        <a
            href={link}
            title={title}
            target="_blank"
            download={download}
            className={`overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 before:transition-transform before:duration-500 relative hover:before:translate-x-[0%] hover:before:translate-y-[0%] ${buttonVariants({ variant: "ghost", size: "sm" })}`}
        >
            {children}
        </a>
    );
}
