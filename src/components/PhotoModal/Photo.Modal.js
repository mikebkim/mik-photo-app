import styled from "styled-components";

export const PhotoModalWrap = styled.div`
  .PhotoModal {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    & > .close-modal {
      position: absolute;
      display: flex;
      margin: 4rem 0.5rem 0 0;
      justify-content: flex-end;
      color: red;
      font-weight: 500;
      font-size: 1.5rem;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    & > .photo-modal {
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;
      margin: 0 auto;

      & > .photo {
        border: 5px solid black;
        margin: 5rem;
      }
    }
  }
`;

export default PhotoModalWrap;
