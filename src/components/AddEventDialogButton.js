import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { KeyboardDatePicker } from '@material-ui/pickers';

export default function AddEventDialogButton({children}) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [description, setDescription] = React.useState('');
  const [url, setUrl] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    if (!window.localStorage.events) {
      window.localStorage.setItem('events', JSON.stringify([]))
    }
    let events = JSON.parse(window.localStorage.getItem('events'));
    
    events.push({
      name: name,
      date: date,
      description: description,
      link: url
    });

    window.localStorage.setItem('events', JSON.stringify(events));
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{marginBottom: '25px'}}>
        {children}
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add an Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the required fields, then click "Add" to add the event to your local calendar.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Event Name"
            onChange={(event)=>setName(event.target.value)}
            fullWidth
          />
          <KeyboardDatePicker
            disableToolbar
            required
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Event Date"
            value={date}
            onChange={(value)=>setDate(value)}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="description"
            label="Event Description"
            value={description}
            onChange={(event)=>setDescription(event.target.value)}
            fullWidth
          />
          <TextField
            required
            margin="dense"
            id="url"
            label="Event Website URL"
            value={url}
            onChange={(event)=>setUrl(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}