import { useState } from 'react';
import {
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarInnerContainer,
  RightContainer,
} from './NavbarElements';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo href="/">MSK Solutions</Logo>
        </LeftContainer>
        <RightContainer></RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}

export default Navbar;
