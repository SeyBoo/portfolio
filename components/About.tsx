import Image, { StaticImageData } from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import BlackBg from "../public/assets/dark-purple-bg.avif";
import PinkBg from "../public/assets/light-pink-bg.avif";
import FromTheLeftAnimation from "./animations/FromTheLeftAnimation";
import FromTheRightAnimation from "./animations/FromTheRightAnimation";
import FromTheTopAnimation from "./animations/FromTheTopAnimation";

interface AboutImageProps {
  image: StaticImageData;
  text: string;
  height: string;
}
const AboutImageBlock: FunctionComponent<AboutImageProps> = ({
  image,
  text,
  height,
}) => {
  
  return (
    <div className="relative" key={height}>
      <Image
        alt="pink-bg"
        src={image}
        className={`rounded-lg md:w-96 w-[95%] m-auto h-20 ` + height}
      />
      <p className="text-2xl md:text-3xl absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]">
        {text}
      </p>
    </div>
  );
};

interface AboutTextContainerProps {
  reverse?: boolean;
}

const AboutTextContainer: FunctionComponent<
  PropsWithChildren<AboutTextContainerProps>
> = ({ children, reverse }) => {
  const defaultStyle = "flex flex-col gap-10 md:max-w-[29rem] pb-4 px-4 md:px-0 ";
  return (
    <div
      className={
        reverse
          ? defaultStyle + "text-start md:text-end"
          : defaultStyle + "text-end"
      }
    >
      {children}
    </div>
  );
};

interface AboutBlockProps {
  reverse?: boolean;
}

const AboutBlock: FunctionComponent<PropsWithChildren<AboutBlockProps>> = ({
  children,
  reverse: direction,
}) => {
  const defaultStyle = "flex justify-between items-center flex-col ";
  return (
    <div
      className={
        direction
          ? defaultStyle + "md:flex-row-reverse"
          : defaultStyle + "md:flex-row"
      }
    >
      {children}
    </div>
  );
};

interface HightLightedTextProps {
  text: string;
}

const HightLightedText = ({ text }: HightLightedTextProps) => {
  return (
    <strong className="text-white font-semibold">
      {text} {""}
    </strong>
  );
};

const AboutMe: FunctionComponent = () => {
  return (
    <section className="text-3xl md:text-4xl font-semibold py-[2.5%] max-w-[980px] m-auto px-4">
      <FromTheTopAnimation startY={-25} duration={0.75} delay={0.25}>
        <h3>Know about me</h3>
      </FromTheTopAnimation>
      <div className="flex flex-col gap-28 mt-16">
        <AboutBlock>
          <FromTheLeftAnimation>
            <AboutTextContainer>
              <p className="text-[#8a8f98]">
                I was born and raised in <HightLightedText text="Nice, FR" />
              </p>
              <p className="text-[#8a8f98]">
                I have been <HightLightedText text="Home Schooled" />
                as a teen and i <HightLightedText text="started Programming" />
                during this period.
              </p>
            </AboutTextContainer>
          </FromTheLeftAnimation>
          <FromTheRightAnimation>
            <AboutImageBlock image={PinkBg} text="🇫🇷🏡📚" height="md:h-[500px]" />
          </FromTheRightAnimation>
        </AboutBlock>
        <AboutBlock reverse>
          <FromTheRightAnimation>
            <AboutTextContainer reverse>
              <p className="text-[#8a8f98]">
                My family {""}
                <HightLightedText text="is full of Developers / Engineers." />
              </p>
              <p className="text-[#8a8f98]">
                <HightLightedText text="I completed my first Freelance jobs at 16." />
              </p>
            </AboutTextContainer>
          </FromTheRightAnimation>
          <FromTheLeftAnimation>
            <AboutImageBlock image={BlackBg} text="🧠👨‍💻" height="md:h-[450px]" />
          </FromTheLeftAnimation>
        </AboutBlock>
        <AboutBlock>
          <FromTheLeftAnimation>
            <AboutTextContainer>
              <p className="text-[#8a8f98]">
                <HightLightedText text="Calisthenics" />
                is one my favorite sport.
              </p>
              <p className="text-[#8a8f98]">
                I also love <HightLightedText text="Rock Climbing" /> and{" "}
                <HightLightedText text="Swimming." />
              </p>
            </AboutTextContainer>
          </FromTheLeftAnimation>
          <FromTheRightAnimation>
            <AboutImageBlock image={PinkBg} text="🧗🏊‍♂️" height="md:h-[350px]" />
          </FromTheRightAnimation>
        </AboutBlock>
      </div>
    </section>
  );
};

export default AboutMe;
