'use client';

import styled from 'styled-components';
import Image from 'next/image';

const PageContainer = styled.div`
  min-height: calc(100vh - 90px);
  background: linear-gradient(180deg, #f5eef5 0%, #e8d8e8 30%, #faf8fa 100%);
`;

const BannerSection = styled.section`
  width: 100%;
  height: 200px;
  background: url('/Sups.png') center top / cover no-repeat;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background: linear-gradient(180deg, transparent 0%, #f5eef5 100%);
  }
  
  @media (min-width: 768px) {
    height: 280px;
  }
`;

const HeroSection = styled.section`
  padding: 3rem 2rem 4rem;
  text-align: center;
  background: linear-gradient(180deg, #f5eef5 0%, #e8d8e8 100%);
`;

const HeroContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  @media (min-width: 900px) {
    flex-direction: row;
    text-align: left;
    align-items: center;
    justify-content: center;
  }
`;

const HeroText = styled.div`
  flex: 1;
  
  @media (min-width: 900px) {
    text-align: left;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 320px;
    height: 320px;
    background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 0;
  }
`;

const ProductImage = styled(Image)`
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 20px 40px rgba(61, 32, 64, 0.25));
  transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const PageTitle = styled.h1`
  font-size: 2.8rem;
  color: #3d2040;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #8b6b8b;
  margin-bottom: 1rem;
`;

const IntroText = styled.p`
  font-size: 1.1rem;
  color: #5a3a5a;
  max-width: 550px;
  margin: 0 auto 1.5rem;
  line-height: 1.8;
  
  @media (min-width: 900px) {
    margin: 0 0 1.5rem 0;
  }
`;

const BatchInfoCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #faf8fa 100%);
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(196, 168, 196, 0.3);
  max-width: 550px;
  box-shadow: 0 8px 30px rgba(74, 44, 74, 0.06);
  
  @media (min-width: 900px) {
    margin: 0;
  }
`;

const BatchInfoText = styled.p`
  color: #4a2c4a;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
  
  strong {
    color: #3d2040;
  }
`;

const NavSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 2rem;
  background: linear-gradient(180deg, #e8d8e8 0%, #f5eef5 100%);
`;

const NavButton = styled.a<{ $active?: boolean }>`
  padding: 0.75rem 1.5rem;
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #4a2c4a 0%, #5a3a5a 100%)' 
    : 'linear-gradient(145deg, #ffffff 0%, #faf8fa 100%)'};
  color: ${props => props.$active ? '#faf8fa' : '#4a2c4a'};
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid ${props => props.$active ? 'transparent' : 'rgba(196, 168, 196, 0.3)'};
  box-shadow: 0 4px 15px rgba(74, 44, 74, ${props => props.$active ? '0.2' : '0.05'});
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(74, 44, 74, 0.15);
  }
`;

const RecipesSection = styled.section`
  padding: 4rem 2rem 6rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const RecipeCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #faf8fa 100%);
  padding: 2rem;
  border-radius: 24px;
  border: 1px solid rgba(196, 168, 196, 0.3);
  box-shadow: 0 8px 30px rgba(74, 44, 74, 0.06);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(74, 44, 74, 0.1);
    border-color: rgba(196, 168, 196, 0.5);
  }
`;

const RecipeNumber = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #4a2c4a 0%, #5a3a5a 100%);
  color: #faf8fa;
  border-radius: 50%;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
  margin-right: 0.75rem;
`;

const RecipeTitle = styled.h3`
  font-size: 1.5rem;
  color: #3d2040;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
`;

const SectionLabel = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #8b6b8b;
  margin-bottom: 0.75rem;
  margin-top: 1.25rem;
  
  &:first-of-type {
    margin-top: 0;
  }
`;

const IngredientsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const IngredientItem = styled.li`
  color: #5a3a5a;
  line-height: 1.7;
  padding-left: 1.25rem;
  position: relative;
  margin-bottom: 0.35rem;
  font-size: 0.95rem;
  
  &::before {
    content: '◆';
    position: absolute;
    left: 0;
    color: #c4a8c4;
    font-size: 0.5rem;
    top: 0.45rem;
  }
`;

const BenefitsBox = styled.div`
  background: linear-gradient(135deg, rgba(196, 168, 196, 0.15) 0%, rgba(232, 216, 232, 0.3) 100%);
  border-left: 3px solid #8b6b8b;
  padding: 1rem 1.25rem;
  border-radius: 0 12px 12px 0;
  margin-top: 1rem;
`;

