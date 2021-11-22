<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 <em>Servlets</em> y JSP
    
    #t_2_1.titulo-segundo.color-acento-contenido
      .h2 2.1 Introducción a <em>servlets</em>
    
    #t_2_2.titulo-segundo.color-acento-contenido
      .h2 2.2 Formularios <em>HTML</em> con <em>Servlets</em>

    #t_2_3.titulo-segundo.color-acento-contenido
      .h2 2.3 <em>HTTP Session</em>

    #t_2_4.titulo-segundo.color-acento-contenido
      .h2 2.4 Elementos de JSP

    #t_2_5.titulo-segundo.color-acento-contenido
      .h2 2.5 MVC








</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
