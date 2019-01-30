import React from 'react'
import { connect } from 'react-redux';
import {add} from '../actions'
const TestComp = (props) => {
    console.log(props)
    return (
        <div>
            <button onClick={e=>add()}> add</button>
            <p>HI: {props.data.adds}</p>
        </div>
    )
}
const mapStateToProps = state => ({
    data: state
})
const mapDispatchToProps = dispatch => ({
    addto: (e) => console.log(e)
})

export default connect(mapStateToProps, mapDispatchToProps)(TestComp)