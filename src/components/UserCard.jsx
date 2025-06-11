import './UserCard.css';
import { Link } from 'react-router-dom';

export default function UserCard({ user }) {
  return (
    <Link to={`/user/${user.id}`} className="user-card">
      <img src={user.avatar} alt={`Avatar de ${user.name}`} />
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.address}</p>
      </div>
    </Link>
  );
}