import { CHARACTER_LIST } from './constants/characters';

const storeConfig = {
  state: {
    characterList: CHARACTER_LIST
  },
  mutations: {
    toggleCharacter(state, payload) {
      const { characterId } = payload;
      const characterToToggle = state.characterList.find((character) => {
        return character.id === characterId;
      });
      characterToToggle.disabled = !characterToToggle.disabled;
    },

    selectCharacter(state, payload) {
      const { characterId } = payload;
      state.characterList.forEach((character) => {
        character.selected = character.id === characterId;
      });
    }
  }
};

export default storeConfig;
