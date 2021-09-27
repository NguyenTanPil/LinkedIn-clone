import {
  ShareBox,
  Container,
  Article,
  ShareActor,
  Description,
  ShareImg,
  SocialCount,
  SocialAction,
} from './MainStyles';
import user from '../../../images/user.svg';
import { FcOldTimeCamera } from 'react-icons/fc';
import { FcStart } from 'react-icons/fc';
import { FcPlanner } from 'react-icons/fc';
import { FcNook } from 'react-icons/fc';
import { FaEllipsisH } from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiFillMessage } from 'react-icons/ai';
import { AiOutlineLike } from 'react-icons/ai';
import { AiOutlineMessage } from 'react-icons/ai';
import { RiShareForwardLine } from 'react-icons/ri';
import { FiSend } from 'react-icons/fi';

const Main = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src={user} alt="user" />
          <button>Start a post</button>
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

      <div>
        <Article>
          <ShareActor>
            <span>
              <img src={user} alt="" />
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
      </div>
    </Container>
  );
};

export default Main;
