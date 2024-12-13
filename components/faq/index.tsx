import { useState } from 'react';
import { IconPlus, IconSearch } from '@tabler/icons-react';
import { Accordion, Container, Stack, Text, TextInput, Title } from '@mantine/core';

const faqData = [
  {
    question: "Qu'est-ce que l'assistant IA financier ?",
    answer:
      "L'assistant IA est un outil intelligent qui analyse vos habitudes financières, suit vos dépenses et revenus, et vous fournit des conseils personnalisés pour mieux gérer votre argent. Il vous aide à comprendre vos tendances de dépenses et à atteindre vos objectifs financiers.",
  },
  {
    question: 'Comment fonctionne le suivi des dépenses ?',
    answer:
      "L'application catégorise automatiquement vos transactions et vous donne une vue claire de vos dépenses par catégorie. Vous pouvez suivre votre budget en temps réel et recevoir des alertes personnalisées pour rester dans vos objectifs.",
  },
  {
    question: 'Quels types de conseils financiers puis-je recevoir ?',
    answer:
      "L'IA analyse vos habitudes de dépenses et vous propose des recommandations personnalisées pour économiser, comme identifier les abonnements inutiles, suggérer des moments opportuns pour épargner, ou vous alerter sur des dépenses inhabituelles.",
  },
  {
    question: 'Mes données financières sont-elles sécurisées ?',
    answer:
      'Nous utilisons les technologies de cryptage les plus avancées pour protéger vos données financières. Notre système est conforme aux normes bancaires les plus strictes et nous ne partageons jamais vos informations avec des tiers.',
  },
  {
    question: "Comment l'IA m'aide-t-elle à économiser ?",
    answer:
      "L'IA analyse vos revenus et dépenses pour identifier des opportunités d'économies, vous suggère des objectifs d'épargne réalistes, et vous guide avec des conseils pratiques adaptés à votre situation financière personnelle.",
  },
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container size="md" py="xl">
      <Stack gap="xl">
        <Title order={1} ta="center" mb="md">
          Questions Fréquentes
        </Title>

        <Text c="dimmed" ta="center" mb="xl">
          Vous avez des questions sur notre assistant IA financier ? Trouvez vos réponses ici ou
          contactez-nous !
        </Text>

        <TextInput
          leftSection={<IconSearch size={18} />}
          placeholder="Rechercher une question..."
          value={searchQuery}
          radius="xl"
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          mb="xl"
        />

        <Accordion chevron={<IconPlus size={18} stroke={1.5} />} variant="separated">
          {filteredFAQs.map((faq, index) => (
            <Accordion.Item key={index} value={`item-${index}`}>
              <Accordion.Control>{faq.question}</Accordion.Control>
              <Accordion.Panel>{faq.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Stack>
    </Container>
  );
}
