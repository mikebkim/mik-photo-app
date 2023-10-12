import styled from "styled-components";

export const PhotosPageWrap = styled.div`
  .PhotosPage {
    margin-top: 5rem;

    & > .all-photos {
      display: flex;
      width: 10rem;
      margin: 1rem;

      & > .photo {
        border: 5px solid black;
      }
    }
  }
`;

export default PhotosPageWrap;
