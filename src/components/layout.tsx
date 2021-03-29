import React from 'react';
import Helmet from "react-helmet"
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import ScrollToTop from 'react-scroll-up';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import ScrollUpButton from './scroll-up-button/scroll-up-button';
import ResetCss from './reset-css';
import { theme } from '../theme';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
    <Helmet>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700;900&display=swap" rel="stylesheet" />
    </Helmet>
    <ThemeProvider theme={theme}>
      <>
        <ResetCss />
        <header>
        <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
          <Navbar />
        </Sticky>
        </header>
        {children}

        <Footer>
          Copyright &copy; {new Date().getFullYear()}
          <a href="/"> • JavaScript Articles</a>
        </Footer>
        <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
      </>
    </ThemeProvider>
    </>
  );
};

export default Layout;
