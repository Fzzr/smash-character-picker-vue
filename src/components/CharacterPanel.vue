<template>
  <div class="CharacterPanel">
    <character
      v-for="(character, index) in characterList"
      v-bind:character="character"
      v-bind:disabled="character.disabled"
      v-bind:id="character.id"
      v-bind:image="character.image"
      v-bind:index="index+1"
      v-bind:key="character.id"
      v-bind:name="character.name"
      v-bind:selected="character.selected"
      v-on:toggleCharacter="toggleCharacter"
    />
  </div>
</template>

<script>
import Character from './Character';

export default {
  name: 'CharacterPanel',
  props: {
    characterList: Array
  },
  components: {
    Character
  },
  methods: {
    toggleCharacter: function(characterId) {
      this.$store.commit('toggleCharacter', { characterId });
    }
  }
};
</script>

<style scoped>
.CharacterPanel {
  margin: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  background: repeating-linear-gradient(-20deg, blue, cornflowerblue 11%, palegoldenrod 13%, gold 25%, palegoldenrod 37%, cornflowerblue 39%, blue 50%);
  background-size: 8000px 8000px;
  -webkit-animation: BackgroundAnimation 30s linear infinite;
  -moz-animation: BackgroundAnimation 30s linear infinite;
  animation: BackgroundAnimation 30s linear infinite;
  background-attachment: fixed;
}

@-webkit-keyframes BackgroundAnimation {
    0%{background-position: 2000px 2000px}
    100%{background-position: 6000px 6000px}
}
@-moz-keyframes BackgroundAnimation {
    0%{background-position: 2000px 2000px}
    100%{background-position: 6000px 6000px}
}
@keyframes BackgroundAnimation {
    0%{background-position: 2000px 2000px}
    100%{background-position: 6000px 6000px}
}
</style>

