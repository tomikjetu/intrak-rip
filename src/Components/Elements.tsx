import { twMerge as cn } from "tailwind-merge";
import { headerHeight } from "..";
import React from "react";

export function SocialsWrapper({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full p-8 gap-10 text-2xl ">{children}</div>;
}

export function SocialItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex flex-col ml-auto", className)}>{children}</div>;
}

export function SocialHeading({ children }: { children: React.ReactNode }) {
  return <div className="mb-2">{children}</div>;
}

export function SocialButton({ children, link }: { children: React.ReactNode; link: string }) {
  return (
    <a className="flex justify-center mt-2" href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export function HeroWrapper({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn("relative w-full h-full", className)}
      style={{
        maxHeight: `calc(100dvh - ${headerHeight})`,
        height: `calc(100dvh - ${headerHeight})`,
      }}
    >
      {children}
    </div>
  );
}
export function Video({ className }: { className?: string }) {
  return <video src={`${process.env.PUBLIC_URL}/ROOM_TOUR.webm`} className="absolute top-0 z-0 object-cover w-full h-full" autoPlay loop muted></video>;
}

export function LandingBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("absolute top-0 z-[1] object-cover w-full h-full bg-black/60 flex items-center justify-center", className)}>
      <h2
        className="text-white"
        style={{
          fontSize: "6rem",
        }}
      >
        {children}
      </h2>
    </div>
  );
}
export function DonateButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <a href="https://buymeacoffee.com/tomikjetu" className={cn("bg-[#C9CBA3] px-4 py-2 text-black-800", className)}>
      {children}
    </a>
  );
}
