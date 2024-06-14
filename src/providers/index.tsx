'use client';
import MantineProvider from './MantineProvider';
import { TrpcProvider, api } from './TrpcProvider';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      <TrpcProvider>{children}</TrpcProvider>
    </MantineProvider>
  );
}

export { api };

export default Providers;
