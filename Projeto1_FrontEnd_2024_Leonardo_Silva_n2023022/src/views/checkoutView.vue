<!-- checkout serve para por a descrição dos produtos -->
<template>
    <div>
        {{ store.carrinhoCompras }}

        <div>{{ carrinho }}</div>
        <br>
        <input type="text" v-model="pesquisa">
        <button @click="getMeal(pesquisa)">search</button>
        <div style="display: flex; flex-wrap: wrap; gap:10px;">
            <div v-for="item in meal" :key="item.idMeal" style="display:flex; padding:5px; background-color: light;">
                <img :src="item.strMealThumb" alt="" width="75">
                <span>{{ item.strMeal }}</span>
                <button @click="() =>store.updateCarrinhoCompras(item.strMeal)">carrinho</button>
            </div>
        </div>
        <!-- <pre>{{ meal }}</pre>  For debugging purpose -->
    </div>
</template>


<script setup>
import { ref } from 'vue';

const meal = ref([]);
const pesquisa = ref('Beef');
const carrinho = ref([]);

const getMeal = (parametro) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${parametro}`)
        .then(response => response.json())
        .then(data => meal.value = data.meals)
        .catch(error => console.error('Error fetching meals:', error));
};

const addToCart = (itemName) => {
    carrinho.value.push(itemName);
};
</script>

<!--axel, Pina -->