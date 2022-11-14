import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import ZoomInAnimation from '../../../common/components/animations/ZoomInAnimation';
import HoverMoveAnimation from '../../../common/components/animations/HoverMoveAnimation';

export interface ExperienceCardProps {
  title: string;
  description: string;
  icon: StaticImageData;
  link: string;
  gradient?: string;
}

const ExperienceCard: FunctionComponent<ExperienceCardProps> = ({
  title,
  description,
  icon,
  link,
  gradient: dark,
}) => {
  const containerDefautStyle =
    'block rounded-xl p-4 md:px-6 md:py-8 max-w-[390px] md:h-[250px] ';
  const iconDefaultStyle = 'rounded-full w-fit p-3 shadow-2xl	mb-4 ';
  const titleDefaultStyle = 'text-2xl font-semibold ';
  return (
    <ZoomInAnimation>
      <HoverMoveAnimation>
        <Link
          href={link}
          target="_blank"
          className={
            dark
              ? `${containerDefautStyle} ${dark} text-slate-50`
              : `${containerDefautStyle} bg-white text-black`
          }
        >
          <div
            className={
              dark
                ? `${iconDefaultStyle} bg-white`
                : `${iconDefaultStyle} bg-[#6968F7]`
            }
          >
            <Image src={icon} alt={`${title} icon`} width={25} height={25} />
          </div>
          <h3
            className={
              dark ? titleDefaultStyle : `${titleDefaultStyle} text-[#6968F7]`
            }
          >
            {title}
          </h3>
          <p className="py-3">{description}</p>
        </Link>
      </HoverMoveAnimation>
    </ZoomInAnimation>
  );
};

export default ExperienceCard;
