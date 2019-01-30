import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Confirm extends Component {
	
	constructor(props) {
	  super(props);
	}
	render() {
		const {
      values: { firstName, LastName, Email, Phone }
    } = this.props;
		return (
         
          <div style={{width:'100%',height:'80vh',maxWidth:'calc(100% - 48px)',
          margin:'25px auto',display:'flex',display:'-webkit-flex',flexWrap:'wrap',WebkitFlexWrap:'wrap',
          }}>
          <div style={{flex:'0 0 100%',webkitFlex:'0 0 100%'}}>
           <AppBar position="static" color="default" style={{marginBottom:25}}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Thanks {`${firstName} ${LastName} `}for Group Booking
          </Typography>

        </Toolbar>
      </AppBar>
       <Typography variant="h6" color="inherit">
            Our team will contact you on
          </Typography>
          <Typography variant="h6" color="inherit">
           Email: {Email}
          </Typography>
          <Typography variant="h6" color="inherit">
            phone: {Phone}
          </Typography>
          
          <Typography variant="h6" color="inherit">
            <a href="/">go to home page</a>
          </Typography>
           </div>
          </div>
          
			)
			
		
	}
}

export default Confirm;