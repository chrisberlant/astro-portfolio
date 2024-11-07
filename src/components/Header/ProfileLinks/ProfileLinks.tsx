import CV from "@/assets/cv/CV_ChrisBerlant_ReactDev.pdf";
import MyPicture from "@/assets/my-picture.png";
import GithubIcon from "../../Icons/GithubIcon";
import LinkedinIcon from "../../Icons/LinkedinIcon";
import MailIcon from "../../Icons/MailIcon";
import PdfIcon from "../../Icons/PdfIcon";
import ExternalLink from "../../SocialLink/SocialLink";
import SocialLink from "../../SocialLink/SocialLink";

export default function ProfileLinks() {
    return (
        <div className="flex items-center gap-2 ml-2 md:ml-8 lg:ml-12">
            <img
                src={MyPicture.src}
                alt="My picture"
                className="rounded-full size-16 bg-gradient-to-tr from-front-end to-full-stack"
            />
            <div className="flex flex-col">
                <div className="text-center font-robotoMono">Chris Berlant</div>
                <div className="flex gap-1">
                    <SocialLink
                        title="My GitHub profile"
                        link="https://github.com/chrisberlant"
                    >
                        <GithubIcon className="size-5" />
                    </SocialLink>
                    <SocialLink
                        title="My LinkedIn profile"
                        link="https://www.linkedin.com/in/chris-berlant/"
                    >
                        <LinkedinIcon className="size-5" />
                    </SocialLink>
                    <SocialLink
                        title="Send me an email"
                        link="mailto:chris.berlant@gmail.com"
                    >
                        <MailIcon className="size-5" />
                    </SocialLink>
                    <SocialLink
                        title="Download my CV"
                        link={CV}
                        download="CV_ChrisBerlant_ReactDev.pdf"
                    >
                        <PdfIcon className="size-5" />
                    </SocialLink>
                </div>
            </div>
        </div>
    );
}
