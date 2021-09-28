import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setUserLoginDetial } from '../../features/user/userSlice';
import { auth, provider } from '../../firebase';
import google from '../../images/google.svg';
import heroLogo from '../../images/login-hero.svg';
import logo from '../../images/login-logo.svg';
import {
  Container,
  Form,
  Google,
  Hero,
  Join,
  Logo,
  Nav,
  Section,
  SignIn,
} from './LoginStyles';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
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
  }, [history, setUser]);

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
