import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";

import { createPosts } from "../../features/posts/postSlice";
const Form = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  interface dataType {
    creator: string;
    title: string;
    message: string;
    tags: any;
    selectedFile: string;
  }

  const [postData, setPostData] = useState<dataType>({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch(createPosts(postData));

    // if (currentId === 0) {
    //   dispatch(createPost(postData));
    //   clear();
    // } else {
    //   dispatch(updatePost(currentId, postData));
    //   clear();
    // }
  };
  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {/* {currentId ? `Editing "${post.title}"` : 'Creating a Memory'} */}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          {/* <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          /> */}
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
