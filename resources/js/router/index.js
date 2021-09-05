import Vue from 'vue';
import Router from 'vue-router';
import decode from 'jwt-decode';
import store from '@/store';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "/home",
            meta: {
            }
        },
        {
            path: "/home",
            name: 'front.home',
            component: () => import('@/pages/front/Index.vue'),
            meta: {
                // requiresAuth: true
            }
        },
        {
            path: "/about_me",
            name: 'front.about_me',
            component: () => import('@/pages/front/AboutMe.vue'),
            meta: {
                // requiresAuth: true
            }
        },
        {
            path: '/blog/',
            component: () => import('@/components/Blank'),
            children: [
                {
                    path: 'all/',
                    name: 'front.blog.all',
                    component: () => import('@/pages/front/blog/All'),
                },
            ]
        }
    ],
});


var vm = this;


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {

            function errorResponseHandler(error) {
                // check for errorHandle config
                if( error.config.hasOwnProperty('errorHandle') && error.config.errorHandle === false ) {
                    return Promise.reject(error);
                }
            
                // if has response show the error 
                if (error.response) {
                    if(error.response.data.message == 'Unauthenticated.')
                    {
                        store.dispatch('logout')
                        .then(() => {
                            window.location.href = "/"
                        })
                    }
                    if(error.response.data.message == 'This action is unauthorized.')
                    {
                        toastr.error(error.response.data.message, 'Oopps! Sorry');
                        router.push({name: 'home'})
                    }
                }
            }
            
            // apply interceptor on response
            axios.interceptors.response.use(
               response => response,
               errorResponseHandler
            )
            
            const token = localStorage.getItem('token');
            if (!token) {
                store.dispatch('logout')
                .then(() => {
                    window.location.href = "/";
                    // toastr.success('Successfully logged out')
                })
            }
            
            try {
                const { exp } = decode(token);
                if (exp < new Date().getTime() / 1000) {
                    swal({
                        title: "Sesi Login Anda Telah Berakhir",
                        text: "Anda harus login Kembali",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                    })
                    .then((value) => {
                        if (value) {
                            store.dispatch('logout')
                            .then(() => {
                                toastr.success('You will be redirected to Login page')
                                window.location.href = "/"
                            })
                        } else {
                            store.dispatch('logout')
                            .then(() => {
                                toastr.success('You will be redirected to Login page')
                                window.location.href = "/"
                            })
                        }
                    })
                    
                }
            } catch (e) {
                store.dispatch('logout')
                .then(() => {
                    window.location.href = "/";
                    // toastr.success('Successfully logged out')
                })
            }
            next()
            return
        }
        next('/')
    } else {
        next()
    }
})

router.beforeResolve((to, from, next) => {
    // if (to.path) {
    //     // window.confirm('Do you really want to leave? you have unsaved changes!')
    //     // if (window.confirm("Do you really want to leave?")) { 
    //     // }
    // }
    NProgress.start()
    next()
});

router.afterEach((to, from, next) => {
    NProgress.done()
});


export default router