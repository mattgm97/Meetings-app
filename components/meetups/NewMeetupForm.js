import { useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import classes from './NewMeetupForm.module.css';
import Button from '@mui/material/Button';

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <Box sx={{
      backgroundColor: "white",
      borderRadius: "6px",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)"
    }}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <TextField fullWidth required id="title" label="Meetup Title" variant="standard" inputRef={titleInputRef} />

        </div>
        <div className={classes.control}>
          <TextField fullWidth required id="image" label="Meetup Image" variant="standard" inputRef={imageInputRef} />

        </div>
        <div className={classes.control}>
          <TextField fullWidth required id="address" label="Address" variant="standard" inputRef={addressInputRef} />

        </div>
        <div className={classes.control}>
          <TextField multiline rows={5} fullWidth required id="description" label="Description" variant="standard" inputRef={descriptionInputRef} />

        </div>
        <div className={classes.actions}>
          <Button variant="contained"  size="medium" color="primary"  type="submit">
          Add Meetup
          </Button>
        </div>
      </form>
    </Box>
  );
}

export default NewMeetupForm;
