import React, { useState } from 'react';
import { Link } from 'gatsby';
import { IoIosSearch, IoIosClose } from 'react-icons/io';
import { DrawerProvider } from '../drawer/drawer-context';
import Menu from './menu';
import MobileMenu from './mobile-menu';
import SearchContainer from '../../containers/search/search';
import Logo from '../Logo'
import HeaderWrapper, {
  NavbarWrapper,
  MenuWrapper,
  NavSearchButton,
  NavSearchWrapper,
  SearchCloseButton,
  NavSearchFromWrapper,
  SearchIcon
} from './navbar.style';
import LogoImage from '../../images/logo.png';

type NavbarProps = {
  className?: string;
};

const MenuItems = [
  {
    label: 'Home',
    url: '/',
  },

];

const Navbar: React.FunctionComponent<NavbarProps> = ({
  className,
  ...props
}) => {
  const [state, setState] = useState({
    toggle: false,
    search: '',
  });

  const toggleHandle = () => {
    setState({
      ...state,
      toggle: !state.toggle,
    });
  };

  // Add all classs to an array
  const addAllClasses = ['header'];

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  return (
    <HeaderWrapper className={addAllClasses.join(' ')} {...props}>
      <NavbarWrapper className="navbar">
        <DrawerProvider>
          <MobileMenu items={MenuItems} logo={LogoImage} />
        </DrawerProvider>
        <Link to='/'><Logo/></Link>
        <MenuWrapper>
          <Menu items={MenuItems} />
        </MenuWrapper>
        <NavSearchButton className='search'
          type="button"
          aria-label="search"
          onClick={toggleHandle}
        >
          <SearchIcon><IoIosSearch size="33px" /></SearchIcon>
          
        </NavSearchButton>
      </NavbarWrapper>

      <NavSearchWrapper className={state.toggle === true ? 'expand' : ''}>
        <NavSearchFromWrapper>
          <SearchContainer />
          <SearchCloseButton className='search'
            type="submit"
            aria-label="close"
            onClick={toggleHandle}
          >
            <IoIosClose />
          </SearchCloseButton>
        </NavSearchFromWrapper>
      </NavSearchWrapper>
    </HeaderWrapper>
  );
};

export default Navbar;
