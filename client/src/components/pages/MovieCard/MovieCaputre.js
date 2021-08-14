import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const kkk="https://www.somagnews.com/wp-content/uploads/2021/06/Shazam-2-2.jpg"
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin:"10px auto auto auto",
    backgroundColor:"rgba(255, 0, 0, 0.3)",
    color:"white"
  },
  media: {
    height: 140,
  },
  pic:{
    backgroundImage: "url("+kkk+")"
  }
});
export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={classes.pic}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Movie
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          
        </Button>
        <Button size="small" color="primary">
          More Infromation
        </Button>
      </CardActions>
    </Card>
  );
}