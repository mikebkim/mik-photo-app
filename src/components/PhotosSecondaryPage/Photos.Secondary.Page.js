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
        /* border: 2px solid black; */
        margin: 1rem;
        max-width: 20%;
        object-fit: cover;
        cursor: pointer;
        height: min-content;
      }
    }
  }
`;

export default PhotosSecondaryPageWrap;
