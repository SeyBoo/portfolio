import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Avatar from '../../../common/assets/avatar.jpg';
import {
  ZoomInAnimation,
  FromTheTopAnimation,
} from '../../../common/animations';
import { IntroI, TextI } from '../../../common/types/language';

const RenderHighlightedText = (data: string, index: number) => {
  return (
    <strong
      className="text-transparent bg-clip-text"
      key={index}
      style={{
        backgroundImage: 'linear-gradient(135deg, #CB5EEE 0%, #4BE1EC 100%)',
      }}
    >
      {data} {''}
    </strong>
  );
};

const RenderText = (text: TextI, index: number) => {
  if (text.highlighted) {
    return RenderHighlightedText(text.data, index);
  }

  return text.data + ' ';
};

interface IntroProps {
  intro: IntroI;
}

const Intro: FunctionComponent<IntroProps> = ({ intro }) => {
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
            <h1 className="text-4xl md:text-6xl font-bold">{intro.title}</h1>
          </FromTheTopAnimation>
          <FromTheTopAnimation delay={0.5}>
            <h2 className="text-xl md:text-2xl max-w-[30rem]">
              {intro.subTitle.map((paragraphe) =>
                paragraphe.map((text, index) => RenderText(text, index))
              )}
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
              {intro.callToAction} →
            </a>
          </FromTheTopAnimation>
        </div>
      </div>
    </header>
  );
};

export default Intro;
