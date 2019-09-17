import React, {Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight

} from 'react-native';

const Tombol = ({eventProps, teks}) => {
	return (
		<TouchableHighlight style={styles.button} onPress={() => eventProps()} underlayColor="#FB8C00">
			<View>
				<Text style={styles.buttonText}>
					{teks}
				</Text>
			</View>
		</TouchableHighlight>
		);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 5,
		backgroundColor: '#F57C00',
		width: 350,
		height: 50,
		justifyContent: 'center',
		alignItems: "center",
		marginTop: 20
	},
	buttonText: {
		color: '#FFCC80'
	},
});

export default Tombol;