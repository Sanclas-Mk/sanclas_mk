<template>
  <div class="bg-menu md:h-[100px]">
    <nav class="md:flex md:fixed md:bg-menu/90 w-full">
      <div class="w-full flex justify-between px-[30px] py-[20px]">
        <img
          class="h-[45px] md:ml-[10px] md:mt-[7px] lg:ml-[30px]"
          src="/logos/logoMK.png"
          alt="Logo MK Sanclas"
        />
        <div @click="toggleNav" class="md:hidden">
          <button type="button" class="text-pink-100 hover:text-larajin">
            <svg viewBox="0 0 24 24" class="w-[50px] h-[50px] fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <ul
        :class="showMenu ? 'block' : 'hidden'"
        class="menu bg-menu mt-[16px] animate-slide-down touch-none font-texticulo font-medium text-[24px] md:text-[20px] h-[900px] md:h-auto md:animate-none md:bg-transparent relative md:pr-[40px] lg:space-x-5 md:flex md:space-x-3"
      >
        <a href="#inicio" @click="toggleNav">
          <li
            class="text-pink-100/90 hover:bg-pink-100 md:hover:text-larajin hover:text-black md:hover:bg-transparent max-sm:border-b-[1px] border-pink-200 pt-[20px] pl-[19px] pb-[6px]"
          >
            Início
          </li>
        </a>
        <a href="#vantagens" @click="toggleNav">
          <li
            class="text-pink-100/90 hover:bg-pink-100 md:hover:text-larajin hover:text-black md:hover:bg-transparent max-sm:border-b-[1px] border-pink-200 pt-[20px] pl-[19px] pb-[6px]"
          >
            Vantagens
          </li>
        </a>
        <a href="#projetos" @click="toggleNav">
          <li
            class="text-pink-100/90 hover:bg-pink-100 md:hover:text-larajin hover:text-black md:hover:bg-transparent max-sm:border-b-[1px] border-pink-200 pt-[20px] pl-[19px] pb-[6px]"
          >
            Projetos
          </li>
        </a>
        <a href="#pacotes" @click="toggleNav">
          <li
            class="text-pink-100/90 hover:bg-pink-100 md:hover:text-larajin hover:text-black md:hover:bg-transparent max-sm:border-b-[1px] border-pink-200 pt-[20px] pl-[19px] pb-[6px]"
          >
            Pacotes
          </li>
        </a>
        <a
          href="https://www.instagram.com/sanclasmk/"
          target="_blank"
          @click="toggleNav"
        >
          <li
            class="text-pink-100/90 hover:bg-pink-100 md:hover:text-larajin hover:text-black md:hover:bg-transparent max-sm:border-b-[1px] border-pink-200 pt-[20px] pl-[19px] pb-[6px] md:hidden"
          >
            Contato
          </li>
        </a>
        <Redes class="pt-[60px] md:hidden" />
        <Logo class="md:hidden py-[10px]" />
      </ul>
    </nav>
  </div>
</template>

<script>
import { ref } from "vue";
import Logo from "../Rodape/Logo.vue";
import Redes from "../Rodape/Redes.vue";
export default {
  name: "navbar",
  components: { Logo, Redes },
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);

    return { showMenu, toggleNav };
  },
};
</script>


