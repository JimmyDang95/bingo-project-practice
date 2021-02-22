import {Component, useEffect, useState} from 'react'
import * as githubApi from './services/githubApi'
import AddNewUserForm from "./components/AddNewUserForm";
import UserBoard from "./components/UserBoard";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserDetails from "./components/UserDetails";
import AppHeader from "./components/AppHeader";


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    githubApi.getUsers().then((loadedUsers) => setUsers(loadedUsers))
  }, [])

  const addUser = (name) => {
    const newUserDto = { name }
    githubApi.postUser(newUserDto).then((newUser) => {
      const updatedUsers = [...users, newUser]
      setUsers(updatedUsers)
    })
  }

  return (
    <Router>
        <Switch>
            <Route exact path="/">
                    <AppHeader/>
                    <UserBoard
                        users={users}
                    />
                    <AddNewUserForm onAdd={addUser}/>
            </Route>
            <Route path="/user/:name">
                <UserDetails />
            </Route>
        </Switch>
    </Router>
  )
}

export default App
