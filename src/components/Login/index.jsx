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

const Login = () => {
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
          <Google>
            <img src={google} alt="google img" />
            Sign with google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;
