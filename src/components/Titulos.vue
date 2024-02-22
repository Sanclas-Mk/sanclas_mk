<template>
  <div class="mt-[40px] text-center">
    <h1
      class="text-[22px] md:text-[33px] font-titulos tracking-[2px] underline underline-offset-4 decoration-azulroxa/50"
    >
      {{ titulo }}
    </h1>
  </div>
</template>
<script>
export default {
  name: "Titulos",
  props: ["titulo"],
};
</script>
