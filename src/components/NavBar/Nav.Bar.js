import styled from "styled-components";

export const NavBarWrap = styled.div`
  .NavBar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    background-color: rgb(222, 222, 222);
    top: 0;
    width: 100%;
    height: 5rem;
    z-index: 0;

    & > h1 {
      display: flex;
      align-items: center;
      margin: 1rem;
      letter-spacing: 0.2rem;
    }

    & > .nav-links {
      display: flex;
      align-items: center;
      margin-right: 1rem;

      & > .dropdown-arrow-right {
        margin-right: 1rem;
        margin-left: -1rem;
        cursor: pointer;
      }

      & > .dropdown-arrow-down {
        margin-right: 1rem;
        margin-left: -1rem;
        width: 8px;
        cursor: pointer;
      }

      & > .photos-dropdown {
        position: absolute;
        top: 50px;
        right: 80px;
        width: 10rem;
        background-color: rgb(200, 200, 200);
        z-index: 2;

        & > .dropdown-items {
          display: flex;
          flex-direction: column;

          & > .dropdown-item {
            margin: 0.5rem;
            width: 10rem;
            color: grey;
            text-decoration: none;

            &:hover {
              color: black;
            }
          }
        }
      }

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

        & > .dropdown-arrow-right {
          margin-right: 1rem;
          margin-left: -1rem;
          cursor: pointer;
        }

        & > .dropdown-arrow-down {
          margin-right: 1rem;
          margin-left: -1rem;
          width: 8px;
          cursor: pointer;
        }
      }
    }
  }
`;

export default NavBarWrap;
