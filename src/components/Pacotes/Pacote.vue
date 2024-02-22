<template>
  <div
    class="grid grid-cols-4 md:grid-cols-2 max-sm:gap-[322px] xl:grid-cols-4 gap-4 mx-4 mt-[30px] mb-[60px] max-sm:snap-x max-sm:overflow-x-auto"
  >
    <!-- Primeiro Pacote - Básico -->
    <div
      class="bg-bg p-6 font-texticulo text-[14px] font-medium tracking-[1px] rounded-[10px] max-sm:w-[310px] text-outro snap-center"
    >
      <!--Div das informações como nome, preço e descrição do pacote Básico -->
      <div>
        <div
          class="flex justify-between text-pink-200 text-[19px] font-semibold"
        >
          <h2>Básico</h2>
          <span>R$ 650,00</span>
        </div>
        <p class="my-2 font-texto">
          Um modo direto ao ponto. Para aqueles que buscam o rápido.
        </p>
        <botaopacote
          class="max-md:hidden xl:text-[14px] bg-gradient-to-r from-violet-400 to-purple-300 hover:bg-gradient-to-l from-violet-400 to-purple-300"
        />
      </div>
      <!--Div da lista de características do pacote Básico-->
      <div>
        <h3 class="text-pink-200 py-[3px]">Inclui:</h3>
        <ul>
          <li
            v-for="(caracteristica, index) in caracPacotes.pacoteum"
            :key="index"
            class="flex py-[5px]"
          >
            <IconVerificado />
            <span class="px-2 font-texto">{{ caracteristica }}</span>
          </li>
        </ul>
      </div>
      <!--Botão para comprar o pacote no mobile-->

      <botaopacote
        class="md:hidden mt-6 bg-gradient-to-r from-violet-400 to-purple-300 hover:bg-gradient-to-l from-violet-400 to-purple-300"
      />
    </div>

    <!-- Segundo Pacote - Médio -->
    <div
      class="bg-menu p-6 font-texticulo text-[14px] font-medium tracking-[1px] rounded-[10px] max-sm:w-[310px] text-outro snap-center"
    >
      <!--Div das informações como nome, preço e descrição do pacote Médio -->
      <div>
        <div
          class="flex justify-between text-pink-200 text-[19px] font-semibold"
        >
          <h2>Médio</h2>
          <span>R$ 1250,00</span>
        </div>
        <p class="my-2 font-texto">
          Um modo um pouco mais complexo e mais desenvolvido.
        </p>
        <botaopacote
          class="max-md:hidden xl:text-[14px] bg-gradient-to-l from-violet-400 to-fuchsia-400 hover:bg-gradient-to-r from-violet-400 to-fuchsia-400"
        />
      </div>
      <!--Div da lista de características do pacote Médio-->
      <div>
        <h3 class="text-pink-200 py-1">Inclui:</h3>
        <ul>
          <li
            v-for="(caracteristica, index) in caracPacotes.pacotedois"
            :key="index"
            class="flex py-[3px]"
          >
            <IconVerificado />
            <span class="px-2 font-texto">{{ caracteristica }}</span>
          </li>
        </ul>
      </div>
      <!--Botão para comprar o pacote no mobile-->
      <botaopacote
        class="md:hidden mt-6 bg-gradient-to-l from-violet-400 to-fuchsia-400 hover:bg-gradient-to-r from-violet-400 to-fuchsia-400"
      />
    </div>

    <!-- Terceiro Pacote - Pro -->
    <div
      class="bg-bg p-6 font-texticulo text-[14px] font-medium tracking-[1px] rounded-[10px] max-sm:w-[310px] text-outro snap-center"
    >
      <!--Div das informações como nome, preço e descrição do pacote Pro -->
      <div>
        <div
          class="flex justify-between text-pink-200 text-[19px] font-semibold"
        >
          <h2>Pro</h2>
          <span>R$ 3500,00</span>
        </div>
        <p class="my-2 font-texto">
          Um modo completo e bem otimizado para o seu site.
        </p>
        <botaopacote
          class="max-md:hidden my-4 xl:text-[14px] bg-gradient-to-r from-violet-400 to-purple-300 hover:bg-gradient-to-l from-violet-400 to-purple-300"
        />
      </div>
      <!--Div da lista de características do pacote Pro-->
      <div>
        <h3 class="text-pink-200 py-1">Inclui:</h3>
        <ul>
          <li
            v-for="(caracteristica, index) in caracPacotes.pacotetres"
            :key="index"
            class="flex py-[3px]"
          >
            <IconVerificado />
            <span class="px-2 font-texto">{{ caracteristica }}</span>
          </li>
        </ul>
      </div>
      <!--Botão para comprar o pacote no mobile-->
      <botaopacote
        class="md:hidden my-6 bg-gradient-to-r from-violet-400 to-purple-300 hover:bg-gradient-to-l from-violet-400 to-purple-300"
      />
    </div>

    <!-- Quarto Pacote - E-commerce -->
    <div
      class="bg-bg p-6 font-texticulo text-[14px] font-medium tracking-[1px] rounded-[10px] max-sm:w-[310px] text-outro snap-center"
    >
      <!--Div das informações como nome, preço e descrição do pacote E-commerce -->
      <div>
        <div
          class="flex justify-between text-pink-200 text-[19px] font-semibold"
        >
          <h2>E-commerce (Em breve)</h2>
        </div>
        <p class="my-2 font-texto">Um modo focado totalmente no E-commerce.</p>
        <div class="max-sm:hidden text-center text-[20px] my-8">
          Em breve...
        </div>
      </div>
      <!--Div da lista de características do pacote E-commerce -->
      <div>
        <h3 class="text-pink-200 py-1">Inclui:</h3>
        <ul>
          <li
            v-for="(caracteristica, index) in caracPacotes.pacotequatro"
            :key="index"
            class="flex py-[3px]"
          >
            <IconVerificado />
            <span class="px-2 font-texto">{{ caracteristica }}</span>
          </li>
        </ul>
      </div>
      <div class="md:hidden text-center text-[20px] my-10">Em breve...</div>
    </div>
  </div>
