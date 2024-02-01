<template>
  <v-container>
    <div>
       <v-carousel hide-delimiters cycle height="400">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
           transition="fade-transition"
          >
            <v-row class="fill-height" align="end" justify="center" dark>
                <div class="display-3" >
                    {{item.title}}            
                </div>
            </v-row>
              <v-btn> lol </v-btn>
          </v-carousel-item>
       </v-carousel>  
    </div>
  </v-container> 
</template>

 <script>
  
  export default {
    name: 'HomeSlider',
    data () {
      return {
        items: [
          {
            src: require('../../assets/img/1.jpeg'),
            title:''
          },
          {
            src: require('../../assets/img/2.jpeg'),
            title:''
          },
          {
            src: require('../../assets/img/3.jpeg'),
            title:''
          },
          {
            src: require('../../assets/img/4.jpeg'),
            title:''
          },
        ],
      }
    },
  }
</script>
