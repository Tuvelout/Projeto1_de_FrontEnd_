<template>
  <div class="about">

    <button @click="getRefeicoes" type="button">Refeições</button>
    
    <input type="text" v-model="pesquisa">
    <button @click="getPesquisa(pesquisa)" type="button">Pesquisa </button>
    
    <ul>
      <li v-for="prato in refeicoes">
        {{ prato.strCategory }}
        <img :src="prato.strCategoryThumb" alt="">
      </li> 
    </ul>


    {{ refeicoes }}
    <button @click="getUsers" type="button">utilizadores</button>
    <ul>
      <li v-for="pessoa in users">{{ pessoa.name }} - {{ pessoa.email }}</li>
    </ul>
    {{ users }}
  </div>

  <!-- hoje -->
<!-- 
  {{ reficoes }}
  {{ refeicao }}
  <button @click="getRefeicao">Refeição </button>
  <div v-for="prato in refeicao">
      <img :src="prato.strCategoryThumb" width="100" alt="Prato" flex-rap="" gap="5px">
      <h2>{{ prato.strCategoryThumb }}</h2>
  </div> -->
</template>

<script setup>
import { ref } from 'vue'
const users = ref([])
const refeicoes = ref([])
const pesquisa = ref([])
const getRefeicoes = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(dados => refeicoes.value = dados.categories)
}
const getUsers = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(dados => users.value = dados)
}
const getPesquisa = (parametro) => {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+parametro)
    .then(res => res.json())
    .then(dados => refeicoes.value = dados)
}
</script> 



<!-- hoje -->
<!-- <script setup>
import { ref, onMounted } from 'vue';
const refeicao = ref([456]);
const getCategoria = fetch()
const getRefeicao = () => {
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(res => res.json())
    .then(resultado => refeicao.value = resultado.categories)
}
</script> -->
<!-- 
<script>
export default {
  data() {
    return {
      reficoes: [1, 2, 3]
    }
  }
}
</script>
 -->
