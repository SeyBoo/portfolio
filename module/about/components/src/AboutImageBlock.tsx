import React, { FunctionComponent, useEffect, useState } from 'react';
import { IllustrationI } from 'common/types/language';
import Image from 'next/image';

export const AboutImageBlock: FunctionComponent<IllustrationI> = ({
  image,
  text,
  height,
}) => {
  const [customHeight, setHeight] = useState<string>('');
  useEffect(() => {
    if (height === 500) {
      setHeight('md:h-[500px]');
    } else if (height === 450) {
      setHeight('md:h-[450px]');
    } else {
      setHeight('md:h-[350px]');
    }
  }, []);

  return (
    <div className="relative " key={height}>
      <Image
        alt="pink-bg"
        src={image}
        className={`rounded-lg ${customHeight} md:w-96 w-[95%] m-auto h-20`}
      />
      <p className="text-2xl md:text-3xl absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]">
        {text}
      </p>
    </div>
  );
};
