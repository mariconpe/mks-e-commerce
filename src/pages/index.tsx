import React, { useRef } from 'react';
import Burger from '../components/Burger/Burger';
import Menu from '../components/Menu/Menu';
import Navbar from '../components/Navigation/Navbar';
import List from '../components/ProductsList/ProductsList';
import { useOnClickOutside } from '../hooks/hooks';
import { Container, Main } from '../styles/sharedstyles';

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Container>
      <Navbar />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Main>
        <List />
      </Main>
    </Container>
  );
}
