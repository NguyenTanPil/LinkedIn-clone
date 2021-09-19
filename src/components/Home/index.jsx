import React from 'react';
import { Container, Layout, Section } from './HomeStyles';
import LeftSide from './LeftSide';
import Main from './MainSide';
import RightSide from './RightSide';

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <a href="#">Hiring in a hurry - </a>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business
          moving.
        </p>
      </Section>
      <Layout>
        <LeftSide />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
};

export default Home;
