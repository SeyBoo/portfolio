import React, { FunctionComponent, useCallback } from 'react';
import {
  FromTheTopAnimation,
  FromTheRightAnimation,
  FromTheLeftAnimation,
} from 'common/animations';

interface BlockProps {
  title: string;
  skills: string[];
  reverse?: boolean;
  arrow?: boolean;
  gradient: string;
}

const InformationBlock: FunctionComponent<BlockProps> = ({
  title,
  skills,
  arrow,
  reverse,
  gradient,
}) => {
  const titleDefaultStyle = 'text-4xl font-semibold ';
  const containerDefaultStyle =
    'flex flex-col md:flex-row justify-between gap-6 items-center rounded-lg p-6 md:p-12 w-[90%] m-auto max-w-[800px] ';

  const renderTitle = useCallback(() => {
    return (
      <h2
        className={
          reverse
            ? titleDefaultStyle + 'text-start'
            : titleDefaultStyle + 'text-end'
        }
      >
        {title}
      </h2>
    );
  }, [title, reverse]);

  return (
    <div
      style={{ background: gradient }}
      className={
        reverse
          ? containerDefaultStyle + 'md:flex-row-reverse'
          : containerDefaultStyle
      }
    >
      <div className="flex flex-col flex-wrap md:max-h-52 gap-3 m-auto w-full md:w-fit">
        {skills.map((skill, index) => (
          <FromTheTopAnimation key={index}>
            <p className="text-2xl font-light">
              {skill}
              {arrow && ' →'}
            </p>
          </FromTheTopAnimation>
        ))}
      </div>
      <div className="overflow-hidden">
        {reverse ? (
          <FromTheLeftAnimation>{renderTitle()}</FromTheLeftAnimation>
        ) : (
          <FromTheRightAnimation>{renderTitle()}</FromTheRightAnimation>
        )}
      </div>
    </div>
  );
};

export default InformationBlock;
