import { useMemo, useCallback } from 'react';
import { Box, MenuButton, Link, Input, useColorMode } from 'theme-ui';
import {
  QuestionMarkCircleIcon,
  UserIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/react/24/solid';
import { useAppContext } from './AppContext';

function Header() {
  const { toggleOpen } = useAppContext();
  const [colorMode, setColorMode] = useColorMode();

  const themeChanger = useCallback(() => {
    if (colorMode === 'dark') {
      return setColorMode('light');
    }
    return setColorMode('dark');
  }, [colorMode, setColorMode]);

  const colorModeNode = useMemo(() => {
    if (colorMode === 'dark') {
      return <SunIcon className='icon' onClick={themeChanger} />;
    }

    return <MoonIcon className='icon' onClick={themeChanger} />;
  }, [colorMode, themeChanger]);

  return (
    <Box
      as='header'
      sx={{
        display: 'flex',
        zIndex: 1,
        height: '64px',
        pr: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        bg: 'header-bg',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: '0 0 256px',
          bg: ['transparent', 'background-secondary'],
          color: 'sidebar-text',
          height: '64px',
          borderBottom: (theme) => [
            'none',
            `1px solid ${theme.colors?.['border-color']}`,
          ],
        }}
      >
        <Box
          p={3}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MenuButton
            aria-label='Toggle Menu'
            sx={{
              display: ['inline-block', 'none'],
              cursor: 'pointer',
            }}
            onClick={toggleOpen}
          />
          <Link
            sx={{
              display: 'block',
              p: 2,
              cursor: 'pointer',
            }}
          >
            Svix Dashboard
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Input
          type='search'
          placeholder='Jump to app...'
          defaultValue=''
          sx={{
            border: '1px solid',
            borderRadius: '4px',
            borderColor: 'transparent',
            display: ['none', 'block'],
            backgroundColor: 'input-bg',
            fontSize: '14px',
            minWidth: '200px',
            p: 2,
            '&::placeholder': {
              color: 'input-color',
            },
            '&:focus': {
              borderColor: 'text-muted',
              outline: 'none',
              boxShadow: (theme) => `0 0 0 1px ${theme.colors?.['text-muted']}`,
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            flex: '0 0 140px',
            gap: 3,
            ml: 3,
          }}
        >
          {colorModeNode}
          <QuestionMarkCircleIcon className='icon' />
          <UserIcon className='icon' />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
