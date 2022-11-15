import React, { FunctionComponent, PropsWithChildren } from 'react';

export const AboutTextContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="flex flex-col gap-10 md:max-w-[29rem] pb-4 px-4 md:px-0 text-start md:text-end">
      {children}
    </div>
  );
};
