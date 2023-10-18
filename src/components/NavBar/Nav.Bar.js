import styled from "styled-components";

export const NavBarWrap = styled.div`
  .NavBar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    background-color: rgb(238, 238, 238);
    top: 0;
    width: 100%;
    z-index: 2;

    & > h1 {
      display: flex;
      align-items: center;
      margin-left: 1rem;
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

        & > .photos-dropdown {
          position: absolute;
          width: 10rem;
          background-color: rgb(200, 200, 200);

          & > .dropdown-items {
            color: grey;
            
            & > .dropdown-item {
              margin: 0.5rem;

              &:hover {
                color: black;
              }
            }
          }
        }
      }

      & > .selected {
        text-decoration: none;
        margin-right: 1rem;
        color: grey;
        letter-spacing: 0.2rem;

        & > .photos-dropdown {
          position: absolute;
          width: 10rem;
          background-color: rgb(200, 200, 200);

          & > .dropdown-items {
            & > .dropdown-item {
              margin: 0.5rem;

              &:hover {
                color: black;
              }
            }
          }
        }
      }
    }
  }
`;

export default NavBarWrap;
