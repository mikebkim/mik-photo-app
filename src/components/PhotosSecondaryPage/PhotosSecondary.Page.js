import styled from "styled-components";

export const PhotosSecondaryPageWrap = styled.div`
  .PhotosSecondaryPage {
    margin-top: 5rem;

    & > .all-photos-secondary {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;

      & > .photo-secondary {
        border: 5px solid black;
        width: 15rem;
        height: 15rem;
        margin: 1rem;
        cursor: pointer;
      }
    }
  }
`;

export default PhotosSecondaryPageWrap;
