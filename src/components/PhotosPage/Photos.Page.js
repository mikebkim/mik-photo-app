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
        border: 5px solid black;
        width: 15rem;
        height: 15rem;
        margin: 1rem;
      }
    }
  }
`;

export default PhotosPageWrap;
