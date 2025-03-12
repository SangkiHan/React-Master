import styled, { keyframes } from "styled-components";

// bgColor 속성을 정의하는 인터페이스
interface BoxProps {
  bgColor?: string; // bgColor를 선택적 프로퍼티로 지정
}

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }

  100% {
    transform: rotate(360deg);
    border-radius: 50px;
  }
`;

const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;

  span {
    font-size: 36px;
    &:hover {
      font-size: 40px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box bgColor="teal">
        <span>😍</span>
      </Box>
    </Wrapper>
  );
}

export default App;
