import React from 'react'
import Rainbow from '../hoc/rainbow'
const Contact =(props)=>{
    // console.log(props);
    // setTimeout(()=>{
    //     props.history.push('/about')
    // },2000)
    return(
        <div className="container">

            <h4 className="center">Contact</h4>
            <p>This is contact page </p>
        </div>

    )
}
export default Rainbow(Contact)