import { useRouter } from 'next/router';
import { Box, Burger, Button, Container, Group } from '@mantine/core';
import Logo from '../logo';

interface NavbarProps {
  opened: boolean;
  setOpened: (opened: boolean) => void;
}
export function Navbar({ opened, setOpened }: NavbarProps) {
  const router = useRouter();

  return (
    <Container size="xl">
      <Group h="100%" px="md">
        <Burger opened={opened} onClick={() => setOpened(!opened)} hiddenFrom="sm" size="sm" />
        <Group justify="space-between" align="center" style={{ flex: 1 }}>
          <Box style={{ cursor: 'pointer' }} onClick={() => router.push('/')}>
            <Logo />
          </Box>
          <Group ml="xl" gap={0} visibleFrom="sm">
            <Button variant="subtle" color="dark">
              Home
            </Button>
            <Button variant="subtle" color="dark">
              About
            </Button>
            <Button variant="subtle" color="dark">
              Contact
            </Button>

            <Button radius="xl" variant="filled">
              Sign In
            </Button>
          </Group>
        </Group>
      </Group>
    </Container>
  );
}
