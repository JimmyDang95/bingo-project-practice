import {Card, CardContent, CardMedia} from "@material-ui/core";

export default function User({user}){
    return(
        <Card>
{/*
            <CardMedia>

            </CardMedia>
*/}
            <CardContent>
                <section>
                    UserName: {user.name}
                    AvatarUrl: {user.avatar}
                </section>
            </CardContent>

        </Card>
    )
}