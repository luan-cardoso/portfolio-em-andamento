import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="loader">
          <p>Carregando...</p>
          <div className="words">
            <span className="word">botões</span>
            <span className="word">imagens</span>
            <span className="word">textos</span>
            <span className="word">cards</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Centraliza o loader na tela inteira */

    p {
     margin-top: 8px;
    }

  .loader {
    color: #8968ff;
    letter-spacing: 4px;
    font-family: "Inconsolata", sans-serif;
    font-weight: 500;
    font-size: 25px;
    display: flex;
  }

  .words {
    overflow: hidden;
    height: 30px; /* Mantém a altura correta da animação */
  }

  .words::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      var(--bg-color) 10%,
      transparent 30%,
      transparent 70%,
      var(--bg-color) 90%
    );
    z-index: 20;
  }

  .word {
    display: block;
    height: 100%;
    padding-left: 10px;
    color: #8968ff;
    animation: spin_4991 4s infinite;
  }

  @keyframes spin_4991 {
    10% { transform: translateY(-102%); }
    25% { transform: translateY(-100%); }
    35% { transform: translateY(-202%); }
    50% { transform: translateY(-200%); }
    60% { transform: translateY(-302%); }
    75% { transform: translateY(-300%); }
    85% { transform: translateY(-402%); }
    100% { transform: translateY(-400%); }
  }
`;

export default Loading;
