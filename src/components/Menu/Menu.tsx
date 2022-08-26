// Menu.js
import Link from 'next/link';
import { bool, func } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link href="/aboutus">
        <>
          <span role="img" aria-label="about us">
            &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
          </span>
          About us
        </>
      </Link>
      <Link href="/price">
        <>
          <span role="img" aria-label="price">
            &#x1f4b8;
          </span>
          Pricing
        </>
      </Link>
      <Link href="/contact">
        <>
          <span role="img" aria-label="contact">
            &#x1f4e9;
          </span>
          Contact
        </>
      </Link>
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
export default Menu;
