import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BlogCard from "../components/BlogCard";
import { useBlog } from "../contexts/BlogContext";
import Typography from "@material-ui/core/Typography";
import loadingGif from "../assets/loading.gif";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      paddingTop: theme.spacing(5),
      //backgroundColor: "#304352",
      background: 'linear-gradient(to right bottom, #01579b, #f9fbe7)',
      height: "100vw",
      
      
      
    },
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#f5f5f5",
    paddingTop: "20px",
    paddingBottom: "50px",
  },
  mainRoot: {
    marginTop: 70,
  },
  
}));

const Main = () => {
  const classes = useStyles();
  const { currentBlogs } = useBlog();

  return (
    <div className={classes.mainRoot}>
      
      <>
        <Grid container className={classes.root} spacing={5} justify="center">
          
          <Grid item xs={12}>
          <Typography className={classes.title} variant="h3" noWrap>
       Dashboard 
          </Typography>
            <Grid container justify="center" spacing={5}>
              {currentBlogs === undefined ? (
                <img src={loadingGif} alt="loading" />
              ) : currentBlogs ? (
                currentBlogs?.map((item, id) => (
                  <Grid key={id} item >
                    <BlogCard post={item} />
                  </Grid>
                ))
              ) : (
                <h3>No data available.</h3>
              )}
            </Grid>
          </Grid>
        </Grid>
        {/* <Box
          display="flex"
          justifyContent="center"
          m={1}
          p={1}
          bgcolor="background.paper"
        >
          <Box p={1}>
            {hasNext ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => loadMore()}
              >
                View More
              </Button>
            ) : null}
          </Box>
        </Box> */}
      </>
    </div>
  );
};

export default Main;
