import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';
import axios from 'axios'
import { fetchHome } from '../redux/action'
import { connect } from 'react-redux'

const user = '../../assets/user.png'
const lock = '../../assets/lock.png'

import Tombol from '../components/tombol'
import TempatTeks from '../components/tempatTeks'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height
err = "";
Username = "";
Password = "";

const Login = ({fetchDispatch, navigation}) => {
    const fetchData = async () => {
		err="";

		if (Username == "" || Password == ""){
			err = "Username / Password belum terisi";
		}
		if (err == "")
		{
			try {
				const response = (await axios.post('https://twa3.tugu.biz/gatewayrnd/api/user', {Email: Username, Password: Password})).data;
				if (response.ErrorCode == "0"){
					fetchDispatch(response.Result);
					navigation.navigate('Main', {UserID: response.Result.UserID});
				}
				err = response.ErrorDescription;			
			} catch (error){
				err = error.message;
			}
		}
		if (err != ""){
			alert(err);
		}
	};
	
	const setUsername = (val) =>{
		Username = val;
	}

	const setPassword = (val) =>{
		Password = val;
	}

	return (
		<View style={{flex:1}}>
			<View style={styles.backgroundOne}>
				<Text style={{color:"black"}}>{this.err}</Text>
				<View style={styles.backgroundWrap}>
					<TempatTeks
						icon={require(user)}
						placeholderProps='Username'
						eventProps={text => setUsername(text)}
					/>
					<TempatTeks
						icon={require(lock)}
						placeholderProps='Password'
						passwordMode={true}
						eventProps={text => setPassword(text)}
					/>
				</View>
					
				<Tombol
					eventProps={() => fetchData()}
					teks='Login'
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundOne: {
		backgroundColor: '#FFCC80',
		justifyContent: 'center',
		alignItems: 'center',
		width: screenWidth,
		height: screenHeight
	},
	backgroundWrap: {
		backgroundColor: 'white',
		opacity: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		width: 350,
		height: 200
	}

});

const mapStateToProps = (state) => {  
    return {
      homeuserState : state ? state.homeuser : {}
    }
  }

const mapDispatchToProps = (dispatch) => {
	return {
		fetchDispatch: (Result) => dispatch(fetchHome(Result))
	}
}

const c = connect(mapStateToProps, mapDispatchToProps)(Login)
export default c;

