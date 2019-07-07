import styled from "@emotion/styled";

const Container = styled.div`
  margin-top: 4rem;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  margin: 50px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.3rem;
  line-height: 2.8rem;
  padding: 0 10%;
  margin: 50px;

  @media (max-width: 1024px) {
    padding: 0 5%;
    margin: 50px 10px;
  }
`;

const CenteredText = styled(Text)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Redirect = styled.a`
  text-decoration: none;
  color: #e0474c;
`;

const Icon = styled.svg`
  width: 25px;
  margin-right: 20px;
`;

export { Container, Heading, Text, Redirect, CenteredText, Icon };
