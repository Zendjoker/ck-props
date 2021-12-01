import React from 'react'
import PropTypes from 'prop-types'
export const Profile = (props) => {
    const handleName = () => alert (`this is ${props.fullName}`)
    //style inline
    const styleFullName = {color:"white",backgroundColor:"black",padding:"20px"}
    const styleBio = {color:"white",backgroundColor:"black",padding:"20px"}
    const styleProfession = {color:"white",backgroundColor:"black",padding:"20px"}
    const styleButton ={width:"100px",borderRadius:"7px",borderColor:"black"}
    //style inline
    return (
        <div>
            {props.children}
            <h1 style ={styleFullName}>{props.fullName}</h1>
            <h1 style ={styleBio}>{props.Bio}</h1>
            <h1 style ={styleProfession}>{props.Profession}</h1>
            <button style ={styleButton} onClick ={handleName}>Click Here</button>
        </div>
    )
}
Profile.defaultProps ={
    fullName : "fullname"
}
Profile.propTypes = {
    fullName : PropTypes.string
}