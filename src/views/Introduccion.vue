<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-3(data-aos="flip-up") El componente formativo forrajes y planificación ganadera se enfoca en describir los sistemas silvopastoriles, los bancos de proteínas, los bancos mixtos de forrajes y su importancia como alternativas de producción ganadera. Bienvenido a este componente formativo:

    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/vOJdSHYdX0E?si=ADKWzg2Y52Iw9iyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Nota: Sena (2024).
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
