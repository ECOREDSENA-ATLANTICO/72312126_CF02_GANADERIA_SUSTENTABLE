<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-3(data-aos="flip-up") El componente formativo generalidades de la ganadería sustentable, se enfoca en describir los mecanismos más utilizados para que la ganadería sustentable para que sea más productiva y se conserven los recursos naturales de manera eficiente, reduciendo el impacto sobre el medio ambiente. Posteriormente, se describirán las etapas para realizar un plan de finca, que incluye el diagnóstico, el diseño, la ejecución y la evaluación del grado de las acciones ejecutadas en el plan de finca. Bienvenido a este componente formativo:

    .video
      iframe(width="560" height="315" src="https://www.youtube.com" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
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
