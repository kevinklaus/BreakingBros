import React from 'react'
import {RouteButton} from './RouteButton'
import '../App.css'
import Grid from '@material-ui/core/Grid'

function LandingPage() {
  return (
    <div>
        <div className="hero-image">
            <div className="hero-text">
                <h1>Women in Tech</h1>
                <p>get inspired by the smart Women, PoC and queer idols in tech</p>
                <RouteButton color="primary" variant="outlined" text="Read article" route="/dummy" color="inherit"/>
            </div>
        </div> 
        <Grid container justify="center">
            <Grid item xs={8}>
                HI
            </Grid>
        </Grid>
        <Grid container justify="center">
            <Grid item xs={8}>
                HI
            </Grid>
        </Grid>
    </div>
  );
}

export default LandingPage;