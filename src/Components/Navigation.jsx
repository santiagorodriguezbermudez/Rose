import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { mergeClasses } from '@material-ui/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fade from '@material-ui/core/Fade';
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';

function Navigation(props) {

    const theme = createMuiTheme({
        Navigation: {
          // Name of the component ⚛️
          primary: pink,

        },
      });

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        bar: {
            margin: "0 auto",
            maxWidth: '1440px',
            position: 'fixed',
            left: "50%",
            transform: "translateX(-50%)",
    
        },
        title: {
          flexGrow: 1,
        },
        logo: {
           
        },
        button: {
            backgroundColor: 'black',
            color:'white',
        }
      }));

    const classes = useStyles();
    const trigger = useScrollTrigger({
        threshold: 20,
    });

    function ScrollDown() {
        return (
            <Zoom>
            <div >
              Esto esta sirviendo?
            </div>
          </Zoom>        
        )
    }



    return (
        <div > 
            <AppBar 
                color = 'transparent'
                className={classes.bar}
               
            >
                <Toolbar>
                    <img src="img/Logo.svg" alt='logo' className={classes.logo} />
                        
                </Toolbar>
            </AppBar>

            <Fade in={trigger}>
                <AppBar 
                    position='fixed'
                    color = {(trigger) ? 'primary': 'transparent'}
                    className={classes.bar}
                >   
                    <Toolbar>
                        <img src="img/Logo.svg" alt='logo' className={classes.logo} />
                        <Zoom in={trigger}>
                            <Grid container justify = {'flex-end'}>
                                <Button variant="contained" className={classes.button}>Schedule a Demo</Button>
                            </Grid>     
                        </Zoom>
                    </Toolbar>
                </AppBar>
            </Fade>
        </div>
    );
}

export default Navigation;