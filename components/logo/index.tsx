import { Stack, Text, useMantineTheme } from '@mantine/core';

const Logo = () => {
  const theme = useMantineTheme();
  return (
    <Stack
      justify="center"
      align="center"
      style={{
        width: '3rem',
        height: '3rem',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          fontStyle: 'italic',
          fontWeight: 700,
          color: theme.colors.blue[5],
        }}
        size="xl"
      >
        Ubank
      </Text>
    </Stack>
  );
};

export default Logo;
