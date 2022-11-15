import Image from 'next/image';
import Link from 'next/link';
import React, { FunctionComponent } from 'react';
import {
  ZoomInAnimation,
  HoverMoveAnimation,
} from 'common/animations';
import { ExperienceCardI } from 'common/types/language';

const ExperienceCard: FunctionComponent<ExperienceCardI> = ({
  title,
  description,
  icon,
  link,
  gradient,
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
            gradient
              ? `${containerDefautStyle}text-slate-50`
              : `${containerDefautStyle}text-black`
          }
          style={{ background: gradient ? gradient : 'white' }}
        >
          <div
            className={
              gradient
                ? `${iconDefaultStyle} bg-white`
                : `${iconDefaultStyle} bg-[#6968F7]`
            }
          >
            <Image src={icon} alt={`${title} icon`} width={25} height={25} />
          </div>
          <h3
            className={
              gradient
                ? titleDefaultStyle
                : `${titleDefaultStyle} text-[#6968F7]`
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
