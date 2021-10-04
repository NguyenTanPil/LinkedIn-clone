import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
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
  UploadImg,
  UserInfo,
} from './PostStyles';
import { AiOutlineClose, AiOutlineMessage } from 'react-icons/ai';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import { IoLogoYoutube } from 'react-icons/io';

const Post = ({ showPost, handleShowPost, user }) => {
  const [editorText, setEditorText] = useState('');
  const [shareImg, setShareImg] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [assetArea, setAssetArea] = useState('');

  const handleOnchange = (e) => {
    const img = e.target.files[0];

    if (img === '' || img === undefined) {
      alert('not an image, the file is a ' + typeof img);
      return;
    }
    setShareImg(img);
  };

  const switchAssetArea = (area) => {
    setShareImg('');
    setVideoLink('');
    setAssetArea(area);
  };

  const reset = (e) => {
    setEditorText('');
    setShareImg('');
    setVideoLink('');
    setAssetArea('');
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
                {!user.photo ? (
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                    alt=""
                  />
                ) : (
                  <img src={user.photo} alt="" />
                )}
                <span>{!user.name ? 'Name' : user.name}</span>
              </UserInfo>

              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="What do you mean?"
                  autoFocus={true}
                />
                {assetArea === 'image' ? (
                  <UploadImg>
                    <input
                      type="file"
                      accept="image/gif, image/png, image/svg+xml, image/jpg, image/jpeg"
                      name="upload-img"
                      id="upload-img"
                      style={{ display: 'none' }}
                      onChange={handleOnchange}
                    />
                    <p>
                      <label htmlFor="upload-img">
                        select an image to share
                      </label>
                    </p>
                    {shareImg && (
                      <img src={URL.createObjectURL(shareImg)} alt="" />
                    )}
                  </UploadImg>
                ) : (
                  assetArea === 'media' && (
                    <>
                      <input
                        type="text"
                        placeholder="Paste your video link"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width="100%" url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </ShareContent>
            <ShareCreation>
              <AttachAssets>
                <AssetButton onClick={() => switchAssetArea('image')}>
                  <MdPhotoSizeSelectActual />
                </AssetButton>
                <AssetButton onClick={() => switchAssetArea('media')}>
                  <IoLogoYoutube />
                </AssetButton>
              </AttachAssets>

              <ShareComment>
                <AssetButton>
                  <AiOutlineMessage />
                  <span>Anyone</span>
                </AssetButton>
              </ShareComment>

              <PostButton disabled={!editorText ? true : false}>
                post
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
};

export default Post;
