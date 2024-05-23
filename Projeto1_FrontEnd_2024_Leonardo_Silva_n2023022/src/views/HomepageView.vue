<template>
    <div class="greetings">
          <h3>
        Faça pesquisa de uma raça de cão.
        <a>Coloque o nome da raça.</a>
        <a href="https://instagram.ffnc1-1.fna.fbcdn.net/v/t51.29350-15/239988997_817369655605898_7158822048162118596_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ffnc1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=3oDYhhuIzDcQ7kNvgF3BLWg&edm=AFg4Q8wBAAAA&ccb=7-5&ig_cache_key=MjY0NDU4NjA4NDI0MjQ3MTIyOQ%3D%3D.2-ccb7-5&oh=00_AYDfCDlh0WM-vYDSH2wG1_VtZrb73vgbc0AGTfaWwIzpnA&oe=6646D691&_nc_sid=cf751b" target="_blank" rel="noopener">.</a>
        <a href="https://i.pinimg.com/736x/d4/f7/44/d4f744eab328a8c3cc2c108316e1e7df.jpg" target="_blank" rel="noopener">.</a>
      </h3>

      <!-- <input type="text" v-model="pesquisa"> -->
      <button @click="getDogBreeds" type="button">Todas as raças</button>
      <button @click="DogPesquisa(pesquisa)" type="button">Pesquisar</button>

      <input type="text" v-model="pesquisa">
      

      <!-- <input @click="DogPesquisa(pesquisa)" class="open-sans-letra" id="s" type="text" v-model="pesquisa"
                @keydown.enter="getpesquisa(pesquisa)"> -->

      <ul>
      <li v-for="dog in dogs">
        <h3>{{ dog.attributes.name }}</h3>
        <p>{{ dog.attributes.description}}</p>
        <!-- <img :src="prato.strCategoryThumb" alt=""> -->

        <!-- DogPesquisa({{dog.id}}) -->
        <!-- if {{ dog.attributes.name }} = "Caucasian"; -->
        <!-- <h3>{{ dog.attributes.name }} </h3>
        <p>{{ dog.attributes.description }} </p> -->

      </li> 
    </ul>

    <ul>
      <li v-for="dog in dogs">
        DogPesquisa({{dog.id}})
        <!-- <img :src="prato.strCategoryThumb" alt=""> -->
      </li> 
    </ul>


      <!-- {{ dogs }} -->

       <!-- <div v-for="item in dogs" :key="item.idMeal" style="display:flex; padding:5px; background-color: light;">
                <img :src="item.description" alt="" width="75">
                <span>{{ item.name }}</span>
                <span>{{ item.description }}</span>
                <button @click="() =>store.updateCarrinhoCompras(item.strMeal)">carrinho</button>
        </div>
      {{ resultados }}
     <div v-for="item in resultados">{{ item.attributes.description }}</div> -->
  </div>
  
  </template>
  
  
  <script setup>
  // import axios from "axios";
  
  import { getAuth, signOut } from "firebase/auth";
  import { useRouter } from 'vue-router';
  
  //const auth = getAuth();
  // signOut(auth).then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });
  
  
  
//   export default {
  
//     data(){
//       return {
//         resultados:null,
//         pesquisa:""
//       }
//     },
//     methods:{
//       carregaInfo(){
//       axios.get('https://dogapi.dog/api/v2/breeds')
//         .then(
//           res => {
//             this.resultados = res.data.data
//             console.log(this.resultados)
//           }
//         )
//       }
//     }
//   }

import { ref } from 'vue';

const router = useRouter();
const dogs = ref([]);
var i = 0;
 
const getDogBreeds = () => {
  fetch("https://dogapi.dog/api/v2/breeds/")
    .then(res => res.json())
    .then(dados => dogs.value = dados.data)
    console.log(dogs.value)
}

  // const getDogBreeds = (parametro) => {
  //     fetch(`https://dogapi.dog/api/v2/breeds/${parametro}`)
  //       .then(response => response.json())
  //       .then(data => dogs.value = data.data)
  //       .catch(error => console.error('Error on fetching breed:', error));
  // };
  
  const DogPesquisa = (parametro) => {
    fetch("https://dogapi.dog/api/v2/breeds/"+parametro)
      .then(res => res.json())
      .then(dados => refeicoes.value = dados)
  }

  
  
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
  