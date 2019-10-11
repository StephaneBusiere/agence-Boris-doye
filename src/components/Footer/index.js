import React from 'react';
import logoBorisBlanc from 'src/assets/images/BorisLogoBlanc.png'
import './styles.sass';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (<footer className="blog-footer">
    <p className="footerText">BorisDoye - © {year}</p>
    <NavLink
        exact
        to="/mentionslegales"
      > Mentions Légales 
      </NavLink>
    <img src={logoBorisBlanc} className="borisLogoBlanc"/>
  </footer>);
};

export default Footer;
