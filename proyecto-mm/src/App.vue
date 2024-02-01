<template>
  <div>
  <v-app>   
    <div>
      <v-app-bar color="transparent" elevation="11" outlined>
        <v-toolbar-title>
          <v-text-field  prepend-icon="mdi-crystal-ball " placeholder=" --        Consultar       --  "  
                        single-line hide-details> 
          </v-text-field>
        </v-toolbar-title>
        <v-btn @click="insertarRuta('/')" text> 
           <img src="./assets/img/logoo.png" >  
        </v-btn> 
        <v-spacer> </v-spacer>
        <v-btn v-for="(item, index ) in rutas" :key="index" text @click="insertarRuta(item.ruta)">
        
          <v-icon  v-if= "item.nombre === 'Gemas'">mdi-diamond-stone </v-icon>   
          <v-icon  v-if= "item.nombre === 'Dispositivos'">mdi-star-david</v-icon>  
          <v-icon  v-if= "item.nombre === 'Magic*quantum'">mdi-eye-outline</v-icon>
          <v-icon  color="red" v-if= "item.nombre === 'Natural'">mdi-mushroom-outline</v-icon> 
          <v-icon  v-if= "item.nombre === 'Ofertas'">mdi-sale-outline</v-icon> 
          <v-icon  color="green" v-if= "item.nombre === '4:20'">mdi-cannabis</v-icon>
          <span class="mr-2">{{"&nbsp;"+ item.nombre}}</span>  
    
        </v-btn> 
      </v-app-bar>
    </div>
      <v-main>
        <router-view/>
      </v-main>
  </v-app>
</div>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
      rutas:[
        
          {nombre:"Gemas", ruta:"/gemas"}, 
          {nombre:"Dispositivos", ruta:"/dispositivos"}, 
          {nombre:"Magic*quantum", ruta:"/magic*quantum"},
          {nombre:"Natural", ruta:"/natural"},
          {nombre:"Ofertas", ruta:"/ofertas"},
          {nombre:"4:20", ruta:"/clientes"}, 
       
      ]
    }),
    
    methods: {
      insertarRuta(item){
        this.$router.push(item);
      }
    }
    
    };
</script>

   

  

