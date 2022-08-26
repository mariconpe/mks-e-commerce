import {
  LeftContainer,
  Logo,
  NavbarContainer,
  NavbarInnerContainer,
  RightContainer,
} from './NavbarElements';

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <Logo></Logo>
        </LeftContainer>
        <RightContainer></RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}

export default Navbar;
