'use client';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Nav = styled.nav`
  background-color: transparent;
  padding: 1.5rem 2rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
`;

const Container = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: block;
`;

const MenuList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  position: relative;
`;

const MenuLink = styled.button`
  color: white;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:after {
    content: '';
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const MenuNavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem;
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

const SignInButton = styled.button`
  color: white;
  background: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  cursor: pointer;
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

const LanguageButton = styled.button`
  color: white;
  background: none;
  border: none;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:after {
    content: '';
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
    background-size: contain;
    background-repeat: no-repeat;
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
            src="/images/Group 2146.png"
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
          <SignInButton>Sign In</SignInButton>
          <BookNowButton href="/book">Book Now</BookNowButton>
          <LanguageButton>
            EN
          </LanguageButton>
        </RightSection>
      </Container>
    </Nav>
  );
}
