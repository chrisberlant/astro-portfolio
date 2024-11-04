import { buttonVariants } from "../../Button/Button";

interface NavButtonProps {
  link: string;
  text: string;
}

export default function NavButton({ link, text }: NavButtonProps) {
  return (
    <a href={link} className={buttonVariants({ variant: "link" })}>
      {text}
    </a>
  );
}
