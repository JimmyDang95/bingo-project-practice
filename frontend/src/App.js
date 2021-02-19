import { useEffect, useState } from 'react'
import * as githubApi from './services/githubApi'
import AddNewUserForm from "./components/AddNewUserForm";
function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    githubApi.getUser().then((loadedUsers) => setUsers(loadedUsers))
  }, [])

  const addUser = (username, avatarurl) => {
    const newUserDto = { username, avatarurl }
    githubApi.postUser(newUserDto).then((newUser) => {
      const updatedUsers = [...users, newUser]
      setUsers(updatedUsers)
    })
  }

  return (
    <>
      <header>header</header>
      <main>main</main>
      <footer>
        <AddNewUserForm>

      </AddNewUserForm></footer>
    </>
  )
}

export default App
