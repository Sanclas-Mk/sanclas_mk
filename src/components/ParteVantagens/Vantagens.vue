<template>
  <div class="h-[400px] md:h-[550px] pt-[10px] md:pt-[100px]">
    <Titulos titulo="Vantagens" class="mb-4" />
    <InfoVantagens />
  </div>
</template>

<script>
import InfoVantagens from "./InfoVantagens.vue";
import Titulos from "../Titulos.vue";

export default {
  name: "Vantagens",
  components: {
    InfoVantagens,
    Titulos,
  },
};
</script>
