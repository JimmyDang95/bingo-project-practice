import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import {getUser} from "../services/githubApi";
import User from "./User";


export default function UserDetails() {
    const {name} = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser(name).then(setUser)
    }, [name])

    return <>{user && <User user={user} detailView/>}</>
}