import { styles } from './styles'
import login from '../../assets/login.png'


function Login(){
	return (
		<section style={styles.container}>
			<img src={login} style={styles.imgLogin}/>

			<div style={styles.containerForm}>
				<h3 style={styles.welcome}>Seja Bem-vindo(a)!</h3>

				<form style={styles.form}>
					<div style={styles.containerUser}>
						<label style={styles.labelText}>User:</label>
						<div style={styles.containerInput}>
							<input type="email" style={styles.inputText}  placeholder="usuario@user.com" />
						</div>
					</div>

					<div style={styles.containerUser}>
						<label style={styles.labelText}>Senha:</label>
						<div style={styles.containerInput}>
							<input type="email" style={styles.inputText} placeholder="usuario1234" />
						</div>
					</div>

					<section style={styles.containerBtn}>
						<input type="button" value="Login" style={styles.btnLogin}/>
						<input type="button" value="Esqueci a senha" style={styles.btnResetPassword}/>
					</section>

				</form>
			</div>
		</section>
	)
}

export default Login;