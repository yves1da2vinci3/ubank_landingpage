import { useState } from 'react';
import { Box, Button, Container, Text, TextInput, Title } from '@mantine/core';
import classes from './newsletter.module.css';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'inscription à implémenter
    console.log('Email soumis:', email);
  };

  return (
    <Box className={classes.wrapper}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Simplify Expense Management</Title>
            <Text c="dimmed" className={classes.description}>
              Enter your email or phone number to save with Ubank's tools.
            </Text>
            <form onSubmit={handleSubmit} className={classes.form}>
              <TextInput
                placeholder="Enter your email or phone number"
                size="md"
                radius="xl"
                className={classes.input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button radius="xl" type="submit" size="md" className={classes.button}>
                Try it free
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Box>
  );
}
