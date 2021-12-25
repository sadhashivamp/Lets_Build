import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { CardContent } from "@material-ui/core";
import profilepic from "./profilepic.png";

import LocationOn from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
  root: {
    width: "60%",
    height: 500,
    margin: "auto",
    boxShadow: "0px 1px 5px black",
    backgroundColor: "rgb(16, 47, 50)",
  },
  head: {
    display: "flex",
  },
  p: {
    marginTop: 40,
  },
  name: {
    fontSize: 30,
    fontFamily: "impact",
  },

  anchor: {
    marginLeft: 80,
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  userId: {
    display: "flex",
    marginLeft: 80,
  },
  userName: {
    display: "flex",
    marginLeft: 80,
  },
  userPhNo: {
    display: "flex",
    marginLeft: 80,
  },
  userDtls: {
    marginTop: 30,
  },
  userIdDtls: {
    marginLeft: 149,
    margin: 6,
  },
  userNameDtls: {
    marginLeft: 120,
    margin: 6,
  },
  userPhNoDtls: {
    marginLeft: 91,
    margin: 6,
  },
  submit: {
    marginLeft: 80,
    fontSize: 20,
    padding: 10,
    color: "black",
    background: "rgba(150,20,150,150)",
  },

  img: {
    width: "25%",
    height: "25%",
    margin: "15px",
  },
  edit: {
    fontSize: "20px",
    width: "35%",
    borderRadius: "10px",
    marginLeft: "300px",
    marginTop: "30px",
    background: "rgba(250,20,50,150)",
  },
});

export default function Profile() {
  const classes = useStyles();

  return (
    <div style={{ paddingTop: "30px" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent class={classes.head}>
            <img src={profilepic} alt="prf" class={classes.img} />

            <div className={classes.p}>
              <h5 className={classes.name}>Sadha Shivam</h5>
              <LocationOn></LocationOn>
              <text>Hyderabad</text>
            </div>
            <div>
              <button class={classes.edit}>Edit Profile</button>
            </div>
          </CardContent>

          <CardContent>
            <div className={classes.anchor}>
              <a href="#1">About</a>
            </div>

            <div className={classes.userDtls}>
              <div className={classes.userId}>
                <lable>User Id</lable>
                <input type="text" className={classes.userIdDtls} />
              </div>

              <div className={classes.userName}>
                <lable>User Name</lable>
                <input type="text" className={classes.userNameDtls} />
              </div>

              <div className={classes.userPhNo}>
                <lable>Phone Number</lable>
                <input type="text" className={classes.userPhNoDtls} />
              </div>

              <button className={classes.submit}>Submit</button>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
