import styled from 'styled-components';

// Styled Component
export const StyledLayout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 10rem;
  color: white;

  // Inserted some mobile media queries
  @media (max-width: 1300px) {
    display: block;
    padding: 5rem 2rem;
    text-align: center;
  }
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2; // goes to back over the styled line
  h2 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }

  // Inserted some mobile media queries
  @media (max-width: 1300px) {
    display: block;
    padding: 5rem 2rem;
    text-align: center;
  }
`;

export const StyledImage = styled.div`
  z-index: 2; // goes to back over the styled line
  flex: 1;
  overflow: hidden;
  img {
    border-radius: 5%;
    padding: 5rem;
    width: 100%;
    height: 100vh;
  }

  // Inserted some mobile media queries
  @media (max-width: 1300px) {
    display: block;
    padding: 5rem 2rem;
    text-align: center;

    img {
      width: 100%;
      height: 50vh;
      object-fit: cover;
    }
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
