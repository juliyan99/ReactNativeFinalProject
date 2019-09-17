import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet
} from 'react-native';

const imgWidth = (Dimensions.get('window').width)-20;

const Comment = ({data, eventProps}) => {
    return (
        <View  style={{ backgroundColor: 'red', display: "flex", flexDirection: "column", flexWrap: "wrap" }}>
        {
            data.map(e => 
            <View 
                style={{width: imgWidth, margin: 10, backgroundColor: 'yellow'}} key={e.UserID}
                onTouchStart={() => eventProps(e.UserID)}
            > 
                <Text>{ e.UserName }</Text>
                <Text>{ e.Comment }</Text>
            </View>)
        }
        </View>
    )
}

const styles = StyleSheet.create({
    card: 
    { 
        display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'column', backgroundColor: 'red', width: 125, height: 125 
    }
  })

export default Comment