import React from 'react';
import classes from './Footer.module.css';
import { Instagram, Facebook, GitHub, LinkedIn } from '@material-ui/icons';
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.socialWrapper}>
        <h3 className={classes.socialHeader}>Find us on</h3>
        <div className={classes.socialIconsWrapper}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener">
            <Instagram
              fontSize="small"
              style={{
                cursor: 'pointer',
                color: 'red',
              }}
            />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener">
            <Facebook
              fontSize="small"
              style={{ cursor: 'pointer', color: 'blue' }}
            />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener">
            <GitHub
              fontSize="small"
              style={{
                cursor: 'pointer',
                color: 'black',
              }}
            />
          </a>
          <a href="https://www.linkedIn.com" target="_blank" rel="noopener">
            <LinkedIn
              fontSize="small"
              style={{ cursor: 'pointer', color: 'blue' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
