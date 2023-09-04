import React from "react";
import {View, Text, TouchableOpacity, Image} from 'react-native'
import styles2 from "./StockCard.style";

const StockCard = (props) => {

    const contentContainerStyle = {
        ...styles2.contentContainer,
        backgroundColor: props.item.favorite ? "grey" : "white"
}


    return(
        <View style={styles2.container} key={props.item.symbol}>
            <TouchableOpacity style={contentContainerStyle} onPress={() => props.toggleFavorite(props.item.symbol)}>
                <View style={styles2.topInfo}>
                        <Text>{props.item.symbol}</Text>
                        <Text>{props.item.country}</Text>
                        <Text>{props.item.currency}</Text>
                </View>
                <View style={styles2.nameContainer}>
                    <Text>{props.item.name}</Text>
                </View>

                <View style={styles2.bottomInfo}>
                    <Text>{props.item.exchange}</Text>
                    <Text>{props.item.type}</Text>
                    <Text>{props.item.mic_code}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default StockCard;