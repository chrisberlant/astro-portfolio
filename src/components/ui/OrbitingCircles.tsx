import { cn } from "@/lib/utils";

export default function OrbitingCircles({
    className,
    children,
    reverse,
    duration = 20,
    delay = 10,
    radius = 50,
    path = true,
}: {
    className?: string;
    children?: React.ReactNode;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
}) {
    return (
        <>
            {path && (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="absolute inset-0 w-full h-full pointer-events-none"
                >
                    <circle
                        className="stroke-1 stroke-black/10 dark:stroke-white/10"
                        cx="50%"
                        cy="50%"
                        r={radius}
                        fill="none"
                        strokeDasharray={"0 1"}
                    />
                </svg>
            )}

            <div
                style={
                    {
                        "--duration": duration,
                        "--radius": radius,
                        "--delay": -delay,
                    } as React.CSSProperties
                }
                className={cn(
                    "animate-orbit absolute flex h-full w-full transform-gpu items-center justify-center rounded-full [animation-delay:calc(var(--delay)*1000ms)]",
                    { "[animation-direction:reverse]": reverse },
                    className,
                )}
            >
                {children}
            </div>
        </>
    );
}
