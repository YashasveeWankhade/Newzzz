import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 300px;
  left: 50%;
  transform: translate(-50%, -50%);
`;
  
export const LoadingCircle = styled.div`
  width: 70px;
  height: 70px;
  border: 10px solid #037abb;
  border-top-color: transparent;
  border-radius: 75%;
  animation: ${spinAnimation} 0.9s linear infinite;
`;
