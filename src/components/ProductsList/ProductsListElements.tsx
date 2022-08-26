import Image from 'next/image';
import styled from 'styled-components';

export const DisplayProducts = styled.main`
display: flex;
align-items: center;
justify-content: auto;
row-gap : 0.7rem;
column-gap: 0.7rem;
flex-wrap: wrap;
justify-content: center;
}

`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 0;
  overflow: hidden;
  box-shadow: 0px 2px 8px 0px rgba(100, 100, 111, 0.5);
  background-color: white;
  text-align: center;
  border-radius: 1rem;
  width: 220px;
  height: 240px;
  margin-bottom: 0.2rem;
  margin-left: 0.2rem;
  img {
    height: 42%;
    object-fit: scale-down;
    margin-top: 0.4rem;
  }
  h2 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.6rem;
    margin: 0;
  }
  p {
    font-size: 0.45rem;
    margin-inline: 0.3rem;
    text-align: justify;
  }
`;

const Button = styled.button`
  width: 100%;
  border: none;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const ProductCard = ({ img, title, overview }) => (
  <Wrapper>
    <Container>
      <>
        <Image width={30} height={30} src={img} alt="" />
      </>
      <>
        <h2>{title}</h2>
        <p>{overview}</p>
      </>
      <Button>COMPRAR</Button>
    </Container>
  </Wrapper>
);