</template>
<script>
import botaopacote from "./botaopacote.vue";
import IconVerificado from "./IconVerificado.vue";
export default {
  name: "Pacote",
  components: { IconVerificado, botaopacote },
  setup() {
    const caracPacotes = {
      pacoteum: [
        "Design Responsivo",
        "Otimização rápida",
        "Navegação interna",
        "1 Página",
        "4 Seções",
        "1 Funcionalidade",
        "Ícones de Redes Sociais",
        "Aplicamos o seu conteúdo",
      ],
      pacotedois: [
        "Design Responsivo",
        "Otimização rápida",
        "Menu/Barra de navegação",
        "3 Páginas",
        "7 Seções",
        "5 Funcionalidades",
        "Formulário de Contato",
        "Funcionalidades Básicas de E-commerce",
        "Ícones de Redes Sociais",
        "Aplicamos o seu conteúdo",
      ],
      pacotetres: [
        "Design Responsivo",
        "Otimização rápida",
        "Menu/Barra de navegação",
        "7 Páginas",
        "11 Seções",
        "7 Funcionalidades",
        "Formulário de Contato",
        "Formulário de Opções",
        "Chat de Mensagens",
        "Algumas Funcionalidades E-commerce",
        "Ícones de Redes Sociais",
        "Aplicamos o seu conteúdo",
      ],
      pacotequatro: [
        "Design Responsivo",
        "Otimização rápida",
        "Menu/Barra de navegação",
        "Aplicamos o seu conteúdo",
        "Chat de Suporte",
        "Ícones de Redes Sociais",
        "E em breve muito mais!",
      ],
    };

    return { caracPacotes };
  },
};
</script>
