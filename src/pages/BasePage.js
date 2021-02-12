import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import '../styles/App.css';
import '../styles/transitions.css';
import '../styles/social-icons.css';
import SiteColors from '../Colors';
import SiteFooter from '../components/Footer/SiteFooter';
import SiteHeader from '../components/Header/SiteHeader';
import BannerImage from '../components/BannerImage';
import { useEffect } from 'react';

const useStyles = makeStyles({
  background: {
    backgroundColor: SiteColors.ltpurple,
    minHeight: '100vh',
  },
  content: {
    position: 'relative',
    padding: '5px',
    color: SiteColors.accent,
    backgroundColor: SiteColors.ltpurple,
  },
  footer: {
    backgroundColor: SiteColors.ltpurple,
  }
});

function BasePage({ pageName = 'Please Populate pageName', 
                    clearHeaderBg = false, 
                    bannerImage = null, 
                    bannerContent = null,
                    title = null,
                    children }) {
  const styles = useStyles();
  let hasBanner = bannerImage && bannerContent;

  useEffect(() => {
    if (title) {
      document.title = `${title} | John`;
    } else {
      document.title = 'John';
    }
  }, [title]);

  return (
    <div className={clsx(styles.background) + ' transition-item base-page'}>
      {!hasBanner && 
        <SiteHeader pageName={pageName} clearBg={clearHeaderBg} />
      }
      
      {hasBanner &&
        <BannerImage backgroundImage={bannerImage} >
          <SiteHeader pageName={pageName} clearBg={clearHeaderBg} />
          {bannerContent}
        </BannerImage>
      }

      <div id='content' className={clsx(styles.content)}>
        {children}
      </div>

      <SiteFooter className={clsx(styles.footer)} />
    </div>
  );
}

export default BasePage;
