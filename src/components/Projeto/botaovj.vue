<template>
  <div>
    <a
      href="#pacotes"
      class="bg-pink-200 hover:bg-pink-300 py-[7px] px-[35px] md:py-[10px] md:px-[50px] md:text-[20px] rounded-md duration-300 text-[18px] text-bg font-texticulo font-semibold tracking-[1.5px]"
    >
      Pacotes
    </a>
  </div>
</template>

<script>
export default {
  name: "botaovj",
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
    box-shadow: -1px -1px 20px 1px #f6b1e970;
  }
}
</style>