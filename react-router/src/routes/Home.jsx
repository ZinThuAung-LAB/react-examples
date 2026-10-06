// src/routes/Home.jsx
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to our React Router demo application!</p>
      <p>
        Check out <Link to="/profile/alex">Alex's Profile</Link> or{' '}
        <Link to="/profile/jordan">Jordan's Profile</Link> to see dynamic URL
        params in action.
      </p>
    </div>
  );
}
