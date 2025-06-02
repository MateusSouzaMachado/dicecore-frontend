import React, { useEffect, useState } from 'react';
import api from '../api/dicecoreApi'; // caminho relativo correto para seu axios configurado
import './Home.css';

function Home() {
  const [users, setUsers] = useState([]);

  const handleDelete = async (id) => {
  const confirmar = window.confirm('Tem certeza que deseja excluir este usuário?');
  if (!confirmar) return;

  try {
    await api.delete('/api/users', { data: { id } });
    setUsers(users.filter(user => user.id !== id));
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
  }
  };

const handleEdit = async (user) => {
  const novoNome = prompt('Novo nome:', user.name);
  const novoEmail = prompt('Novo email:', user.email);
  const novoCpf = prompt('Novo CPF:', user.cpf);
  const novoNivel = prompt('Novo nível:', user.nivel);
  const novasRoles = prompt('Novas roles (separadas por vírgula):', user.roles.join(','));

  if (!novoNome || !novoEmail || !novoCpf || !novoNivel || !novasRoles) return;

  try {
    const response = await api.put('/users', {
      ...user,
      name: novoNome,
      email: novoEmail,
      cpf: novoCpf,
      nivel: novoNivel,
      roles: novasRoles.split(',').map(r => r.trim())
    });

    const updatedUser = response.data;

    setUsers(users.map(u => u.id === updatedUser.id ? updatedUser : u));
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
  }
};


  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await api.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bem-vindo ao DiceCore</h1>
        <p>Um sistema de RPG online para mestres e jogadores se conectarem...</p>
        <img src="/dadoEstilhacado.jpg-removebg-preview.png" alt="Logo Estilhaços" className="logo-img" />
      </div>

      <div className="content">
        <h3>Usuários Registrados</h3>
        <div className="user-list-box">
          {users.length === 0 ? (
            <p>Nenhum usuário registrado ainda.</p>
          ) : (
            <ul>
              {users.map((u) => (
                <li key={u.id}>
                  {u.name} ({u.roles.join(', ')})
                  <button className="action-button edit-button" onClick={() => handleEdit(u)}>Editar</button>
                  <button className="action-button delete-button" onClick={() => handleDelete(u.id)}>Excluir</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;



// import React, { useEffect, useState } from 'react';
// import api from '../api/dicecoreApi';
// import './Home.css';

// function Home() {
//   return (
//     <div className="home-container">
//     <div className="hero-section">
//       <h1>Bem-vindo ao DiceCore</h1>
//       <p>Um sistema de RPG online para mestres e jogadores se conectarem...</p>
//       <img src="/dadoEstilhacado.jpg-removebg-preview.png" alt="Logo Estilhaços" className="logo-img" />
//     </div>
  
//     <div className="content">
//       {/* Aqui começa o restante da página */}
//     </div>
    
//   </div>
//   );
// }

// export default Home;