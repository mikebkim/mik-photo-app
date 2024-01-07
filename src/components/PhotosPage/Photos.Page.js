import styled from "styled-components";

export const PhotosPageWrap = styled.div`
  @keyframes openphoto {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
    from {
      width: 0;
    }
    to {
      width: 20rem;
    }
  }

  @keyframes opentitle {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }

  .PhotosPage {
    margin-top: 4rem;

    & > .all-photos {
      display: flex;
      justify-content: space-evenly;
      margin: 6rem 0;
      flex-wrap: wrap;

      & > .photos-column {
        margin: 0 2rem;
        display: flex;
        flex-direction: column;
        overflow: auto;

        & > .location-link {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 1rem;
          cursor: pointer;

          & > h2 {
            position: absolute;
            color: black;
            text-shadow: -1.2px 1.2px 0 white, 1.2px 1.2px 0 white,
              1.2px -1.2px 0 white, -1.2px -1.2px 0 white;
            animation: 2s opentitle;
            z-index: 0;
          }

          & > .photo {
            width: 20rem;
            height: 20rem;
            cursor: pointer;
            animation: 2s openphoto;
          }
        }
      }
    }
  }
`;

export default PhotosPageWrap;
