// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { MantineProvider as Provider } from '@mantine/core';
import type { ReactNode } from 'react';

import { theme } from '@/lib/theme';

type MantineProviderProps = {
  children: ReactNode;
};

export default function MantineProvider({ children }: MantineProviderProps) {
  return (
    <Provider theme={theme} defaultColorScheme="dark">
      {children}
    </Provider>
  );
}
