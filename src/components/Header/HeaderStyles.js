import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding: 0 2.4rem;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1008;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 112.8rem;
  min-width: 100%;
`;

export const Logo = styled.span`
  font-size: 0;
  margin: 0.8rem;
`;

export const SearchBox = styled.div`
  flex-grow: 1;
  opacity: 1;
  position: relative;

  & > div {
    max-width: 28rem;

    input {
      background-color: #eef3f8;
      border: none;
      border-color: #dce6f1;
      border-radius: 0.2rem;
      box-shadow: none;
      color: rgba(0, 0, 0, 0.9);
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 1.75;
      height: 3.4rem;
      padding: 0 0.8rem 0 4rem;
      transition: outline 0.15s linear 0s;
      vertical-align: top;
      width: 21.8rem;

      &:focus {
        outline-color: #2977c9;
      }
    }
  }
`;

export const SearchIcon = styled.div`
  border-radius: 0 0.2rem 0.2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  pointer-events: none;
  position: absolute;
  left: 0.2rem;
  top: 1rem;
  width: 4rem;
  z-index: 1009;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media screen and (max-width: 768px) {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 400;
    min-height: 4.2rem;
    min-width: 8rem;
    position: relative;
    text-decoration: none;

    svg {
      color: rgba(0, 0, 0, 0.6);
      height: 2.4rem;
      width: 2.4rem;
    }

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      text-transform: capitalize;

      &:after {
        content: '';
        border-bottom: 2px solid #2977c9;
        position: absolute;
        bottom: -0.4rem;
        left: 0;
        transform: scale(0);
        transform-origin: left bottom;
        transition: transform 0.2s ease 0s;
        width: 100%;
      }
    }

    @media screen and (max-width: 768px) {
      min-width: 7.8rem;
    }

    &:hover,
    &.active {
      span,
      svg {
        transition: color 0.15s linear 0s;
        color: #2977c9;
      }
    }

    &.active {
      span:after {
        transform: scale(1);
        transform-origin: right bottom;
      }
    }
  }
`;

export const SignOut = styled.button`
  background-color: #fff;
  border: none;
  border-radius: 0 0 0.5rem 0.5rem;
  cursor: pointer;
  display: none;
  font-size: 1.6rem;
  height: 4rem;
  position: absolute;
  top: 4.5rem;
  transition-duration: 0.2s;
  text-align: center;
  width: 10rem;

  &:hover {
    color: #2977c9;
  }

  @media screen and (max-width: 768px) {
    top: -4.5rem;
  }
`;

export const User = styled(NavList)`
  a > img {
    border-radius: 50%;
    width: 2.4rem;
    height: 2.4rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }

  &:hover {
    ${SignOut} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
