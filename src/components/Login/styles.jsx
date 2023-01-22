import { black, fullBlack, white, color1, color2 } from '../../config/colors'

export const styles = {
	container:	{
		width: '100%', height: '100vh',
		backgroundColor: fullBlack,
		display: 'flex',
		justifyContent:'space-around',
		alignItems: 'center'
	},
	imgLogin: {
		width: 500, height: 500,
	},
	containerForm: {
		width: 550, height: 450,
		borderRadius: 20,
		backgroundColor: black,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	welcome: {
		textAlign: 'center',
		color: color1,
		fontSize: 40,
		fontStyle: 'italic',
		fontWeight: 'bold',
	},
	form:{
		width: '100%', 
		height: 400,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	containerUser:{
		width: '80%',
		height: 90,
		marginBottom: 20
	},
	labelText:{
		fontSize: 20,
		fontStyle: 'italic',
		color: color1
	},
	containerInput:{
		width: '100%',
		display: 'flex',
	},
	inputText:{
		marginTop: 10,
		width: '100%', 
		height: 20,
		borderRadius: 10,
		border: 'none',
		outline: 0,
		padding: 15,
		fontSize: 15
	},
	containerBtn:{
		width: 300,
		height: 80,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnLogin:{
		width: 150,
		height: 40,
		backgroundColor: color2,
		color: white,
		fontSize: 18,
		fontWeight: 'bold',
		border: 'none',
		borderRadius: 15,
		cursor: 'pointer'
	},
	btnResetPassword: {
		width: 150,
		height: 40,
		backgroundColor: black,
		color: white,
		fontSize: 12,
		fontWeight: 'bold',
		border: 'none',
		borderRadius: 15,
		cursor: 'pointer'	
	}

}