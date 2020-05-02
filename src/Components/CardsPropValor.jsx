import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function Services(props) {

    const servicesArray = [
        {
            icon: "img/Service1.svg",
            content: "Pay once and automagically run payroll within different countries",
        },
        {
            icon: "img/Service2.svg",
            content: "Keep track of your novelties online",
        },
        {
            icon: "img/Service3.svg",
            content: "Hire and onboard team members according to their local conditions",
        },
        {
            icon: "img/Service4.svg",
            content: "Offer your team members the best experience according to their country's legislation",
        }
    ]

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: "white",
            margin: "0 auto",
            maxWidth: "1440px",
            padding: "5rem 2rem",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "2rem",
            textAlign: "center",
            width: "16rem",
            height: "12rem",
            margin: "1rem auto"
        },
        img: {
            width: "5rem",
            marginBottom: "0.5rem"
        }   

      }));

    const classes = useStyles();

    function serviceLayout(card, key) {
        return (
            <Grid item md={3} sm={12} key={key}>
                <Paper elevation={5} className={classes.card}>
                    
                    <img className={classes.img} src={card.icon} alt="service-logo"/>
                    {card.content}
                
                </Paper>
            </Grid>
        )

    }

    return (
        <div className={classes.root}>
            <Grid container alignItems="center" justify="space-around" >
                {servicesArray.map((member, index) => serviceLayout(member, index))}

            </Grid>
        </div>   
    )
}

export default Services;