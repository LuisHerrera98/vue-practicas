<template>
  <div>
    <img :src="character.image" alt="">
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["character"],
})
</script>

<style scoped>

</style>
