import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
  } from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import Daftar from '../components/daftar';
import Header from '../components/header';
import Profile from '../components/profile';

const Main = ({navigation, homeuserState}) => {
  const [dataHome, setDataHome] = useState([]);
  const UserID = navigation.getParam('UserID', 'UserID');
  
  useEffect(() => {
      if (dataHome.UserID == undefined || dataHome.UserID != UserID){
          fetchData();
      }
    });
  
  const fetchData = async () => {
  err="";
  
  if (UserID == undefined || UserID == ""){
    UserID = homeuserState.UserID
  }

  if (err == "")
  {
    try {
      if (homeuserState.UserID != undefined){
          const response = (await axios.post('https://twa3.tugu.biz/gatewayrnd/api/home', 
          {
              UserID: homeuserState.UserID, 
              IDUser: UserID,
              TokenGUID: homeuserState.Token,
          })).data;

          if (response.ErrorCode == "0"){
              const dataHome = response.Result;
              setDataHome(dataHome);
          }else{
              alert(response.ErrorDescription)
              navigation.navigate('Login');
          }
      }			
    } catch (error){
      err = error.message;
    }
  }
  if (err != ""){
      alert(err);
      navigation.navigate('Login');
    }
  };

  const DetailPhoto = (photoID) => 
  {
    err = ""
    isDetail = true;
    if (err == ""){
        try{
          navigation.navigate('Photo', {photoID: photoID});
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

  try
    {
      if (dataHome.Photos != undefined){
        return (
          <View style={styles.container}>
              <View style={styles.header}>
                <Header 
                  eventProps={key => GoHome(key, navigation)}
                />
              </View>
              <View style={styles.cbox}>
                <ScrollView>
                  <Profile data={dataHome} />
                  <Daftar 
                      data={dataHome.Photos}
                      eventProps={key => DetailPhoto(key, navigation)}
                  />
                  </ScrollView>
              </View>
              <View style={styles.footer}>
                  <Text> {'\u00A9'} Juliyan </Text>
              </View>
          </View>
        );
      }
      return(<View><Text style={{fontSize:64}}>Loading..</Text></View>);
    } catch (error) {
      alert(error)
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
    circle: {borderRadius:50,margin: 10, width: 100, height: 100}
  })

const mapStateToProps = (state) => {  
  return {
    homeuserState : state ? state.homeuser : {}
  }
}

const c = connect(mapStateToProps, null)(Main)
export default c;