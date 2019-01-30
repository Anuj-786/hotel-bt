import React from 'react';
const nights = [1,2,3,4,5,6,7,8,9,10];

class Nights extends React.Component {

  

  
  render() {
    return (
    
       <select  name={this.props.Thisid} onChange={this.props.SelectLoc} value={this.props.SelectVal}
              >
               <option key="0" data-key="0">0</option>
                {nights.map(el=>(
                  <option key={el} data-key={el}>{el}</option>
                  ))}
              </select>
      
    );
  }
}

export default Nights;