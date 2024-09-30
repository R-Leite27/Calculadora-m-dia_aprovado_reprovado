import React, { useState } from 'react';
import AlunoCard from './AlunoCard';
import FormAluno from './FormAluno';
import './App.css';

const App = () => {
  const [alunos, setAlunos] = useState([]);
  const [alunosAdicionados, setAlunosAdicionados] = useState(false);

  const handleAddAluno = (aluno) => {
    setAlunos([...alunos, aluno]);
    setAlunosAdicionados(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <FormAluno onAddAluno={handleAddAluno} />
      <main className="flex-grow flex flex-wrap justify-center items-center">
        {alunosAdicionados && alunos.map((aluno, index) => (
          <AlunoCard key={index} nome={aluno.nome} notas={aluno.notas} />
        ))}
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-sm text-gray-600">@RaimundoLeite</p>
      </footer>
    </div>
  );
};

export default App;


