import {
  Html,
  Button,
  Head,
  Preview,
  Body,
  Container,
  Text,
  Section,
} from '@react-email/components';
import type { FC } from 'react';

interface EmailProps {
  firstName: string;
}

const Email: FC<EmailProps> = ({ firstName }) => {
  return (
    <Html>
      <Head />
      <Preview>Confirmation de votre réservation chez Pilar</Preview>
      <Body style={main}>
        <Container>
          <Section>
            <Text style={text}>Bonjour {firstName},</Text>
            <Text style={text}>
              Nous avons bien reçu votre demande de réservation. Notre équipe va
              l'examiner et reviendra vers vous dans les plus brefs délais.
            </Text>
            <Button href="https://pilar.be" style={button}>
              Visiter notre site
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'system-ui',
};

const text = {
  fontSize: '16px',
  lineHeight: '24px',
  color: '#333',
};

const button = {
  backgroundColor: '#000000',
  color: '#ffffff',
  padding: '12px 20px',
  borderRadius: '4px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  marginTop: '16px',
};

export default Email;
