import { AppShell, Button, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Navbar } from '@/components/navbar';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Navbar opened={opened} setOpened={toggle} />
      </AppShell.Header>

      <AppShell.Navbar hidden={opened} p="md">
        <Stack px="md">
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
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}
