<template lang="">
	<div class="header">
		<nav class="nav">
			<ul class="left item-container">	
				<li class="logo-container">
					<router-link :to="{name: 'home'}">
						<div class="logo">
							<img src="@/assets/logoamarillo.png" alt="logo">
							<h1 class="logo-text">Thot<span>ex</span></h1>
						</div>
					</router-link>
				</li>
				<li class="item" v-for="item in props.navBarRouterNames" :key="item.name"><router-link :to="{name: item.name}">{{ item.shownName }}</router-link></li>
			</ul>
			<ul class="right item-container" v-if="!isAuthenticated">
				<li class=" button-container"><button class="login-button" @click="toggleLoginView">Ingresar</button></li>
				<li class=" button-container"><button class="register-button" @click="toggleRegisterView">Registrarse</button></li>
			</ul>
			<ul class="right item-container" v-else>
				<router-link :to="{name: 'portal'}"><li class=" button-container"><button class="login-button">Portal</button></li></router-link>
				<li class=" button-container"><button class="register-button" @click="logout">Cerrar sesión</button></li>
			</ul>
		</nav>
	</div>
	<div class="form-container">
		<LoginForm class="modal-form" v-if="showLogin" @closeFormLogin="closeFormLogin"/>
		<RegistrationForm class="modal-form" v-if="showRegister" @closeFormRegister="closeFormRegister" @successRegister="successRegister"/>
	</div>
</template>

<script setup lang="ts">
import { Ref, ref, defineProps } from 'vue';
import RegistrationForm from '@/views/HomePageViews/RegistrationForm.vue';
import LoginForm from '@/views/HomePageViews/LoginForm.vue';
// import { useRouter } from 'vue-router';
import IRouterShownName from '@/interfaces/IRouter';
import { useCookies } from 'vue3-cookies';
import swal from 'sweetalert';
// Auth
import AuthService from '@/services/AuthService';

// const router = useRouter()
const { cookies } = useCookies();
const isAuthenticated : Ref<boolean> = ref(cookies.isKey('jwt'))

const showLogin : Ref<boolean> = ref(false);
const showRegister : Ref<boolean> = ref(false);


const successRegister = () => {
	swal("¡Genial!", "Se ha registrado exitosamente", "success");
	closeFormRegister();
};

const props = defineProps({
	navBarRouterNames: {
		type: Array as () => IRouterShownName[],
		},
	})



const toggleRegisterView = () => {
	showRegister.value = !showRegister.value;
	// router.push('/register')
};

const toggleLoginView = () => {
	showLogin.value = !showLogin.value;
	// router.push('/login')
};

const closeFormLogin = () => {
	toggleLoginView()
	// router.push('/')
}

const closeFormRegister = () => {
	toggleRegisterView()
	// router.push('/')
}

const logout = async () => {
	const auth : AuthService = new AuthService();
	if (await auth.logout()) {
		isAuthenticated.value = false
		swal("Se ha cerrado la sesión exitosamente");
	} else {
		console.log("Error al cerrar la sesión")
		console.log(auth.getError)
		swal("Error al cerrar la sesión");
	}
}


</script>

<style scoped lang="scss">
	div.header {
		width: 100%;
		height: $nav-bar-height;
		background-color: white;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	}

	nav.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	ul.item-container {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.item-container li.item {
		margin: 0.1rem;
		:hover {
			display: block flex;			
			border-radius: 5px;
			color: $custom-blue;
			background-color: #F9F9F9;
		}
		a {
			font-weight: bold;
			display: block;
			padding-top: calc($nav-bar-height	/ 4);
			padding-bottom: calc($nav-bar-height	/ 4);
			padding-left: 1rem;
			padding-right: 1rem;
			text-decoration: none;
			color: $custom-gray;
		}

		a.router-link-exact-active {
			text-decoration: none;
			color: $custom-blue;
			background-color: #F9F9F9;
			border-radius: 5px;
		}
	}

	.logo-container {
		display: flex;
		align-items: center;
		text-decoration: none;

		.logo {
			display: block flex;
			border-radius: 5px;
			align-items: center;
			justify-content: center;
			text-decoration: none;
			padding-right: 10px;

			img {
				width: 65px;
				height: 60px;
				margin-right: 5px;
			}
		}
		:hover {
				background-color: #F9F9F9;
				border-radius: 5px;

			}
		a.router-link-exact-active {
			text-decoration: none;
			color: $custom-blue;
			border-radius: 5px;
		}
		a {
			text-decoration: none;
		}
	}

	.logo-text {
		//no underline
		font-style: normal;
		text-decoration: none !important;
		color: $custom-gray;
		font-weight: bold;
		font-size: 1.5rem;
		padding: 0;
		a {
			text-decoration: none !important;
		}
		span {
			color: $custom-blue;
		}
		
	}

	.login-button {
		margin-top: 10px;
		text-transform: uppercase;
		outline: 0;
		background: $custom-blue;
		border: 0;
		padding: 15px;
		padding-left: 20px;	
		padding-right: 20px;
		color: #FFFFFF;
		font-size: 14px;
		border-radius: 5px;
		margin-right: 4px;
		//make the text bold
		font-weight: bold;
		
		:hover {
			background-color: #2957d6;
		}
		
	}

	.button-container {
		.register-button:hover {
			background-color: #F9F9F9;
			cursor: pointer;
		}
		.login-button:hover {
			cursor: pointer;
		}
	}

	.register-button {
		margin-top: 10px;
		text-transform: uppercase;
		outline: 0;
		background: white;
		border: 0;
		padding: 15px;
		padding-left: 20px;	
		padding-right: 20px;
		color: $custom-gray;
		font-size: 14px;
		border-radius:5px;
		margin-right: 4px;
		//make the text bold
		font-weight: bold;
	}
	
	.modal-form {
		z-index: 4;
	}
</style>