const BenefitsText = styled.p`
  color: #4a2c4a;
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 0;
`;

const DisclaimerSection = styled.section`
  padding: 2rem;
  background: linear-gradient(180deg, #faf8fa 0%, #f5eef5 100%);
  text-align: center;
`;

const DisclaimerText = styled.p`
  font-size: 0.85rem;
  color: #8b6b8b;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
  font-style: italic;
`;

const recipes = [
  {
    number: 1,
    name: "ElderFarms Daily Immune",
    ingredients: [
      "Four cups water",
      "Three tablespoons Elder Farms elderberry syrup",
      "One-half cup fresh lemon juice",
      "One-inch fresh ginger, grated",
      "One tablespoon raw honey"
    ],
    benefits: "Foundational daily immune support with vitamin C and antioxidants. Ginger adds anti-inflammatory properties while elderberry provides flavonoids that support respiratory health. Ideal for consistent wellness maintenance."
  },
  {
    number: 2,
    name: "ElderFarms Turmeric Wellness",
    ingredients: [
      "Four cups water",
      "Three tablespoons Elder Farms elderberry syrup",
      "One-half teaspoon turmeric powder",
      "Pinch black pepper",
      "One-half cup lemon juice",
      "One tablespoon honey"
    ],
    benefits: "Powerful anti-inflammatory combination targeting systemic inflammation. Black pepper activates turmeric's curcumin for better absorption. Elderberry antioxidants support cellular health and immune function. Perfect for chronic inflammation management."
  },
  {
    number: 3,
    name: "ElderFarms Respiratory Relief",
    ingredients: [
      "Three cups warm water",
      "Three tablespoons Elder Farms elderberry syrup",
      "One cinnamon stick",
      "Two whole cloves",
      "One sprig fresh rosemary",
      "One tablespoon honey"
    ],
    benefits: "Targeted respiratory support with antimicrobial and expectorant properties. Rosemary opens airways, cloves provide antiseptic benefits, cinnamon soothes throat irritation. Elderberry supports upper respiratory defense. Use during seasonal challenges."
  },
  {
    number: 4,
    name: "ElderFarms Ginger Defense",
    ingredients: [
      "Four cups water",
      "Three tablespoons Elder Farms elderberry syrup",
      "Two-inch fresh ginger, grated",
      "One-quarter cup orange juice",
      "Pinch cayenne pepper",
      "One tablespoon honey"
    ],
    benefits: "Aggressive immune activation with warming circulation support. Cayenne increases blood flow, ginger reduces inflammation, vitamin C boosts white blood cell production. Elderberry provides antiviral properties. Best at first sign of unwellness."
  },
  {
    number: 5,
    name: "ElderFarms Mint Refresher",
    ingredients: [
      "Three cups water",
      "Two tablespoons Elder Farms elderberry syrup",
      "One handful fresh mint leaves",
      "One-half cup lemon juice",
      "One to two tablespoons honey"
    ],
    benefits: "Gentle digestive support with immune protection. Mint soothes upset stomach and reduces nausea. Elderberry provides antioxidant protection without overwhelming digestive system. Ideal for sensitive stomachs or children."
  },
  {
    number: 6,
    name: "ElderFarms Hibiscus Blend",
    ingredients: [
      "Four cups water",
      "Two tablespoons Elder Farms elderberry syrup",
      "Two tablespoons dried hibiscus flowers",
      "One-quarter cup lime juice",
      "One tablespoon agave nectar"
    ],
    benefits: "Cardiovascular support with blood pressure regulation. Hibiscus naturally lowers blood pressure, elderberry supports heart health through antioxidants. Rich in vitamin C for immune function. Excellent for heart-conscious wellness."
  },
  {
    number: 7,
    name: "ElderFarms Cinnamon Comfort",
    ingredients: [
      "Three cups warm water",
      "Three tablespoons Elder Farms elderberry syrup",
      "Two cinnamon sticks",
      "One-quarter teaspoon nutmeg",
      "One vanilla bean, split",
      "One tablespoon maple syrup"
    ],
    benefits: "Blood sugar regulation with immune support. Cinnamon improves insulin sensitivity, nutmeg aids digestion, vanilla provides calming aromatherapy. Elderberry maintains immune defense. Perfect for metabolic wellness."
  },
  {
    number: 8,
    name: "ElderFarms Citrus Shield",
    ingredients: [
      "Four cups water",
      "Three tablespoons Elder Farms elderberry syrup",
      "One-quarter cup orange juice",
      "One-quarter cup lemon juice",
      "One-inch fresh ginger, grated",
      "One tablespoon honey"
    ],
    benefits: "Maximum vitamin C delivery for acute immune support. Triple citrus provides bioflavonoids that enhance elderberry absorption. Ginger adds anti-inflammatory action. Use during high-stress periods or travel."
  },
  {
    number: 9,
    name: "ElderFarms Rose Hip Immune",
    ingredients: [
      "Four cups water",
      "Two tablespoons Elder Farms elderberry syrup",
      "Two tablespoons dried rose hips",
      "One-half cup lemon juice",
      "One cinnamon stick",
      "One tablespoon honey"
    ],
    benefits: "Comprehensive immune support with skin health benefits. Rose hips provide vitamin C and bioflavonoids, supporting collagen production. Elderberry adds antiviral protection. Cinnamon stabilizes blood sugar. Ideal for seasonal transitions."
  },
  {
    number: 10,
    name: "ElderFarms Anti-Inflammatory",
    ingredients: [
      "Four cups water",
      "Three tablespoons Elder Farms elderberry syrup",
      "One teaspoon turmeric powder",
      "One-inch fresh ginger, grated",
      "Pinch black pepper",
      "Pinch cayenne pepper",
      "One tablespoon honey"
    ],
    benefits: "Aggressive inflammation reduction for chronic conditions. Triple anti-inflammatory action from turmeric, ginger, and cayenne. Black pepper enhances absorption. Elderberry provides antioxidant support. Excellent for arthritis, joint pain, or autoimmune support."
  }
];

