import styled from "styled-components";

export const NavBarWrap = styled.div`
  .NavBar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    background-color: white;
    top: 0;
    width: 100%;

    & > h1 {
      display: flex;
      align-items: center;
      margin-left: 1rem;
      font-weight: 400;
      letter-spacing: 0.2rem;
    }

    & > .nav-links {
      display: flex;
      align-items: center;
      margin-right: 1rem;

      & > .nav-link {
        text-decoration: none;
        margin-right: 1rem;
        color: black;
        letter-spacing: 0.2rem;
      }

      & > .selected {
        text-decoration: none;
        margin-right: 1rem;
        color: grey;
        letter-spacing: 0.2rem;
      }
    }
  }
`;

export default NavBarWrap;
