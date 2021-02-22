import { useEffect, useState } from 'react'
import * as githubApi from './services/githubApi'
import AddNewUserForm from "./components/AddNewUserForm";
import UserBoard from "./components/UserBoard";

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
    <>
      <header>header</header>
      <main>
          <UserBoard users={users}/>
      </main>
      <footer>
        <AddNewUserForm onAdd={addUser}>

      </AddNewUserForm>
      </footer>
    </>
  )
}

export default App
