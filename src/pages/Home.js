import logo from '../assets/logo.svg';
import clsx from 'clsx';
import BasePage from './BasePage';
import { makeStyles } from '@material-ui/core';
import SiteColors from '../Colors';

const useStyles = makeStyles({
  BannerHeader: {
    padding: 50,
    color: SiteColors.accent,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  AppHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  AppLink: {
    color: '#61dafb'
  },
  AppLogo: {
    animation: 'App-logo-spin infinite 20s linear',
    height: '40vmin',
    pointerEvents: 'none'
  }
});

function Home() {
  const styles = useStyles();

  return (
    <BasePage pageName='' 
      clearHeaderBg={true} 
      bannerImage={'/images/banner.jpg'}
      bannerContent={
        <div className={clsx(styles.BannerHeader) + ' outlined-text'}>
          <h1>Preview Site!</h1>
          <p>Please don't distribute the link until this site is ready</p>
        </div>}>
      <div className={clsx(styles.AppHeader)}>
        <img src={logo} className={clsx(styles.AppLogo)} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Bob lob law no habla espanol 
        </p>
        <a
          className={clsx(styles.AppLink)}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className={clsx(styles.AppLogo)} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={clsx(styles.AppLink)}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className={clsx(styles.AppLogo)} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={clsx(styles.AppLink)}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </BasePage>
  );
}

export default Home;
