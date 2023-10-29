import { useRouter } from 'next/router';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Grow } from '@mui/material';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }


  return (
    <Grow in>
    <li className={classes.item}>
      <Card sx={{paddingBottom:"1rem"}}>
        <CardMedia
          component="img"
          height="427"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography align="center" gutterBottom variant="h4" component="div">
            {props.title}
          </Typography>
          <Typography align="center" variant="body2" color="text.secondary">
            {props.address}
          </Typography>
        </CardContent>

        <CardActions sx={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Button variant="contained" onClick={showDetailsHandler} size="medium" color="primary">
            Show Details
          </Button>
        </CardActions>

      </Card>
    </li>
    </Grow>

  )
}

export default MeetupItem;
