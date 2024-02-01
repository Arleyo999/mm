

<template>
  <div>
    <v-content>
    <HomeSlider/>  
    <HomeGaleria/>
    <HomeUtilidades/>
    <HomeAccesorios/>
    <HomeOfertas/>
    <HomeArchivos/>
  </v-content>
</div>
</template>


<script>
  
  import HomeSlider from '../components/home/HomeSlider.vue'
  import HomeGaleria from '../components/home/HomeGaleria.vue'
  import HomeUtilidades from '../components/home/HomeUtilidades.vue' 
  import HomeAccesorios from '../components/home/HomeAccesorios.vue'
  import HomeOfertas from '../components/home/HomeOfertas.vue'
  import HomeArchivos from '../components/home/HomeArchivos.vue'


  export default {
    name: 'Home',
      components: {
      HomeSlider,
      HomeGaleria,
      HomeUtilidades,
      HomeAccesorios,
      HomeOfertas,
      HomeArchivos,
   },
   }
</script>

  
      
