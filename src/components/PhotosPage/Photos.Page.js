import styled from "styled-components";

export const PhotosPageWrap = styled.div`
  .PhotosPage {
    margin-top: 5rem;

    & > .all-photos {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 100%;

      & > .photo {
        margin: 1rem;
        max-width: 20%;
        object-fit: cover;
        cursor: pointer;
        height: min-content;
      }
    }
  }
`;

export default PhotosPageWrap;
