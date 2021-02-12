import React from 'react';
import LazyHero from 'react-lazy-hero';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import '../styles/BannerImage.css';
import SiteColors from '../Colors';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: '100%'
  }
});

export default function BannerImage({ backgroundImage = '/favicon.ico', children}) {
  const styles = useStyles();

  return (
    <section id='banner'>
      <LazyHero 
        className={'lazyHero'}
        imageSrc={backgroundImage} 
        parallaxOffset={100} 
        color={SiteColors.default}
        opacity={0.4}
        minHeight={'50vh'}>
        <div className={clsx(styles.container)}>
          {children}
        </div>
      </LazyHero>
    </section>
  );
}