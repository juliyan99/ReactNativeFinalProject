import React, { useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
  } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import Header from '../components/header';
import Photodetil from '../components/photodetil'
import Comment from '../components/comment'

const Photo = ({navigation, homeuserState}) => {
    const [dataPhoto, setDataPhoto] = useState([]);
    const photoID = navigation.getParam('photoID', 'photoID');

    useEffect(() => {
        if (homeuserState.UserID == undefined){
            navigation.navigate('Login');
        }
        if (dataPhoto.PhotoID == undefined){
            fetchData();
        }
    });
  
    const fetchData = async () => {
        err = ""
        isDetail = true;
        if (err == ""){
            try{
                const response = (await axios.post('https://twa3.tugu.biz/gatewayrnd/api/photodetail', 
                    {
                        UserID: homeuserState.UserID, 
                        PhotoID: photoID,
                        TokenGUID: homeuserState.Token,
                    })).data;
  
                    if (response.ErrorCode == "0"){
                        const dataPhoto = response.Result;
                        setDataPhoto(dataPhoto);
                    }else{
                        alert(response.ErrorDescription)
                        navigation.navigate('Login');
                    }
            }catch (error){
                err = error.message;
            }
        }
        if (err != ""){
          alert(err);
          navigation.navigate('Login');
        }
    }

    const GoHome = (userID) => 
    {
        navigation.navigate('Main', {UserID: userID})
    }

    try{
        if (dataPhoto.PhotoID != undefined){
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Header 
                            eventProps={key => GoHome(key, navigation)}
                        />
                    </View>
                    <View style={styles.cbox}>
                        <ScrollView>
                            <Photodetil 
                                data={dataPhoto} 
                                eventProps={key => GoHome(key, navigation)}
                            />
                            <Comment
                                data={dataPhoto.Comments}
                                eventProps={key => GoHome(key, navigation)}
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.footer}>
                        <Text> {'\u00A9'} Juliyan </Text>
                    </View>
                </View>
              );
        }else{
            return(<View><Text style={{fontSize:64}}>Loading..</Text></View>);
        }
    } catch (error) {
        console.log(error)
        return(<View><Text style={{fontSize:64}}>Loading..</Text></View>);
    }
}


const styles = StyleSheet.create({
    container: { flex: 1 },
    header: { height:100, top:0, alignItems:"center", flexDirection: "row", backgroundColor:"pink" },
    cbox: { flex: 1, width:"100%", display:"flex", overflow:"scroll", flexDirection:"column", flexWrap:"nowrap", backgroundColor: "grey" },
    profile: { height:150, backgroundColor:"gray" },
    photo: { minHeight:3000 ,backgroundColor:"green" },
    box: { width:"48%", backgroundColor:"red" },
    footer: { height:100, width:"100%", position:"absolute", bottom:0, backgroundColor: "pink" },
    circle: {borderRadius:50}
  })

const mapStateToProps = (state) => {  
  return {
    homeuserState : state ? state.homeuser : {}
  }
}

const c = connect(mapStateToProps, null)(Photo)
export default c;