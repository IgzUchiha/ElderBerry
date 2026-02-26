'use client';

import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #f5eef5 0%, #e8d8e8 50%, #d8c8d8 100%);
  border-bottom: 2px solid #b8a0b8;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 12px rgba(74, 44, 74, 0.1);
  
  @media (min-width: 768px) {
    padding: 1rem 3rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoImage = styled(Image)`
  border-radius: 50%;
  transition: transform 0.3s ease;
  width: 45px;
  height: 45px;
  
  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
  
  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (min-width: 768px) {
    gap: 2.5rem;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #4a2c4a;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 0.4rem 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #8b6b8b, #c4a8c4);
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #3d2040;
    background: rgba(196, 168, 196, 0.2);
    
    &::after {
      width: 80%;
    }
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <LogoContainer>
        <Link href="/">
          <LogoImage
            src="/logo.png"
            alt="Immune Access - Elder Farms Supplements"
            width={70}
            height={70}
            priority
          />
        </Link>
      </LogoContainer>
      <NavLinks>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/recipes">Recipes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://leimyasco-op.com" target="_blank" rel="noopener noreferrer">Shop</NavLink>
        </NavItem>
      </NavLinks>
    </Nav>
  );
}
