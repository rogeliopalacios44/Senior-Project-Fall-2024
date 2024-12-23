import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import Another1 from '@/views/AnotherView.vue';
import SignUp from '@/views/SignUp.vue';
import SignIn from '@/views/SignIn.vue';
import Book1 from '@/views/Book1.vue';
import CreateListing from '@/views/CreateListing.vue';
import Account from '@/views/Account.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/anotherView',
        name: 'View',
        component: Another1
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/book-1',
        name: 'Book1',
        component: Book1
    },
    {
        path: '/createlisting',
        name: 'CreateListing',
        component: CreateListing
    },
    {
        path: '/account',
        name: 'Account',
        component: Account
    }
    
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router