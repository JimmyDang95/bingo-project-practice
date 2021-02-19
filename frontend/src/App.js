import { useEffect, useState } from 'react'
import * as githubApi from './services/githubApi'
function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    githubApi.getUser().then((loadedUsers) => setUsers(loadedUsers))
  }, [])

  const addUser = (username) => {
    const newUserDto = { userName, avatarUrl }
    githubApi.postUser(newUserDto).then((newUser) => {
      const updatedUsers = [...users, newUser]
      setUsers(updatedUsers)
    })
  }

  return (
    <>
      <header>header</header>
      <main>main</main>
      <footer>footer</footer>
    </>
  )
}

export default App
