import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { frontPic } from "../assets/frntnd.jpeg";
import Link from '@material-ui/core/Link';
import linkdlogo from "../assets/linkedinlogo.png";
import gitLogo from "../assets/gitLogo.png";
import seaPic from "../assets/seapic.jpg";

const useStyles = makeStyles({
  root: {
    width: 645,
    margin: "240px auto",
    boxShadow: "0px 10px 15px #795548",
    background: 'linear-gradient(45deg, #fe6b1b 30%, #ff9e85 90%)',
    


  },
  media: {
    height: 450,
    width: 645,
  },
  main: {
    backgroundColor: "red",
    display: "flex",
    background: 'linear-gradient(to right bottom, #607d8b, #f0f4c3)',
    
  }
});

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.main} >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= "https://miro.medium.com/max/1400/1*qx9L1NCkuf2-gxT_ZzC-ig.jpeg"
          title="pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Emin DELİGÖZ 
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Hi! I' m a Front-end Developer. Languages and libraries I use ; JavaScript, React.JS, Python, HTML, CSS, Bootstrap, MUI, Django
        
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      <Link
        component="button"
        variant="body2"
        underline="none"
        onClick={() => window.open('https://www.linkedin.com/in/emin-deligöz', '_blank')}
      >
        <img src={ linkdlogo } alt="linklogo" style={{width: "35px"}}/>
      </Link>

      <Link
        component="button"
        variant="body2"
        underline="none"
        onClick={() => window.open('https://github.com/emindlg', '_blank')}
      >
        <img src={ gitLogo } alt="linklogo" style={{width: "57px"}}/>
      </Link>
        
        
        {/*<Button size="small" color="primary">
          Learn More
        </Button>*/}
      </CardActions>
    </Card>
    </div>
  );
}



