import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class Disclaimer extends Component {
	render() {
		return (

       <div className="About" style={{margin:"25px auto",width:"100%",maxWidth:"calc(100% - 48px)",height:"70vh"}}>
       	<Typography variant="h4" color="secondary" gutterBottom>Disclaimer</Typography>
       	<Grid container spacing={24}>
       		<Grid item xs={12}>
       			
       			<Typography variant="body1" gutterBottom>The information contained in www.Hotel-Booking.bt is for general information purposes only. The information is provided by respective Bhutan hotels and Bhutan Travel agencies and while we endeavor to keep the information up to date, accurate and verified, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Please confirm all the 
                         details with the respective Bhutan hotels or Travel agencies at the time of booking.</Typography>
                         <Typography variant="body1" gutterBottom>In no event will Hotel-Booking.bt be liable for any 
                         loss or damage including without limitation, indirect or consequential loss or
                         damage, or any loss or damage whatsoever arising from loss of data or profits arising
                          out of, or in connection with, the information and, the use of this website.</Typography>
                            <Typography variant="body1" gutterBottom>Through this website you are able to link to other websites which are not under the control of Hotel-Booking.bt. We have no control over the nature, content and availability of those sites. The inclusion of any 
                            links does not necessarily imply a recommendation or endorse the views expressed within them.</Typography>
                             <Typography variant="body1" gutterBottom>Every effort will be made to keep the website updated, running smoothly and information verified. However, Hotel-Booking.bt takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control, or information changing without our notice.

                        </Typography>
       			 <Typography variant="body1" gutterBottom>All above is Dummy Desclaimer Text
                        </Typography>
       	</Grid>
             </Grid>

       </div>


		)
	}
}
export default Disclaimer;