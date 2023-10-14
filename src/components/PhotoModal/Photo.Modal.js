import styled from "styled-components";

export const PhotoModalWrap = styled.div`
  .PhotoModal {
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    height: 100%;
    width: 100%;
    top: 80px;
    bottom: 0;
    left: 0;

    & > .photo-modal {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
      margin: 0 auto;

      & > .photo-pop {
        border: 5px solid black;
        margin: -6rem 0 2rem 0;
        z-index: 1;
        max-width: 30rem;
        max-height: 30rem;
        min-width: 30rem;
        min-height: 30rem;
      }

      /* & > .photo-comments {
        position: absolute;
        z-index: 1;
        background-color: white;
        min-width: 10rem;
        max-width: 10rem;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      } */

      & > .close-modal {
        position: absolute;
        display: flex;
        margin: 0.5rem 0.5rem 0 0;
        justify-content: flex-end;
        color: red;
        font-size: 1.2rem;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 0;

        & > .close-icon {
          cursor: pointer;
        }
      }
    }
  }
`;

export default PhotoModalWrap;
