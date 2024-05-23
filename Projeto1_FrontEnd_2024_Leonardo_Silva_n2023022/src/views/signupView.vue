<template>
    <form @submit.prevent="submit">
        <label>email: </label>
        <input type="email" v-model="email">
        <label>password: </label>
        <input type="text" v-model="password">
        <button type="submit" @click="signup()">Register</button>
        <!-- {{  store.user }} -->
    </form>
</template>
    
    
<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import  { useCounterStore } from "@/store/counter";

const store = useCounterStore();

const email = ref("");
const password = ref("");

const signup = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed up
            alert("Criou") 
            const user = userCredential.user;
            // Pina v
            store.updateUser(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
};

</script>