'use client';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Nav = styled.nav`
  background-color: rgba(255, 255, 255, 0.95);
  padding: 1rem 2rem;
  width: 100%;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }
`;

const MenuList = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const MenuItem = styled.div`
  position: relative;
`;

const MenuLink = styled.button`
  color: #333333;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &:hover {
    color: #B4916C;
  }
`;

const MenuNavLink = styled(Link)`
  color: #333333;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.5rem;
  display: flex;
  align-items: center;

  &:hover {
    color: #B4916C;
  }
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  gap: 2rem;
  min-width: 400px;
  margin-top: 0.5rem;
`;

const DropdownSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DropdownTitle = styled.h3`
  color: #B4916C;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DropdownLink = styled(Link)`
  color: #333333;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.25rem 0;

  &:hover {
    color: #B4916C;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SignInButton = styled(Link)`
  color: #333333;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;

  &:hover {
    color: #B4916C;
  }
`;

const BookNowButton = styled(Link)`
  background-color: #B4916C;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #9A7B5F;
  }
`;

const LanguageSelector = styled.button`
  color: #333333;
  background: none;
  border: none;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    color: #B4916C;
  }
`;

export default function Navigation() {
  const [isHotelsOpen, setIsHotelsOpen] = useState(false);

  const toggleHotelsMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsHotelsOpen(!isHotelsOpen);
  };

  const handleClick = () => {
    if (isHotelsOpen) {
      setIsHotelsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [isHotelsOpen]);

  return (
    <Nav>
      <Container>
        <Logo href="/">
          <Image
            src="/prime-hotels-logo.png"
            alt="Prime Hotels Logo"
            width={140}
            height={45}
            priority
          />
        </Logo>

        <MenuList>
          <MenuItem className="hotels-menu" style={{ position: 'static' }}>
            <MenuLink onClick={toggleHotelsMenu}>Hotels & Resorts</MenuLink>
            <Dropdown isOpen={isHotelsOpen} onClick={(e) => e.stopPropagation()}>
              <DropdownSection>
                <DropdownTitle>Kingdom of Saudi Arabia</DropdownTitle>
                <DropdownLink href="/hotels/grand-prime">Grand Prime</DropdownLink>
                <DropdownLink href="/hotels/prime-al-mina">PRIME Al Mina</DropdownLink>
                <DropdownLink href="/hotels/prime-corniche">Prime Corniche</DropdownLink>
                <DropdownLink href="/hotels/prime-al-hamra">PRIME Al Hamra</DropdownLink>
              </DropdownSection>
              <DropdownSection>
                <DropdownTitle>EGYPT</DropdownTitle>
                <DropdownLink href="/hotels/prime-el-alamein">Prime Residence El Alamein</DropdownLink>
                <DropdownLink href="/hotels/prime-new-cairo">Prime Residence New Cairo</DropdownLink>
              </DropdownSection>
            </Dropdown>
          </MenuItem>
          <MenuItem>
            <MenuNavLink href="/residences">Residences</MenuNavLink>
          </MenuItem>
          <MenuItem>
            <MenuNavLink href="/dining">Dining</MenuNavLink>
          </MenuItem>
          <MenuItem>
            <MenuNavLink href="/ramadan">Ramadan</MenuNavLink>
          </MenuItem>
          <MenuItem>
            <MenuNavLink href="/wellness">Wellness</MenuNavLink>
          </MenuItem>
          <MenuItem>
            <MenuNavLink href="/events">Events</MenuNavLink>
          </MenuItem>
          <MenuItem>
            <MenuNavLink href="/loyalty">Loyalty program</MenuNavLink>
          </MenuItem>
        </MenuList>

        <RightSection>
          <SignInButton href="/sign-in">Sign In</SignInButton>
          <BookNowButton href="/book">Book Now</BookNowButton>
          <LanguageSelector>
            EN
          </LanguageSelector>
        </RightSection>
      </Container>
    </Nav>
  );
}
