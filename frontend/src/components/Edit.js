import {React, useState, useRef} from 'react';
import {Dialog, DialogActions, Button, DialogTitle, DialogContent, TextField} from '@mui/material';
import axios from "axios";

const Edit = (props) => {

    const [isAddOpen, setIsAddOpen] = useState(false);
    const messageForm = useRef();

    function addClick(e){
        e.preventDefault();
        setIsAddOpen(!isAddOpen);
    };

    const editMessage = () => {
        axios.put("http://localhost:9000/demo/edit", {
            content: messageForm.current.value
        })
        .then((res) => {
            console.log("Edited", res.data);
        })
        .catch((err) => console.log(err))
    };

    return (
    <>
    <Button onClick={e => addClick(e)}>Edit Message</Button>
    <Dialog open={isAddOpen}>
      <DialogTitle>Edit Message from [{props.user}]</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" id="edit_message" inputRef={messageForm} 
        label="Edit Message" type="text" fullWidth variant="standard"/>
      </DialogContent>
      <DialogActions>
        <Button onClick={(e) => {editMessage(); addClick(e)}}>Edit</Button>
        <Button onClick={addClick}>Cancel</Button>
      </DialogActions>
    </Dialog>
    </>
    );
};

export default Edit;