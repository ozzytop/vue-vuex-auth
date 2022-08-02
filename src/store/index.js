import { createStore } from 'vuex'
import { auth } from '../firebase/config'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

const store = createStore({
    state: {
        user: null,
        authIsReady: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
            console.log('user state changed: ', state.user)
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload
        }
    },
    actions: {
        //async code
        async signUp(context, {email, password}) {
            console.log('action executed')
            
            const res = await createUserWithEmailAndPassword(auth, email, password)
            if(res) {
                context.commit('setUser', res.user  )
            } else {
                throw new Error('could not complete the sign up')
            }
            
        },
        async login(context, {email, password}) {
            
            console.log('login executed')
            
            const res = await signInWithEmailAndPassword(auth, email, password)
            if(res) {
                context.commit('setUser', res.user  )
            } else {
                throw new Error('could not complete the login')
            }
        },
        async logout(context) {
            console.log('logout')
            await signOut(auth)
            
            context.commit('setUser', null)
            
        }
    }
    
})

// this is executed just the first time, then we call unsub() to not to call it anymore
const unsub = onAuthStateChanged(auth, (user) => {
    store.commit('setAuthIsReady', true)
    store.commit('setUser', user)
    unsub()
})

export default store