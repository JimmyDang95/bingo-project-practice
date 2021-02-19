import { useState } from 'react'

export default function AddNewUserForm({ onAdd }) {
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
      <input type="text" value={gitusername} />
      <button type="submit" disabled={!hasUsername}>
        Add
      </button>
    </form>
  )
}
