import styled from "styled-components";

export const PhotoModalWrap = styled.div`
  .PhotoModal {
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    top: 64px;
    bottom: 0;
    left: 0;

    & > .photo-modal {
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;
      margin: 0 auto;

      & > .photo-pop {
        border: 5px solid black;
        margin: 2rem 0 6rem 0;
      }
    }
  }
`;

export default PhotoModalWrap;
