import styled from "styled-components";

export const PhotosPageWrap = styled.div`
  .PhotosPage {
    margin-top: 5rem;

    & > .all-photos {
      display: flex;
      justify-content: space-evenly;
      margin: 6rem 0;

      & > .photos-column {
        min-width: 20%;
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        height: fit-content;
        overflow: auto;
        background-color: white;

        & > .location-link {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: black;
          width: 100%;
          background-color: rgb(222, 222, 222);
          text-decoration: none;
          cursor: pointer;

          & > .photo {
            width: 20rem;
            height: 20rem;
            cursor: pointer;
          }

          &:hover {
            color: grey;
            transition: 200ms ease-in-out;
          }
        }
      }
    }
  }
`;

export default PhotosPageWrap;
