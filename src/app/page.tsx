'use client';

import styled from 'styled-components';
import Image from 'next/image';

const HeroSection = styled.section`
  min-height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background: 
    radial-gradient(ellipse at 30% 20%, rgba(196, 168, 196, 0.25) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 80%, rgba(139, 107, 139, 0.15) 0%, transparent 50%),
    linear-gradient(180deg, #f5eef5 0%, #e8d8e8 30%, #d8c8d8 60%, #c8b8c8 100%);
  position: relative;
  overflow: hidden;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 1000px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductShowcase = styled.div`
  position: relative;
  margin-bottom: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%);
    border-radius: 50%;
    z-index: -1;
  }
`;

const ProductImage = styled(Image)`
  filter: drop-shadow(0 20px 40px rgba(61, 32, 64, 0.25));
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const HeroTagline = styled.p`
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #8b6b8b;
  margin-bottom: 0.5rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #3d2040;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
`;

const HeroSubtitle = styled.p`
  font-size: 1.15rem;
  color: #5a3a5a;
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #4a2c4a 0%, #5a3a5a 100%);
  color: #faf8fa;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(74, 44, 74, 0.3);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(74, 44, 74, 0.4);
    background: linear-gradient(135deg, #5a3a5a 0%, #6a4a6a 100%);
  }
`;

const HistorySection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #faf8fa 0%, #f5eef5 100%);
`;

const SectionContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  color: #3d2040;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #c4a8c4, #8b6b8b);
    margin: 1rem auto 0;
    border-radius: 2px;
  }
`;

const IntroText = styled.p`
  font-size: 1.2rem;
  color: #5a3a5a;
  text-align: center;
  line-height: 1.9;
  margin-bottom: 3rem;
`;

const HistoryCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #faf8fa 100%);
  padding: 2.5rem 3rem;
  border-radius: 24px;
  border: 1px solid rgba(196, 168, 196, 0.3);
  margin-bottom: 2rem;
  box-shadow: 0 8px 30px rgba(74, 44, 74, 0.06);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(74, 44, 74, 0.1);
    border-color: rgba(196, 168, 196, 0.5);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: #4a2c4a;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const CardIcon = styled.span`
  font-size: 1.4rem;
`;

const CardText = styled.p`
  color: #5a3a5a;
  line-height: 1.8;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const BulletItem = styled.li`
  color: #5a3a5a;
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
  
  &::before {
    content: '◆';
    position: absolute;
    left: 0;
    color: #c4a8c4;
    font-size: 0.6rem;
    top: 0.5rem;
  }
`;

const HighlightBox = styled.div`
  background: linear-gradient(135deg, rgba(196, 168, 196, 0.15) 0%, rgba(232, 216, 232, 0.3) 100%);
  border-left: 4px solid #8b6b8b;
  padding: 1.5rem 2rem;
  border-radius: 0 12px 12px 0;
  margin: 1.5rem 0;
`;

const HighlightText = styled.p`
  color: #4a2c4a;
  font-style: italic;
  line-height: 1.8;
  margin: 0;
`;

const ComparisonSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, #e8d8e8 0%, #d8c8d8 50%, #c8b8c8 100%);
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const ComparisonCard = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 10px 40px rgba(74, 44, 74, 0.08);
`;

const ComparisonTitle = styled.h4`
  font-size: 1.3rem;
  color: #4a2c4a;
  margin-bottom: 1rem;
  text-align: center;
`;

const ModernRevivalSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #faf8fa 0%, #fcfafc 100%);
  text-align: center;
`;

const RevivalContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
`;

const FeatureItem = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #f5eef5 100%);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(196, 168, 196, 0.25);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(74, 44, 74, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.75rem;
`;

const FeatureText = styled.p`
  color: #5a3a5a;
  font-size: 0.95rem;
`;

const ClosingText = styled.p`
  font-size: 1.15rem;
  color: #4a2c4a;
  line-height: 1.9;
  margin-top: 2rem;
  
  strong {
    color: #3d2040;
  }
`;

