import {Button, Card, CardActions, CardContent, CardMedia} from "@material-ui/core";
import {Link} from "react-router-dom";

export default function User({user, detailView}){
    return(
        <Card>

{/*
            <CardMedia image={user.avatar}/>
*/}
                <CardContent>
                <section>
                    UserName: {user.name}
                    AvatarUrl: {user.avatar}
                </section>
            </CardContent>

            {!detailView && (
                <CardActions>
                    <Button color="primary" component={Link} to={`/user/${user.name}`} >
                        Details
                    </Button>
                </CardActions>
                )}

        </Card>
    )
}