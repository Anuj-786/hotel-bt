import React, {Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

class Thanks extends Component {

    constructor(props) {
        super(props) 

        this.state = {
            message: "Thank you for making your reservation with us."
        }
    }

    render() {
        return(
            <Grid container spacing={16} style={{padding: 30,height:"78vh",alignItems:"center",WebkitAlignItems:"center"}}>
                <Grid item xs={12}>
                    <Typography color='secondary' variant="title" style={{textAlign: 'center', fontSize: 28}} gutterBottom>{this.state.message}</Typography>
                 <Typography color='primary' variant="title" style={{textAlign: 'center'}}><Link style={{textDecoration: 'none'}} to="/Dashboard"> Review your booking please visit the Dashboard Page</Link></Typography>
                </Grid>
                <Grid item xs={12}>
                   
                </Grid>
            </Grid>
        )
    }
}

export default Thanks;