export default function RecipesPage() {
  return (
    <PageContainer>
      <BannerSection />
      <HeroSection>
        <HeroContent>
          <ProductImageContainer>
            <ProductImage
              src="/Supplements.png"
              alt="Elder Farms Elderberry Immune Syrup with Aronia"
              width={260}
              height={390}
              priority
            />
          </ProductImageContainer>
          <HeroText>
            <Subtitle>ElderFarms Elderberry Syrup</Subtitle>
            <PageTitle>10 IMMUNEACCESS Wellness Recipes</PageTitle>
            <IntroText>
              Transform your daily wellness routine with these carefully crafted recipes 
              designed to maximize the immune-boosting benefits of Elder Farms elderberry syrup.
            </IntroText>
            <BatchInfoCard>
              <BatchInfoText>
                <strong>Batch Info:</strong> Each 8oz bottle makes 10–16 batches depending on whether 
                you use 2 or 3 tablespoons per recipe. Cooperative economics for accessible daily wellness.
              </BatchInfoText>
            </BatchInfoCard>
          </HeroText>
        </HeroContent>
      </HeroSection>
      
      <NavSection>
        <NavButton href="/recipes" $active>IMMUNEACCESS Recipes</NavButton>
        <NavButton href="/recipes/advanced">Advanced Recipes</NavButton>
      </NavSection>
      
      <RecipesSection>
        <RecipesGrid>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.number}>
              <RecipeTitle>
                <RecipeNumber>{recipe.number}</RecipeNumber>
                {recipe.name}
              </RecipeTitle>
              
              <SectionLabel>Ingredients</SectionLabel>
              <IngredientsList>
                {recipe.ingredients.map((ingredient, idx) => (
                  <IngredientItem key={idx}>{ingredient}</IngredientItem>
                ))}
              </IngredientsList>
              
              <SectionLabel>Benefits</SectionLabel>
              <BenefitsBox>
                <BenefitsText>{recipe.benefits}</BenefitsText>
              </BenefitsBox>
            </RecipeCard>
          ))}
        </RecipesGrid>
      </RecipesSection>
      
      <DisclaimerSection>
        <DisclaimerText>
          Note: Consult healthcare provider before use if pregnant, nursing, or taking medications. 
          These statements have not been evaluated by the Food and Drug Administration. 
          This product is not intended to diagnose, treat, cure, or prevent any disease.
        </DisclaimerText>
      </DisclaimerSection>
    </PageContainer>
  );
}
