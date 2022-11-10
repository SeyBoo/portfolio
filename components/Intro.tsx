import { FunctionComponent } from "react";
import Image from "next/image";
import Avatar from "../public/assets/avatar.jpg";
import FromTheTopAnimation from "./animations/FromTheTopAnimation";
import ZoomInAnimation from "./animations/ZoomInAnimation";

const Intro: FunctionComponent = () => {
  return (
    <header className="bg-black py-[10%] md:py-0">
      <div className="flex flex-col md:flex-row md:h-screen md:justify-center items-center max-w-[90%] m-auto gap-6">
        <ZoomInAnimation className="max-w-[95%]">
          <Image
            src={Avatar}
            alt="avatar"
            className="rounded-full"
            width={325}
          />
        </ZoomInAnimation>
        <div className="flex flex-col gap-6">
          <FromTheTopAnimation>
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I&apos;m Antoine
            </h1>
          </FromTheTopAnimation>
          <FromTheTopAnimation delay={0.5}>
            <h2 className="text-xl md:text-2xl max-w-[30rem]">
              a{" "}
              <strong
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)",
                }}
              >
                {" "}
                Fullstack Developper & AI enthusiast
              </strong>{" "}
              based in France, currently Freelancing and building project.
            </h2>
          </FromTheTopAnimation>
          <FromTheTopAnimation
            delay={1}
            duration={1}
            startY={-25}
            className="mt-6"
          >
            <a
              href="mailto:antoinechevalier.work@protonmail.com"
              className="bg-white text-black text-md py-3 px-4 rounded-full font-bold"
            >
              Chat with me
            </a>
          </FromTheTopAnimation>
        </div>
      </div>
    </header>
  );
};

export default Intro;
