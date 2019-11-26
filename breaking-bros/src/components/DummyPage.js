import React from 'react';
import '../App.css'
import Grid from '@material-ui/core/Grid'


function DummyPage() {
  return (
    <div>
       <div className="hero-image">
            <div className="hero-text">
                <h1>Women in Tech</h1>
                <h4>These are the smart Women, People of Color and queer idols in technology!</h4>
            </div>
        </div> 
        <Grid container justify="center" spacing={5}>
            <Grid item xs={3}>
                <h2>Women are cool and smart!</h2>
            </Grid>
            <Grid item xs={3}>
                <h2>Queers can do tech!</h2>
            </Grid>
        </Grid>
        <Grid container justify="center" spacing={5}>
            <Grid item xs={3}>
                <h2>Meet Evelynn, she invented the internet!</h2>
            </Grid>
            <Grid item xs={3}>
                <h2>Diversity rocks!</h2>
            </Grid>
        </Grid>
    </div>
  );
}

export default DummyPage;
