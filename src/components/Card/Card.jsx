import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  return (
    <StyledWrapper>
      <div className="cookieCard">
        <p className="cookieHeading">{props.name}</p>
        <p className="cookieDescription">{props.description}</p>
        <div className="buttonContainer">
          <Button name="Ver no GitHub" href={props.href} />
          {props.deploy && ( // Só renderiza o <a> se props.deploy tiver um valor válido
            <a
              href={props.deploy}
              className="text-[#bbb] hover:text-[#f1f1f1] duration-300 cursor-pointer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGlobe} size="lg" />
            </a>
          )}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cookieCard {
    width: 260px;
    height: 280px;
    background: #333333;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }

  .cookieCard::before {
    width: 150px;
    height: 150px;
    content: "";
    background: linear-gradient(
      to right,
      rgb(142, 110, 255),
      rgb(208, 195, 255)
    );
    position: absolute;
    z-index: 1;
    border-radius: 50%;
    right: -25%;
    top: -25%;
  }

  .cookieHeading {
    font-size: 1.5em;
    font-weight: 400;
    font-family: "Inter";
    color: rgb(241, 241, 241);
    z-index: 2;
  }

  .cookieDescription {
    color: #bbb;
    z-index: 2;
    line-height: 20px;
    flex-grow: 1;
  }

  .buttonContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: auto;
  }
`;

export default Card;
