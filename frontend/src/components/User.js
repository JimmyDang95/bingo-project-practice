import {Card} from "@material-ui/core";

export default function User({user}){
    return(
        <Card>
            <CardMedia>

            </CardMedia>

            <CardContent>
                <UserName>
                    UserName: {user}
                </UserName>
            </CardContent>

        </Card>
    )
}