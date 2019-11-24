import Vue from 'vue';
import Vuex from 'vuex';

import { Character, CHARACTER_LIST, DEFAULT_CHARACTER } from './constants/characters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characterList: CHARACTER_LIST,
  },
  mutations: {
    toggleCharacter(state, payload: { characterId: string }): void {
      const { characterId } = payload;
      let characterToToggle = state.characterList.find((character) => {
        return character.id === characterId;
      });
      if (!characterToToggle) {
        characterToToggle = DEFAULT_CHARACTER;
      }
      characterToToggle.disabled = !characterToToggle.disabled;
    },

    selectCharacter(state, payload: { characterId: string }): void {
      const { characterId } = payload;
      state.characterList.forEach((character) => {
        character.selected = character.id === characterId;
      });
    },

    resetCharacters(state): void {
      const newCharacterList = state.characterList.map((character) => {
        const newCharacter = CHARACTER_LIST.find((defaultCharacter) => {
          return defaultCharacter.id === character.id;
        });
        return JSON.parse(JSON.stringify(newCharacter));
      });

      state.characterList = newCharacterList;
    },
  },
});
