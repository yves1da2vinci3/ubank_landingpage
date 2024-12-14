import { IconPlayerPlay } from '@tabler/icons-react';
import {
  Avatar,
  Button,
  Card,
  Container,
  Group,
  Rating,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import classes from './testimonial.module.css';

interface TestimonialProps {
  rating: number;
  content: string;
  name: string;
  position: string;
  image?: string;
  isVideo?: boolean;
}

const TestimonialCard = ({ rating, content, name, position, image }: TestimonialProps) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.testimonialCard}>
    <Stack>
      <Rating value={rating} readOnly color="yellow" />
      <Text size="md" c="dimmed">
        {content}
      </Text>
      <Group>
        <Avatar src={image} radius="xl" size="md" />
        <div>
          <Text fw={500}>{name}</Text>
          <Text size="sm" c="dimmed">
            {position}
          </Text>
        </div>
      </Group>
    </Stack>
  </Card>
);

const VideoTestimonial = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery('(max-width: 48em)');

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder className={classes.testimonialCard}>
      <Stack gap="lg">
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: isMobile ? '200px' : '240px',
            backgroundColor: theme.colors.gray[1],
            borderRadius: theme.radius.md,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: theme.white,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: theme.shadows.sm,
            }}
          >
            <IconPlayerPlay size={24} color={theme.colors.blue[6]} />
          </div>
        </div>

        <Group>
          <Avatar radius="xl" size="md" src="/path-to-peter-image.jpg" />
          <div>
            <Text fw={500}>Peter Lucious</Text>
            <Text size="sm" c="dimmed">
              CFO at TechFin Solutions
            </Text>
            <Text size="sm" mt="xs" c="dimmed">
              "L'IA financière a transformé la façon dont nous gérons nos investissements. Une
              innovation remarquable."
            </Text>
          </div>
        </Group>
      </Stack>
    </Card>
  );
};

export default function Testimonials() {
  const isMobile = useMediaQuery('(max-width: 48em)');

  const testimonials = [
    {
      rating: 5,
      content:
        "L'IA a révolutionné ma gestion financière. Les prévisions de dépenses et les conseils personnalisés m'ont permis d'économiser plus de 30% par mois.",
      name: 'Sophie M.',
      position: 'Entrepreneur Indépendant',
      image: '/testimonials/sophie.jpg',
    },
    {
      rating: 5,
      content:
        "L'assistant IA détecte automatiquement les dépenses inhabituelles et m'aide à optimiser mon budget. C'est comme avoir un conseiller financier personnel 24/7.",
      name: 'Thomas L.',
      position: 'Directeur Marketing',
      image: '/testimonials/thomas.jpg',
    },
    {
      rating: 5,
      content:
        "La catégorisation automatique des dépenses et les insights en temps réel m'ont aidé à mieux comprendre mes habitudes financières. Un outil indispensable !",
      name: 'Marie K.',
      position: 'Freelance Designer',
      image: '/testimonials/marie.jpg',
    },
    {
      rating: 5,
      content:
        "Les rapports détaillés et les recommandations de l'IA m'ont permis d'identifier des opportunités d'économies que je n'aurais jamais vues autrement.",
      name: 'Lucas P.',
      position: "Chef d'Entreprise",
      image: '/testimonials/lucas.jpg',
    },
  ];

  return (
    <Container size="lg" py={{ base: 'xl', md: '2xl' }} className={classes.testimonialContainer}>
      <Stack gap="xl" style={{ width: '100%' }}>
        <div style={{ textAlign: isMobile ? 'center' : 'left', width: '100%' }}>
          <Group justify="space-between" align="flex-start" style={{ width: '100%' }}>
            <div style={{ maxWidth: isMobile ? '100%' : '600px' }}>
              <Title order={1} size="h1" fw={600}>
                Ce que nos clients disent de nous
              </Title>
              <Text c="dimmed" mt="md">
                Découvrez comment notre assistant IA aide nos clients à optimiser leurs finances et
                à atteindre leurs objectifs financiers.
              </Text>
            </div>
            {!isMobile && (
              <Button variant="outline" radius="xl">
                Voir plus de témoignages
              </Button>
            )}
          </Group>
        </div>

        <Stack gap="md" style={{ width: '100%' }}>
          {/* First group */}
          <Group
            grow
            style={{ gap: isMobile ? 'md' : 'lg', flexDirection: isMobile ? 'column' : 'row' }}
          >
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </Group>
          {/* Second group */}
          <Group
            grow
            style={{
              gap: isMobile ? 'md' : 'lg',
              flexDirection: isMobile ? 'column' : 'row',
              width: '100%',
            }}
          >
            {!isMobile && <VideoTestimonial />}
            <Stack
              style={{
                width: isMobile ? '100%' : 'auto',
                flex: 1,
                padding: '0 10px',
              }}
              gap="md"
            >
              {testimonials.slice(2, 4).map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </Stack>
          </Group>
          {isMobile && <VideoTestimonial />}
        </Stack>

        {isMobile && (
          <Button variant="outline" radius="xl" fullWidth>
            Voir plus de témoignages
          </Button>
        )}
      </Stack>
    </Container>
  );
}
