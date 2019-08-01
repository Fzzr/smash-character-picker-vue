<template>
  <div
    class='character'
    v-bind:class="[{selected: selected}]"
    v-bind:index="index"
    v-bind:selected="selected"
    :tabindex="index"
    v-on:click="$emit('toggleCharacter', id)"
    v-on:keypress.enter="$emit('toggleCharacter', id)">
    <img
      v-bind:image="image"
      v-bind:name="name"
      :alt="name"
      :src="`characters/${image}`"
    />
    <h3>{{ name }}</h3>
    <div
      v-bind:disabled="disabled"
      v-bind:class="[{disabled: disabled}]"
    />
  </div>
</template>

<script>
export default {
  name: 'Character',
  props: {
    disabled: Boolean,
    image: String,
    index: Number,
    id: String,
    name: String,
    selected: Boolean
  },
};
</script>

<style scoped>
h3 {
  margin: auto;
}

.character {
  margin: 2px;
  position: relative;
  width: 150px;
}

.disabled {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  opacity: 60%;
  background-color: rgba(169, 169, 169, .5);
}

.selected {
  outline: solid red;
}
</style>
