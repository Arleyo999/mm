<template>
    <div>
            <Nuevo :dialog="dialog" @dialog = "dialog = $event" :Item = "itemSelected" />
        <v-card>
        <v-card-title>
        {{Titulo}} 
        <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
              color="primary"
              dark
              class="mb-2"
              @click="nuevoItem()"
        >Nuevo</v-btn>
    </v-card-title>

    <v-data-table
        dense
        :headers="Cabecera"
        :items="Items"
        :items-per-page="5"
        :search="search" 
        class="elevation-1"
        >
    <template v-slot:[`item.edad`]="{ item }">
      <div>
      <v-chip
        :color="getColor(item.edad)"
        dark
        >
        {{ item.edad }}

      </v-chip>
      </div>
    </template>
    <template v-slot:item="{ item }">
        <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <div>
          <v-icon
              v-bind="attrs"
              v-on="on"
              small
              class="mr-2"
              @click="editarItem(item)"
             >
             mdi-pencil
             </v-icon>
            </div>
         </template>
         <span>Editar</span>
        </v-tooltip>

        <v-tooltip bottom>
         <template v-slot:activator="{ on, attrs }">
            <div>
                  <v-icon
                  v-bind="attrs"
                  v-on="on"
                  small
                  @click="eliminar(item)"
                    >          
                    mdi-delete
                  </v-icon>    
              </div>
            </template>
         <span>Eliminar</span>
        </v-tooltip>
             
 </template>

    </v-data-table>
  </v-card>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import Nuevo from './nuevo.vue';

    export default  {
       
      
      props: ['Titulo','Cabecera','Items'],
           data(){
            
            return {
                search:'',
                dialog: false,
                itemSelected:{             
                 }
                }},
            
            components: {
                Nuevo
            },
            methods: {

                ...mapActions('clientes',['eliminarCliente']),              
             
                nuevoItem(){
                  this.itemSelected= {
                    id: 0,
                  nombre:'',
                  edad: 0,
                  profesion:'' 

                  }
                  this.dialog = true;
                  },
                
                editarItem(item){
                  this.itemSelected = item;
                  this.dialog = true;
                },

                eliminar(item){
                            this.$alertify.confirm(
                         'Desea eliminar el item ID:'+ item.id + '?', 
                            ()=> {
                              
                              this.eliminarCliente(item);
                                
                              this.$alertify.success('item ID:'+ item.id + 'eliminado')                                                                            
                          },
                            ()=> this.$alertify.error ('Acción cancelada')
                        );
                },
                getColor (edad) {
                    if (edad > 50) return 'red'
                      else if (edad < 50 && edad > 30
                        ) return 'orange'
                            else return 'green'
      }
    },
  
    }

</script>