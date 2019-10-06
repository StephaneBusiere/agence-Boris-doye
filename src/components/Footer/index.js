import React from 'react';
import logoBorisBlanc from 'src/assets/images/BorisLogoBlanc.png'
import './styles.sass';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (<footer className="blog-footer">
  <img className="borisLogoBlanc" src={logoBorisBlanc} />
  <p className="footerText">BorisDoye - © {year}</p>
  </footer>);
};

export default Footer;
