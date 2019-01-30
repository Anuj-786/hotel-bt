import React, { Component } from 'react';
import banner from '../../assets/Bhutan_image.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class About extends Component {
	render() {
		return (

       <div className="About" style={{margin:"25px auto",width:"100%",maxWidth:"calc(100% - 48px)"}}>
       	<Typography variant="h4" color="secondary" gutterBottom>About Hotel Booking.bt</Typography>
       	<Grid container spacing={24}>
       		<Grid item xs={12}>
       			<Typography variant="h6" gutterBottom> Welcome to Hotel Booking.bt</Typography>
       			<Typography variant="body1" gutterBottom>The website provides you with precise information about the
       			 location of Bhutan hotels (including guest house, serviced apartments and home stays), hotel facilities &
       			  services, room tariff & amenities, contact address and any other additional information with pictures.This 
       			  allows you to make informed hotel choices. Hotel Booking.bt also provides 
       			star rating of Bhutan hotels as per Tourism Council of Bhutan’s classification.</Typography>
       			<div style={{backgroundImage:`url(${banner})`,margin:"25px 0",height:100,backgroundSize:"cover",backgroundAttachment:"fixed"}}></div>
       			<Typography variant="body1" gutterBottom>Hotel Booking.bt works very closely with all the hotels in Bhutan and Bhutan Travel Agents in order to provide our site-visitors with efficient and exhaustive awareness on choice of hotels and travel agents. Valid and reliable information is ensured through enduring commitment to update all information on the website.

Hotel Booking.bt is very keen on receiving feedback from our valued site-visitors, not only to improve our current services, but also to provide additional services and information if the need is required. Hotel Booking.bt is grateful for proactive recommendations and suggestions to further improve the site for better information broadcasting and convenience to site users. Hotel Booking.bt is always reachable and connected at all times.</Typography>
    <Typography variant="body1" gutterBottom>Hotel Booking.bt works very closely with all the hotels in Bhutan and Bhutan Travel Agents in order to provide our site-visitors with efficient and exhaustive awareness on choice of hotels and travel agents. Valid and reliable information is ensured through enduring commitment to update all information on the website.

Hotel Booking.bt is very keen on receiving feedback from our valued site-visitors, not only to improve our current services, but also to provide additional services and information if the need is required. Hotel Booking.bt is grateful for proactive recommendations and suggestions to further improve the site for better information broadcasting and convenience to site users. Hotel Booking.bt is always reachable and connected at all times.</Typography>
<Typography variant="body1" gutterBottom>Hotel Booking.bt works very closely with all the hotels in Bhutan and Bhutan Travel Agents in order to provide our site-visitors with efficient and exhaustive awareness on choice of hotels and travel agents. Valid and reliable information is ensured through enduring commitment to update all information on the website.

Hotel Booking.bt is very keen on receiving feedback from our valued site-visitors, not only to improve our current services, but also to provide additional services and information if the need is required. Hotel Booking.bt is grateful for proactive recommendations and suggestions to further improve the site for better information broadcasting and convenience to site users. Hotel Booking.bt is always reachable and connected at all times.</Typography>

       		</Grid>
       	</Grid>

       </div>


		)
	}
}
export default About;