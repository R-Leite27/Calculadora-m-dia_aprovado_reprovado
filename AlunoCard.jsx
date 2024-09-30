import React from 'react';
import './Card.css'; 

const AlunoCard = ({ nome, notas }) => {
  
  const media = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  const situacao = media >= 6.0 ? 'Aprovado' : 'Reprovado';

  return (
    <div className="aluno-card m-4 p-4 border rounded shadow-lg flex flex-col items-center justify-center">
      <h2 className="text-xl font-bold mb-2">{nome}</h2>
      <p className="text-lg">Média: {media.toFixed(2)}</p>
      <p className={`text-lg ${situacao === 'Aprovado' ? 'text-green-600' : 'text-red-600'}`}>
        {situacao}
      </p>
    </div>
  );
};

export default AlunoCard;

