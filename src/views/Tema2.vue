<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Banco de proteínas
    .row.justify-content-center.my-3
      .col-lg-8.col-md-7.align-content-center
        p.mb-2 Los bancos de proteínas son cultivos intensivos de varias especies de leguminosas, estos sirven de alimento para el ganado, son resistentes a las podas y tienen gran capacidad de rebrote. 
        p.my-3 El forraje que se da en los bancos de proteínas se emplea como suplemento en la dieta del ganado alimentado bajo una dieta de pasto.
        p.my-3 Se pueden cultivar tres tipos de bancos de proteína:
      .col-lg-4.col-md-5.align-content-center(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Figura 4.
            span <em>Banco de proteínas</em>
        figure
          img.mt-3(src='@/assets/curso/temas/tema2/img9.svg', alt='Se muestra una figura con banco de proteinas.')
        figcaption Nota. SENA (2024).
    .row.justify-content-center.my-3
      .col-lg-3.col-md-5.p-0.my-3(style="background: #DFC6B3; border-radius: 20px")
        figure
          img.mx-0(src="@/assets/curso/temas/tema2/img1.png", alt="imagen decorativa")
        p.ali.px-3.pt-3.text-center <b>Especies forrajeras arbóreas que<br>se siembran solas</b>
        p.px-3.text-center Se dan a altas densidades y las podas se deben realizar de manera manual.
      .col-lg-3.col-md-5.p-0.mx-3.my-3(style="background: #BBEDFD; border-radius: 20px")
        figure
          img.mx-0(src="@/assets/curso/temas/tema2/img2.png", alt="imagen decorativa")
        p.px-3.pt-3.text-center <b>Forrajeras arbóreas asociadas</b>
        p.px-3.text-center Son de porte mayor que la anterior y se siembra en los cultivos o en los pastos. Estos árboles crecen mucho, lo que dificulta al animal consumirlos directamente, por lo que se debe hacer de forma manual llevando el material comestible al sitio donde el ganado come.
      .col-lg-3.col-md-5.p-0.my-3(style="background: #DFC6B3; border-radius: 20px")
        figure
          img.mx-0(src="@/assets/curso/temas/tema2/img3.png", alt="imagen decorativa")
        p.px-3.pt-3.text-center <b>Especies forrajeras arbóreas sembradas en bordes o franjas.</b>
        p.px-3.text-center Son sembradas con pasto o caña y su reproducción se realiza por propagación sexual o asexual.

    .row.justify-content-center.my-3(data-aos="flip-up")
      .col-lg-10.col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 5.
          span <em>Bancos mixtos forrajeros.</em>
        .row.fnd-img-1
          .col-lg-9.p-4
            p <strong>Características de las especies arbóreas utilizadas en los bancos de proteína</strong>
              ul.mb-0
                li
                  span El Arco nacedero: esta especie tiene un alto valor nutricional y la digestibilidad es tolerante.
              ul.mb-0
                li
                  span La Mata ratón: es una especie que tolera los suelos pobres y que se puede dar entre los 0 y los 1500 metros.
              ul.mb-0
                li
                  span La Leucaena: este forraje es rico en betacarotenos y fósforo, es una leguminosa muy estudiada en los trópicos.
          .col-lg-3.col-md-8.align-content-center(style="justify-content: end")
            img(src="@/assets/curso/temas/tema2/img5.png", alt="se muestra una figura con bancos mixtos forrajeros.")
        figcaption Fuente: SENA (2024).
    .row.justify-content-center.my-3
      .col-lg-10.col-md-10
        .row.justify-content-center
          .col-lg-12.crd--avatarHorizontal-left-bgr4.p-3.mb-3.m-auto
            .row.align-items-center.top
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "60px", height="60px")
              .col(style="z-index:1")
                p.mb-0.pe-3 Se le llaman bancos forrajeros mixtos a los cultivos que se asocian como especies arbóreas, arbustivas de alto valor nutricional y plantas herbáceas. Esta técnica se hace con el fin de sacar forrajes de buena calidad en cuanto a proteínas, carbohidratos, vitaminas, minerales y fibra.
          .col-lg-12.crd--avatarHorizontal-left-bgr4.p-3.mb-3.m-auto
            .row.align-items-center.top
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "60px", height="60px")
              .col(style="z-index:1")
                p.mb-0.pe-3 Los forrajes que están producidos en el banco son cortados y luego son suministrados a los bovinos durante todos los meses del año, estos se pueden suministrar frescos o secos en henos o en ensilajes.
          .col-lg-12.crd--avatarHorizontal-left-bgr4.p-3.mb-3.m-auto
            .row.align-items-center.top
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "60px", height="60px")
              .col(style="z-index:1")
                p.mb-0.pe-3 Los bancos mixtos requieren para su cultivo un área pequeña, pero demandan mucha mano de obra, la ventaja más importante de tener en un predio los bancos forrajeros es que ayudan a conservar los nacimientos de las quebradas y disminuye el impacto que genera el ganado sobre los bosques y zonas frágiles.
          .col-lg-12.crd--avatarHorizontal-left-bgr4.p-3.mb-3.m-auto
            .row.align-items-center.top
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "60px", height="60px")
              .col(style="z-index:1")
                p.mb-0.pe-3 Se les dice bancos proteicos cuando los forrajes cultivados tienen un contenido de proteína mayor a un 15% y se les denomina energéticos cuando los forrajes tienen alto contenido de carbohidratos que aportan mucha energía al animal, los cuales se encuentran en la caña de azúcar y en los pastos de corte.
          .col-lg-12.crd--avatarHorizontal-left-bgr4.p-3.mb-3.m-auto
            .row.align-items-center.top
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema2/img6.svg", alt="", width= "60px", height="60px")
              .col(style="z-index:1")
                p.mb-0.pe-3 En los bancos mixtos se encuentran especies que tienen alto contenido de proteínas y de energía, esto hace que sea una muy buena alternativa de alimentación para que los animales tengan una buena nutrición. Según las condiciones bioclimáticas se pueden hacer diferentes combinaciones de especies para establecer el banco forrajero.

    .row.justify-content-center.my-3
      .col-lg-10.col-md-12
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 2.
            span <em>Especies arbóreas y arbustivas para bancos forrajeros</em>
        .tabla-b
          table
            caption Fuente: Uribe, Zuluaga, Murgueitio, Valencia y  Cols (2011).
            thead
              tr
                th.text-center(style="background: #DFE5AD; border: 1.2px solid #000000") Nombre común C
                th.text-center(style="background: #DFC6B3; border: 1.2px solid #000000") Nombre científico
                th.text-center(style="background: #DFC6B3; border: 1.2px solid #000000") Familia
                th.text-center(style="background: #DFC6B3; border: 1.2px solid #000000") Piso térmico
            tbody
              tr
                td Bore
                td Xanthosoma sagittifolium Schott
                td Araceae
                td 0 – 1.800 Mts. Piso térmico: cálido.
              tr
                td Botón de oro
                td Tithonia diversifolia (Hemsl.) Gray
                td Asteraceae
                td 0 – 2.400 Mts. Piso térmico: frío.
              tr
                td Cachimbo, Cámbulo y poró
                td Erythrina poeppigiana (Walp.) Cook
                td Papilionaceae
                td 600 – 1.400 Mts. Piso térmico: cálido.
              tr
                td Caña de azúcar
                td Saccharum officinarum L
                td Poaceae
                td 0 – 2.300 Mts. Piso térmico: frío.
              tr
                td Chachafruto
                td Erytrhina edulis Triana
                td Papilionaceae
                td 1.400 – 2.500 Mts. Piso térmico: frío.
              tr
                td Cratylia, Veranera
                td Cratylia argentea(Desv.) Kuntze
                td Papilionaceae
                td 180 – 930.  MtsPiso térmico: cálido.        
              tr
                td Gamboa
                td Smallanthus	riparius (H.B.K.)
                td Arastaceae
                td 1.000 – 1.850 Mts. Piso térmico: templado.
              tr
                td Maní forrajero
                td Arachis pintoi Kaprov. & WC Gregory
                td Papilionaceae
                td 0 – 1.500 Mts. Piso térmico: cálido.
              tr
                td Mata ratón
                td Gliricidia sepium (Jacq.) Kunth ex Walp
                td Papilionaceae
                td 0 – 1.200 Mts. Piso térmico: cálido.
              tr
                td Morera
                td Morus alba L
                td Moraceae
                td 0 – 2.850 Mts. Piso térmico: frío.
              tr
                td Nacedero, Madre de agua y Quiebrabarrigo
                td Trichanthera gigantea (Bonpl.) Nees
                td Acanthaceae
                td 0 – 2.000 Mts. Piso térmico: templado. 
              tr
                td Pinocho, Resucitado
                td Hibiscus rosa-sinencis L
                td Malvaceae
                td 0 – 1.800 Mts. Piso térmico: templado. 
              tr
                td Pízamo, Balú
                td Erythrina fusca Lour
                td Fabaceae
                td 0 – 2.000 Mts. Piso térmico: templado. 
              tr
                td Pringamoza, Ortigo
                td Urera caracasana (Jacq.) Griseb
                td Urticaceae
                td 0 – 1.800 Mts. Piso térmico: templado. 
              tr
                td Ramio
                td Boehmeria nivea (L) Gaud
                td Urticaceae
                td 1.000 – 1.800 Mts. Piso térmico: templado.  

    .row.justify-content-center.my-3
      .col-lg-6.mx-0.p-3.align-content-center.px-5.my-3(data-aos="fade-right")(style="background: #EFF2D5; border-radius: 20px")
        .row.justify-content-center
          .col-lg-10.align-content-center
            h5.mb-3 Selección del terreno para el establecimiento:
          .col-lg-2.col-md-3
            img.my-3(src='@/assets/curso/temas/tema2/img7.svg', alt='Imagen decorativa')(style="height: 60px; width: 60px")
        p.my-1 Al elegir un área para sembrar el banco forrajero tenga en cuenta lo siguiente:
        ul.mb-0
          li
            span Que el lote elegido esté cerca de la vivienda o corral.
        ul.mb-0
          li
            span Que el terreno seleccionado no se inunde.
        ul.mb-0
          li
            span Que el lote no tenga exceso de sombra.
        ul.mb-0
          li
            span Contar con buena disponibilidad de agua para realizar el riego.
        ul.mb-0
          li
            span Cercar el área donde se estableció el banco forrajero para que no entren otros animales diferentes a los bovinos.
        ul.mb-0
          li
            span Tener abonos para la fertilización del cultivo. 
      .col-lg-6.mx-0.p-3.align-content-center.px-5.my-3(data-aos="fade-right")(style="background: #DCF6FE; border-radius: 20px")
        .row.justify-content-center
          .col-lg-10.align-content-center
            h5.mb-3 Establecimiento del banco forrajero
          .col-lg-2.col-md-3
            img.my-3(src='@/assets/curso/temas/tema2/img8.svg', alt='Imagen decorativa')(style="height: 60px; width: 60px")
        p.my-1 Para el establecimiento del banco forrajero se deben seguir las siguientes recomendaciones:
        ul.mb-1
          li
            span Seleccionar el terreno teniendo en cuenta las características mencionadas anteriormente.
        ul.mb-1
          li
            span Realizar un análisis de suelos para conocer su estado en cuanto a sus componentes.
        ul.mb-1
          li
            span Realizar un hueco (calicata) en el suelo para observar sus condiciones.
        ul.mb-1
          li
            span Elaborar, si es necesario, una enmienda teniendo en cuenta el análisis del suelo.
        ul.mb-1
          li
            span Realizar los caballones situados de oriente a occidente. 
        ul.mb-1
          li
            span Sembrar en curvas a nivel de la zona de ladera.


    
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
