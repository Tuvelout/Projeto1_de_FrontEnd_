<template>
<form @submit.prevent="submit">
    <label>email:    </label>
<input type="email" v-model="email">
<label>password:    </label>
<input  type="text" v-model="password">
<button type="submit" @click="login()">login</button>
<!-- {{  store.user }} -->
</form>
</template>


<script setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import  { useCounterStore } from "@/store/counter";
//importar router pa fazer redirect
import { useRouter } from 'vue-router';

const store = useCounterStore();

//definir router importado
const router = useRouter();

const email = ref("");
const password = ref("");

const login = () => {
const auth = getAuth();
signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    // Signed in
    alert("Entrou")
    const user = userCredential.user;
    store.updateUser(user);
    // ...
    router.push({ name: 'home' });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });};

</script>