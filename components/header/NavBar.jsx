import react from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles from './screenheader.style.js'
const NavBar = (props) =>{
    return(
        <TouchableOpacity style={styles.btnContainer}>
            {/* <Image source={props.iconUrl}/> */}
        </TouchableOpacity>
    )
}

export default NavBar;