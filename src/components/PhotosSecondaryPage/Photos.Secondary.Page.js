import styled from "styled-components";

export const PhotosSecondaryPageWrap = styled.div`
  .PhotosSecondaryPage {
    margin-top: 5rem;

    & > .all-photos-secondary {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;

      & > .photo-secondary {
        margin: 2rem;
        max-width: 20%;
        height: min-content;
        object-fit: cover;
        cursor: pointer;
      }
    }
  }
`;

export default PhotosSecondaryPageWrap;
