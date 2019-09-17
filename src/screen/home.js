import React, { useState, useEffect} from 'react';
import {
  View,
  Text
} from 'react-native';


import { connect } from 'react-redux'


const Home = ({navigation, homeuserState}) => {
    try{
        if (dataHome.Photos != undefined){
            return(
                <View>
                    <Daftar 
                        data={dataHome.Photos}
                        eventProps={key => DetailPhoto(key, navigation)}
                    ></Daftar>
                </View>);
        }
        return(<View><Text style={{fontSize:64}}>Loading..</Text></View>);
    } catch (error) {
        console.log(error);
        return(<View><Text style={{fontSize:64}}>Loading..</Text></View>);
    }
}

const mapStateToProps = (state) => {  
    return {
      homeuserState : state ? state.homeuser : {}
    }
  }

const c = connect(mapStateToProps, null)(Home)
export default c;