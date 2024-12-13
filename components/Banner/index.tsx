import { Button, Container, Group, Image, Text, Title } from '@mantine/core';
import image from '../../public/image.svg';
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
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}

export default Banner;
