import styled from "styled-components";

export const HomePageWrap = styled.div`
  .HomePage {
    min-height: 100vh;
    margin-top: 5rem;

    & > .photo-link {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-decoration: none;
      color: white;
      font-size: 4rem;
      font-weight: bolder;
    }

    & > .header {
      & > .main-image {
        position: relative;
        width: 100%;
        height: 100vh; /* Adjust as needed */
      }
    }

    & > .home {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0rem 1rem;
      color: black;
      padding: 1rem;
    }
  }
`;

export default HomePageWrap;
