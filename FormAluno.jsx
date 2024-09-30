
import React, { useState } from 'react';

const FormAluno = ({ onAddAluno }) => {
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && nota1 && nota2) {
      onAddAluno({
        nome,
        notas: [parseFloat(nota1.replace(',', '.')), parseFloat(nota2.replace(',', '.'))],
      });
      setNome('');
      setNota1('');
      setNota2('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center p-4">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do Aluno"
        className="mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        value={nota1}
        onChange={(e) => setNota1(e.target.value)}
        placeholder="Nota 1"
        className="mb-2 p-2 border rounded"
        required
      />
      <input
        type="text"
        value={nota2}
        onChange={(e) => setNota2(e.target.value)}
        placeholder="Nota 2"
        className="mb-2 p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Adicionar Aluno</button>
    </form>
  );
};

export default FormAluno;


