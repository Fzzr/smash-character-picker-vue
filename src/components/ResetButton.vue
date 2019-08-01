<template>
  <div>
    <button
      class='ResetButton'
      v-on:click="resetCharacters"
    >
      Reset all characters.
    </button>
  </div>
</template>

<script>
export default {
  name: 'ResetButton',
  methods: {
    resetCharacters() {
      this.$store.commit('resetCharacters');
    }
  }
}
</script>

<style scoped>
.ResetButton {
  height: 5rem;
  background-color: red;
  font-size: 3rem;;
}
</style>

