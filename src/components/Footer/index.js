import React from 'react';
import logoBorisBlanc from 'src/assets/images/BorisLogoBlanc.png'
import './styles.sass';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (<footer className="main-footer">
    <NavLink
      className="footer-link"
      exact
      to="/mentionslegales"
      > 
        Mentions Légales
      </NavLink>
    <p className="footer-text">BorisDoye - © {year}</p>
    <img className="footer-logo" src={logoBorisBlanc}/>
  </footer>);
};

export default Footer;
