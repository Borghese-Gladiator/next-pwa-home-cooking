/*
Compose multiple providers

*UNUSED* - this might not work
*/

import React, { ComponentProps, FC, ReactNode } from 'react';

// Define the type for components
type PropsWithChildren = {
  children?: ReactNode;
};

export const combineComponents = (...components: FC<PropsWithChildren>[]): FC<PropsWithChildren> => {
  return components.reduce(
    (AccumulatedComponents, CurrentComponent) => {
      return ({ children }: PropsWithChildren): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: PropsWithChildren) => <>{children}</>,
  );
};
