import User from './User'


export default function UserBoard({users}){
    return (
        <section>
            <ul>
                {users.map((user) => (
                <li key={user.name}>
                    <User user={user} />
                </li>
                    ))}
            </ul>
        </section>
    )

}