import {useState} from 'react'
import {Button, Fab} from "@material-ui/core";

export default function AddNewUserForm({onAdd}) {
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
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
            <Fab color='primary' type="submit" disabled={!hasUsername}>
                Add
            </Fab>
        </form>
    )
}
