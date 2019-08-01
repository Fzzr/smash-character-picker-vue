<template>
  <div id="app">
    <SelectButton/>
    <ResetButton/>
    <CharacterPanel
      v-bind:characterList=characterList
    />
    <Footer/>
  </div>
</template>

<script>
import { mapState } from "vuex";

import CharacterPanel from './components/CharacterPanel.vue';
import SelectButton from './components/SelectButton.vue';
import ResetButton from './components/ResetButton.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  components: {
    CharacterPanel,
    SelectButton,
    ResetButton,
    Footer
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
