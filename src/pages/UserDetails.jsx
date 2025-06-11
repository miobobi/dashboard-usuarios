import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './UserDetails.css';

export default function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/peoples/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <p style={{ color: "#fff", textAlign: "center" }}>Carregando...</p>;

  return (
    <div className="details-container">
      <div className="details-card">
        <img src={user.avatar} alt={user.name} />
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Endereço:</strong> {user.address}</p>
        <p><strong>Telefone:</strong> {user.phone}</p>
        <p><strong>Nascimento:</strong> {user.birthdate}</p>
        <p><strong>Descrição:</strong> {user.description}</p>

        <Link to="/" className="back-button">⬅ Voltar</Link>
      </div>
    </div>
  );
}
