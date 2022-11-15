import React, { FunctionComponent } from 'react';
import { IllustrationI } from 'common/types/language';
import Image from 'next/image';

export const AboutImageBlock: FunctionComponent<IllustrationI> = ({
  image,
  text,
  height,
}) => {
  return (
    <div className="relative " key={height}>
      <Image
        alt="pink-bg"
        src={image}
        className={`rounded-lg ${height} md:w-96 w-[95%] m-auto h-20`}
      />
      <p className="text-2xl md:text-3xl absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]">
        {text}
      </p>
    </div>
  );
};
