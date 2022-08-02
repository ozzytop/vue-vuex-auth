import { initializeApp  } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCv72rZgaXZrKcZOl6Zrywx9iXsqZiNVEU",
    authDomain: "vuex-4-vue-auth.firebaseapp.com",
    projectId: "vuex-4-vue-auth",
    storageBucket: "vuex-4-vue-auth.appspot.com",
    messagingSenderId: "990134557098",
    appId: "1:990134557098:web:6555d15cdf4d3aed6cb3d3"
  };

// init firebase  
initializeApp(firebaseConfig)

// init firebase auth
const auth = getAuth()

export { auth }