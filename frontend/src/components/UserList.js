import User from './User'
import styled from 'styled-components/macro'


export default function UserList({users}){
    return (
        <Section>
            <ul>
                {users.map((user) => (
                <li key={user.name}>
                    <User user={user} />
                </li>
                    ))}
            </ul>
        </Section>
    )

}

const Section = styled.section`
  padding: 0 16px;
  margin: 10px 10px 5px 5px;
  box-shadow: 5px 5px 5px grey;
  display: flex;
  align-content: center;
  justify-content: center;
  background: white;
  color: black;
`

