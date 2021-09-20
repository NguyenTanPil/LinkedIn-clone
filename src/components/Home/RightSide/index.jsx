import {
  Avatar,
  BannerCard,
  Container,
  FeedList,
  FollowCard,
  Recommendation,
  Title,
} from './RightStyles';
import { MdFeedback } from 'react-icons/md';
import { FaHashtag } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add your feed</h2>
          <MdFeedback />
        </Title>

        <FeedList>
          <li>
            <a href="/">
              <Avatar>
                <FaHashtag />
              </Avatar>
            </a>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <BsArrowRight />
        </Recommendation>
      </FollowCard>

      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  );
};

export default RightSide;
