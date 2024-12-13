import { IconCreditCard, IconLock, IconSettings, IconStar } from '@tabler/icons-react';
import { Button, Container, Group, Text, Title } from '@mantine/core';
import classes from './card-details.module.css';

export function CardDetails() {
  return (
    <div className={classes.cardContainer}>
      <Container size="lg">
        <div className={classes.cardWrapper}>
          <div className={classes.cardPreview}>
            <div className={classes.cardLogo}>
              <Text size="xl" fw={700}>
                Ubank
              </Text>
              <IconCreditCard size={32} />
            </div>

            <div className={classes.cardNumber}>1237 6890 7654 5678</div>

            <div className={classes.cardInfo}>
              <div>
                <Text size="sm" c="dimmed">
                  Titulaire
                </Text>
                <Text>Anna Hawadeh</Text>
              </div>
              <div>
                <Text size="sm" c="dimmed">
                  Expire le
                </Text>
                <Text>10/24</Text>
              </div>
            </div>
          </div>

          <div className={classes.cardDetails}>
            <div className={classes.rating}>
              <div className={classes.stars}>
                <Group gap={5}>
                  <IconStar size={20} fill="currentColor" />
                  <IconStar size={20} fill="currentColor" />
                  <IconStar size={20} fill="currentColor" />
                  <IconStar size={20} fill="currentColor" />
                  <IconStar size={20} fill="currentColor" />
                </Group>
              </div>
              <Text fw={500}>4,9/5</Text>
              <Text size="sm" c="dimmed">
                avis utilisateurs
              </Text>
            </div>

            <Title order={2} mb="xl">
              Gérez votre carte en toute sécurité
            </Title>
            <Text c="dimmed" mb="xl">
              Profitez d'une expérience bancaire moderne avec notre carte virtuelle. Gérez vos
              dépenses, verrouillez votre carte et personnalisez vos paramètres de sécurité en
              quelques clics.
            </Text>

            <div className={classes.actionButtons}>
              <Button
                leftSection={<IconLock size={20} />}
                variant="filled"
                className={classes.button}
              >
                Verrouiller la carte
              </Button>
              <Button
                leftSection={<IconSettings size={20} />}
                variant="light"
                className={classes.button}
              >
                Paramètres
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default CardDetails;
