// src/components/Profile.jsx
import { useParams } from 'react-router-dom';

export default function Profile() {
  const { name } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        Welcome to <strong>{name}</strong>'s profile page!
      </p>
    </div>
  );
}
