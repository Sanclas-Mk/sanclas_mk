<template>
  <div class="mt-10">
    <a
      href="#vantagens"
      class="bg-pink-200 hover:bg-pink-50 rounded-md duration-300 lg:mx-[110px] mx-10 xl:mx-[180px] py-2 px-3 font-texticulo font-bold text-black tracking-[1px] text-[18px] lg:text-[18px] cursor-pointer"
    >
      <span class="text-center">Explorar mais</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "BotaoExplore",
};
</script>
<style scoped>
div a {
  animation: pulsar 1.5s infinite alternate;
}
@keyframes pulsar {
  0% {
    box-shadow: none;
  }
  100% {
    box-shadow: -1px -1px 14px 1px #f6b1e970;
  }
}
</style>