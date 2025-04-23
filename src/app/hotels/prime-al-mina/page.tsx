'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Navigation from '@/components/Navigation';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #fff;
`;

const HeroSection = styled.section`
  position: relative;
  height: 70vh;
  width: 100%;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: #233659;
  margin-bottom: 3.5rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 2px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -1.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 1px;
    background-color: #c8a97e;
  }
`;

const ExcellenceText = styled.p`
  font-size: 1.2rem;
  color: #666;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 6rem;
`;

const AccommodationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 6rem;
`;

const RoomCard = styled.div`
  position: relative;
  height: 450px;
  border-radius: 0;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const RoomOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
`;

const RoomTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  font-weight: 300;
  letter-spacing: 1px;
`;

const LifeSection = styled.div`
  margin-top: 5rem;
`;

const LifeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-top: 3rem;
`;

const LifeCard = styled.div`
  position: relative;
  height: 350px;
  border-radius: 0;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const ContactSection = styled.div`
  text-align: center;
  margin: 6rem 0;
`;

const ContactInfo = styled.div`
  font-size: 1.2rem;
  color: #666;
  line-height: 2;
  margin-top: 2rem;
`;

const FAQSection = styled.section`
  background-color: #fff;
  padding: 5rem 2rem;
`;

const FAQContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FAQList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const FAQItem = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #e0e0e0;
`;

const Question = styled.div`
  color: #233659;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.5px;
  cursor: pointer;
`;

export default function PrimeAlMina() {
  return (
    <PageContainer>
      <Navigation />

      <HeroSection>
        <Image
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470"
          alt="PRIME Al Mina Hotel"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <HeroOverlay>
          <HeroTitle>PRIME AL MINA</HeroTitle>
        </HeroOverlay>
      </HeroSection>

      <ContentSection>
        <SectionTitle>THE EXCELLENCE OF</SectionTitle>
        <ExcellenceText>
          Experience luxury redefined at PRIME Al Mina, where traditional Arabian hospitality meets contemporary elegance. 
          Nestled in the heart of the city, our hotel offers breathtaking views and unparalleled service.
        </ExcellenceText>

        <SectionTitle>EXPLORE OUR ACCOMMODATIONS</SectionTitle>
        <AccommodationGrid>
          <RoomCard>
            <Image
              src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=1470"
              alt="Standard Suite"
              fill
              style={{ objectFit: 'cover' }}
            />
            <RoomOverlay>
              <RoomTitle>Standard Suite</RoomTitle>
            </RoomOverlay>
          </RoomCard>
          <RoomCard>
            <Image
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1470"
              alt="Residence"
              fill
              style={{ objectFit: 'cover' }}
            />
            <RoomOverlay>
              <RoomTitle>Residence</RoomTitle>
            </RoomOverlay>
          </RoomCard>
        </AccommodationGrid>

        <LifeSection>
          <SectionTitle>LIFE IN</SectionTitle>
          <LifeGrid>
            <LifeCard>
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470"
                alt="Dining Experience"
                fill
                style={{ objectFit: 'cover' }}
              />
              <RoomOverlay>
                <RoomTitle>Dining Experience</RoomTitle>
              </RoomOverlay>
            </LifeCard>
            <LifeCard>
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1470"
                alt="Wellness Center"
                fill
                style={{ objectFit: 'cover' }}
              />
              <RoomOverlay>
                <RoomTitle>Wellness Center</RoomTitle>
              </RoomOverlay>
            </LifeCard>
          </LifeGrid>
        </LifeSection>

        <ContactSection>
          <SectionTitle>CONTACT US</SectionTitle>
          <ContactInfo>
            For reservations and inquiries, please contact us:
            <br />
            Phone: +966 12 345 6789
            <br />
            Email: info@primealminahotel.com
          </ContactInfo>
        </ContactSection>

        <SectionTitle>FAQs</SectionTitle>
        <FAQContainer>
          <FAQList>
            <FAQItem>
              <Question>What is the check-in and check-out time?</Question>
            </FAQItem>
            <FAQItem>
              <Question>What is the cancellation policy?</Question>
            </FAQItem>
            <FAQItem>
              <Question>Is breakfast included in the room rate?</Question>
            </FAQItem>
            <FAQItem>
              <Question>Do you offer airport transfers?</Question>
            </FAQItem>
            <FAQItem>
              <Question>Is there a swimming pool?</Question>
            </FAQItem>
            <FAQItem>
              <Question>What are the dining options?</Question>
            </FAQItem>
            <FAQItem>
              <Question>Is there a fitness center?</Question>
            </FAQItem>
            <FAQItem>
              <Question>Do you have meeting facilities?</Question>
            </FAQItem>
            <FAQItem>
              <Question>Is parking available?</Question>
            </FAQItem>
            <FAQItem>
              <Question>What are the nearby attractions?</Question>
            </FAQItem>
          </FAQList>
        </FAQContainer>
      </ContentSection>
    </PageContainer>
  );
}
