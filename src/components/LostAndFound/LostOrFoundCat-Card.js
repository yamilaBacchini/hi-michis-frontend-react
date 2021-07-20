import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    title: {
        color: "#3c0a4a",
        fontSize: '2.5vh'
    },
    subheader: {
        fontSize: '1.3vh'
    }
}));

export default function LostOrFoundCatCard(props) {
    const classes = useStyles();

    const todayDate = new Date();
    const dateOfBirth = new Date(props.cat.dateOfBirth);

    const months =Math.abs(Math.round((todayDate.getTime() - dateOfBirth.getTime()) / (1000 * 60 * 60 * 24 * 30.5)));
    const years = Math.floor(months/12);

    return (
        <div>
        <Card className={classes.root}>
            <CardHeader
                classes={{title: classes.title, subheader: classes.subheader}}
                title={props.cat.name}
                subheader={years>0 ? `${years} años` : `${months} meses`}
            />
            <CardMedia
                className={classes.media}
                image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYQ2kaNwGhSJSjzTZYGbU3zXhO_yErZM6fw&usqp=CAU"
            />
            <CardContent style={{maxHeight:80, minHeight:80, overflow:'hidden'}}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {props.cat.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
        </div>
    );
}