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

function NotFoundPage() {
  const styles = useStyles();

  return (
    <BasePage pageName='404' title='Page Not Found'>
      <div className={clsx(styles.page)}>
        <h1>Oh no</h1>
        <p>Uh oh, page not found.</p>
      </div>
    </BasePage>
  );
}

export default NotFoundPage;