export default function Home() {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTagline>American Elderberry · Since 1899</HeroTagline>
          <ProductShowcase>
            <ProductImage
              src="/Supplements.png"
              alt="Elder Farms Elderberry Immune Syrup with Aronia"
              width={400}
              height={600}
              priority
            />
          </ProductShowcase>
          <HeroTitle>Eliminate Confusion in Pharmacy Aisles</HeroTitle>
          <HeroSubtitle>
            Fresh-pressed, never dried. Antioxidant-rich immune support built by connection — products worth honest reviews.
          </HeroSubtitle>
          <CTAButton href="https://leimyasco-op.com" target="_blank" rel="noopener noreferrer">Shop Now</CTAButton>
        </HeroContent>
      </HeroSection>
      
      <HistorySection>
        <SectionContainer>
          <SectionTitle>A Brief History of Elderberry</SectionTitle>
          
          <IntroText>
            Elderberry is one of the oldest known medicinal plants in the world. 
            Archaeologists have found elderberry seeds in Stone Age village sites, 
            showing humans used the plant thousands of years ago for food, dye, and traditional remedies.
          </IntroText>
          
          <HistoryCard>
            <CardTitle><CardIcon>🏛️</CardIcon> Ancient Origins</CardTitle>
            <CardText>
              Across early cultures, elder trees were considered powerful and protective. They show up in:
            </CardText>
            <BulletList>
              <BulletItem>Ancient Greek writings</BulletItem>
              <BulletItem>Traditional European folk medicine</BulletItem>
              <BulletItem>Early Indigenous North American plant traditions</BulletItem>
            </BulletList>
          </HistoryCard>
          
          <HistoryCard>
            <CardTitle><CardIcon>🌿</CardIcon> Elderberry in Folk Medicine</CardTitle>
            <CardText>
              For centuries, elderberry was valued as a "people's remedy" due to how commonly it grew and how versatile it was. Historically it was used for:
            </CardText>
            <BulletList>
              <BulletItem>Supporting the body during winter seasons</BulletItem>
              <BulletItem>Brewing into tonics, wines, syrups, and teas</BulletItem>
              <BulletItem>Using the flowers for skin care and calming preparations</BulletItem>
              <BulletItem>Making dyes and inks from the dark purple berries</BulletItem>
            </BulletList>
            <HighlightBox>
              <HighlightText>
                In early American homesteads, elderberry bushes were often planted close to the house because families relied on both the flowers and the berries as part of the household medicine cabinet.
              </HighlightText>
            </HighlightBox>
          </HistoryCard>
        </SectionContainer>
      </HistorySection>
      
      <ComparisonSection>
        <SectionContainer>
          <SectionTitle>European vs. American Elderberry</SectionTitle>
          <IntroText>
            The elderberry many people know from old herbal books is European elderberry (Sambucus nigra). 
            However, here in the U.S., a different species evolved naturally: American elderberry (Sambucus canadensis).
          </IntroText>
          
          <ComparisonGrid>
            <ComparisonCard>
              <ComparisonTitle>Indigenous Knowledge</ComparisonTitle>
              <CardText>
                Indigenous tribes across the Midwest, Ozarks, and Eastern U.S. used American elderberry long before European settlers arrived.
              </CardText>
            </ComparisonCard>
            
            <ComparisonCard>
              <ComparisonTitle>Settler Adoption</ComparisonTitle>
              <CardText>
                Early settlers adopted those uses and began making syrups, tinctures, pies, and wines from the native berries.
              </CardText>
            </ComparisonCard>
            
            <ComparisonCard>
              <ComparisonTitle>Regional Tradition</ComparisonTitle>
              <CardText>
                In regions like Missouri and Arkansas, elderberry became a staple seasonal harvest — families would gather berries every late summer to make winter preparations.
              </CardText>
            </ComparisonCard>
          </ComparisonGrid>
        </SectionContainer>
      </ComparisonSection>
      
      <ModernRevivalSection>
        <RevivalContent>
          <SectionTitle>Modern Revival</SectionTitle>
          <IntroText>
            Although elderberry has been used for thousands of years, the modern wellness industry 
            rediscovered it in the last 20–30 years. Demand began soaring as people looked for:
          </IntroText>
          
          <FeatureGrid>
            <FeatureItem>
              <FeatureIcon>🛡️</FeatureIcon>
              <FeatureText>Natural immune support</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>🌱</FeatureIcon>
              <FeatureText>Clean-label, plant-based ingredients</FeatureText>
            </FeatureItem>
            <FeatureItem>
              <FeatureIcon>📜</FeatureIcon>
              <FeatureText>Traditional remedies used by previous generations</FeatureText>
            </FeatureItem>
          </FeatureGrid>
          
          <ClosingText>
            This revival created a need for reliable, American-grown supply — which is why farms like <strong>Buehler Farms</strong> have become leaders in growing and processing true American elderberry.
          </ClosingText>
          
          <CTAButton href="https://leimyasco-op.com" target="_blank" rel="noopener noreferrer" style={{ marginTop: '2rem' }}>Explore Our Products</CTAButton>
        </RevivalContent>
      </ModernRevivalSection>
    </>
  );
}
