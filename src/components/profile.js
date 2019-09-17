import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';


const Profile  = ({data}) => {
    try{
      return(
        <View  style={ styles.container }>
            <View>
                <Image
                    style={ styles.circle }
                    source={{uri: data.ProfilePicture}}
                />
            </View>
            <View style={ styles.detil }>
                <View style={ styles.detilBox }>
                    <View style={ styles.detilCount }><Text>{ data.Posts }</Text></View>
                    <View style={ styles.detilRemark }><Text>Posts</Text></View>
                </View>
                <View style={ styles.detilBox }>
                    <View style={ styles.detilCount }><Text>{ data.Followers }</Text></View>
                    <View style={ styles.detilRemark }><Text>Followers</Text></View>
                </View>
                <View style={ styles.detilBox }>
                    <View style={ styles.detilCount }><Text>{ data.Following }</Text></View>
                    <View style={ styles.detilRemark }><Text>Following</Text></View>
                </View>
            </View>
        </View>);
    }catch{
      return(<View><Text style={{fontSize:64}}>Loading..</Text></View>);
    }
  }

  const styles = StyleSheet.create({
    container: { backgroundColor: 'red', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' },
    circle: { borderRadius:50, margin: 10, width: 100, height: 100 },
    detil: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
    detilBox: { flexDirection: 'column', margin: 5 },
    detilCount: { textAlign: 'center', fontWeight: 'bold' },
    detilRemark: { textAlign: 'center' }
  })

  export default Profile;