import { IconArrowRight, IconBolt, IconStar } from '@tabler/icons-react';
import { Button, Container, Group, Image, Text, Title, Transition } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import phoneImage from '../../public/banner_image.png';
import classes from './banner.module.css';

export function Banner() {
  const { hovered: downloadHovered, ref: downloadRef } = useHover();

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Découvrez <span className={classes.highlight}>Ubank</span>
            <br /> votre assistant financier
            <br /> alimenté par l'IA
          </Title>
          <Text c="dimmed" mt="md" size="lg">
            Analysez vos habitudes financières et recevez des conseils personnalisés pour une
            meilleure gestion de votre argent.
          </Text>

          <Group mt={40}>
            <Button radius="xl" size="md" className={classes.control}>
              Commencer maintenant
            </Button>
          </Group>
        </div>

        <div className={classes.imageWrapper}>
          <div className={classes.greenBackground} />

          <Transition mounted transition="slide-down" duration={400}>
            {(styles) => (
              <div className={classes.ratingBox} style={styles}>
                <Group>
                  <Text fw={700} size="xl">
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
            )}
          </Transition>

          <Image src={phoneImage.src} alt="Application mobile" className={classes.image} />

          <Transition mounted transition="slide-up" duration={400}>
            {(styles) => (
              <div ref={downloadRef} className={classes.downloadBox} style={styles}>
                <IconBolt
                  size={24}
                  style={{
                    color: 'var(--mantine-color-ligthBlue)',
                    transform: downloadHovered ? 'scale(1.2)' : 'scale(1)',
                    transition: 'transform 0.2s ease',
                  }}
                />
                <div>
                  <Text fw={700}>Application Mobile</Text>
                  <Group gap={5}>
                    <Text size="sm" c="dimmed">
                      Télécharger
                    </Text>
                    <IconArrowRight
                      size={16}
                      style={{
                        transform: downloadHovered ? 'translateX(5px)' : 'none',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </Group>
                </div>
              </div>
            )}
          </Transition>
        </div>
      </div>
    </Container>
  );
}

export default Banner;
