<template>
  <div class="flex justify-between text-[14px] md:text-[20px] max-sm:px-[3px]">
    <i
      @click="voltar"
      class="cursor-pointer fa-solid fa-chevron-left bg-azulroxa/50 rounded-full py-[12px] md:py-[10px] px-[15px] hover:bg-azulroxa"
    ></i>
    <i
      @click="proximo"
      class="cursor-pointer fa-solid fa-chevron-right bg-azulroxa/50 rounded-full py-[12px] md:py-[10px] px-[15px] hover:bg-azulroxa"
    ></i>
  </div>
</template>

<script>
export default {
  name: "Setas",
  props: { proximo: Function, voltar: Function },
};
</script>