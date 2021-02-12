import '../styles/App.css';
import clsx from 'clsx';
import BasePage from './BasePage';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  page: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  }
});


function Blog() {
  const styles = useStyles();

  return (
    <BasePage pageName='Blog Posts'>
      <div className={clsx(styles.page)}>
        Blog posts will live here!
      </div>
    </BasePage>
  );
}

export default Blog;
