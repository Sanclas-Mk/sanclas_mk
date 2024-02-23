<template>
  <div
    class="h-[400px] lg:h-[560px] xl:h-[620px] bg-menu text-indigo-950 max-sm:text-center"
  >
    <div
      id="inicio"
      class="px-[40px] pt-[60px] lg:pt-[100px] xl:pt-[150px] lg:px-[110px] xl:px-[180px] pt-[100px] text-rosa"
    >
      <h1
        class="text-[24px] font-titulos lg:text-[28px] xl:text-[40px] text-indigo-50 animate-animacao-t"
      >
        Bem-vindo a Mk Sanclas
      </h1>
      <p
        class="pt-[20px] lg:w-[450px] font-texto text-[17px] md:text-[18px] animate-animacao-l"
      >
        Aqui executamos a
        <span class="underline decoration-azulroxa underline-offset-4">
          novidade</span
        >
        do mundo tecnológico. E encaixar você neste mundo
        <span class="underline decoration-azulroxa underline-offset-4"
          >é a nossa prioridade!</span
        >
      </p>
    </div>
    <BotaoExplore class="pt-[10px] animate-animacao-b" />
  </div>
</template>

<script>
import BotaoExplore from "./BotaoExplore.vue";
export default {
  name: "SecaoInicial",
  components: { BotaoExplore },
};
</script>

