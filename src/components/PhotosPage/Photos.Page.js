import styled from "styled-components";

export const PhotosPageWrap = styled.div`
  @keyframes slidein {
    from {
      width: 0;
    }

    to {
      width: 20rem;
    }
  }

  .PhotosPage {
    margin-top: 4rem;

    & > .all-photos {
      display: flex;
      justify-content: space-evenly;
      margin: 6rem 0;

      & > .photos-column {
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        overflow: auto;

        & > .location-link {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          & > h2 {
            position: absolute;
            color: black;
            text-shadow: -1.2px 1.2px 0 white, 1.2px 1.2px 0 white,
              1.2px -1.2px 0 white, -1.2px -1.2px 0 white;
          }

          & > .photo {
            width: 20rem;
            height: 20rem;
            cursor: pointer;
            animation: 2s slidein;
          }
        }
      }
    }
  }
`;

export default PhotosPageWrap;
