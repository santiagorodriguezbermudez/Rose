import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Header() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        img: {
            width: "100%",
        },
        imgContainer: {
            backgroundImage: "url(\"img/Hero.png\")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            margin: "0 auto",
            height: "40rem",
            maxWidth: "1440px",
            display: "flex",
            alignItems: "center",
            padding: "5rem",
        },
        txtContainer: {
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            color: "white",
            marginRight: "12rem",
        }, 
        button: {
            marginTop: "3rem",
        },
        countryImg: {
            height: "99%",
        }

      }));

    const classes = useStyles();





    return(
        <div className={classes.imgContainer} id="home">
            <div className={classes.txtContainer}>
                <h1>Hire globally; Rose will comply locally so you can sleep peacefully at night</h1>
                <h3>Rose combines legal structure with technology to support your global workforce. <strong>All in the cloud.</strong></h3>
                <Button variant="contained" className={classes.button} color="primary" size="large">Schedule a Demo</Button>
            </div>
            <img className={classes.countryImg} src="img/Countries.svg" alt="countries-img"/>
        </div>
    )
}

export default Header;