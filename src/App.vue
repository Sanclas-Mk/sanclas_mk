<template>
  <div class="bg-rosa">
    <router-view />
    <TheHeader />
    <SecaoInicial id="secaoinicial" />
    <Vantagens id="vantagens" />
    <Projetos id="projetos" />
    <Pacotes id="pacotes" />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/Cabeça/TheHeader.vue";
import SecaoInicial from "./components/Inicio/SecaoInicial.vue";
import Vantagens from "./components/ParteVantagens/Vantagens.vue";
import Pacotes from "./components/Pacotes/Pacotes.vue";
import Projetos from "./components/Projeto/Projetos.vue";
import TheFooter from "./components/Rodape/TheFooter.vue";

export default {
  components: {
    TheHeader,
    SecaoInicial,
    Vantagens,
    Pacotes,
    Projetos,
    TheFooter,
  },
};
</script>