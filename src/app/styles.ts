import styled from 'styled-components';

interface GridProps {
  gap?: string;
  columns?: string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.gap || '2rem'};

  @media (min-width: 768px) {
    grid-template-columns: ${props => props.columns || 'repeat(2, 1fr)'};
  }
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-left: 1rem;
  padding-right: 1rem;

  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

interface SectionProps {
  dark?: boolean;
}

export const Section = styled.section<SectionProps>`
  padding: 5rem 0;
  background-color: ${props => props.dark ? 'var(--background)' : 'white'};
  color: var(--foreground);
`;

export const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;

  &.primary {
    background-color: var(--primary);
    color: white;
    &:hover {
      opacity: 0.9;
    }
  }

  &.secondary {
    background-color: var(--secondary);
    color: white;
    &:hover {
      opacity: 0.9;
    }
  }

  &.outline {
    border: 2px solid white;
    color: white;
    &:hover {
      background-color: white;
      color: var(--primary);
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  font-size: 2.25rem;
  font-weight: bold;
  color: var(--primary);

  span {
    display: block;
    color: var(--secondary);
  }
`;

export const Text = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  color: var(--foreground);
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 400px;
  
  img {
    border-radius: var(--radius);
    object-fit: cover;
  }
`;

export const FoodGrid = styled(Grid)`
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FoodCard = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
  border-radius: var(--radius);
  cursor: pointer;

  img {
    transition: transform 0.3s;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    .overlay {
      opacity: 1;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
  }
`;
