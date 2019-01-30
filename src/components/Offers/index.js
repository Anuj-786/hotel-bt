import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import image from '../../assets/special_offers.jpeg';
import OfferButton from './model.js';
import Paper from '@material-ui/core/Paper';

class Offers extends Component {
     state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

    render() {
        return  (
            <div className="offers" style={{width:'100%',maxWidth:'80%',margin:'25px auto'}}>
           <Typography variant="h5" color="secondary" style={{textAlign: 'center',marginBottom:25}}>
            Hurry Up! Get Offers on Hotel Booking valid upto DD/MM/YYYY   
          </Typography>
          <Grid container spacing={24} style={{minHeight:"65vh"}}>
              <Grid item sm={6} >
                 <Paper style={{display:'flex',display:'-webkit-flex',alignItems:'center',WebkitAlignItems:'center',
                              justifyContent:'space-between',WebkitJustifyContent:'space-between',padding:20}}>
                  <div >
                  <img src={image} width="150"/>
                  </div>
                  <div>
                     <Typography variant="h6" color="secondary" gutterBottom  style={{}}>
                         VISA Assistance
                     </Typography> 
                      <Typography variant="body1" gutterBottom  style={{}}>
                         Hotel Booking.bt provide you the VISA assistance.<br/>
                         Hurry Up! Offer valid upto DD/MM/YYYY   
                     </Typography> 
                     <div style={{textAlign:"right", marginTop:20}}>
                     <OfferButton offerText = "Get Free VISA Assistance"/>
                     </div>
                  </div>
                  </Paper>
              </Grid>
              <Grid item sm={6}>
                  <Paper style={{display:'flex',display:'-webkit-flex',alignItems:'center',WebkitAlignItems:'center',
                              justifyContent:'space-between',WebkitJustifyContent:'space-between',padding:20}}>
                  <div >
                  <img src={image} width="150"/>
                  </div>
                  <div>
                     <Typography variant="h6" color="secondary" gutterBottom  style={{}}>
                         Vehicle Assistance
                     </Typography> 
                      <Typography variant="body1" gutterBottom  style={{}}>
                         Hotel Booking.bt provide you the Vehicle Assistance.<br/>
                         Hurry Up! Offer valid upto DD/MM/YYYY   
                     </Typography> 
                      <div style={{textAlign:"right", marginTop:20}}>
                     <OfferButton offerText = "Get Free Vehicle Assistance"/>
                     </div>
                  </div>
                  </Paper>
              </Grid>
              <Grid item sm={6}>
                     <Paper style={{display:'flex',display:'-webkit-flex',alignItems:'center',WebkitAlignItems:'center',
                              justifyContent:'space-between',WebkitJustifyContent:'space-between',padding:20}}>
                  <div >
                  <img src={image} width="150"/>
                  </div>
                  <div>
                     <Typography variant="h6" color="secondary" gutterBottom  style={{}}>
                         Get a local phone with data
                     </Typography> 
                      <Typography variant="body1" gutterBottom  style={{}}>
                         Hotel Booking.bt provide you a local phone with data.<br/>
                         Hurry Up! Offer valid upto DD/MM/YYYY   
                     </Typography> 
                      <div style={{textAlign:"right", marginTop:20}}>
                     <OfferButton offerText = "Get a local phone with data"/>
                     </div>
                  </div>
                  </Paper>
              </Grid>
              <Grid item sm={6}>
                  <Paper style={{display:'flex',display:'-webkit-flex',alignItems:'center',WebkitAlignItems:'center',
                              justifyContent:'space-between',WebkitJustifyContent:'space-between',padding:20}}>
                  <div >
                  <img src={image} width="150"/>
                  </div>
                  <div>
                     <Typography variant="h6" color="secondary" gutterBottom  style={{}}>
                         VISA Extension
                     </Typography> 
                      <Typography variant="body1" gutterBottom  style={{}}>
                         Hotel Booking.bt provide you VISA Extension.<br/>
                         Hurry Up! Offer valid upto DD/MM/YYYY   
                     </Typography> 
                      <div style={{textAlign:"right", marginTop:20}}>
                     <OfferButton offerText = "Get VISA Extension"/>
                     </div>
                  </div>
                  </Paper>
              </Grid>
          </Grid>

            </div>
        )
    }
}

export default Offers;