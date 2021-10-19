import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  animation: ${fadeIn} 0.3s ease-out;
  background-color: rgba(0, 0, 0, 0.8);
  color: #000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99999;
`;

export const Content = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-height: 90%;
  max-width: 52.5rem;
  overflow: initial;
  position: relative;
  top: 3.2rem;
  width: 100%;
`;

export const Header = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.6);
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 1.6rem 2rem;

  button {
    color: rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    height: 4rem;
    min-width: auto;
    width: 4rem;

    svg {
      font-size: 2.5rem;
      margin: auto;
      pointer-events: none;
    }
  }
`;

export const ShareContent = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  padding: 0.8rem 1.2rem;
  vertical-align: baseline;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 2.4rem;

  svg,
  img {
    background-clip: content-box;
    border: 0.2rem solid transparent;
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
  }

  span {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5;
    margin-left: 0.5rem;
  }
`;

export const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 2.4rem 1.2rem 1.6rem;
`;

export const AssetButton = styled.button`
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  min-width: auto;
`;

export const AttachAssets = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.8rem;

  ${AssetButton} {
    width: 4rem;
  }
`;

export const ShareComment = styled.div`
  border-left: 0.1rem solid rgba(0, 0, 0, 0.15);
  margin-right: auto;
  padding-left: 0.8rem;

  ${AssetButton} {
    width: 10rem;
    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const PostButton = styled.button`
  background-color: ${(props) =>
    props.disabled ? 'rgba(0, 0, 0, 1)' : '#2977c9'};
  border: none;
  border-radius: 2rem;
  color: ${(props) => (props.disabled ? 'rgba(0, 0, 0, 1)' : '#fff')};
  min-width: 6rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  transition: background-color 0.15s linear 0s;
  text-transform: capitalize;

  &:hover {
    background-color: ${(props) =>
      props.disabled ? 'rgba(0, 0, 0, 1)' : '#0a66c2'};
  }
`;

export const Editor = styled.div`
  padding: 1.2rem 2.4rem;

  textarea {
    padding: 1rem;
    min-height: 10rem;
    outline-color: transparent;
    resize: none;
    width: 100%;

    &:focus {
      outline-color: #2977c9;
    }
  }

  input {
    font-size: 1.6rem;
    height: 3.5rem;
    margin-bottom: 2rem;
    padding-left: 1rem;
    transition: outline 0.1s ease 0s;
    width: 100%;

    &:focus {
      outline-color: #2977c9;
    }
  }
`;

export const UploadImg = styled.div`
  font-size: 1.6rem;
  text-align: center;
  padding-top: 1rem;

  &:first-letter {
    text-transform: uppercase;
  }

  p {
    padding: 0.5rem 0;
  }

  label {
    background-color: #2977c9;
    border-radius: 2rem;
    color: #fff;
    cursor: pointer;
    margin-top: 0.5rem;
    padding: 0.8rem 1.4rem;
    transition: opacity 0.2s linear 0s;

    &:hover {
      opacity: 0.9;
    }
  }

  img {
    width: 100%;
  }
`;
