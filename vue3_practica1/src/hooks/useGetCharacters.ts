import { ref, Ref } from "vue";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export default function () {
  const characters: Ref<Character[]> = ref([]);

  const getCharacters = async () => {
    characters.value = await fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => data.results);
  };  

  return {
    characters,
    getCharacters,
  };
}
