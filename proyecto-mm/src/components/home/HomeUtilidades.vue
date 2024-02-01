<template>
    <v-container>

      <h2 class="text-center font-weight-light text-uppercase " >Utilidades</h2><br> 

        <v-sheet class="mx-auto" elevation="8" max-width="1200" height="480" >
          <v-layout wrap align-center >
          <v-flex align-self-end >
    <v-slide-group v-model="model" class="pa-4" show-arrows >
      <v-slide-item v-for="(item,i) in items" :key="i" :src="item.src" >            
        <v-card class="ma-4" height="400" width="995" dark >  
            <v-row class="fill-height" align-center > 
                <v-img :src="item.src" height="600" width="400" >
                                   
                </v-img>   
                                
          </v-row> <v-btn>Ver</v-btn>  
          <div class="display-3" mt-2> {{item.title}}</div> 
        </v-card>
        
      </v-slide-item>
    </v-slide-group>
    
  </v-flex>

    <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="200"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center" {{ title }}
        >
          <h3 class="text-h6">
            Selected {{ model }}
          </h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </v-layout>
  </v-sheet>



     </v-container>
 </template>
 <script>
 export default {
    name: 'HomeUtilidades', 
    data () {
      return {
        model:null,
        items: [
          {
            src: require('../../assets/img/1.jpeg'),
            title:'foto   1 '
          },
          {
            src: require('../../assets/img/2.jpeg'),
            title:'2'
          },
          {
            src: require('../../assets/img/3.jpeg'),
            title:'3'
          },
          {
            src: require('../../assets/img/4.jpeg'),
            title:'4'
          },
        ],
      }
    }

 }
</script>
