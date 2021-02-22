import {useState} from 'react'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, Fab} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function AddNewUserForm({onAdd}) {
    const classes = useStyles();
    const [username, setUsername] = useState('')

    const hasUsername = username.length > 0

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!hasUsername) {
            return
        }
        onAdd(username)
        setUsername('')
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="UserName" variant="outlined" type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <Fab color='primary' type="submit" disabled={!hasUsername}>
                Add
            </Fab>
        </form>
    )
}
