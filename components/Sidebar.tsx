import { Box, BoxProps } from 'theme-ui';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAppContext } from './AppContext';

const sidebarData = [
  [{ name: 'Getting Started', href: '/getting-started' }],
  [
    { name: 'Usage', href: '/usage' },
    { name: 'Consumer Applications', href: '/applications' },
    { name: 'Event Types', href: '/event-types' },
  ],
  [
    { name: 'Api Access', href: '/api-access' },
    { name: 'Operational Webhooks', href: '/webhooks' },
    { name: 'Settings', href: '/settings' },
  ],
  [
    { name: 'Integrations', href: '/integrations' },
    { name: 'Documentation', href: 'https://docs.svix.com/' },
  ],
];

export const Overlay = (props: BoxProps) => {
  return (
    <Box
      {...props}
      sx={{
        position: 'fixed',
        inset: 0,
        bg: ['overlay', 'transparent'],
        transition: 'all 0.3s ease-in',
      }}
    ></Box>
  );
};

export const SidebarItem = ({
  children,
  isActive,
  ...props
}: BoxProps & { isActive?: boolean }) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'block',
        p: 3,
        color: isActive ? 'blue' : 'inherit',
        backgroundColor: 'transparent',
        transitionProperty: 'background-color',
        transitionTimingFunction: 'ease-out',
        transitionDuration: '0.2s',
        borderRadius: '2px',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'background-hover',
        },
      }}
    >
      {children}
    </Box>
  );
};

function Sidebar() {
  const { openMenu } = useAppContext();
  const pathname = usePathname();
  const router = useRouter();

  const mapper = (section: typeof sidebarData[0]) =>
    section.map(({ name, href }) => {
      // This needs to be refactored.
      if (name === 'Documentation') {
        return (
          <SidebarItem
            key={name}
            onClick={() => {
              window.open(href);
            }}
          >
            <a href={href} target='_blank'>
              {name}
            </a>
          </SidebarItem>
        );
      }
      return (
        <SidebarItem
          key={name}
          isActive={pathname.includes(href)}
          onClick={() => {
            router.push(href);
          }}
        >
          <Link href={href}>{name}</Link>
        </SidebarItem>
      );
    });

  return (
    <Box
      sx={{
        position: ['fixed', 'sticky'],
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 1,
        minWidth: 0,
        overflow: 'visible auto',
        transition: 'transform 0.2s ease-out 0s',
        transform: [openMenu ? 'translateX(0px)' : 'translate(-100%)', 'none'],
        bg: 'background-secondary',
        color: 'sidebar-text',
        width: '256px',
        height: '100vh',
        maxHeight: ['100%', 'calc(100vh - 64px)'],
        padding: '0px 0px 32px',
        marginTop: ['64px', 0],
      }}
    >
      {sidebarData.map((sidebarSection, i) => {
        return (
          <Box
            key={i}
            sx={{
              p: 2,
              borderBottom: (theme) =>
                `1px solid ${theme.colors?.['border-color']}`,
            }}
          >
            {mapper(sidebarSection)}
          </Box>
        );
      })}
    </Box>
  );
}

export default Sidebar;
