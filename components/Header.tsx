import { Box, MenuButton, Link, Input } from 'theme-ui';
import {
  QuestionMarkCircleIcon,
  UserIcon,
  SunIcon,
} from '@heroicons/react/24/solid';
import { useAppContext } from './AppContext';

function Header() {
  const { toggleOpen } = useAppContext();
  return (
    <Box
      as='header'
      sx={{
        display: 'flex',
        zIndex: 1,
        height: '64px',
        px: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        bg: 'black',
      }}
    >
      <Box
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
            backgroundColor: 'transparent',
            transitionProperty: 'background-color',
            transitionTimingFunction: 'ease-out',
            transitionDuration: '0.2s',
            borderRadius: '2px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'highlight',
            },
          }}
        >
          Svix Dashboard
        </Link>
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
            backgroundColor: 'muted',
            fontSize: '14px',
            fontWeight: 700,
            minWidth: '200px',
            p: 2,
            '&:focus': {
              borderColor: 'primary',
              outline: 'none',
              boxShadow: (theme) => `0 0 0 1px ${theme.colors?.primary}`,
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
          <SunIcon className='icon' />
          <QuestionMarkCircleIcon className='icon' />
          <UserIcon className='icon' />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
