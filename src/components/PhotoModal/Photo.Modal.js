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

    & > .photo-modal {
      display: flex;
      justify-content: center;
      height: 100%;
      width: 100%;

      & > .photo {
      }
    }
  }
`;

export default PhotoModalWrap;
