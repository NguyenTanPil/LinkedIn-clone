import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMessage } from 'react-icons/ai';
import { IoLogoYoutube } from 'react-icons/io';
import { MdPhotoSizeSelectActual } from 'react-icons/md';
import ReactPlayer from 'react-player/youtube';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../features/article/articleSlice';
import db, { storage } from '../../../firebase';
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

const Post = ({ showPost, handleShowPost, user }) => {
  const [editorText, setEditorText] = useState('');
  const [shareImg, setShareImg] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [assetArea, setAssetArea] = useState('');
  const dispatch = useDispatch();

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

  const postAction = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }

    const payload = {
      image: shareImg,
      video: videoLink,
      user: user,
      description: editorText,
      timestamp: Timestamp.now(),
    };

    postArticle(payload);
    reset(e);
  };

  const postArticle = async (payload) => {
    dispatch(setLoading({ loading: true }));

    if (payload.image !== '') {
      const storageRef = ref(storage, `image/${payload.image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, payload.image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');

          if (snapshot.state === 'running') {
            console.log('Upload is ' + progress + '%');
          }
        },
        (error) => {
          console.log(error.code);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const data = {
            actor: {
              description: payload.user.email,
              title: payload.user.name,
              date: payload.timestamp,
              image: payload.user.photo,
            },
            video: payload.video,
            shareImg: downloadURL,
            comments: 0,
            description: payload.description,
          };
          await addDoc(collection(db, 'articles'), data);
          dispatch(setLoading({ loading: false }));
        },
      );
    } else if (payload.video) {
      const data = {
        actor: {
          description: payload.user.email,
          title: payload.user.name,
          date: payload.timestamp,
          image: payload.user.photo,
        },
        video: payload.video,
        shareImg: '',
        comments: 0,
        description: payload.description,
      };
      await addDoc(collection(db, 'articles'), data);
      dispatch(setLoading({ loading: false }));
    }
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

              <PostButton
                onClick={postAction}
                disabled={!editorText ? true : false}
              >
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
