import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { resolveTypeElements } from 'vue/compiler-sfc'

export const useCounterStore = defineStore('counter', () => {
    const user = ref({})
    const carrinhoCompras = ref([1,2,3])
    const updateUser = (objUser) =>{
        user.value = objUser;
    } 
    const updateCarrinhoCompras = (state)=>{
        carrinhoCompras.value.push(state);
    }
    return { user,carrinhoCompras, updateUser, updateCarrinhoCompras }})

// varias do store