import { useParams } from 'react-router';
import DefaultProfile from './DefaultProfile';
import Popeye from './Popeye';
import Spinach from './Spinach';

const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === 'Popeye' ? (
        <Popeye />
      ) : name === 'Spinach' ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
};

export default Profile;
