import React from 'react';
import { Container, Layout, Section } from './HomeStyles';
import LeftSide from './LeftSide';
import Main from './MainSide';
import RightSide from './RightSide';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import { Redirect } from 'react-router';

const Home = () => {
  const user = useSelector(selectUser);
  return (
    <Container>
      {!user && <Redirect to="/" />}
      <Section>
        <h5>
          <a href="/">Hiring in a hurry - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSide userName={user.name} />
        <Main user={user} />
        <RightSide />
      </Layout>
    </Container>
  );
};

export default Home;
