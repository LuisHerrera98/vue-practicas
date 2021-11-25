<template>
<button @click="getCharacters">obtener</button>
    <div>
    <CardCharacter
      v-for="character in characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useGetCharacters from "./hooks/useGetCharacters";
import CardCharacter from "./components/CardCharacter.vue";

export default defineComponent({
  components: {
    CardCharacter,
  },

  setup() {
    const { characters, getCharacters } = useGetCharacters();

    return {
      characters,
      getCharacters
    }
  }
  
})
</script>

<style scoped>

</style>
