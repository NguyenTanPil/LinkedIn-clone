import { useEffect, useState } from 'react';
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
import db from '../../../firebase';
import { collection, getDocs, orderBy } from 'firebase/firestore';

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
import { useDispatch, useSelector } from 'react-redux';
import { setArticles } from '../../../features/article/articleSlice';
import ReactPlayer from 'react-player';

const Main = ({ user }) => {
  const [showPost, setShowPost] = useState(false);
  const articles = useSelector(selectArticle);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }
    setShowPost(!showPost);
  };

  useEffect(() => {
    const getArticles = async () => {
      try {
        const articles = await getDocs(
          collection(db, 'articles'),
          orderBy('actor.date'),
        );
        if (articles) {
          const articlesDoc = [];
          articles.forEach((article) => {
            articlesDoc.push({ id: article.id, ...article.data() });
          });
          dispatch(setArticles({ articles: articlesDoc }));
        } else {
          console.log('No such document in firebase!');
        }
      } catch (error) {
        console.log('Error gettin document: ', error.message);
      }
    };

    getArticles();
  }, [dispatch, articles.articles]);

  return (
    <>
      {articles.articles.length === 0 ? (
        <p>There are no articles</p>
      ) : (
        <Container>
          <ShareBox>
            <div>
              <img src={user.photo} alt="user" />
              <button
                onClick={handleClick}
                disabled={articles.loading ? true : false}
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
            {articles.loading && <img src={loadingGif} alt="" />}
            {articles.articles.map((article, key) => {
              return (
                <Article key={key}>
                  <ShareActor>
                    <span>
                      <img src={article.actor.image} alt="temp" />
                      <div>
                        <span>{article.actor.title}</span>
                        <span>{article.actor.description}</span>
                        <span>
                          {article.actor.date.toDate().toLocaleDateString()}
                        </span>
                      </div>
                    </span>
                    <button>
                      <FaEllipsisH />
                    </button>
                  </ShareActor>
                  <Description>{article.description}</Description>
                  <ShareImg>
                    <a href="/">
                      {article.shareImg === '' && article.video ? (
                        <ReactPlayer
                          width={'100%'}
                          url={article.video}
                        ></ReactPlayer>
                      ) : (
                        <img src={article.shareImg} alt="" />
                      )}
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
                        <span>{article.comments} Comments</span>
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
              );
            })}
          </Content>
          <Post showPost={showPost} handleShowPost={handleClick} user={user} />
        </Container>
      )}
    </>
  );
};

export default Main;
