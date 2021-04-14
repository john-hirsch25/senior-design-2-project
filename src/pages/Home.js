import ceoFace from '../assets/face.jpeg';
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

});

function Home() {
  const styles = useStyles();

  return (
    <BasePage pageName='' 
      clearHeaderBg={true} 
      bannerImage={'/images/synapse-banner.png'}
      bannerContent={
        <div className={clsx(styles.BannerHeader) + ' outlined-text'}>
          <br/><br/><br/><br/>
        </div>}>
      <div className={clsx(styles.AppHeader)}>
        <img src={ceoFace} alt="logo" />
        <p>
          Brian Kornfeld CEO of Synapse
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
