import styled from "styled-components";

export const HomePageWrap = styled.div`
  .HomePage {
    margin-top: 4rem;

    & > .header {
      & > .main-image {
        width: 100%;
        max-height: 30rem;
        object-fit: cover;
      }
    }

    & > .home {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 1rem;
    }
  }
`;

export default HomePageWrap;
