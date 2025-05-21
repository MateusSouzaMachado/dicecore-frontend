import React, { useState } from 'react';
import api from '../api/dicecoreApi';

function Register() {
  const [form, setForm] = useState({
    name: '',
    cpf: '',
    roles: ['PLAYER'],
    email: '',
    nivel: '',
    password: '',
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/users', form);
      setMensagem('Usuário registrado com sucesso!');
    } catch (err) {
      console.error(err);
      setMensagem('Erro ao registrar. Verifique os dados.');
    }
  };

  return (
    <div>
      <h2>Cadastro no DiceCore</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nome" onChange={handleChange} /><br />
        <input name="cpf" placeholder="CPF" onChange={handleChange} /><br />
        <input name="email" placeholder="Email" onChange={handleChange} /><br />
        <input name="nivel" placeholder="Nível" onChange={handleChange} /><br />
        <input name="password" type="password" placeholder="Senha" onChange={handleChange} /><br />
        <select name="roles" onChange={(e) => setForm({ ...form, roles: [e.target.value] })}>
          <option value="PLAYER">Jogador</option>
          <option value="DM">Mestre</option>
        </select><br />
        <button type="submit">Registrar</button>
      </form>
      <p>{mensagem}</p>
    </div>
  );

}
export default Register;
