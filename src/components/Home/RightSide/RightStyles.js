import styled from 'styled-components';

export const Container = styled.div`
  grid-area: rightside;
`;

export const FollowCard = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 0.1rem rgb(0 0 0 / 15%), 0 0 0 0.1rem rgba(0 0 0 / 20%);
  overflow: hidden;
  margin-bottom: 0.8rem;
  padding: 1.2rem;
  position: relative;
  text-align: center;
`;

export const Title = styled.div`
  color: rgba(0, 0, 0, 0.6);
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.6rem;
  width: 100%;
`;

export const FeedList = styled.ul`
  margin-top: 1.6rem;

  li {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    margin: 1.2rem 0;
    position: relative;

    & > div {
      display: flex;
      flex-direction: column;
    }

    button {
      background-color: transparent;
      box-shadow: inset 0 0 0 0.1rem rgba(0, 0, 0, 0.6);
      border-radius: 1.5rem;
      box-sizing: border-box;
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      max-height: 3.2rem;
      max-width: 40rem;
      outline: none;
      padding: 1.6rem;
      text-align: center;
      transition: background-color 0.1s linear 0s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.06);
      }
    }
  }
`;

export const Avatar = styled.div`
  border: 0.5rem solid rgb(160, 180, 183);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 4.8rem;
  margin-right: 0.8rem;
  width: 4.8rem;

  svg {
    color: rgba(0, 0, 0, 0.6);
    width: 60%;
    height: 60%;
  }
`;

export const Recommendation = styled.span`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 1.4rem;

  svg {
    font-size: 1.6rem;
    font-weight: 600;
    margin-left: 0.3rem;
  }
`;

export const BannerCard = styled(FollowCard)`
  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
`;
