import styled from "styled-components";

export const PhotosPageWrap = styled.div`
  .PhotosPage {
    & > .all-photos {
      display: flex;
      margin: 1rem;

      & > .photo {
        border: 5px solid black;
      }
    }
  }
`;

export default PhotosPageWrap;
