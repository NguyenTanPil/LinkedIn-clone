import { signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { AiFillCaretDown, AiFillHome } from 'react-icons/ai';
import { BsBagFill, BsPeopleCircle, BsPeopleFill } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';
import { FaBell } from 'react-icons/fa';
import { RiMessage2Fill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import {
  setSignOutState,
  selectUser,
  setUserLoginDetial,
} from '../../features/user/userSlice';
import { auth } from '../../firebase';
import logoHome from '../../images/home-logo.svg';
import searchIcon from '../../images/search-icon.svg';
import {
  Container,
  Content,
  Logo,
  Nav,
  NavList,
  NavListWrap,
  SearchBox,
  SearchIcon,
  SignOut,
  User,
  Work,
} from './HeaderStyles';
import { onAuthStateChanged } from 'firebase/auth';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        dispatch(setSignOutState());
        history.push('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    // If logined => current url is /home and setUser

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(
          setUserLoginDetial({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          }),
        );
        history.push('/home');
      }
    });
  }, [history, dispatch]);

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
                {user ? <img src={user.photo} alt="" /> : <BsPeopleCircle />}
                <span>
                  Me
                  <AiFillCaretDown />
                </span>
              </NavLink>

              <SignOut onClick={signOutUser}>Sign Out</SignOut>
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
