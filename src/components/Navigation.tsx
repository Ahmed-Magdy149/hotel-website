'use client';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Nav = styled.nav`
  background-color: rgba(35, 54, 89, 0.95);
  padding: 1rem 2rem;
  width: 100%;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 50;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

const MenuList = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const MenuItem = styled.div`
  position: relative;
`;

const MenuLink = styled.button`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;

  &:after {
    content: '▼';
    font-size: 0.7rem;
    margin-top: 2px;
  }

  &:hover {
    color: #c8a97e;
  }
`;

const MenuNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 0;
  display: inline-block;

  &:hover {
    color: #c8a97e;
  }
`;

const Dropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  min-width: 500px;
  padding: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 1000;
`;

const DropdownSection = styled.div`
  padding: 0.8rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 0.5rem;
  }
`;

const DropdownTitle = styled.div`
  color: #233659;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const DropdownLink = styled(Link)`
  color: #233659;
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.8rem 1.5rem;
  display: block;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
    color: #c8a97e;
    padding-left: 2rem;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const LanguageSelector = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;

  &:hover {
    color: #c8a97e;
  }
`;

const SignInButton = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    color: #c8a97e;
    border-color: #c8a97e;
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
            width={120}
            height={40}
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
          <LanguageSelector>
            EN
          </LanguageSelector>
        </RightSection>
      </Container>
    </Nav>
  );
}
