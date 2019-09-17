import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native';

const imgWidth = (Dimensions.get('window').width/3)-20;
const imgHeight = imgWidth + 25;

const Daftar = ({data, eventProps}) => {
    return (
        <View  style={{ backgroundColor: 'red', display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {
            data.map(e => 
            <View 
                style={{width: imgWidth, height: imgHeight, margin: 10, backgroundColor: 'yellow'}} key={e.PhotoID}
                onTouchStart={() => eventProps(e.PhotoID)}
            > 
                <Image
                    style={styles.img}
                    source={{uri: e.URL}}
                />

                <Text>{e.Name}</Text>
            </View>)
        }
        </View>
    )
}

const styles = StyleSheet.create({
    card: 
    { 
        display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'column', backgroundColor: 'red', width: 125, height: 125 
    },
    img: { width: imgWidth, height: imgWidth }
  })

export default Daftar