import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 380,
    backgroundColor: "#e0ffff",
    margin: 20,
    marginLeft: 600,
  },

  Dtls: {
    display: "grid",
    justifyContent: "flex-start",
  },
  btns: {
    justifyContent: "space-evenly",
  },
});

export default function AvailableBids() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/src/components/Services/vertualOffices.jpg"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.Dtls}>
          <Typography gutterBottom variant="h5" component="h2">
            UserName
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Location
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Posted On
          </Typography>
        </CardContent>

        <CardContent className={classes.Dscr}>
          <Typography variant="body2" color="textSecondary" component="p">
            Project Description Project Description Project Description Project
            Description Project Description Project Description
          </Typography>
        </CardContent>

        <CardActions className={classes.btns}>
          <Button size="small" color="primary" variant="contained">
            Contact
          </Button>
          <Button size="small" color="primary" variant="contained">
            Make A Bid
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
