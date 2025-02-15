import React from "react";
import styled from "styled-components";

const AboutCard = () => {
  return (
    <StyledWrapper>
      <div className="notification">
        <div className="notiglow" />
        <div className="notiborderglow" />
        <div className="notititle">Welcome To Uiverse</div>
        <div className="notibody">Contribute to Open Source UI Elements</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .notification {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 18rem;
    height: 8rem;
    background: transparent;
    overflow: hidden;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #4841d0, #2eadff);
  }

  .notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;

    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
  }

  .notification:hover:after {
    transform: translateX(0.15rem);
  }

  .notititle {
    color: #4841d0;
    padding: 0.65rem 0.25rem 0.4rem 1.65rem;
    font-weight: 700;
    font-size: 1.1rem;
    font-family: Inconsolata;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notititle {
    transform: translateX(0.15rem);
  }

  .notibody {
    color: #bbbbbb;
    padding: 0 1.65rem;
    font-family: Inconsolata;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notibody {
    transform: translateX(0.25rem);
  }
`;

export default AboutCard;
