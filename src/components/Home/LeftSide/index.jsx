import {
  AddPhotoText,
  ArtCard,
  CardBackground,
  ComunityCard,
  Container,
  Item,
  Link,
  NavLink,
  Photo,
  UserInfo,
  Widget,
} from './LeftSideStyles';
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { BsPlus } from 'react-icons/bs';
import { BsFillBookmarksFill } from 'react-icons/bs';

const LeftSide = ({ userName }) => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <NavLink to="/">
            <Photo />
            <Link>Welcome, {userName ? userName : 'there'}!</Link>
          </NavLink>
          <NavLink to="/">
            <AddPhotoText>Add a photo</AddPhotoText>
          </NavLink>
        </UserInfo>
        <Widget>
          <NavLink to="/">
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <BsFillPersonPlusFill />
          </NavLink>
          <Item>
            <span>
              <BsFillBookmarksFill />
              My items
            </span>
          </Item>
        </Widget>
      </ArtCard>

      <ComunityCard>
        <NavLink to="/">
          <span>Groups</span>
        </NavLink>
        <NavLink to="/">
          <span>
            Events
            <BsPlus />
          </span>
        </NavLink>
        <NavLink to="/">Follow Hashtags</NavLink>
        <NavLink to="/">Discover more</NavLink>
      </ComunityCard>
    </Container>
  );
};

export default LeftSide;
