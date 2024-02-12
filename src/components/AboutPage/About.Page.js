import styled from "styled-components";

export const AboutPageWrap = styled.div`
  .AboutPage {
    margin-top: 5rem;

    & > .main-image {
      position: relative;
      width: 100%;
      height: 100vh;
    }

    & > .about {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-decoration: none;
      color: white;
      font-size: 1rem;
    }
  }
`;

export default AboutPageWrap;
