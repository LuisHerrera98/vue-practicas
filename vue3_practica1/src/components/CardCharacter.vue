<template>
  <div class="card-character">
    <img :src="character.image" alt="" srcset="" />

    <div class="card-character__content">
      <h2>{{ character.name }}</h2>
      <p>{{ character.status }} - {{ character.species }}</p>

      <label for="location">Last known location:</label>
      <p id="location">{{ character.location.name }}</p>

      <label for="origin">First seen in::</label>
      <p id="origin">{{ character.origin.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["character"],
});
</script>

<style scoped>
.card-character {
  display: grid;
  grid-template-columns: 220px 1fr;
  background-color: #3c3e44;
  color: white;
  border-radius: 10px;
  height: 220px;
}
.card-character img {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.card-character__content {
  padding: 0 1rem;
}
label {
  color: gray;
}
h2,
p {
  margin: 0.6rem 0;
  padding: 0;
}
</style>
