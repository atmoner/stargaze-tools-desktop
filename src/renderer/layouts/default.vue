<template>
  <v-app id="app">
    <v-app-bar
      app
      style="background-color:black; color:white"
      flat
    >
   
      <v-container class="py-0 fill-height">
        <v-avatar
          class="mr-5" 
          size="32"
        ><img src="https://raw.githubusercontent.com/cosmos/chain-registry/master/stargaze/images/stars.png"></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link" 
          color="pink"
          to="/"
        >
          {{ link }}
        </v-btn>
 
        <v-spacer></v-spacer>
 
        <Login />        
      </v-container>
    </v-app-bar>

    <v-main >
      <v-container>
      <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Login from '~/components/Login.vue';

  export default {
    components: {
      Login
    },
    data: () => ({
      links: [
        'Stargaze-tool UI', 
      ],
    }),
     
  }
</script>
<style>
 #app {
  background: #000000;
}
 
::-webkit-scrollbar {
display: none;
}
 
</style>
