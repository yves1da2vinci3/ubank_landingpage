import { useState } from 'react';
import {
  IconBell,
  IconCategory,
  IconChartPie,
  IconCurrencyDollar,
  IconInfinity,
  IconRepeat,
  IconRobot,
  IconTarget,
} from '@tabler/icons-react';
import {
  Box,
  Button,
  Card,
  Container,
  rem,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { useHover } from '@mantine/hooks';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color?: string;
  onClick?: () => void;
  variant?: 'default' | 'highlight';
}

const FeatureCard = ({
  title,
  description,
  icon,
  color = 'blue',
  onClick,
  variant = 'default',
}: FeatureCardProps) => {
  const { hovered, ref } = useHover();

  if (variant === 'highlight') {
    return (
      <Card
        ref={ref}
        padding="xl"
        radius="md"
        bg="dark.7"
        onClick={onClick}
        style={{
          cursor: 'pointer',
          transform: hovered ? 'translateY(-5px)' : 'none',
          transition: 'transform 200ms ease',
          height: '100%',
        }}
      >
        <Box mb="xl">
          <ThemeIcon
            size={56}
            radius="xl"
            variant="filled"
            color="blue"
            style={{ background: '#7dd3fc' }}
          >
            {icon}
          </ThemeIcon>
        </Box>
        <Text size="xl" fw={500} mb="sm" c="white">
          {title}
        </Text>
        <Text size="sm" c="gray.3" mb="xl">
          {description}
        </Text>
        <Button
          fullWidth
          variant="filled"
          color="blue"
          radius="xl"
          style={{ background: '#7dd3fc', color: 'black' }}
        >
          Commencer maintenant
        </Button>
      </Card>
    );
  }

  return (
    <Card
      ref={ref}
      shadow="sm"
      padding="xl"
      radius="md"
      withBorder
      onClick={onClick}
      style={{
        cursor: 'pointer',
        transform: hovered ? 'translateY(-5px)' : 'none',
        transition: 'transform 200ms ease',
        background: 'white',
      }}
    >
      <Box mb="xl">
        <ThemeIcon size={56} radius="xl" variant={hovered ? 'filled' : 'light'} color={color}>
          {icon}
        </ThemeIcon>
      </Box>
      <Text size="xl" fw={500} mb="sm">
        {title}
      </Text>
      <Text size="sm" c="dimmed" style={{ minHeight: rem(80) }}>
        {description}
      </Text>
    </Card>
  );
};

const features = [
  {
    title: 'Gestion des Transactions',
    description:
      'Gérez vos transactions avec facilité : création, modification, suppression et statistiques détaillées par jour et par mois.',
    icon: <IconChartPie size={28} />,
    color: 'blue',
  },
  {
    title: 'Gestion des Catégories',
    description:
      'Organisez vos dépenses avec des catégories personnalisables. Créez, modifiez et supprimez des catégories selon vos besoins.',
    icon: <IconCategory size={28} />,
    color: 'violet',
  },
  {
    title: 'Objectifs Financiers',
    description:
      'Définissez et suivez vos objectifs financiers. Visualisez votre progression et atteignez vos buts.',
    icon: <IconTarget size={28} />,
    color: 'green',
  },
  {
    title: 'Rappels Locaux',
    description:
      "Recevez des rappels pour ne jamais oublier d'ajouter vos transactions et maintenir vos comptes à jour.",
    icon: <IconBell size={28} />,
    color: 'orange',
  },
  {
    title: 'Multi-Devises',
    description:
      'Gérez vos finances dans différentes devises et effectuez des transferts entre portefeuilles.',
    icon: <IconCurrencyDollar size={28} />,
    color: 'cyan',
  },
  {
    title: 'Assistant IA',
    description:
      'Bénéficiez des conseils personnalisés de notre assistant IA pour optimiser votre gestion financière et prendre de meilleures décisions.',
    icon: <IconRobot size={28} />,
    variant: 'highlight',
  },
  {
    title: 'Abonnements',
    description:
      'Suivez et gérez vos abonnements récurrents avec des options flexibles de planification.',
    icon: <IconRepeat size={28} />,
    color: 'grape',
  },
];

function Features() {
  const [seeAll, setSeeAll] = useState(false);
  return (
    <Container size="lg" py={80}>
      <Box ta="center" mb={50}>
        <Title order={1} size={48} fw={500} mb={20}>
          Fonctionnalités
          <br />
          Complètes{' '}
          <Text span inherit display="inline-flex" align="center">
            <ThemeIcon
              size={48}
              radius="xl"
              variant="filled"
              color="blue"
              style={{ background: '#7dd3fc', margin: '0 10px' }}
            >
              <IconInfinity size={24} />
            </ThemeIcon>
            Suite
          </Text>
        </Title>
        <Text c="dimmed" maw={580} mx="auto">
          Une plateforme complète pour gérer vos finances personnelles, avec des fonctionnalités
          avancées de suivi des dépenses, de gestion des objectifs et bien plus encore.
        </Text>
        <Button onClick={() => setSeeAll(!seeAll)} variant="outline" radius="xl" size="md" mt="xl">
          {seeAll ? 'Voir moins' : 'Voir toutes les fonctionnalités'}
        </Button>
      </Box>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={30}>
        {features.slice(0, seeAll ? features.length : 3).map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            onClick={() => console.log(`Clicked on ${feature.title}`)}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Features;
