import React from 'react';

import './styles.sass';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return <footer className="blog-footer">
   BorisDoye - © {year}
  </footer>;
};

export default Footer;
