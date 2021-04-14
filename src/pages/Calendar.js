import '../styles/App.css';
import '../styles/Events.css';
import clsx from 'clsx';
import BasePage from './BasePage';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core';
import { Calendar, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useEffect, useState } from 'react';
import CallMadeIcon from '@material-ui/icons/CallMade';
import AddEventDialogButton from '../components/AddEventDialogButton';
import EventsProvider from '../api/eventbrite/EventsProvider';
import Constants from '../api/eventbrite/Constants';

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
    setEventsList([]);
    if (window.localStorage.events) {
      let localEvents = JSON.parse(window.localStorage.events)
      let localCreatedEvents = []
      for (let event of localEvents) {
        localCreatedEvents.push(createEvent(event.name, new Date(event.date), event.description, event.link));
      }
      addEvents(localCreatedEvents);
    }
    
    EventsProvider.getEventsByOrganization(Constants.ORGANIZATION_ID).then((events)=>{
      let parsedEvents = [];
      for (let event of events) {
        parsedEvents.push(createEvent(event.name.text, new Date(event.start.local), event.description.text, event.url));
      }
      addEvents(parsedEvents);
    });
  // eslint-disable-next-line
  }, [setEventsList, window.localStorage.events]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <BasePage pageName='Events' title='Events'>
        <div className={clsx(styles.page)}>
          <AddEventDialogButton><AddIcon/>Add an Event</AddEventDialogButton>
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
                  return <div key={'event-'+index}>
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
