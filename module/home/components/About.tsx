import React, { FunctionComponent } from 'react';
import { FromTheTopAnimation } from 'common/animations';
import { About, AboutCard } from 'common/types/language';
import {
  AboutBlock,
  AboutImageBlock,
  AboutTextContainer,
  RenderAnimation,
  RenderText,
} from 'module/about/components';

const RenderParagraphs = (block: AboutCard, index: number) => {
  return (
    <RenderAnimation index={index}>
      <AboutTextContainer>
        {block.text.map((paragraph, paragraphIndex) => (
          <p className="text-[#8a8f98]" key={paragraphIndex}>
            {paragraph.map((text, index) => RenderText(text, index))}
          </p>
        ))}
      </AboutTextContainer>
    </RenderAnimation>
  );
};

interface AboutMeProps {
  about: About;
}

const AboutMe: FunctionComponent<AboutMeProps> = ({ about }) => {
  return (
    <section className="text-3xl md:text-4xl font-semibold py-[2.5%] max-w-[980px] m-auto px-4">
      <FromTheTopAnimation startY={-25} duration={0.75} delay={0.25}>
        <h3>{about.title}</h3>
      </FromTheTopAnimation>
      <div className="flex flex-col gap-28 mt-16">
        {about.data.map((block, index) => (
          <AboutBlock key={index} index={index}>
            {RenderParagraphs(block, index)}
            <RenderAnimation index={index} image>
              <AboutImageBlock
                height={block.illustration.height}
                text={block.illustration.text}
                image={block.illustration.image}
              />
            </RenderAnimation>
          </AboutBlock>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;
