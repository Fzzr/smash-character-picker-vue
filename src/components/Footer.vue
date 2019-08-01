<template>
  <div
    v-bind:version="version"
  >
    <span>View the source on <a href="https://github.com/Fzzr/smash-character-picker-vue">Github</a>. Version {{version}}.</span>
  </div>
</template>

<script>
import {version} from "../../package.json";
export default {
  name: 'Footer',
  data: function() {
    return {version};
  }
};
</script>

<style scoped>

</style>
