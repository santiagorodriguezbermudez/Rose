import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function Process (props) {

    const useStyles = makeStyles((theme) => ({
        root: {
            margin: "0 auto",
            padding: "2rem 0 0 0",
            maxWidth: "1440px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#faf4f4",
        },
        img: {
            marginTop: "5rem",
        },
      }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Our Process</h1>
            <img className={classes.img} src="img/Process.svg" alt="Process"/>
        </div>
    )
}

export default Process;