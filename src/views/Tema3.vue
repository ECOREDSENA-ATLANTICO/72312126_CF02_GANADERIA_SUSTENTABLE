<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 La ganadería en Colombia

    .row.justify-content-center
      .col-lg-5.col-md-8
        img.my-3(src='@/assets/curso/temas/tema3/img1.png', alt='Imagen decorativa')
      .col-lg-7.aling-content-center
        p.mb-3 La ganadería en Colombia trata el concepto de bienestar animal, destacando los beneficios de su implementación en todos los eslabones de la cadena productiva de la carne, así como también las consecuencias del maltrato, las inadecuadas prácticas y los efectos del estrés sobre esta.
        p.mb-3 Además, se explican los implementos, lazos y procesos que se utilizan en el manejo animal y las condiciones requeridas para las instalaciones, el transporte y el sacrificio de los bovinos.
        p.my-23 El reto más grande que tiene la ganadería en Colombia es la implementación de un sistema de aseguramiento de la calidad que garantice el bienestar de los animales criados en finca.

    .row.justify-content-center.my-3
      .col-lg-10.aling-content-center
        .row.justify-content-center.fnd-img-4
          .col-lg-3.col-md-5
            img(src='@/assets/curso/temas/tema3/img2.png', alt='Imagen decorativa')
          .col-lg-9
            p.my-3 Actualmente debido a los cambios culturales el cuidado de los animales junto con la inocuidad de los alimentos y el medio ambiente, se han convertido en temas relevantes para los consumidores, a la hora de analizar un sistema de producción alimentaria. Inclusive existen leyes que promueven su bienestar, un ejemplo de esto son las buenas prácticas ganaderas como herramienta de ayuda a las unidades productivas de ganado.
    
    .row.justify-content-center.my-3
      .col-lg-10.col-md-12
        .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 ¿Qué es el bienestar animal?

        p.my-3 Se puede decir que es el trato humanitario ofrecido a los animales por medio de  un conjunto de medidas que ayudan a reducir el estrés, el sufrimiento, el dolor durante la crianza, transporte, exhibición y sacrificio, entre otros.

        h5.mt-4.green_icon(data-aos="fade-left") Beneficios de la implementación de las prácticas de bienestar animal
          img.my-3(src='@/assets/curso/temas/tema3/img3.svg', alt='Imagen decorativa')
            
        p.my-3 Son muchos los beneficios que se logran cuando se aplican las buenas prácticas de bienestar animal en la finca a lo largo de la cadena agroindustrial de la carne. Las buenas prácticas ayudan a que funcione de forma integral el sistema de aseguramiento de la calidad en todos los eslabones de la cadena productiva de la carne que van desde la producción primaria hasta el lugar de faenado.
        p.my-3 Los principales beneficios son:
        
    .row.justify-content-center.align-items-center.mb-3.p-4(data-aos="zoom-in")
      .col-lg-3.col-md-5.my-3
        figure
          img.my-3(src="@/assets/curso/temas/tema3/img4.svg")
      .col-lg-9
        SlyderF.custom(columnas="col-lg-6 col-md-6")
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            img.my-3(src="@/assets/curso/temas/tema3/img5.svg")(style="max-width: 150px")
            p.mb-0 Al reducir el estrés del animal, el dolor por un manejo inadecuado se mitiga y se mejora el desarrollo y el crecimiento de los bovinos.
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            p.mb-0 Suministrar dietas apropiadas y agua de calidad a los bovinos contribuye a la productividad en la unidad, además se mantiene la salud del animal. Se evitan pérdidas productivas y lesiones mediante el uso adecuado de instrumentos, de instalaciones seguras y confortables.
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            img.my-3(src="@/assets/curso/temas/tema3/img6.svg")(style="max-width: 150px")
            p.mb-0 Al tener espacios adecuados se evita la muerte de los bovinos	por hacinamiento. Al prevenir lesiones y estrés en el pre-faenado, se pueden evitar pérdidas económicas de la empresa agropecuaria.	 
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            img.my-3(src="@/assets/curso/temas/tema3/img7.svg")(style="max-width: 150px")
            p.mb-0 Se reduce la mortalidad de los animales en el sistema ganadero. Se mejora la calidad y la inocuidad de la carne porque se reduce el estrés de los bovinos.
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            img.my-3(src="@/assets/curso/temas/tema3/img8.svg")(style="max-width: 150px")
            p.mb-0 Se pueden aprovechar los subproductos de ganadería como las pieles de calidad. Hay aumento de competitividad para mercados nacionales e internacionales.
    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 El estrés

    p.my-3 El estrés se puede definir como el estado de adaptación del animal, que se caracteriza por el desequilibrio de la homeostasis como resultado de la acción de uno o más factores de origen interno y externo, que elabora el sistema nervioso central en función del estado emocional del individuo y de sus experiencias previas.
    p.my-3 El estrés trae como consecuencia un estímulo agresivo que afecta el animal como el miedo, el hambre, la sed, las condiciones climáticas severas o agentes nocivos que causan cambios fisiológicos y que pueden generar un estado patológico si el factor que lo provoca se mantiene por largo tiempo.

    h5.mt-4.green_icon(data-aos="fade-left") Efectos del estrés sobre la calidad de la carne
      img.my-3(src='@/assets/curso/temas/tema3/img3.svg', alt='Imagen decorativa')
    .row.justify-content-center
      .col-lg-7  
        p.my-3 Cuando el animal cae en estrés antes de la matanza se agota el glucógeno muscular y esto da como resultado un pH final de la carne alto superior de 6,0 y por lo tanto las proteínas se encuentran fuera de su punto isoeléctrico, por lo cual absorbe gran cantidad de agua que le da a la carne una apariencia superficial seca. Adicionalmente, el alto valor del pH favorece el crecimiento de las bacterias y la vida útil de la carne se ve reducida.
        p.my-3 Este tipo de carnes producidas bajo estrés se les denomina oscuras, firmes y seca o DFD que es la sigla en inglés.
      .col-lg-5.col-md-8 
        img.my-3(src='@/assets/curso/temas/tema3/img9.png', alt='Imagen decorativa')
    
    .row.justify-content-center.my-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 1.
          span <em>Bienestar animal</em>
        figure
          img.my-3(src='@/assets/curso/temas/tema3/img10.svg', alt='Imagen decorativa')
        figcaption Nota. SENA.

    .row.justify-content-center.my-3
      .col-lg-3.p-0.my-3(style="background: #DFC6B3; border-radius: 20px")
        figure
          img.mx-0(src="@/assets/curso/temas/tema3/img11.png", alt="imagen decorativa")
        p.p-3.text-center Las prácticas inadecuadas en el bienestar animal generan lesiones a los animales del hato en las diferentes etapas de producción en especial en el embarque, transporte y desembarque, esto da como resultado pérdidas económicas para los productores de carne.
      .col-lg-3.p-0.my-3.mx-3(style="background: #BBEDFD; border-radius: 20px")
        figure
          img.mx-0(src="@/assets/curso/temas/tema3/img12.png", alt="imagen decorativa")
        p.p-3.text-center La carne con contusiones o con hematomas se descompone rápidamente, pues el pH de esta se eleva y el exudado es más rápido, lo cual ocasiona que esta se descomponga con facilidad.	 
      .col-lg-3.p-0.my-3(style="background: #DFC6B3; border-radius: 20px")
        figure
          img.mx-0(src="@/assets/curso/temas/tema3/img13.png", alt="imagen decorativa")
        p.p-3.text-center La carne contaminada por agentes bacterianos se considera no apta para la alimentación porque puede generar problemas de salud al consumidor. Otra pérdida que se genera es el daño en las pieles por objetos contundentes y agudos como palos, alambres de púas, látigos, entre otros.
    .col-lg-8.crd--avatarHorizontal-left-bgr2.p-3.mb-3.m-auto
      .row.align-items-center.top
        .col-auto(style="z-index:1")
          figure
            img(src="@/assets/curso/temas/tema3/img14.svg", alt="", width= "60px", height="60px")
        .col(style="z-index:1")
          p.mb-0 Lo anteriormente descrito genera pérdidas económicas graves, pues los cueros son uno de los subproductos de mayor valor para la unidad productiva.


</template>

<script>
export default {
  name: 'Tema3',
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
