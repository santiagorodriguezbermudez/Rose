import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


function Header() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundImage: "url(\"img/Hero.png\")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            margin: "0 auto",
            minHeight: "40rem",
            maxWidth: "1440px",
            padding: "0 2rem",
        },
        img: {
            width: "100%",
        },
        txtContainer: {
            textAlign: "left",
            color: "white",
        }, 
        button: {
            marginTop: "1rem",
        },
        countryImg: {
            maxWidth: "30rem",
            height: "auto",
            minHeight: "5rem",
            margin: "2rem",
        }, 
        container: {
            paddingTop: "4rem",
        }

      }));

    const classes = useStyles();





    return(
        <div className={classes.root}>
            <Grid className={classes.container}container justify="space-around" alignItems="center" >
                
                <Grid item className={classes.txtContainer} xs={12} sm={12} md={6} container justify="center" direction="column" >
                    
                    <Grid item><h1>Hire globally; Rose will comply locally so you can sleep peacefully at night</h1></Grid>
                    <Grid item><h3>Rose combines legal structure with technology to support your global workforce. <strong>All in the cloud.</strong></h3></Grid>
                    <Grid item><Button variant="contained" className={classes.button} color="primary" size="large">Schedule a Demo</Button></Grid>
                    
                </Grid>

                <Grid item xs={12} sm={12}  className={classes.countryImg} >
                    <img src="img/Countries.svg" alt="countries-img"/>
                </Grid>
                
            </Grid>
        </div>
    )
}

export default Header;