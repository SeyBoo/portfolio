import React from 'react';
import Link from 'next/link';
import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  return (
    <footer className="flex flex-col mt-12 max-w-[80%] md:max-w-full m-auto text-sm">
      <span className="w-[100%] h-[1px] bg-[#757783] m-auto"></span>
      <div className="md:flex md:flex-row md:justify-center md:gap-[12.5%] md:items-start pt-10 pb-40">
        <div className="flex flex-col mb-6 pt-14 gap-16 md:mb-0 md:pt-0">
          <h6 className="text-lg">Antoine Chevalier</h6>
          <p className="text-[#757783]">
            Copyright © 2021 Antoine Chevalier. All rights reserved.
          </p>
        </div>
        <ol className="flex flex-col gap-4">
          <li>
            <Link
              href="https://github.com/SeyBoo"
              className="text-[#5E5DF0]"
              target="_blank"
            >
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://www.malt.fr/profile/antoinechevalier"
              className="text-[#5E5DF0]"
              target="_blank"
            >
              Malt
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/antoine-chevalier-54b372223/"
              className="text-[#5E5DF0]"
              target="_blank"
            >
              Linkedin
            </Link>
          </li>
          <li className="text-[#757783]">
            antoinechevalier.work@protonmail.com
          </li>
        </ol>
      </div>
    </footer>
  );
};

export default Footer;
