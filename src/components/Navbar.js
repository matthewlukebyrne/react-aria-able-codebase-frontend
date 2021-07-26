import styled from 'styled-components';

const Navbar = () => {
  return (
    <StyledNavbar data-testid='navtest-id'>
      <h1>
        <a href='a'> </a>Aria-Able
      </h1>
      <ul>
        <li>
          <a href='a'>Components</a>
        </li>
        <li>
          <a href='a'>Gallery</a>
        </li>
        <li>
          <a href='a'>Contact</a>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;

// styled components
const StyledNavbar = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
  background-color: whitesmoke;
  position: sticky;
  top: 0;
  z-index: 10; // Navbar always stays forward!

  a {
    color: #1b1b1b;
    text-decoration: none;
    font-size: 1.5rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  /* Main logo */
  /* #main_logo {
		color: white;
		font-size: 3rem;
		font-weight: lighter;
	} */
  /* List Elements */
  li {
    padding-left: 5rem;
    position: relative;
  }

  // Added Media Queries
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem;
    #main_logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem 1rem;
      justify-content: space-between;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

// Added active line
// const Line = styled(motion.div)`
// 	height: 0.2rem;
// 	background: #e74e16;
// 	width: 0%;
// 	position: relative;
// 	bottom: -10%;
// 	left: 0%;
// 	@media (max-width: 1300px) {
// 		left: 0%;
// 	}
// `;
