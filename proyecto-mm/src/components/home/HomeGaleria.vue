<template>
   <v-container>
      <div class="text-uppercase">
        <h2 class="text-center font-weight-light">Nuevos</h2><br> 
        <v-row> 
            <v-col v-for="(item,id) in items" :key="id" class="d-flex child-flex" cols="4" >
            <v-img :src="item.src" aspect-ratio="1" class="grey lighten-2"></v-img>
            </v-col>
        </v-row>
      </div>
    </v-container>
</template>
<script>
  
    export default {
      name: 'HomeGaleria', 
      
      data () {
      return {
        items: [
          {src: require('../../assets/img/galeria/1.jpeg')},
          {src: require('../../assets/img/galeria/2.jpeg'),},
          {src: require('../../assets/img/galeria/3.jpeg'),},
          {src: require('../../assets/img/galeria/4.jpeg'),
          },{src: require('../../assets/img/galeria/5.jpeg'),    
          },{src: require('../../assets/img/galeria/6.jpeg'),           
          },{src: require('../../assets/img/galeria/7.jpeg'),           
          },{src: require('../../assets/img/galeria/8.jpeg'),           
          },{src: require('../../assets/img/galeria/9.jpeg'),
           
          },
        ],
      }
    },
    
    }
</script>
  
