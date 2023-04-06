'use client';
import { Box } from 'theme-ui';

import { useAppContext } from '@/components/AppContext';
import Sidebar, { Overlay } from '@/components/Sidebar';
import Header from '@/components/Header';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { openMenu, setOpenMenu } = useAppContext();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      {openMenu && <Overlay onClick={() => setOpenMenu(false)} />}
      <Box
        sx={{
          display: ['block', 'flex'],
          flex: '1 1 auto',
          alignItems: 'flex-start',
          height: '100%',
        }}
      >
        <Sidebar />
        <Box
          sx={{
            p: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100vh - 64px)',
            bg: 'background-primary',
            color: 'text-primary',
            flex: '1 1 auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardLayout;
