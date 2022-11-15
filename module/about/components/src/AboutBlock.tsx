import React, {
  useState,
  FunctionComponent,
  PropsWithChildren,
  useEffect,
} from 'react';
import IsPair from '../../utils/isPair';

interface AboutBlockProps {
  index: number;
}

export const AboutBlock: FunctionComponent<PropsWithChildren<AboutBlockProps>> = ({
  children,
  index,
}) => {
  const defaultStyle = 'flex justify-between items-center flex-col ';
  const [reverse, setReverse] = useState<boolean>(true);

  useEffect(() => {
    if (IsPair(index)) setReverse(false);
  }, [index]);

  return (
    <div
      className={
        reverse
          ? defaultStyle + 'md:flex-row-reverse'
          : defaultStyle + 'md:flex-row'
      }
    >
      {children}
    </div>
  );
};
