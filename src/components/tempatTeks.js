import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image
} from 'react-native';

const TempatTeks = ({icon, placeholderProps, passwordMode=false, eventProps}) => {
	return (
		<View style={styles.textInputWrap}>
			<View style={styles.textInputIconWrap}> 
				<Image
					style={styles.textInputIcon}
					source={icon}
				/>
			</View>
			<TextInput
				style={styles.textInput}
				placeholder={placeholderProps}
				secureTextEntry={passwordMode}
				onChangeText={text => eventProps(text)}
				// onChangeText={'hehe'}
				// value={countProps.toString()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	textInput: {
		height: 60,
		width: 250,
		borderBottomWidth: 1,
		fontSize: 15,
		paddingBottom: 8

	},
	textInputIconWrap: {
		borderBottomColor: 'black',
		borderBottomWidth: 1,
		paddingTop: 5,
		justifyContent: 'center',
		height: 60
	},
	textInputIcon: {
		marginRight: 15,
		width: 25, 
		height: 25,
	},
	textInputWrap: {
		flexDirection: 'row',
		height: 60
	}
});

export default TempatTeks;