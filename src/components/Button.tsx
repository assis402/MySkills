import React from "react";
import { 
	TouchableOpacity,
	TouchableOpacityProps, 
	Text, 
	StyleSheet 
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
	title: string
}

export function Button(props : ButtonProps){

    return (
        <TouchableOpacity 
            style={styles.button}
            activeOpacity={0.7}
            onPress={props.onPress}
        >
            <Text style={styles.buttonText}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#A370F7',
		padding: 15,
		borderRadius: 7,
		alignItems: 'center',
		marginTop: 20
	},
	buttonText: {
		color: '#FFF',
		fontSize: 17,
		fontWeight: 'bold'
	}
})