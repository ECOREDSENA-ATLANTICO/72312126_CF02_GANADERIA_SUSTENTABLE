<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La planificación ganadera es el proceso estratégico de organizar y gestionar todos los aspectos de una explotación ganadera con el objetivo de maximizar la producción, optimizar el uso de recursos y garantizar la sostenibilidad. Implica la toma de decisiones informadas sobre la selección de razas, manejo de pasturas, alimentación, sanidad animal y reproducción, así como la evaluación de la rentabilidad y el impacto ambiental. Una buena planificación permite anticipar necesidades, adaptarse a cambios y mejorar el bienestar del ganado, asegurando así el éxito a largo plazo de la actividad ganadera. Los forrajes son plantas utilizadas para alimentar al ganado herbívoro y son esenciales en la ganadería.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra La síntesis del componente formativo forraje y planificación ganadera. Teniendo en cuenta las diferentes caracteristicas de la ganadería.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
