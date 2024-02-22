<template>
  <div class="h-[400px] lg:h-[560px] xl:h-[620px] bg-menu text-indigo-950">
    <div
      class="px-[40px] pt-[60px] lg:pt-[100px] xl:pt-[150px] lg:px-[110px] xl:px-[180px] pt-[100px] text-rosa"
    >
      <h1
        class="text-[24px] font-titulos lg:text-[28px] xl:text-[40px] duration-300"
      >
        Bem-vindo a Mk Sanclas
      </h1>
      <p class="pt-[10px] lg:w-[450px] font-texto md:text-[18px] duration-300">
        Aqui
        <span class="underline decoration-larajin underline-offset-4">
          executamos a novidade</span
        >
        do mundo tecnológico. E encachar
        <span class="underline decoration-azulroxa underline-offset-4"
          >você</span
        >
        neste mundo
        <span class="underline decoration-azulroxa underline-offset-4"
          >é a nossa prioridade!</span
        >
      </p>
    </div>
    <BotaoExplore class="pt-[10px]" />
  </div>
</template>

<script>
import BotaoExplore from "./BotaoExplore.vue";
export default {
  components: { BotaoExplore },
};
</script>

