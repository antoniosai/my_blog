import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'
import $axios from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        status: '',
        token: localStorage.getItem('token') || '',
        user: localStorage.getItem('user') || {}
    },
    
    mutations: {

        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, {
            token,
            user
        }) {
            state.status = 1
            state.token = token
            state.user = user
        },
        auth_error(state) {
            state.status = 'error'
        },
        logout(state) {
            state.status = ''
            state.token = ''
            localStorage.removeItem('user')
            state.user = {}
        },

    },

    actions: {

        login({
            commit
        }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios.post('/api/auth/login', user)
                .then(res => {

                    if (res.data.status == 1)
                    {
                        let token = res.data.token
                        let user = res.data.user

                        localStorage.setItem('token', token)
                        localStorage.setItem('user', JSON.stringify(user));

                        $axios.defaults.headers.common['Authorization'] = token

                        commit('auth_success', {
                            token,
                            user
                        })

                        resolve(res)

                        // this.$router.push('module1.abmp_report')
                    } else {
                        resolve(res)
                    }
                    

                })
                .catch(err => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(err)
                })
            })
        },


        logout({ commit }) {
            return new Promise((resolve, reject) => {
                commit('logout')

                axios.post('/api/auth/logout')
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                delete $axios.defaults.headers.common['Authorization']
                resolve()
            })
        }


    },

    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        user: state => state.user
    }

})