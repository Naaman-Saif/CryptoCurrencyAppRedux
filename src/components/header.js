import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Header extends React.Component{
    render(){
        return(
        <View style={styles.headerContainer}>
            <Text style={styles.header}>CryptoCurrency App</Text>
        </View>
        )
    }
}

const styles= StyleSheet.create({
    headerContainer:{
        display:"flex",
        marginTop:55,
        alignItems:"center"
    },
    header:{
        fontWeight:"bold",
        fontSize:20
    }
})
