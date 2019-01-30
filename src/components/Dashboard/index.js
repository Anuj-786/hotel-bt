import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import StarRatingComponent from 'react-star-rating-component';
import ButtonBase from '@material-ui/core/ButtonBase';
import Wifi from '@material-ui/icons/Wifi';
import LocalParking from '@material-ui/icons/LocalParking';
import Button from '@material-ui/core/Button';
import LocationOn from '@material-ui/icons/LocationOn';
import { withStyles } from '@material-ui/core/styles';

class Dashboard extends Component {

    render () {
        const { classes } = this.props;
        return (
            
            <Grid container spacing={16} style={{padding: 25,height:"78vh"}}>
                <Grid item xs={12}><Typography variant="title" color="secondary">Dashboard</Typography></Grid>
                <Grid item xs={12}><Typography variant="caption" style={{fontSize: 24}} >Your Booking</Typography></Grid>
                <Grid item style={{padding: '0px 0px 0px 20px'}}>
                    <Typography variant="caption" style={{fontSize: 24, background: 'lightgray', padding: '0px 11px', borderRadius: '20px'}}>1</Typography>
                </Grid>
                <Grid item style={{padding: '0px 0px 0px 20px'}}>
                    <ButtonBase className={classes.image}>
                        <img width={250} className={classes.img} alt="complex" src={require('../../assets/1.jpg')} />
                    </ButtonBase>
                </Grid>
                <Grid item style={{padding: '0px 40px 0px 30px'}}>
                    <Typography varient="title" style={{fontSize: 24}}>Hotel Divyansh by DLS Hotels</Typography>
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={3.9}  
                    />
                    <Typography varient="caption" style={{fontSize: 12, display: 'flex', margin: '5px 0px 5px 0px'}}><LocationOn style={{fontSize: 16}} />Naddi</Typography>
                    <Typography varient="caption" style={{fontSize: 12, margin: '13px 0px 8px 0px'}}>1 min from Naddi View Point</Typography>
                    <Grid container>
                        <Typography style={{fontSize: 12, display: 'flex', margin: '8px 0px'}}><Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/> Free Wi-fi</Typography>
                        <Typography style={{fontSize: 12, display: 'flex', margin: '8px 15px'}}><LocalParking Wifi style={{fontSize: 16, margin: '0px 10px 0px 0px'}}/>Local Parking</Typography>
                        
                    </Grid>
                    <Typography varient="caption" style={{fontSize: 12, margin: '10px 0px 8px 0px'}}>Breakfast Included</Typography>
                    <Typography style={{fontSize: 16, display: 'flex', margin: '8px 0px', color: '#000', fontWeight: 'bold'}}>01 Delux Room, 02 Guest, 1 Night</Typography>
                </Grid>
                <Grid item style={{padding: '0px 30px 0px 40px', flexDirection: 'row', alignSelf: 'start', textAlign: 'end' }}>
                    <Button   color="secondary" className={classes.button}>₹ 1,999</Button>
                    <Typography varient="caption">+₹ 0 taxes and charges</Typography>
                </Grid>
                
            </Grid>
           
        ) 
    }
}

export default withStyles() (Dashboard);