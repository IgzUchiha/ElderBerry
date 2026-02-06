'use client';

import styled from 'styled-components';

const ShopSection = styled.section`
  min-height: calc(100vh - 90px);
  padding: 5rem 2rem;
  background: 
    radial-gradient(ellipse at 30% 80%, rgba(196, 168, 196, 0.12) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 30%, rgba(139, 107, 139, 0.1) 0%, transparent 50%),
    linear-gradient(180deg, #f5eef5 0%, #faf8fa 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: #3d2040;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #5a3a5a;
  max-width: 550px;
  margin: 0 auto;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const ProductCard = styled.div`
  background: linear-gradient(145deg, #ffffff 0%, #faf8fa 100%);
  border-radius: 24px;
  border: 1px solid rgba(196, 168, 196, 0.2);
  overflow: hidden;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(74, 44, 74, 0.12);
    border-color: rgba(196, 168, 196, 0.4);
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  height: 220px;
  background: linear-gradient(135deg, #e8d8e8 0%, #d8c8d8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ProductEmoji = styled.span`
  font-size: 5rem;
  filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
`;

const ProductBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #8b6b8b 0%, #a888a8 100%);
  color: #faf8fa;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
`;

const ProductInfo = styled.div`
  padding: 2rem;
`;

const ProductName = styled.h3`
  font-size: 1.5rem;
  color: #3d2040;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  color: #5a3a5a;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductPrice = styled.span`
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #4a2c4a;
`;

const AddToCartButton = styled.button`
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #4a2c4a 0%, #5a3a5a 100%);
  color: #faf8fa;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(74, 44, 74, 0.3);
  }
`;

const products = [
  {
    id: 1,
    name: 'Elderberry Immune Syrup',
    description: 'Fresh-pressed elderberry with aronia. Antioxidant-rich immune support, never dried. Our signature 8oz bottle.',
    price: '$34.99',
    emoji: '🫐',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Elderberry + Echinacea',
    description: 'Traditional immune support formula combining American elderberry with organic echinacea root.',
    price: '$38.99',
    emoji: '🌸',
    badge: 'Organic',
  },
  {
    id: 3,
    name: 'Kids Elderberry Syrup',
    description: 'Gentle formula specially crafted for children. Natural honey-sweetened with the same immune benefits.',
    price: '$29.99',
    emoji: '🧒',
    badge: 'Family Favorite',
  },
  {
    id: 4,
    name: 'Elderflower Tonic',
    description: 'Traditional elderflower preparation for calming support. Light, floral, and refreshing.',
    price: '$24.99',
    emoji: '🌼',
    badge: null,
  },
  {
    id: 5,
    name: 'Elderberry Gummies',
    description: 'Convenient daily immune support in a delicious gummy. Made with real elderberry concentrate.',
    price: '$26.99',
    emoji: '🍬',
    badge: 'New',
  },
  {
    id: 6,
    name: 'Elderberry Wellness Bundle',
    description: 'Complete family wellness pack with syrup, gummies, and elderflower tea for comprehensive support.',
    price: '$79.99',
    emoji: '🎁',
    badge: 'Value Pack',
  },
];

export default function Shop() {
  return (
    <ShopSection>
      <Container>
        <Header>
          <Title>Our Products</Title>
          <Subtitle>
            American-grown elderberry, fresh-pressed and crafted with care. 
            Products worth honest reviews.
          </Subtitle>
        </Header>
        
        <ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductImageContainer>
                <ProductEmoji>{product.emoji}</ProductEmoji>
                {product.badge && <ProductBadge>{product.badge}</ProductBadge>}
              </ProductImageContainer>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                <ProductFooter>
                  <ProductPrice>{product.price}</ProductPrice>
                  <AddToCartButton>Add to Cart</AddToCartButton>
                </ProductFooter>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </Container>
    </ShopSection>
  );
}
