<template>
  <div
    class='character-item'
    v-bind:class="[{selected: selected}]"
    v-bind:id="id"
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

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'CharacterItem',
})

export default class CharacterItem extends Vue {
  @Prop() private disabled!: boolean;
  @Prop() private image!: string;
  @Prop() private index!: number;
  @Prop() private id!: string;
  @Prop() private name!: string;
  @Prop() private selected!: boolean;
}
</script>

<style scoped>
h3 {
  margin: auto;
}

.character-item {
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
