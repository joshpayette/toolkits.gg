'use client';

import { DefaultLogo } from '@/components/Logo';
import { AppNavbar } from '@/components/navigation/components/AppNavbar';
import { AppShell, Burger, Flex, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type React from 'react';
import classes from './PageLayout.module.css';

type PageLayoutProps = React.PropsWithChildren<{
  navbar?: React.ReactNode;
  sidebar?: React.ReactNode;
}>;

const PageLayout = ({ children }: PageLayoutProps) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Flex justify="start" align="center">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </Flex>
          <Flex className={classes.logoContainer}>
            <DefaultLogo size={64} />
          </Flex>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <AppNavbar gameConfig={undefined} />
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>

      <AppShell.Footer>
        © {new Date().getFullYear()} Toolkits.gg
      </AppShell.Footer>
    </AppShell>
  );
};

export { PageLayout };
