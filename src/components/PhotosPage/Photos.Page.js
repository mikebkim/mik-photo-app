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
    margin-top: 5rem;

    & > .all-photos {
      display: flex;
      justify-content: center;
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
          transition: 350ms ease-in-out;

          & > h2 {
            position: absolute;
            color: white;
            animation: 2s opentitle;
            z-index: 1;
            font-size: 2rem;
          }

          & > .photo {
            width: 20rem;
            height: 20rem;
            cursor: pointer;
            z-index: 0;
            animation: 2s openphoto;
          }

          &:hover {
            text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
            transition: 350ms ease-in-out;
          }
        }
      }
    }
  }
`;

export default PhotosPageWrap;
