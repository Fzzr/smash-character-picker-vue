import { CHARACTER_LIST } from './constants/characters';

const storeConfig = {
  state: {
    characterList: JSON.parse(JSON.stringify(CHARACTER_LIST))
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
    },

    resetCharacters(state) {
      const newCharacterList = state.characterList.map((character) => {
        const newCharacter = CHARACTER_LIST.find((defaultCharacter) => {
          return defaultCharacter.id === character.id;
        });
        return JSON.parse(JSON.stringify(newCharacter));
      });

      state.characterList = newCharacterList;
    } 
  }
};

export default storeConfig;
