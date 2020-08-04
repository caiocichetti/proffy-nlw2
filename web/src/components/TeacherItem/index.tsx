import React from 'react';

import whatsapp from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/58996814?s=460&u=c5d7330943e346a096fb12f7424ae5f89fda4376&v=4"
          alt="Caio Cichetti"
        />
        <div>
          <strong>Caio Cichetti</strong>
          <span>Algoritmo</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias e computadores.
        <br />
        <br />
        Apaixonado por node, java, c# e computadores gamers.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsapp} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
