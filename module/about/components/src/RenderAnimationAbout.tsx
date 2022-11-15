import React, { FunctionComponent, PropsWithChildren } from 'react';
import {
  FromTheLeftAnimation,
  FromTheRightAnimation,
} from '../../../../common/animations';
import IsPair from '../../utils/isPair';

interface AnimationProps {
  image?: boolean;
  index: number;
}

export const RenderAnimation: FunctionComponent<
  PropsWithChildren<AnimationProps>
> = ({ children, image, index }) => {
  if (image) {
    if (IsPair(index)) {
      return <FromTheRightAnimation>{children}</FromTheRightAnimation>;
    }
    return <FromTheLeftAnimation>{children}</FromTheLeftAnimation>;
  }

  if (IsPair(index)) {
    return <FromTheLeftAnimation>{children}</FromTheLeftAnimation>;
  }

  return <FromTheRightAnimation>{children}</FromTheRightAnimation>;
};
