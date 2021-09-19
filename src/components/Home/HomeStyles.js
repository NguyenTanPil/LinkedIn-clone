import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 3rem;
  padding-top: 5.2rem;
`;

export const Content = styled.div`
  max-width: 112.8rem;
  margin-left: auto;
  margin-right: auto;
`;

export const Section = styled.div`
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  min-height: 5rem;
  padding: 1.6rem 0;
  text-align: center;
  text-decoration: underline;

  h5 {
    color: #0a66c2;
    font-size: 1.4rem;

    a {
      color: #2977c9;
      font-weight: 600;
    }
  }

  p {
    color: #436469;
    font-size: 1.4rem;
    font-weight: 600;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 0.5rem;
    padding-top: 1rem;
  }
`;

export const Layout = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-areas: 'leftside main rightside';
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(30rem, 7fr);
  grid-template-rows: auto;
  margin: 2.5rem 0;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
