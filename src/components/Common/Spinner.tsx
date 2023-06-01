import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const keyframesAnimation = keyframes({
  "0%": {
    transform: "scale(0)",
  },
  "50%": {
    transform: "scale(1)",
  },
  "100%": {
    transform: "scale(0)",
  },
});
const Wave = styled.div`
  width: 2px;
  height: 50px;
  background: linear-gradient(180deg, rgba(246,82,97,1) 30%, rgba(255,255,255,1) 100%);
  margin: 10px;
  animation: ${keyframesAnimation} 1s linear infinite;
  border-radius: 20px;
  &:nth-child(2) {
    animation-delay: 0.1s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.3s;
  }
  &:nth-child(5) {
    animation-delay: 0.4s;
  }
  &:nth-child(6) {
    animation-delay: 0.5s;
  }
  &:nth-child(7) {
    animation-delay: 0.6s;
  }
  &:nth-child(8) {
    animation-delay: 0.7s;
  }
  &:nth-child(9) {
    animation-delay: 0.8s;
  }
  &:nth-child(10) {
    animation-delay: 0.9s;
  }
`;

export const Spinner = () => {
  return (
    <Container>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
      <Wave></Wave>
    </Container>
  );
};
