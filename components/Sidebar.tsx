import { Box, BoxProps } from 'theme-ui';
import { useAppContext } from './AppContext';

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

function Sidebar() {
  const { openMenu } = useAppContext();
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
        bg: 'background',
        width: '256px',
        maxHeight: ['100%', 'calc(100vh - 64px)'],
        padding: '16px 16px 32px',
        marginTop: ['64px', 0],
      }}
    >
      <Box p={2}>Getting Started</Box>
      <Box p={2}>Usage</Box>
      <Box p={2}>Consumer Applications</Box>
      <Box p={2}>Event Types</Box>
      <Box p={2}>Api Access</Box>
      <Box p={2}>Operational Webhooks</Box>
      <Box p={2}>Settings</Box>
      <Box p={2}>Integrations</Box>
      <Box p={2}>Documentation</Box>
    </Box>
  );
}

export default Sidebar;
