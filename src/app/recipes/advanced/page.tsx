'use client';

import styled from 'styled-components';
import Image from 'next/image';

const PageContainer = styled.div`
  min-height: calc(100vh - 90px);
  background: linear-gradient(180deg, #f5eef5 0%, #e8d8e8 30%, #faf8fa 100%);
`;

const BannerSection = styled.section`
  width: 100%;
  height: 120px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: linear-gradient(180deg, transparent 0%, #f5eef5 100%);
    z-index: 1;
  }
  
  @media (min-width: 768px) {
    height: 200px;
  }
  
  @media (min-width: 1024px) {
    height: 260px;
  }
`;

const BannerImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const HeroSection = styled.section`
  padding: 2rem 1rem 3rem;
  text-align: center;
  background: linear-gradient(180deg, #f5eef5 0%, #e8d8e8 100%);
  
  @media (min-width: 768px) {
    padding: 3rem 2rem 4rem;
  }
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
  filter: drop-shadow(0 20px 40px rgba(61, 32, 64, 0.2));
  border-radius: 12px;
  transition: transform 0.5s ease;
  max-width: 180px;
  height: auto;
  
  @media (min-width: 768px) {
    max-width: 280px;
  }
  
  &:hover {
    transform: scale(1.02);
  }
`;

