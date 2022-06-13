<template>
 
          <v-col cols="2">
          <v-sheet outlined color="grey" rounded>
              <v-card outlined elevation="0" color="black">
              <v-list color="transparent">
                <v-list-item
                  v-for="link in links"
                  :key="link.name"
                  link
                  class="white--text"
                  :to="link.url"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ link.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              </v-card>
          </v-sheet> 
          </v-col> 
 
</template>
<script>
export default {
  name: 'Menu', 
  data () {
    return {
      links: [
        {name:'Configuration', url:'/'}, 
        {name:'White list', url:'/whitelist'}, 
        {name:'Instanciate', url:'/instanciate'}, 
        {name:'Mint', url:'/mint'}
      ],
    }
  },
}
</script>
<style>
a,
a:visited {
  text-decoration: none;
  color: white;
}

a:hover {
  color: #00c58e;
}
</style>
