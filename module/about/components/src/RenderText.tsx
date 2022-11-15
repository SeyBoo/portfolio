import React from 'react';
import { TextI } from 'common/types/language';

const RenderHightLightedText = (text: string, index: number) => {
  return (
    <strong className="text-white font-semibold" key={index}>
      {text} {''}
    </strong>
  );
};

export const RenderText = (text: TextI, index: number) => {
  if (text.highlighted) return RenderHightLightedText(text.data, index);

  return text.data + ' ';
};
