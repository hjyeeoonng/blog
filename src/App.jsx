import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f6;
`;

const Box = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 320px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2563eb;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #1e40af;
  }
`;

export default function LoginForm() {
  return (
    <Container>
      <h1>전현정의 홈페이지</h1>
      <Box>
        <Title>로그인</Title>
        <div>
          <Label>아이디</Label>
          <Input type="text" placeholder="아이디 입력" />
        </div>
        <div>
          <Label>비밀번호</Label>
          <Input type="password" placeholder="비밀번호 입력" />
        </div>
        <Button>로그인</Button>
      </Box>
    </Container>
  );
}
