<template>
  <div>
    <div
      class="bg-bg font-texto text-outro lg:text-[25px] pt-[10px] md:pt-[80px]"
    >
      <Titulos titulo="Projetos" class="mb-10" />

      <!-- Primeiro Projeto -->
      <div class="mb-[100px] md:flex xl:w-[1200px] xl:mx-auto">
        <div class="ml-[50px]">
          <img
            class="md:hidden rounded-l-[40px]"
            src="/imagensProjeto/projetoum.png"
            alt="Projeto 1"
          />
        </div>
        <div class="mt-8 lg:mt-[150px]">
          <h1
            class="pl-[30px] pt-[40px] md:pl-[60px] text-purple-300 font-titulos text-[20px] md:text-[24px]"
          >
            Site de Contato
          </h1>
          <p class="px-[30px] pt-[10px] md:pl-[60px] md:text-[20px]">
            Uma forma de mostrar o seu trabalho sem muita complexidade. Um modo
            simples e direto!
          </p>
        </div>
        <div
          class="max-sm:hidden bg-gray-300 rounded-full p-[30px] mr-[60px] mt-[40px]"
        >
          <img
            class="w-[400px] lg:w-[400px]"
            src="/imagensProjeto/projetoumM.png"
            alt="Projeto 1"
          />
        </div>
      </div>

      <!-- Segundo Projeto -->
      <div class="mb-[100px] md:flex xl:w-[1200px] xl:mx-auto">
        <div class="mr-[60px]">
          <img
            class="md:hidden rounded-r-[40px]"
            src="/imagensProjeto/projetodois.png"
            alt="Projeto 2"
          />
        </div>

        <div
          class="max-sm:hidden bg-gray-300 rounded-full px-[20px] py-[34px] lg:px-[10px] lg:py-[28px] mr-[40px]"
        >
          <img
            class="max-sm:hidden w-[300px] md:w-[650px] ml-5 pr-8"
            src="/imagensProjeto/projetodoisM.png"
            alt="Projeto 2"
          />
        </div>
        <div class="mr-4 lg:pt-[20px]">
          <h1
            class="pl-[30px] pt-[40px] text-purple-300 font-titulos text-[20px] md:text-[24px]"
          >
            O blog
          </h1>
          <p class="px-[30px] pt-[10px] md:text-[20px]">
            Há várias formas de se fazer um blog, e está é uma delas! Neste
            projeto quisemos deixar a mostra como algo comum também pode ser
            algo chamativo.
          </p>
        </div>
      </div>

      <!-- Terceiro Projeto -->
      <div class="mb-[60px] md:flex xl:w-[1200px] xl:mx-auto">
        <div class="ml-[50px]">
          <img
            class="rounded-l-[40px] md:hidden"
            src="/imagensProjeto/projetotres.jpg"
            alt="Projeto 3"
          />
        </div>

        <div class="md:pt-[20px] lg:pt-[80px]">
          <h1
            class="pl-[30px] pt-[40px] md:pl-[60px] text-purple-300 font-titulos text-[20px] md:text-[24px]"
          >
            Site E-commerce
          </h1>
          <p
            class="px-[30px] pb-[10px] pt-[10px] md:pl-[60px] md:text-[20px] xl:pr-[90px]"
          >
            Um site e-commerce é uma ótima forma de mostrar a complexidade do
            que podemos fazer e o que você pode conquistar.
          </p>
        </div>
        <div
          class="max-sm:hidden bg-gray-300 rounded-full px-[20px] py-[50px] lg:px-[50px] lg:py-[80px] mr-[40px]"
        >
          <img
            class="w-[300px] md:w-[650px]"
            src="/imagensProjeto/projetotresM.png"
            alt="Projeto 3"
          />
        </div>
      </div>

      <p
        class="text-center lg:pt-[50px] pb-[16px] text-[14px] font-texto md:text-[22px]"
      >
        Venha ver os nossos
      </p>
      <botaovj class="text-center pb-[50px] lg:pb-[150px]" />
    </div>
  </div>
</template>

<script>
import botaovj from "./botaovj.vue";
import Titulos from "../Titulos.vue";
export default {
  components: { botaovj, Titulos },
  name: "Projetos",
};
</script>
