import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledWrapper>
      <a href={props.href} download={props.file}>
        <button className="ui-btn">
          <span>{props.name}</span>
        </button>
      </a>
    </StyledWrapper> 
  );
};

const StyledWrapper = styled.div`
  .ui-btn {
    --btn-default-bg: 0;
    --btn-padding: 12px 20px;
    --btn-transition: 0.3s;
    --btn-letter-spacing: 2px;
    --btn-animation-duration: 1s;
    --hover-btn-color: #8968ff;
    --default-btn-color: #cecece;
    --font-size: 14px;
    /* 👆 this field should not be empty */
    --font-weight: 600;
    --font-family: Inconsolata;
  }

  /* button settings 👆 */

  .ui-btn {
    box-sizing: border-box;
    padding: var(--btn-padding);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--default-btn-color);
    font: var(--font-weight) var(--font-size) var(--font-family);
    background: var(--btn-default-bg);
    cursor: pointer;
    transition: var(--btn-transition);
    overflow: hidden;
    box-shadow: var(--btn-shadow);
    border-radius: 5px;
    border: 1px solid #ffffff14;
  }

  .ui-btn span {
    letter-spacing: var(--btn-letter-spacing);
    transition: var(--btn-transition);
    box-sizing: border-box;
    position: relative;
    background: inherit;
  }

  .ui-btn span::before {
    box-sizing: border-box;
    position: absolute;
    content: "";
    background: inherit;
  }

  .ui-btn:hover,
  .ui-btn:focus {
    background: var(--btn-default-bg);
    box-shadow: 0px 0px 10px 0px #8968ff;
    border: 1px solid #8968ff;
  }

  .ui-btn:hover span,
  .ui-btn:focus span {
    color: var(--hover-btn-color);
  }

  .ui-btn:hover span::before,
  .ui-btn:focus span::before {
    animation: chitchat linear both var(--btn-animation-duration);
  }

  @keyframes chitchat {
    0% {
      content: "#";
    }

    5% {
      content: ".";
    }

    10% {
      content: "^{";
    }

    15% {
      content: "-!";
    }

    20% {
      content: "#$_";
    }

    25% {
      content: "№:0";
    }

    30% {
      content: "#{+.";}35%{content: "@}-?";
    }

    40% {
      content: "?{4@%";
    }

    45% {
      content: "=.,^!";
    }

    50% {
      content: "?2@%";
    }

    55% {
      content: "\;1}]";
    }

    60% {
      content: "?{%:%";
      right: 0;
    }

    65% {
      content: "|{f[4";
      right: 0;
    }

    70% {
      content: "{4%0%";
      right: 0;
    }

    75% {
      content: "'1_0<";
      right: 0;
    }

    80% {
      content: "{0%";
      right: 0;
    }

    85% {
      content: "]>'";
      right: 0;
    }

    90% {
      content: "4";
      right: 0;
    }

    95% {
      content: "2";
      right: 0;
    }

    100% {
      content: "";
      right: 0;
    }
  }
`;

export default Button;
