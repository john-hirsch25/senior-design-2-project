import '../styles/App.css';
import '../styles/Events.css';
import clsx from 'clsx';
import BasePage from './BasePage';
import { makeStyles } from '@material-ui/core';
import { Calendar, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useEffect, useState } from 'react';
import CallMadeIcon from '@material-ui/icons/CallMade';

const useStyles = makeStyles({
  page: {
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  eventsContainer: {
    display: 'flex',
  },
  calendarContainer: {
    padding: '0px 30px'
  },
  eventsList: {
    padding: '0px 30px'
  }
});

function createEvent(name, date, desc, url) {
  return {
    name: name,
    date: date,
    description: desc,
    link: url
  }
}

function filteredEvents(eventsList, eventDay) {
  return eventsList.filter((event) => {
    return event.date.getFullYear() === eventDay.getFullYear() &&
          event.date.getMonth() === eventDay.getMonth() &&
          event.date.getDate() === eventDay.getDate();
  });
}

function CalendarPage() {
  const styles = useStyles();
  const [calDay, setCalDay] = useState(new Date());
  const [calEventsList, setEventsList] = useState([]);

  function addEvents (newEvent) {
    setEventsList(list=>list.concat(newEvent));
  }

  // "initalization code"
  useEffect(()=>{
    // API call would go here
    addEvents([
      createEvent("Tampa Covention Center Expo", new Date(), "An event at the local convention hall. Come join us as we talk computer science", "https://www.tampagov.net/tcc/home"),
      createEvent("Tampa Covention Center Expo", new Date(2021, 2, 9), "An event at the local convention hall. Come join us as we talk computer science", "https://www.bing.com"),
    ]);
  // eslint-disable-next-line
  }, [setEventsList]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BasePage pageName='Events' title='Events'>
        <div className={clsx(styles.page)}>
          <div className={'events-container ' + clsx(styles.eventsContainer)}>
            <div className={clsx(styles.calendarContainer)}>
              <Calendar date={calDay} onChange={(date)=>{
                  setCalDay(date);
                }
              }/>
            </div>
            <div className={'event-list ' + clsx(styles.eventsList)}>
              <h1>Events</h1>
              {filteredEvents(calEventsList, calDay).length === 0 &&
                <p>No events are available</p>
              }
              {filteredEvents(calEventsList, calDay).length > 0 &&
                filteredEvents(calEventsList, calDay).map((value, index) => {
                  return <div>
                      <hr></hr>
                      <h2>Name: {value.name}</h2>
                      <h4>Description</h4>
                      <p>{value.description}</p>
                      <h4><a href={value.link}>Visit the Website<CallMadeIcon style={{fontSize: '1rem'}}/></a></h4>
                    </div>
                })
              }
            </div>
          </div>
        </div>
      </BasePage>
    </MuiPickersUtilsProvider>
  );
}

export default CalendarPage;
