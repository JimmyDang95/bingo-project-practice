import styled from 'styled-components/macro'


export default function AppHeader() {
    return (
        <Header>
            <h1>GitHub Users</h1>
        </Header>
    )
}

const Header = styled.header`
  padding: 0 16px;
  box-shadow: 5px 5px 5px grey;
  display: flex;
  justify-content: center;
  background: white;
  color: black;
`