const PageTitle = styled.h1`
  font-size: 1.8rem;
  color: #3d2040;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
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
  font-size: 1.4rem;
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
    name: "ElderFarms Chamomile Sleep Support",
    ingredients: [
      "Three cups warm water",
      "Two tablespoons Elder Farms elderberry syrup",
      "Two chamomile tea bags or two tablespoons dried chamomile",
      "One-half teaspoon vanilla extract",
      "One tablespoon honey",
      "Pinch ground cinnamon"
    ],
    benefits: "Combines immune support with sleep promotion. Chamomile contains apigenin that binds to brain receptors promoting relaxation and sleep quality. Elderberry provides overnight immune defense. Vanilla and cinnamon create calming aromatherapy. Best consumed thirty to sixty minutes before bedtime for restorative sleep with immune protection."
  },
  {
    number: 2,
    name: "ElderFarms Sage Brain Boost",
    ingredients: [
      "Four cups water",
      "Three tablespoons Elder Farms elderberry syrup",
      "Six to eight fresh sage leaves or one teaspoon dried sage",
      "One-half cup lemon juice",
      "One-inch fresh ginger, grated",
      "One tablespoon honey"
    ],
    benefits: "Cognitive enhancement with immune support. Sage improves memory retention and mental clarity through rosmarinic acid and antioxidants. Elderberry supports brain health by reducing oxidative stress. Ginger increases circulation to brain tissue. Excellent for study sessions, work focus, or supporting cognitive function in aging."
  },
  {
    number: 3,
    name: "ElderFarms Thyme Respiratory Power",
    ingredients: [
      "Three cups warm water",
      "Three tablespoons Elder Farms elderberry syrup",
      "One tablespoon fresh thyme leaves or one teaspoon dried thyme",
      "One-half cup lemon juice",
      "One tablespoon honey",
      "Pinch cayenne pepper"
    ],
    benefits: "Powerful respiratory system support with expectorant action. Thyme contains thymol which loosens mucus and fights respiratory infections. Elderberry provides antiviral protection for lungs and airways. Cayenne increases circulation and clears congestion. Ideal for coughs, bronchitis, seasonal respiratory challenges, or supporting lung health in smokers."
  },
  {
    number: 4,
    name: "ElderFarms Parsley Detox",
    ingredients: [
      "Four cups water",
      "Two tablespoons Elder Farms elderberry syrup",
      "One-quarter cup fresh parsley, chopped",
      "One-half cup lemon juice",
      "One-quarter cucumber, sliced",
      "One tablespoon honey"
    ],
    benefits: "Kidney and liver detoxification with immune support. Parsley acts as natural diuretic supporting kidney function and reducing water retention. Rich in chlorophyll for blood purification and heavy metal chelation. Cucumber provides hydration and additional kidney support. Elderberry adds antioxidant protection during detoxification. Excellent for bloating, water retention, or supporting organ health."
  },
  {
    number: 5,
    name: "ElderFarms Oregano Antimicrobial",
    ingredients: [
      "Four cups warm water",
      "Three tablespoons Elder Farms elderberry syrup",
      "One teaspoon dried oregano or six fresh oregano leaves",
      "One-half cup lemon juice",
      "One-inch fresh ginger, grated",
      "One tablespoon honey"
    ],
    benefits: "Aggressive antimicrobial and antiviral defense. Oregano contains carvacrol and thymol with powerful antibacterial, antiviral, and antifungal properties. Combined with elderberry creates broad-spectrum immune protection. Ginger adds anti-inflammatory support. Use at first sign of infection, for gut health support, or during travel to prevent illness."
  },
  {
    number: 6,
    name: "ElderFarms Fennel Digestive Calm",
    ingredients: [
      "Three cups warm water",
      "Two tablespoons Elder Farms elderberry syrup",
      "One tablespoon fennel seeds, crushed",
      "One handful fresh mint leaves",
      "One-half cup lemon juice",
      "One tablespoon honey"
    ],
    benefits: "Digestive system support with immune protection. Fennel relieves bloating, gas, and indigestion through carminative properties. Mint soothes stomach lining and reduces cramping. Elderberry provides gentle immune support without digestive upset. Perfect for irritable bowel syndrome, bloating after meals, or supporting digestive health during stress."
  },
  {
    number: 7,
    name: "ElderFarms Cardamom Metabolism Boost",
    ingredients: [
      "Four cups water",
      "Three tablespoons Elder Farms elderberry syrup",
      "Six cardamom pods, crushed, or one-half teaspoon ground cardamom",
      "One-inch fresh ginger, grated",
      "One-quarter teaspoon black pepper",
      "One tablespoon honey"
    ],
    benefits: "Metabolic enhancement with blood sugar regulation. Cardamom increases metabolism, aids fat burning, and improves insulin sensitivity. Ginger and black pepper create thermogenic effect boosting calorie burn. Elderberry provides antioxidant support during weight management. Excellent for metabolic syndrome, weight loss support, or maintaining healthy blood sugar levels."
  },
  {
    number: 8,
    name: "ElderFarms Dill Stress Relief",
    ingredients: [
      "Three cups warm water",
      "Two tablespoons Elder Farms elderberry syrup",
      "One tablespoon fresh dill or one teaspoon dried dill",
      "One chamomile tea bag",
      "One-half cup lemon juice",
      "One tablespoon honey"
    ],
    benefits: "Nervous system support with adaptogenic stress relief. Dill contains compounds that reduce cortisol and calm anxiety. Chamomile enhances relaxation response. Elderberry supports immune function during chronic stress when immunity is compromised. Ideal for anxiety, nervous tension, stress-related digestive issues, or supporting adrenal health."
  },
  {
    number: 9,
    name: "ElderFarms Bay Leaf Joint Support",
    ingredients: [
      "Four cups water",
      "Three tablespoons Elder Farms elderberry syrup",
      "Three bay leaves",
      "One-inch fresh ginger, grated",
      "One-half teaspoon turmeric powder",
      "Pinch black pepper",
      "One tablespoon honey"
    ],
    benefits: "Anti-inflammatory support for joint health and pain relief. Bay leaves contain parthenolide which reduces inflammation in joints and muscles. Combined with turmeric and ginger creates powerful anti-arthritic formula. Black pepper enhances absorption. Elderberry provides antioxidant protection. Excellent for arthritis, joint pain, muscle soreness, or supporting mobility."
  },
  {
    number: 10,
    name: "ElderFarms Clove Pain Relief",
    ingredients: [
      "Three cups warm water",
      "Three tablespoons Elder Farms elderberry syrup",
      "Four whole cloves",
      "One cinnamon stick",
      "One-quarter teaspoon ground nutmeg",
      "One-half cup orange juice",
      "One tablespoon honey"
    ],
    benefits: "Natural pain relief with immune support. Cloves contain eugenol which acts as natural analgesic and anti-inflammatory, particularly effective for dental pain, headaches, and muscle pain. Cinnamon and nutmeg enhance pain-relieving properties. Elderberry maintains immune defense. Use for headaches, toothaches, menstrual cramps, or general pain management alongside immune support."
  }
];

export default function AdvancedRecipesPage() {
  return (
    <PageContainer>
      <BannerSection>
        <BannerImage
          src="/Supsy.PNG"
          alt="American Elderberry"
          width={1200}
          height={600}
          priority
        />
      </BannerSection>
      <HeroSection>
        <HeroContent>
          <ProductImageContainer>
            <ProductImage
              src="/Supplements2.jpg"
              alt="Elder Farms Elderberry Wellness Syrup with Hemp Extract"
              width={280}
              height={420}
              priority
            />
          </ProductImageContainer>
          <HeroText>
            <Subtitle>ElderFarms Elderberry Syrup</Subtitle>
            <PageTitle>10 Advanced Wellness Recipes</PageTitle>
            <IntroText>
              Elevate your wellness routine with these advanced formulations 
              targeting specific health goals—from sleep support to cognitive enhancement.
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
        <NavButton href="/recipes">IMMUNEACCESS Recipes</NavButton>
        <NavButton href="/recipes/advanced" $active>Advanced Recipes</NavButton>
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
