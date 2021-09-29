import React, { useState } from 'react';
import {
  AssetButton,
  AttachAssets,
  Container,
  Content,
  Editor,
  Header,
  PostButton,
  ShareComment,
  ShareContent,
  ShareCreation,
  UserInfo,
} from './PostStyles';
import { AiOutlineClose, AiOutlineMessage } from 'react-icons/ai';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { IoLogoYoutube } from 'react-icons/io';

const Post = ({ showPost, handleShowPost }) => {
  const [editorText, setEditorText] = useState('');
  const reset = (e) => {
    setEditorText('');
    handleShowPost(e);
  };

  return (
    <>
      {showPost && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button onClick={reset}>
                <AiOutlineClose />
              </button>
            </Header>
            <ShareContent>
              <UserInfo>
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                  alt=""
                />
                <span>Tan Pil</span>
              </UserInfo>

              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you mean?"
                  autoFocus={true}
                ></textarea>
              </Editor>
            </ShareContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton>
                  <MdPhotoSizeSelectActual />
                </AssetButton>
                <AssetButton>
                  <IoLogoYoutube />
                </AssetButton>
              </AttachAssets>

              <ShareComment>
                <AssetButton>
                  <AiOutlineMessage />
                  <span>Anyone</span>
                </AssetButton>
              </ShareComment>

              <PostButton>post</PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Post;
