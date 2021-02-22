import {Button, Card, CardActions, CardContent, CardMedia, makeStyles} from "@material-ui/core";
import {Link} from "react-router-dom";
import {red} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 200,
        // paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));



export default function User({user, detailView}){
    const classes = useStyles();
    return(
        <Card className={classes.root}>


            <CardMedia
                className={classes.media}
                image={`${user.avatar}`}
                title="Avatar"
            />

                <CardContent>
                <section>
                    UserName: {user.name}
                </section>
            </CardContent>

            {!detailView && (
                <CardActions>
                    <Button color="primary" component={Link} to={`/user/${user.name}`} >
                        Details
                    </Button>
                    <Button color="secondary">Delete</Button>
                </CardActions>
                )}

        </Card>
    )
}