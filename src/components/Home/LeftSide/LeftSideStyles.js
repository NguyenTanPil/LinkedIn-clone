import styled from 'styled-components';
import { NavLink as CustomLink } from 'react-router-dom';

import cardBg from '../../../images/card-bg.svg';
import photo from '../../../images/photo.svg';

export const Container = styled.div`
  grid-area: 'leftside';
`;

export const ArtCard = styled.div`
  background-color: #fff;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 0 0 0.1rem rgb(0 0 0 / 15%), 0 0 0 0.1rem rgb(0 0 0 / 20%);
  margin-bottom: 0.8rem;
  overflow: hidden;
  position: relative;
  text-align: center;
  transition: box-shadow 83ms;
`;

export const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  padding: 1.2rem 1.2rem 1.6rem;
  word-break: break-word;
  word-wrap: break-word;
`;

export const CardBackground = styled.div`
  background-image: url(${cardBg});
  background-size: 46.2rem;
  /* background-repeat: no-repeat; */
  background-position: center;
  height: 5.4rem;
  margin: -1.2rem -1.2rem 0;
`;

export const Photo = styled.div`
  background-image: url(${photo});
  background-clip: content-box;
  background-color: #fff;
  background-position: center center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 0.2rem solid #fff;
  border-radius: 50%;
  box-shadow: none;
  margin: -3.8rem auto 1.2rem;
  height: 7.2rem;
  width: 7.2rem;
`;

export const Link = styled.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.5;
`;

export const AddPhotoText = styled.div`
  color: #0a66c2;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.33;
  margin-top: 0.4rem;
  transition: opacity 0.2s linear 0s;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavLink = styled(CustomLink)`
  text-decoration: none;
`;

export const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  & > a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.2rem;
    transition: background-color 0.2s linear 0s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: left;

    span {
      font-size: 1.2rem;
      line-height: 1.33;

      &:first-child {
        color: rgba(0, 0, 0, 0.6);
      }

      &:last-child {
        color: rgba(0, 0, 0, 1);
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
    font-size: 1.6rem;
  }
`;

export const Item = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: block;
  padding: 1.2rem;
  text-align: left;
  transition: background-color 0.2s linear 0s;

  span {
    color: rgba(0, 0, 0, 1);
    display: flex;
    align-items: center;
    font-weight: 500;

    svg {
      color: rgba(0, 0, 0, 0.6);
      margin-right: 0.2rem;
    }
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const ComunityCard = styled(ArtCard)`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 0 0;
  text-align: left;

  a {
    color: #000;
    font-size: 1.2rem;
    padding: 0.4rem 1.2rem;
    transition: color 0.2s linear 0s;

    &:hover {
      color: #0a66c2;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;

      svg {
        font-size: 1.8rem;
        font-weight: 600;
      }
    }

    &:last-child {
      border-top: 0.1rem solid #d6cec2;
      color: rgba(0, 0, 0, 0.6);
      padding: 1.2rem;
      transition: background-color 0.1s linear 0s;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;
