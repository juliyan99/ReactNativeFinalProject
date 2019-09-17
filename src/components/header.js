import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux'


const Header  = ({homeuserState, eventProps}) => {
    try{
      return(
          <View key={homeuserState.UserID} onTouchStart={() => eventProps(homeuserState.UserID)}>
            <Text style={{fontSize:32}}>Final Project {homeuserState.Name}</Text>
          </View>);
    }catch{
      return(<View><Text style={{fontSize:64}}>Loading..</Text></View>);
    }
  }

  const mapStateToProps = (state) => {  
    return {
      homeuserState : state ? state.homeuser : {}
    }
  }

  const c = connect(mapStateToProps, null)(Header)
  export default c;