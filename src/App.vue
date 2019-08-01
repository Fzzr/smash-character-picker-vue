<template>
  <div id="app">
    <SelectButton/>
    <CharacterPanel
      v-bind:characterList=characterList
    />
  </div>
</template>

<script>
import { mapState } from "vuex";

import CharacterPanel from './components/CharacterPanel.vue';

export default {
  name: 'app',
  components: {
    CharacterPanel,
  },
  computed: mapState([
    "characterList"
  ])
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: grey;
  margin-top: 60px;
}
</style>
