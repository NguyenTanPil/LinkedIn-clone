import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { BsBagFill } from 'react-icons/bs';
import { BsPeopleCircle } from 'react-icons/bs';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaBell } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';

import {
  Container,
  Content,
  Logo,
  SearchBox,
  SearchIcon,
  Nav,
  NavListWrap,
  NavList,
  User,
  Work,
  SignOut,
} from './HeaderStyles';
import logoHome from '../../images/home-logo.svg';
import searchIcon from '../../images/search-icon.svg';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <NavLink to="/home">
            <img src={logoHome} alt="home logo" />
          </NavLink>
        </Logo>
        <SearchBox>
          <div>
            <input type="text" placeholder="Search..." />
          </div>
          <SearchIcon>
            <img src={searchIcon} alt="search icon" />
          </SearchIcon>
        </SearchBox>

        <Nav>
          <NavListWrap>
            <NavList>
              <NavLink to="/home">
                <AiFillHome />
                <span>Home</span>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink to="/b">
                <BsPeopleFill />
                <span>My Network</span>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink to="/c">
                <BsBagFill />
                <span>Jobs</span>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink to="/d">
                <RiMessage2Fill />
                <span>Mesaging</span>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink to="/e">
                <FaBell />
                <span>Notifications</span>
              </NavLink>
            </NavList>
            <User>
              <NavLink to="/f">
                <BsPeopleCircle />
                <span>
                  Me
                  <AiFillCaretDown />
                </span>
              </NavLink>

              <SignOut>Sign Out</SignOut>
            </User>
            <Work>
              <NavLink to="/g">
                <CgMenuGridO />
                <span>
                  work
                  <AiFillCaretDown />
                </span>
              </NavLink>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
