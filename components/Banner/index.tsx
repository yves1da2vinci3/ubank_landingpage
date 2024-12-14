import { IconArrowRight, IconBolt, IconStar } from '@tabler/icons-react';
import { Button, Container, Group, Image, Text, Title } from '@mantine/core';
import phoneImage from '../../public/banner_image.png';
import classes from './banner.module.css';

export function Banner() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Decouvrez <span className={classes.highlight}>Ubank</span> une application
            <br /> avec un assistant financier IA intégré
          </Title>
          <Text c="dimmed" mt="md">
            qui vous aide à analyser vos habitudes financières et vous donne des conseils
            personnalisés pour une meilleure gestion de votre argent.
          </Text>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Commencer
            </Button>
          </Group>
        </div>

        <div className={classes.imageWrapper}>
          <div className={classes.greenBackground} />

          <div className={classes.ratingBox}>
            <Group>
              <Text fw={500} size="lg">
                4,9
              </Text>
              <Text c="dimmed" size="sm">
                /5
              </Text>
            </Group>
            <Text size="xs" c="dimmed" mb={5}>
              avis utilisateurs
            </Text>
            <div className={classes.stars}>
              <IconStar size={16} fill="currentColor" />
              <IconStar size={16} fill="currentColor" />
              <IconStar size={16} fill="currentColor" />
              <IconStar size={16} fill="currentColor" />
              <IconStar size={16} fill="currentColor" />
            </div>
          </div>

          <Image src={phoneImage.src} alt="Application mobile" className={classes.image} />

          <div className={classes.downloadBox}>
            <IconBolt size={24} />
            <div>
              <Text fw={500}>Application Mobile</Text>
              <Group gap={5}>
                <Text size="sm">Télécharger</Text>
                <IconArrowRight size={16} />
              </Group>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Banner;
