import React from "react";
import styled from "styled-components";

const Radio = () => {
  return (
    <StyledWrapper>
      <div className="radio-inputs">
        <label className="radio">
          <input type="radio" name="radio" defaultChecked />
          <span className="name">Home</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">Projetos</span>
        </label>
        <label className="radio">
          <input type="radio" name="radio" />
          <span className="name">Sobre Mim</span>
        </label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .radio-inputs {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    border-radius: 4px;
    border: 1px #ffffff14 solid;
    background-color: rgba(38, 40, 53, 0.7);
    box-sizing: border-box;
    box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.09);
    padding: 0.5rem;
    font-weight: 300;
    width: 300px;
    font-size: 14px;
    font-family: Inconsolata;
    letter-spacing: 1px;
  }

  .radio-inputs .radio {
    flex: 1 1 auto;
    text-align: center;
  }

  .radio-inputs .radio input {
    display: none;
  }

  .radio-inputs .radio .name {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: none;
    padding: 0.5rem 0;
    color: #ececec;
    transition: all 0.15s ease-in-out;
  }

  .radio-inputs .radio input:checked + .name {
    background-color: #8968ff;
  }

  /* Animation */
  .radio-inputs .radio input:checked + .name {
    position: relative;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    animation: select 0.3s ease;
  }

  @keyframes select {
    0% {
      transform: scale(0.95);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Particles */
  .radio-inputs .radio input:checked + .name::before,
  .radio-inputs .radio input:checked + .name::after {
    content: "";
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #8968ff;
    opacity: 0;
    animation: particles 0.5s ease forwards;
  }

  .radio-inputs .radio input:checked + .name::before {
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  .radio-inputs .radio input:checked + .name::after {
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  @keyframes particles {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(0);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(var(--direction));
    }
  }

  .radio-inputs .radio input:checked + .name::before {
    --direction: -10px;
  }

  .radio-inputs .radio input:checked + .name::after {
    --direction: 10px;
  }
`;

export default Radio;
