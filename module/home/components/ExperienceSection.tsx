import React, { FunctionComponent, useState } from 'react';
import { ExperienceCardI } from 'common/types/language';
import ExperienceCard from './ExperienceCard';

interface ExperienceSectionProps {
  title: string;
  experiences: ExperienceCardI[];
}

const ExperienceSection: FunctionComponent<ExperienceSectionProps> = ({
  title,
  experiences,
}) => {
  const [numberOfItemShow, setNumberOfItemShow] = useState<number>(2);
  const slicedArray = experiences.slice(0, numberOfItemShow);
  const buttonDefaultStyle = 'rounded-full text-mg font-medium p-4 py-2';
  const buttonDefaultBackground =
    'linear-gradient(135deg, #FFCC33 0%, #E233FF 100%)';

  return (
    <div className="max-w-[800px] m-auto w-[90%] mt-4">
      <h4 className="text-3xl font-semibold">{title}</h4>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-[7.5%] justify-between">
        {slicedArray.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            description={experience.description}
            link={experience.link}
            icon={experience.icon}
            gradient={experience.gradient}
          />
        ))}
      </div>
      <div className="text-center mt-[5%]">
        {numberOfItemShow < experiences.length ? (
          <button
            onClick={() => setNumberOfItemShow(numberOfItemShow + 2)}
            className={buttonDefaultStyle}
            style={{ background: buttonDefaultBackground }}
          >
            Show more
          </button>
        ) : (
          <button
            onClick={() => setNumberOfItemShow(2)}
            className={buttonDefaultStyle}
            style={{ background: buttonDefaultBackground }}
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default ExperienceSection;
