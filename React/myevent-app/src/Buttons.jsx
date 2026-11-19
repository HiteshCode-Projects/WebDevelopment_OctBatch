// import Button from 'react-bootstrap/Button';

// function Btns() {
//   return (
//     <>
//       <Button variant="primary">Primary</Button>
//       <Button variant="secondary">Secondary</Button>
//       <Button variant="success">Success</Button>
//       <Button variant="warning">Warning</Button>
//       <Button variant="danger">Danger</Button>
//       <Button variant="info">Info</Button>
//       <Button variant="light">Light</Button>
//       <Button variant="dark">Dark</Button>
//       <Button variant="link">Link</Button>
//     </>
//   );
// }

// export default Btns;


import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <div className="button">Login<span className="button-border" /></div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    font-weight: 400;
    color: #f4f0ff;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  .button::before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    background: linear-gradient(
        180deg,
        rgba(8, 77, 126, 0) 0%,
        rgba(8, 77, 126, 0.42) 100%
      ),
      rgba(47, 255, 255, 0.24);
    box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
    z-index: -1;
  }

  .button::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        180deg,
        rgba(8, 77, 126, 0) 0%,
        rgba(8, 77, 126, 0.42) 100%
      ),
      rgba(47, 255, 255, 0.24);
    box-shadow: inset 0 0 12px rgba(151, 200, 255, 0.44);
    border-radius: 0.5rem;
    opacity: 0;
    z-index: -1;
    transition: all 0.3s ease-in;
  }

  .button:hover::after {
    opacity: 1;
  }

  .button-border {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 0.5rem;
    z-index: -1;
  }

  .button-border::before {
    content: "";
    position: absolute;
    border-radius: 0.5rem;
    padding: 1px;
    inset: 0;
    background: linear-gradient(
        180deg,
        rgba(184, 238, 255, 0.24) 0%,
        rgba(184, 238, 255, 0) 100%
      ),
      linear-gradient(0deg, rgba(184, 238, 255, 0.32), rgba(184, 238, 255, 0.32));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    pointer-events: none;
  }`;

export default Button;
