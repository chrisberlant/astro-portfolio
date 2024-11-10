import Typewriter from "typewriter-effect";

const descriptionString =
    "I'm a <span class='text-full-stack'>Full-stack</span>, more <span class='text-front-end'>Front-end</span> oriented <span class='text-front-end'>React</span> developer.";

export default function Description() {
    return (
        <div className="flex h-40 flex-col text-center font-robotoMono text-2xl font-bold min-[458px]:h-32 sm:h-40 sm:text-3xl min-[1128px]:h-36">
            <div className="flex justify-center">
                <span className="mb-4">Hi I'm Chris!</span>
            </div>
            <Typewriter
                options={{
                    delay: 50,
                }}
                onInit={(typewriter) => {
                    typewriter.typeString(descriptionString).start();
                }}
            />
        </div>
    );
}
