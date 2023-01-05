import React, { useState, useEffect } from 'react'
import useStyle from "./styles"
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts';

// GET CURRENT ID 

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: ''});
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();
 
    if(currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  }
  const clear = () => {
    setCurrentId(null);
    setPostData({creator: '', title: '', message: '', tags: '', selectedFile: ''})
  }

  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{currentId ? "Editez " : "Ecrivez "} votre experience</Typography>
        <TextField name='creator' variant="outlined" label="Auteur" fullWidth value={postData.creator}onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
        <TextField name='title' variant="outlined" label="Titre" fullWidth value={postData.title}onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
        <TextField name='message' variant="outlined" label="Message" fullWidth value={postData.message}onChange={(e) => setPostData({ ...postData, message: e.target.value})} />
        <TextField name='tags' variant="outlined" label="Hashtags" fullWidth value={postData.tags}onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})} />
        <div className={classes.fileInput}>
           <FileBase64 type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})}/>
           <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Soumettre</Button>
           <Button className='buttonButtom' variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Supprimer</Button>
        </div>
      </form>
    </Paper>
  )
}

export default Form