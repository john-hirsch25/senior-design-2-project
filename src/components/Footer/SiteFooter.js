import React from 'react';
import clsx from 'clsx';
import SiteColors from '../../Colors';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    padding: 50
  },
  text: {
    color: SiteColors.xtraltpurple
  }
});

export default function SiteFooter({ className = '' }) {
  const styles = useStyles();

  return (
    <div id='footer' className={clsx(styles.container) + ' ' + className }>
      <div className={clsx(styles.text)}>
        © John Hirsch Jr.  |  This site was built in React, using the Material-UI framework, and was developed entirely by John Hirsch Jr. and Kyle
      </div>
    </div>
  );
}