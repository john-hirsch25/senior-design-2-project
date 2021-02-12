import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import SiteColors from '../../Colors';
import '../../styles/social-icons.css'

const styles = {
  button: {
    backgroundColor: SiteColors.accent,
    lineHeight: '1.65em',
    borderRadius: '0',
    padding: '0',
    marginRight: '5px',
    color: SiteColors.default,
    fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
    textTransform: 'inherit',
    fontSize: 'inherit',
    zIndex: 1
  }
}

export default function HomeButton() {
  return (
    <Link className={'blurrable-social-icon'} to={'/'} style={{ textDecoration: 'none' }}>
      <Button style={styles.button}>
          <code><b>Home</b></code>
      </Button>
    </Link>
  );
}