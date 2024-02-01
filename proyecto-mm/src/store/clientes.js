import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,

  state: {
    Items: [],
  },

  getters: {
    Items(state){
        return state.Items;
    }
},

  mutations: {
    llenarItems(state, data){
        state.Items = data;
    }
},

  actions: {
    cargarClientes: async function ({commit}){
        try {
            const setting = {
                method: 'GET',
            }            
            const url = 'http://localhost:4000/api/clientes' ;
            const data = await fetch (url, setting);
            const json = await data.json();
            commit('llenarItems', json) 

        } 
        catch (err) {
            console.log(err)
        }
    },

    agregarCliente: async function ({commit, dispatch}, datos){
      try {
          const setting = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(datos),
          }            
              const url = 'http://localhost:4000/api/clientes' ;
              const data = await fetch(url, setting);
              const json = await data.json();
             dispatch('cargarClientes');
          } 
      catch (err) {
          console.log(err)
      }
  },

    eliminarCliente: async function ({commit, dispatch}, datos){
      try {
          const setting = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(datos),
          }            
              const url = 'http://localhost:4000/api/clientes' ;
              const data = await fetch(url, setting);
              const json = await data.json();
             dispatch('cargarClientes');
          } 
      catch (err) {
          console.log(err)
      }
  }

  },
}
