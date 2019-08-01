<template>
  <div class="character-panel">
    <character
      v-for="(character, index) in characterList"
      v-bind:characterList="characterList"
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
.character-panel {
  outline: solid grey;
  margin: 5px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>

