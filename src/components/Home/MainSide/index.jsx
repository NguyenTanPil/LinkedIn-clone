import { useState } from 'react';
import {
  AiFillHeart,
  AiFillLike,
  AiFillMessage,
  AiOutlineLike,
  AiOutlineMessage,
} from 'react-icons/ai';
import { FaEllipsisH } from 'react-icons/fa';
import { FcNook, FcOldTimeCamera, FcPlanner, FcStart } from 'react-icons/fc';
import { FiSend } from 'react-icons/fi';
import { RiShareForwardLine } from 'react-icons/ri';
import Post from '../Post';
import loadingGif from '../../../images/loading.gif';

import {
  Article,
  Container,
  Content,
  Description,
  ShareActor,
  ShareBox,
  ShareImg,
  SocialAction,
  SocialCount,
} from './MainStyles';
import { selectArticle } from '../../../features/article/articleSlice';
import { useSelector } from 'react-redux';

const Main = ({ user }) => {
  const [showPost, setShowPost] = useState(false);
  const article = useSelector(selectArticle);

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setShowPost(!showPost);
  };

  return (
    <Container>
      <ShareBox>
        <div>
          <img src={user.photo} alt="user" />
          <button
            onClick={handleClick}
            disabled={article.loading ? true : false}
          >
            Start a post
          </button>
        </div>
        <div>
          <button>
            <FcOldTimeCamera />
            <span>Photo</span>
          </button>
          <button>
            <FcStart />
            <span>Video</span>
          </button>
          <button>
            <FcPlanner />
            <span>Event</span>
          </button>
          <button>
            <FcNook />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <Content>
        {article.loading && <img src={loadingGif} alt="" />}
        <Article>
          <ShareActor>
            <span>
              <img src={user.photo} alt="temp" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </span>
            <button>
              <FaEllipsisH />
            </button>
          </ShareActor>
          <Description>Description</Description>
          <ShareImg>
            <a href="/">
              <img
                src="https://images.unsplash.com/photo-1576073732976-69755474b002?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJldHR5JTIwZmxvd2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                alt=""
              />
            </a>
          </ShareImg>

          <SocialCount>
            <li>
              <button>
                <AiFillLike />
                <AiFillHeart />
                <span>75</span>
              </button>
            </li>
            <li>
              <button>
                <AiFillMessage />
                <span>2 Comments</span>
              </button>
            </li>
          </SocialCount>
          <SocialAction>
            <button>
              <AiOutlineLike />
              <span>Like</span>
            </button>
            <button>
              <AiOutlineMessage />
              <span>Comment</span>
            </button>
            <button>
              <RiShareForwardLine />
              <span>Share</span>
            </button>
            <button>
              <FiSend />
              <span>Send</span>
            </button>
          </SocialAction>
        </Article>
      </Content>
      <Post showPost={showPost} handleShowPost={handleClick} user={user} />
    </Container>
  );
};

export default Main;
