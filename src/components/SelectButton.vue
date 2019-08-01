<template>
  <div>
    <button
      class='SelectButton'
      v-on:click="selectCharacter"
    >
      Pick a character!
    </button>
  </div>
</template>

<script>
export default {
  name: 'SelectButton',
  methods: {
    selectCharacter() {
      const enabledCharacters = this.$store.state.characterList.filter(character => {
        return !character.disabled;
      });
      if(enabledCharacters.length===0) alert("All characters are disabled!");
      const chosenCharacterIndex = Math.floor(Math.random() * enabledCharacters.length);
      const chosenCharacterId = enabledCharacters[chosenCharacterIndex].id;
      this.$store.commit('selectCharacter', {characterId: chosenCharacterId});
      document.getElementById(chosenCharacterId).focus();
    }
  }
}
</script>


<style scoped>
.SelectButton {
  height: 5rem;
  background-color: deepskyblue;
  font-size: 3rem;
}
</style>

