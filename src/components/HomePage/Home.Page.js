import styled from "styled-components";

export const HomePageWrap = styled.div`
  .HomePage {
    margin-top: 5rem;

    & > .photo-link {
      position: absolute;
      top: 250px;
      left: 380px;
      text-decoration: none;
      color: white;
    }

    & > .header {
      & > .main-image {
        width: 100%;
        height: 40rem;
        object-fit: cover;
      }
    }

    & > .home {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 1rem 0.5rem;
      width: 20rem;
      color: white;
      top: 73px;
      border: 5px solid;
      padding: 1rem;
    }
  }
`;

export default HomePageWrap;
