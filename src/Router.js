import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import About from './components/About'
import Booking from './components/Booking'
import Dashboard from './components/Dashboard'
import Desclaimer from './components/Desclaimer'
import GroupBooking from './components/multistepform/groupbooking'
import Home from './components/Home'
import HotelListing from './components/HotelListing'
import HotelPage from './components/HotelPage'
import Listproperties from './components/ListProperties'
import Offers from './components/Offers'
import Payment from './components/Payment'
import Thanks from './components/Thanks'

const Root = ({store}) => {
    return (
        <Router>
            <div>
                <Route exact path='/' component={Home}></Route>
                <Route path='/About' component={About}></Route>
                <Route path='/Booking' component={Booking}></Route>
                <Route path='/Dashboard' component={Dashboard}></Route>
                <Route path='/Desclaimer' component={Desclaimer}></Route>
                <Route path='/GroupBooking' component={GroupBooking}></Route>
                <Route path='/HotelListing' component={HotelListing}></Route>
                <Route path='/HotelPage' component={HotelPage}></Route>
                <Route path='/Listproperties' component={Listproperties}></Route>
                <Route path='/Offers' component={Offers}></Route>
                <Route path='/Payment' component={Payment}></Route>
                <Route path='/Thanks' component={Thanks}></Route>
            </div>
        </Router>
    )
}

export default Root

 