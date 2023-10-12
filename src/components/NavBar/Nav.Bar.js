import styled from "styled-components";

export const NavBarWrap = styled.div`
  .NavBar {
    display: flex;
    justify-content: space-between;
    height: 4rem;
    background-color: lightgrey;

    & > h1 {
      display: flex;
      align-items: center;
      margin-left: 1rem;
    }

    & > .nav-links {
      display: flex;
      align-items: center;
      margin-right: 1rem;

      & > .nav-link {
        text-decoration: none;
        margin-right: 1rem;
        color: black;
      }
    }

    & > .selected {
      text-decoration: none;
    }
  }
`;

export default NavBarWrap;
