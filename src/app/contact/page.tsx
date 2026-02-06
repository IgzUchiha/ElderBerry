'use client';

import styled from 'styled-components';
import Image from 'next/image';

const ContactSection = styled.section`
  min-height: calc(100vh - 90px);
  padding: 5rem 2rem;
  background: 
    radial-gradient(ellipse at 70% 20%, rgba(196, 168, 196, 0.15) 0%, transparent 50%),
    linear-gradient(180deg, #f5eef5 0%, #faf8fa 100%);
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #3d2040;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #5a3a5a;
  text-align: center;
  margin-bottom: 4rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #faf8fa 100%);
  padding: 3rem;
  border-radius: 24px;
  border: 1px solid rgba(196, 168, 196, 0.25);
  box-shadow: 0 10px 40px rgba(74, 44, 74, 0.08);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a2c4a;
`;

const Input = styled.input`
  padding: 1rem 1.25rem;
  font-family: 'Lora', Georgia, serif;
  font-size: 1rem;
  border: 2px solid rgba(196, 168, 196, 0.3);
  border-radius: 12px;
  background: #fcfafc;
  color: #3d2040;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #b8a0b8;
    box-shadow: 0 0 0 4px rgba(196, 168, 196, 0.2);
  }
  
  &::placeholder {
    color: #a090a0;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem 1.25rem;
  font-family: 'Lora', Georgia, serif;
  font-size: 1rem;
  border: 2px solid rgba(196, 168, 196, 0.3);
  border-radius: 12px;
  background: #fcfafc;
  color: #3d2040;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #b8a0b8;
    box-shadow: 0 0 0 4px rgba(196, 168, 196, 0.2);
  }
  
  &::placeholder {
    color: #a090a0;
  }
`;

const SubmitButton = styled.button`
  padding: 1.1rem 2rem;
  background: linear-gradient(135deg, #4a2c4a 0%, #5a3a5a 100%);
  color: #faf8fa;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.15rem;
  font-weight: 600;
  letter-spacing: 1px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(74, 44, 74, 0.25);
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(74, 44, 74, 0.35);
    background: linear-gradient(135deg, #5a3a5a 0%, #6a4a6a 100%);
  }
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(196, 168, 196, 0.25);
`;

const InfoItem = styled.div`
  text-align: center;
`;

const InfoIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.75rem;
`;

const InfoLabel = styled.h4`
  font-size: 1.1rem;
  color: #4a2c4a;
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: #5a3a5a;
  font-size: 0.95rem;
`;

const QRSection = styled.div`
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(196, 168, 196, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const QRTitle = styled.h3`
  font-size: 1.5rem;
  color: #4a2c4a;
  margin-bottom: 0.5rem;
`;

const QRSubtitle = styled.p`
  color: #5a3a5a;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const QRImageContainer = styled.div`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(74, 44, 74, 0.1);
  border: 1px solid rgba(196, 168, 196, 0.2);
`;

const QRLabel = styled.p`
  margin-top: 1rem;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #4a2c4a;
`;

export default function Contact() {
  return (
    <ContactSection>
      <Container>
        <Title>Get in Touch</Title>
        <Subtitle>
          We&apos;d love to hear from you. Reach out with questions about our 
          supplements or community programs.
        </Subtitle>
        
        <ContactCard>
          <Form>
            <FormGroup>
              <Label>Your Name</Label>
              <Input type="text" placeholder="Enter your name" />
            </FormGroup>
            
            <FormGroup>
              <Label>Email Address</Label>
              <Input type="email" placeholder="your@email.com" />
            </FormGroup>
            
            <FormGroup>
              <Label>Subject</Label>
              <Input type="text" placeholder="How can we help?" />
            </FormGroup>
            
            <FormGroup>
              <Label>Message</Label>
              <TextArea placeholder="Tell us more about your inquiry..." />
            </FormGroup>
            
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
          
          <ContactInfo>
            <InfoItem>
              <InfoIcon>📍</InfoIcon>
              <InfoLabel>Website</InfoLabel>
              <InfoText>www.leimyasco-op.com</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>📧</InfoIcon>
              <InfoLabel>Email</InfoLabel>
              <InfoText>hello@elderfarms.com</InfoText>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>🫐</InfoIcon>
              <InfoLabel>Hours</InfoLabel>
              <InfoText>Mon - Fri: 9am - 5pm</InfoText>
            </InfoItem>
          </ContactInfo>
          
          <QRSection>
            <QRTitle>Quick Payment</QRTitle>
            <QRSubtitle>Scan the QR code below for fast and easy payment</QRSubtitle>
            <QRImageContainer>
              <Image
                src="/scan2pay.png"
                alt="Scan to Pay QR Code"
                width={200}
                height={200}
              />
              <QRLabel>Scan to Pay</QRLabel>
            </QRImageContainer>
          </QRSection>
        </ContactCard>
      </Container>
    </ContactSection>
  );
}
