import {
  Container,
  Nav,
  Logo,
  Join,
  SignIn,
  Section,
  Hero,
  Form,
  Google,
} from './LoginStyles';
import logo from '../../images/login-logo.svg';
import heroLogo from '../../images/login-hero.svg';
import google from '../../images/google.svg';

import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import {
  selectUser,
  setUserLoginDetial,
  setSignOutState,
} from '../../features/user/userSlice';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name: userName } = useSelector(selectUser);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          history.push('/');
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  const setUser = useCallback(
    (user) => {
      dispatch(
        setUserLoginDetial({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    // If logined => current url is /home and setUser
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        history.push('/home');
      }
    });
  }, [userName, history, setUser]);

  return (
    <Container>
      <Nav>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        <div>
          <Join to="/">Join Now</Join>
          <SignIn to="/">Sign In</SignIn>
        </div>
      </Nav>

      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src={heroLogo} alt="hero logo" />
        </Hero>
        <Form>
          <Google onClick={handleAuth}>
            <img src={google} alt="google img" />
            Sign with googles
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
