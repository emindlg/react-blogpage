import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import placeholder from "../assets/placeholder.png";
import AccountCircle from "@material-ui/icons/AccountCircle";
import moment from "moment";
import { useAuth } from "../contexts/AuthContext";
import { toastErrorNotify } from "../helpers/ToastNotify";
import { useState } from "react";

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  module: {
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
    "text-overflow": "ellipsis",
    overflow: "hidden",
  },
  image: {
    padding: 3,
  },
  avatar: {
    marginBottom: "0.35em",
  },
  cardContent: {
    backgroundColor: "#efeefe",
    height: "125px",
  },
  title: {
    fontFamily: "Girassol",
    color: "#046582",
  },
});

export default function MediaCard({ post }) {
  const {
    id,
    author,
    content,
    get_comment_count,
    get_like_count,
    image,
    published_date,
    title,
  } = post;
  const classes = useStyles();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  //--------FOR LIKE BUTTON--------------

  const [likes, setLikes] = useState(0);
  //const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    const likes1 = setLikes(likes + 1)
   
    
  };
  //setIsClicked(!isClicked);

  const openDetails = () => {
    if (!currentUser) {
      toastErrorNotify("Login for details of blog!");
    }
    navigate(`/detail/${id}`);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={openDetails}>
        <CardMedia
          className={classes.media}
          image={image || placeholder}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {moment(published_date).format("MMM DD, YYYY")}
          </Typography>
          <p className={classes.module}>{content}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <AccountCircle className={classes.avatar} />
        <Typography gutterBottom variant="h6" component="h2">
          {author}
        </Typography>
      </CardActions>
      <CardActions>
        <IconButton aria-label="add to favorites" className={classes.image}>
          <FavoriteIcon color={likes > 0 ? "secondary" : "disabled"} onClick={() => handleClick() } />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          { `${likes}` }
        </Typography>
        <IconButton aria-label="comment count" className={classes.image}>
          <ChatBubbleOutlineIcon />
        </IconButton>
        <Typography variant="body2" color="textSecondary">
          {get_comment_count}
        </Typography>
      </CardActions>
    </Card>
  );
}
