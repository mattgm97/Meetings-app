import classes from './MeetupDetail.module.css';
import { Fade, Zoom } from '@mui/material';

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <Fade in>
        <img
          src={props.image}
          alt={props.title}
        />
      </Fade>
      <Zoom in style={{ transitionDelay:'300ms' }}>
        <h1>{props.title}</h1>
      </Zoom>
      <Zoom in style={{ transitionDelay:'500ms' }}>
        <address>{props.address}</address>
      </Zoom>
      <Zoom in style={{ transitionDelay:'700ms' }}>
        <p>{props.description}</p>
      </Zoom>


    </section>
  );
}

export default MeetupDetail;
