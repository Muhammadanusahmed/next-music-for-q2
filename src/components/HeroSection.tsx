import Link from "next/link";

import { Spotlight } from "./ui/Spotlight";
import { Button as Movebtnsrc } from "./ui/moving-border";
export default function Home() {
  return (
    <div>
         <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
 <div className="p-4 mt-60 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className="mt-4 mb-20">
                <Link href={"/courses"}>
                <Movebtnsrc>Explore courses</Movebtnsrc>
                </Link>
            </div>
        </div>
    </div>
  );
}
