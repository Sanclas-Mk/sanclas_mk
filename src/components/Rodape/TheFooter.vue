<template>
  <footer class="bg-bg h-full">
    <div class="">
      <ul
        class="flex justify-center items-center space-x-7 max-sm:space-x-6 pt-10 font-medium font-texto text-[18px] lg:text-[22px] md:tracking-[2px]"
      >
        <li
          class="text-pink-100 transition ease-in-out hover:-translate-x-[1px] hover:scale-[1.1] duration-300 hover:text-pink-200"
        >
          <a href="#vantagens">Vantagens</a>
        </li>
        <li
          class="text-pink-100 transition ease-in-out hover:-translate-x-[1px] hover:scale-[1.1] duration-300 hover:text-pink-200"
        >
          <a href="#projetos">Projetos</a>
        </li>
        <li
          class="text-pink-100 transition ease-in-out hover:-translate-x-[1px] hover:scale-[1.1] duration-300 hover:text-pink-200"
        >
          <a href="#pacotes">Pacotes</a>
        </li>
        <li
          class="text-pink-100 transition ease-in-out hover:-translate-x-[1px] hover:scale-[1.1] duration-300 hover:text-pink-200"
        >
          <a href="https://www.instagram.com/sanclasmk/" target="_blank"
            >Contato</a
          >
        </li>
      </ul>
      <Redes class="pb-[10px]" />
      <Logo class="pb-[20px]" />
    </div>
  </footer>
</template>

<script>
import Redes from "./Redes.vue";
import Logo from "./Logo.vue";
export default {
  name: "TheFooter",
  components: {
    Redes,
    Logo,
  },
};
</script>

