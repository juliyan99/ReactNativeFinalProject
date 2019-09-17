import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const screenWidth = Dimensions.get('window').width - 25

const Photodetil  = ({data, eventProps}) => {
    try{
      return(
        <View  style={ styles.container }>
            <View key= {data.UserID} onTouchStart={() => eventProps(data.UserID)}><Text>{data.UserName}</Text></View>
            <View>
                <Image
                    style={ styles.circle }
                    source={{uri: data.URL}}
                />
            </View>
            <View><Text>Likes : { data.Likes }</Text></View>
            <View>
                <Text>{ data.Caption }</Text>
            </View>
        </View>);
    }catch{
      return(<View><Text style={{fontSize:64}}>Loading..</Text></View>);
    }
  }

  const styles = StyleSheet.create({
    container: { backgroundColor: 'red', display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' },
    circle: { width: screenWidth, height: screenWidth },
    detil: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
    detilBox: { flexDirection: 'column', margin: 5 },
    detilCount: { textAlign: 'center', fontWeight: 'bold' },
    detilRemark: { textAlign: 'center' }
  })

  export default Photodetil;