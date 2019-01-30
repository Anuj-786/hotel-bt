import React, { Component } from 'react';
import banner from '../../assets/Bhutan_image.jpg';
import './index.css';
import Paper from '@material-ui/core/Paper';
import {SearchForm} from '../SearchForm';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import RightIcon from '@material-ui/icons/Send';
import {Link} from 'react-router-dom';


class Banner extends Component {
    render() {
        return (
            <div className="banner" style={{backgroundImage:`url(${banner})`,position:'relative'}}>
              <Link to="/Offers"><Button variant="contained" color="secondary" style={{ position: 'absolute',right:40,top: 40}}>
          get Offers
      </Button></Link>
               <Paper className="banner-wrapper">
                 <Typography variant="h4" color="secondary">
                 Your website for all Bhutan Travel needs!
      			</Typography>
      			  <Typography variant="body2" gutterBottom style={{padding: '0 0 0 10px'}}>
                 Find deals with hotels, apartments, and more...
      			</Typography>
                <Link to="/groupbooking" style={{textDecoration:'none'}}> 
                <Button variant="contained" color="secondary" style = {{textTransform: 'none',fontWeight: 'bold' }}>
                For Group Booking <RightIcon style={{paddingLeft: '5px'}}></RightIcon>
                </Button>  
                </Link>   
                <div style={{width:'100%',marginBottom:'5px'}}></div>       
                <Divider style={{marginBottom: '25px'}}/>
                <SearchForm />
               </Paper>
               </div>
            
        )
    }
}

export default Banner;