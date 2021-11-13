import React, { useState, useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import { Typography, Container, AppBar, Grid, Grow } from "@mui/material";
import memories from "./images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./app/store";
import { getPosts } from "./features/posts/postSlice";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const post = useSelector((state: RootState) => state.post);
  useEffect(() => {
    dispatch(getPosts);
  }, []);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          src={memories}
          className={classes.image}
          alt="memories"
          height="60"
        ></img>{" "}
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      {/* <Counter /> */}
    </Container>
    // <div className="App">
    //   <header className="App-header">
    //     <Counter />
    //   </header>
    // </div>
  );
}

export default App;
