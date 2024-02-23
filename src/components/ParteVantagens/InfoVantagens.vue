<template>
  <div
    v-for="(dado, index) in dadosVantagens"
    :key="index"
    v-show="active === index"
    class="numElementos"
  >
    <Setas
      class="absolute w-full translate-y-[70px] max-sm:translate-y-[110px] md:translate-y-[100px] md:px-[30px] lg:px-[170px]"
      :proximo="proximo"
      :voltar="voltar"
    />

    <div class="text-center">
      <h1
        class="font-texticulo font-bold max-sm:text-[18px] text-[22px] border-x border-azulroxa/50 rounded-full mx-12 animate-animacao-r"
      >
        {{ dado.titulo }}
      </h1>
      <p
        class="font-texto pt-5 lg:mx-[60px] max-sm:px-[50px] md:px-[200px] lg:mx-[200px] text-[18px] lg:text-[20px] animate-animacao-l"
      >
        {{ dado.descricao }}
      </p>
    </div>
  </div>
</template>
   
<script>
import { ref, onMounted } from "vue";
import Setas from "./Setas.vue";
export default {
  name: "InfoVantagens",
  components: { Setas },
  setup() {
    const active = ref(0);
    const numeroElementos = ref(null);
    const dadosVantagens = [
      {
        titulo: "O que fazemos?",
        descricao:
          "Trabalhamos com diferentes linguagens de programação para construir os melhores Websites, Landing Pages, páginas E-commerce, Blogs, e muito mais! Entre em contato conosco, e mostre a sua ideia, nós podemos torná-la realidade!",
      },
      {
        titulo: "Viemos para destacar!",
        descricao:
          "Fizemos pesquisas e observamos que muitas empresas fazem trabalhos comuns que não levam os seus clientes a um novo patamar. E decidimos entrar no mercado para mudar isso! Queremos destacar nossos clientes com nosso trabalho. E por isso buscamos fazer projetos de qualidade.",
      },
      {
        titulo: "Comunicação como Essência",
        descricao:
          "A sua opinião é importante para nós e queremos estabelecer uma comunicação constante desde dos protótipos ao resultado final, tornando real o que você procura e fazendo um trabalho com excelência.",
      },
      {
        titulo: "Beleza e Eficiência",
        descricao:
          "Com um conjunto de habilidades prontas para serem usadas ao máximo, criamos as melhores e mais recentes estruturas para o seu site, um designer pensado para fundir beleza e eficiência, e funcionalidades que deixarão as pessoas engajadas!",
      },
      {
        titulo: "A busca pela Novidade!",
        descricao:
          "Preservamos o conhecimento como parte fundamental dos nossos negócios. Assim há o contínuo aprendizado das novas técnicas e informações tecnológicas, para que possamos evoluir e mostrar a você que há um mundo de oportunidades!",
      },
    ];

    const proximo = () => {
      if (active.value === numeroElementos.value - 1) {
        active.value = 0;
        return;
      }
      active.value++;
    };
    const voltar = () => {
      if (active.value === 0) {
        active.value = numeroElementos.value - 1;
        return;
      }
      active.value--;
    };

    function passar() {
      if (active.value === numeroElementos.value - 1) {
        active.value = 0;
        return;
      }
      active.value++;
    }
    setInterval(passar, 12000);

    onMounted(() => {
      numeroElementos.value = document.querySelectorAll(".numElementos").length;
    });

    return { dadosVantagens, active, numeroElementos, proximo, voltar };
  },
};
</script>