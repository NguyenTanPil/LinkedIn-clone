import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: auto;
  max-width: 112.8rem;
  padding: 1.2rem 0 1.6rem;
  position: relative;
`;

export const Logo = styled(Link)`
  height: 3.4rem;
  width: 13.5rem;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 0 0.5rem;
    width: 10.5rem;
  }
`;

export const Join = styled(Link)`
  border-radius: 0.4rem;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.6rem;
  font-weight: 600;
  margin-right: 1.3rem;
  padding: 1rem 1.2rem;
  transition: all 0.2s ease 0s;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
  }
`;

export const SignIn = styled(Link)`
  background: rgba(0, 0, 0, 0);
  box-shadow: inset 0 0 0 0.1rem #0a66c2;
  border-radius: 2.4rem;
  color: #0a66c2;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 4rem;
  padding: 1rem 2.4rem;
  transition-duration: 167ms;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background-color: rgba(122, 181, 249, 0.15);
  }
`;

export const Section = styled.section`
  display: flex;
  align-content: start;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  max-width: 112.8rem;
  min-height: 70rem;
  padding-bottom: 13.8rem;
  padding-top: 4rem;
  position: relative;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin: auto;
    min-height: 0;
  }
`;

export const Hero = styled.div`
  width: 100%;

  h1 {
    color: #2977c9;
    font-size: 5.6rem;
    font-weight: 200;
    line-height: 7rem;
    padding-bottom: 0;
    width: 55%;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
      line-height: 4rem;
      text-align: center;
      width: 100%;
    }
  }

  img {
    height: 67rem;
    position: absolute;
    bottom: -0.2rem;
    right: -15rem;
    width: 70rem;
    z-index: -1;

    @media screen and (max-width: 768px) {
      height: auto;
      margin-bottom: 3rem;
      margin-top: 3rem;
      position: initial;
      top: 23rem;
      width: 100%;
    }
  }
`;

export const Form = styled.div`
  margin-top: 10rem;
  width: 40rem;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const Google = styled.button`
  background-color: #fff;
  border-radius: 2.8rem;
  box-shadow: inset 0 0 0 0.1rem rgb(0 0 0 / 60%),
    inset 0 0 0 0.2rem rgb(0 0 0 / 0%), inset 0 0 0 0.1rem rgb(0 0 0 / 0%);
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  height: 5.6rem;
  transition-duration: 167ms;
  vertical-align: middle;
  width: 100%;
  z-index: 0;

  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
  }
`;
