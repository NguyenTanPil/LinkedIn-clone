import styled from 'styled-components';

export const Container = styled.div`
  grid-area: main;

  svg {
    font-size: 1.8rem;
  }
`;

export const CommonCard = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 0.1rem rgb(0 0 0 / 15%), 0 0 0 0.1rem rgba(0 0 0 / 20%);
  overflow: hidden;
  margin-bottom: 0.8rem;
  position: relative;
  text-align: center;
`;

export const ShareBox = styled(CommonCard)`
  color: #958b7b;
  display: flex;
  flex-direction: column;
  margin: 0 0 0.8rem;

  div {
    button {
      background-color: transparent;
      border: none;
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      font-weight: 600;
      outline: none;
      line-height: 1.5;
      min-height: 4.8rem;

      svg {
        font-size: 2rem;
      }
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 1.6rem 1.6rem 0 1.6rem;

      img {
        border-radius: 50%;
        margin-right: 0.8rem;
        width: 4.8rem;
      }

      button {
        background-color: #fff;
        border: 0.1rem solid rgba(0, 0, 0, 0.15);
        border-radius: 3.5rem;
        flex-grow: 1;
        margin: 0.4rem 0;
        padding-left: 1.6rem;
        text-align: center;
      }
    }

    &:last-child {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 0 1.6rem 0.4rem;

      button {
        svg {
          margin: 0 0.4rem 0 -0.2rem;
        }

        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

export const Article = styled(CommonCard)`
  margin: 0 0 0.8rem;
  overflow: visible;
  padding: 0;
`;

export const ShareActor = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 0.8rem;
  padding: 1.2rem 1.6rem 0;
  position: relative;

  & > span {
    display: flex;
    flex-grow: 1;
    margin-right: 1.2rem;
    overflow: hidden;

    img {
      height: 4rem;
      object-fit: cover;
      width: 4rem;
    }

    & > div {
      display: flex;
      flex-basis: 0;
      flex-direction: column;
      flex-grow: 1;
      margin-left: 0.8rem;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          color: rgba(0, 0, 0, 1);
          font-size: 1.4rem;
          font-weight: 700;
        }

        &:nth-child(n + 1) {
          color: rgba(0, 0, 0, 0.6);
          font-size: 1.2rem;
        }
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    position: absolute;
    right: 2rem;
    top: 0.8rem;
  }

  svg {
    font-size: 1.8rem;
  }
`;

export const Description = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 1.4rem;
  overflow: hidden;
  padding: 0 1.6rem;
  text-align: left;
`;

export const ShareImg = styled.div`
  background-color: #f9fafb;
  display: block;
  margin-top: 0.8rem;
  position: relative;
  width: 100%;

  img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;

export const SocialCount = styled.ul`
  border-bottom: 0.1rem solid #e9e5df;
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 1.6rem;
  overflow: auto;
  padding: 0.8rem 0;

  li {
    font-size: 1.2rem;
    margin-right: 0.5rem;

    button {
      background-color: transparent;
      border: none;
      color: #2977c9;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      padding: 0.8rem;
      span {
        margin-left: 0.6rem;
      }

      svg:nth-child(2) {
        color: red;
      }
    }
  }
`;

export const SocialAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 4rem;
  padding: 0 1rem;

  button {
    background-color: transparent;
    border: none;
    border-radius: 0.5rem;
    color: #2977c9;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: 0.8rem;
    transition: all 0.2s linear 0s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    }

    @media screen and (max-width: 768px) {
      span {
        margin-left: 0.6rem;
      }
    }
  }

  svg {
    font-weight: 600;
  }
`;
