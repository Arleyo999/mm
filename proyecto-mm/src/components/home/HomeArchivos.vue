<template>  
<div><h2 class="text-center font-weight-light text-uppercase " >Accesorios</h2><br> </div>
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
 
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>Top 10 Australian beaches</v-card-title>
      </v-img>
  
      <v-card-subtitle class="pb-0">
        Number 10
      </v-card-subtitle>
  
      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>
  
        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="orange"
          text
        >
          Share
        </v-btn>
  
        <v-btn
          color="orange"
          text
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },{src: require('../../assets/img/galeria/1.jpeg')},
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