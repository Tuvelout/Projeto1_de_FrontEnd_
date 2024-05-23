<template>
  <div class="greetings">
        <h3>
      You’ve successfully, entered the Dog facts page 🐾 project created by
      <a href="https://instagram.ffnc1-1.fna.fbcdn.net/v/t51.29350-15/239988997_817369655605898_7158822048162118596_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ffnc1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=3oDYhhuIzDcQ7kNvgF3BLWg&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MjY0NDU4NjA4NDI0MjQ3MTIyOQ%3D%3D.2-ccb7-5&oh=00_AYDfCDlh0WM-vYDSH2wG1_VtZrb73vgbc0AGTfaWwIzpnA&oe=6646D691&_nc_sid=cf751b" target="_blank" rel="noopener">Tuvelout</a>,
      <a href="https://i.pinimg.com/736x/d4/f7/44/d4f744eab328a8c3cc2c108316e1e7df.jpg" target="_blank" rel="noopener">Quiko</a>and
      <a href="https://hips.hearstapps.com/hmg-prod/images/medium-sized-dogs-1613083812.jpg?crop=0.668xw:1.00xh;0.0369xw,0&resize=640:*" target="_blank" rel="noopener">Muster dog</a>.
    </h3>
    <button @click="logout()">Logout</button>
    
    <!-- {{ resultados }}  -->
   <div v-for="item in resultados">{{ item.attributes.description }}</div>
</div>

</template>


<script>
import axios from "axios";

import { getAuth, signOut } from "firebase/auth";
import { useRouter } from 'vue-router';

//const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

const router = useRouter();

export default {

  data(){
    return {
      resultados:null,
      pesquisa:""
    }
  },
  methods:{
    carregaInfo(){
    axios.get('https://dogapi.dog/api/v2/breeds')
      .then(
        res => {
          this.resultados = res.data.data
          console.log(this.resultados)
        }
      )
    }
  }
}

const getDogFact = (parametro) => {
    fetch(`${parametro}`)
        .then(response => response.json())
        .then(data => meal.value = data.meals)
        .catch(error => console.error('Error fetching meals:', error));
};


const logout = () => {
const auth = getAuth();

signOut(auth).then(() => {
  // Sign-out successful.
  alert("Logout bem succedido.")
  router.push({ name: 'login' });
}).catch((error) => {
  // An error happened.
  alert("error on logout")
});
};



const getPesquisa = (parametro) => {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+parametro)
    .then(res => res.json())
    .then(dados => refeicoes.value = dados)
}
</script>



<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {  
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
