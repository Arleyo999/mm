<template>
     <div>
         <v-row justify="center">
             <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="600px"
                    >
                    <v-card>
                        <v-card-title>
                        <span v-if = "Item.id == 0" class="text-h5">Nuevo cliente</span>
                        <span v-else class="text-h5">Nuevo cliente</span>
                        <v-spacer></v-spacer>
                        <span v-if="Item.id > 0" >ID: {{Item.id}}</span>
                        </v-card-title>
                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                label="Nombre*"
                                v-model="Item.nombre"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                label="Profesión"
                                v-model="Item.profesion"
                                hint="example of helper text only on focus"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                label="Edad"
                                v-model="Item.edad"
                                hint="example of helper text only on focus"
                                ></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="cerrarDialogo()"
                        >
                            Cerrar
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="agregar()"
                        >
                            Guardar
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
     </div>
</template>
<script>
import { mapActions } from 'vuex';
    export default {
        props: ['dialog','Item'],
        data (){
            return {
                } 
        },
        methods:{
            
            ...mapActions('clientes',['agregarCliente']),

            agregar(){
                
            this.$alertify.confirm(
             this.Item.id == 0 ? 'Desea Agregar ' : 'Desea Editar item',
                 ()=> {
                        
                        this.agregarCliente(this.Item);
                         this.cerrarDialogo();
                        this.$alertify.success(this.Item.id == 0 ? 'Item Agregado' : 'Item Actualizado')                                                                           
                },
                ()=> this.$alertify.error ('Acción cancelada')
                 );
    
                this.agregarCliente(this.Item);
                this.cerrarDialogo();
            },
            cerrarDialogo() {
                this.$emit('dialog',false)
            }
        }

    }
</script>