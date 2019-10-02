import React from 'react';
import './styles.sass';
import NavFooter from 'src/containers/NavFooter';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  

  return (<footer className="blog-footer">
   BorisDoye - © {year} 
   <NavFooter />
  </footer>);

};

export default Footer;
