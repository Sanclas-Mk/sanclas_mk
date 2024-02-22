<template>
  <section class="pt-[10px] md:pt-[75px]">
    <Titulos titulo="Pacotes" />
    <Pacote />
  </section>
</template>
<script>
import Titulos from "../Titulos.vue";
import Pacote from "./Pacote.vue";
export default {
  name: "Pacotes",
  components: { Titulos, Pacote },
};
</script>