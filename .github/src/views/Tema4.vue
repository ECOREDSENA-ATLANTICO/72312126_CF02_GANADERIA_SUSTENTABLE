<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Bienestar animal, instalaciones y transporte de bovinos


    .bloque-texto-g.p-3.p-sm-4.p-md-5.my-3(data-aos="flip-up")(style="background: #DFC6B3")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-3(data-aos="fade-left")(style="background: #DFC6B3")
        p En la granja se dan por lo general muchas circunstancias que afectan el bienestar de los animales, lo cual ejerce un marcado efecto sobre la calidad e inocuidad de la carne obtenida.<br>
        p Entre otros factores que pueden afectar una unidad productiva son las instalaciones deficientes, elementos cortopunzantes y objetos contundentes como el uso de toques eléctricos durante la carga del animal, además no se recomienda el uso de perros para dirigir el ganado o torcer la cola de los bovinos para así forzar la movilización.
    
    .row.justify-content-center.mb-4
      .col-lg-9.justify-content-center.align-content-center(data-aos="flip-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row(titulo="Los embarcaderos o mangas")
            .col-12.align-content-center
              p.mb-3 Los embarcaderos o mangas mal diseñados o en mal estado pueden generar lesiones en las canales, por este motivo es necesario un buen diseño y mantenimiento de estas locaciones, con el fin de facilitar la integridad y protección de los animales.
              p.mb-3 De igual forma el arreo y el recorrido que realizan los bovinos de los potreros a los corrales y la movilización de estos por las mangas, el transporte y su descarga casi siempre están acompañadas de malos tratos por parte de los operarios como son patadas, gritos, usos de garrotes, entre otros, lo cual se ve reflejado en las canales, las pieles y la calidad de la carne, haciendo que esta tenga un periodo de anaquel más reducido. Por tal razón en las fincas ganaderas se recomiendan las mangas curvas con paredes cerradas y sin salientes para evitar lesiones en el animal.
              p El embarcadero es una rampa protegida por cercas que permite la entrada o  salida del establecimiento del animal. Los pisos de los embarcaderos deben ser antideslizantes para que minimicen la caída de los animales y deben tener una altura no mayor a 20 cm con referencia del camión que se usa para el transporte del ganado.
          .row(titulo="Implementos, lazos y prácticas que se utilizan en el manejo animal")
            .col-lg-7.align-content-center
              p Los implementos y lazos deben estar en condiciones óptimas para su uso, con el fin de evitar lesiones en los bovinos y accidentes en el personal que lo utiliza. Las agujas que se emplean para aplicar medicamentos a los animales deben ser nuevas para evitar infecciones y lesiones. Cuando en las prácticas de manejo se requiera el derribamiento de los bovinos es necesario evitar el maltrato de estos.
            .col-lg-5
              img.my-3(src="@/assets/curso/temas/tema4/img3.png", alt="alt")
          .row(titulo="El topizado de los bovinos")
            .col-lg-7.align-content-center
              p El topizado es una práctica que se realiza a los bovinos para extraer los cuernos cuando estos empiezan a desarrollarse. Se hace con el fin de que los animales no se lastimen unos con otros, disminuir las lesiones durante el levante y también en el transporte. Esta práctica puede generar estrés y dolor, por tal razón lo debe realizar personal capacitado. El castrado y topizado en bovinos se debe efectuar en un periodo no superior a los seis meses de edad, cumpliendo con todas las medidas higiénicas para evitar que se presente alguna infección.
            .col-lg-5
              img.my-3(src="@/assets/curso/temas/tema4/img4.png", alt="alt")
          .row(titulo="Comportamiento del bovino y su manejo")
            .col-lg-7.align-content-center
              p.mb-2 Para poder aplicar las buenas prácticas de bienestar animal se hace necesario conocer el comportamiento de los bovinos. Esta especie anda en manada, su comportamiento no es dominante ni individual, por lo general los bovinos por instinto tienden alejarse de las especies dominantes y depredadoras, ellos en las manadas se sienten seguros y por este motivo siempre tienden a buscar refugio en ellas, por lo tanto, se hace más fácil trabajar con una manada que con animales solos o que se aíslan.
            .col-lg-5
              img.my-3(src="@/assets/curso/temas/tema4/img5.png", alt="alt")
          .row(titulo="Zona de fuga")
            .col-lg-7.align-content-center
              p.mb-2 Es el área donde el personal que maneja el ganado bovino se puede acercar a él o a la manada sin ir a generar ninguna reacción. Cuando una persona se introduce en la zona donde se encuentra la manada los animales se alejan, esto es favorable pues se genera presión no física, lo actual es una ventaja que permite dirigir un grupo de animales donde se necesite llevar. Este método pretende aprovechar el comportamiento natural del bovino y no causa daños físicos que afecten su bienestar.
            .col-lg-5
              img.my-3(src="@/assets/curso/temas/tema4/img6.png", alt="alt")
      .col-lg-3.col-md-6.align-content-center(data-aos="fade-right")
        figure
          img.my-4(src="@/assets/curso/temas/tema4/img2.png", alt="alt")(style="height: 450px")

    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Consideraciones a tener en cuenta en el manejo de bovinos
      
    p.my-3 Al seleccionar el manejo de bovinos es importante tener en cuenta lo siguiente:

    .row.justify-content-center.align-items-center.mb-3.p-4(data-aos="zoom-in")
      .col-lg-4.col-md-5.my-3
        figure
          img.my-3(src="@/assets/curso/temas/tema4/img7.png")
      .col-lg-8
        SlyderF.custom(columnas="col-lg-6 col-md-6")
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            p.mb-0 <b>Unidades productivas:</b> Se puede decir que muchas unidades productivas donde se tienen bovinos, elmaltrato a los animales es algo que ocurre con frecuencia y llega a considerarsecomo algo normal, sin tener conciencia de que esto genera pérdidaseconómicas en la producción, además de una falta de respeto por un ser vivo.	 
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            p.mb-0 <b>Bienestar animal:</b> Estas pérdidas se pueden reducir con la implementación de parámetros debienestar animal. Por ejemplo, un correcto manejo de fuga consiste en dejarque los animales que son trasladados desde los corrales a los embarques parael transporte hasta el cajón de noqueo o sensibilización en el frigorífico no semaltraten utilizando la fuerza.
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            p.mb-0 <b>Movilización debovinos:</b> El mayor problema cuando se movilizan bovinos es que no se les da laoportunidad de que se muevan según su comportamiento, sino que se llevan ala fuerza, lo que conlleva a un maltrato y gasto de energía en el animal.
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            p.mb-0 <b>Maltrato de bovinos:</b> los arbustos forrajeros y plantas leguminosas mejoran las propiedades del suelo, pues restituyen el nitrógeno presente en este. Adicionalmente, las raíces de los árboles reciclan los nutrientes del subsuelo en donde el pasto no alcanza a llegar.
          .tarjeta.tarjeta--slyder.p-4.fnd-4
            p.mb-0 <b>Potreros de ganado:</b> Como se ha expresado anteriormente las consecuencias del maltrato a losbovinos se pueden evidenciar por las fracturas, contusiones, hematomas ypieles en mal estado.

    .row.justify-content-center.my-4.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Figura 8.
          span <em>Zona de fuga y punto de balance</em>
        figure
          img.my-3(src='@/assets/curso/temas/tema4/img8.svg', alt='Se muestra una figura coninteracción de componentes.')
        figcaption Fuente. ICA (2006).

    .row.justify-content-center.my-3.me-1
      .col-lg-6.crd--avatarHorizontal-left-bgr2.p-3.mb-3.m-auto
        .row.align-items-center.top
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema4/img9.png", alt="", width= "75px", height="75px")
          .col(style="z-index:1")
            p.pe-3.mb-0 El desplazamiento de los bovinos depende de la fiereza o de la mansedumbre del animal. La mayoría del ganado es manso, no tiene zona de fuga y se deja llevar sin problema, ya que se dejan tocar fácilmente. Cuando un animal se aleja de las personas es porque éste se aproxima mucho a la zona de fuga.
      .col-lg-6.crd--avatarHorizontal-left-bgr2.p-3.mb-3.m-auto
        .row.align-items-center.top
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema4/img10.png", alt="", width= "75px", height="75px")
          .col(style="z-index:1")
            p.mb-0.pe-3 El punto de balance es un punto imaginario que también se llama de equilibrio y se encuentra a la altura del hombro del animal, es clave para movilizar a los bovinos, por ejemplo, el animal se moverá hacia adelante si la persona se ubica detrás del punto de balance y si se hace frente a éste, el animal retrocederá.
    .row.justify-content-center.my-3.me-1
      .col-lg-6.crd--avatarHorizontal-left-bgr2.p-3.mb-3.m-auto
        .row.align-items-center.top-1
          .col-auto.align-content-center(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema4/img11.png", alt="", width= "75px", height="75px")
          .col(style="z-index:1")
            p.mb-0.pe-3 En los bovinos existe un punto ciego que está ubicado detrás de la cola del animal, el cual debe ser evitado por la persona que los dirige, pues si el animal no ve al operario, dará la vuelta entorpeciendo la actividad que se está realizando.
      .col-lg-6.crd--avatarHorizontal-left-bgr2.p-3.mb-3.m-auto
        .row.align-items-center.top
          .col-auto(style="z-index:1")
            figure
              img(src="@/assets/curso/temas/tema4/img12.png", alt="", width= "75px", height="75px")
          .col(style="z-index:1")
            p.mb-0.pe-3 Los principios de zona de fuga y punto de balance se utilizan para hacer que el ganado camine en las mangas, es importante tener en cuenta que cuando el animal está dentro de la manga no es necesario golpearlo o utilizar el tábano para que este se mueva, ya que si se aplica bien el punto de balance ellos se moverán con facilidad.

    .row.justify-content-center.my-3
      .col-lg-3.col-md-6.align-content-center
        figure
          img.my-3(src='@/assets/curso/temas/tema4/img14.png', alt='Imagen decorativa')(style="height: 520px")
      .col-lg-9
        .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
          .col-auto
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
          .col.px-0
            h3.mb-0 Instalaciones y transporte de bovinos

        p.my-3 Las instalaciones donde se encuentre el ganado, ya sea en los potreros, corrales, bretes y mangas deben generarle tranquilidad y seguridad al animal, de igual forma deben contar con acceso libre a los comederos y bebederos de agua que satisfagan sus requerimientos nutricionales y les proporcione protección y sombra frente a los cambios climáticos, usando sistemas silvopastoriles y barreras vivas.
        p.my-3 Los pisos de los corrales, bretes y mangas deben ser construidos en superficies antideslizantes y de buen drenaje con el fin de evitar accidentes en el animal. Las instalaciones en los cuales son alojados los bovinos deben tener buena iluminación, ya sea natural o artificial, pues estos huyen de la oscuridad, además deben mantener limpias y desinfectadas para garantizar su bienestar.

        h5.mt-4.green_icon(data-aos="fade-left") Transporte
          img.my-3(src='@/assets/curso/temas/tema3/img3.svg', alt='Imagen decorativa')
            
        p.my-3 El transporte desde el lugar de crianza hasta el matadero es considerado uno de los factores de estrés más relevantes de la industria cárnica, tanto por el propio desplazamiento del animal, como por las actividades a las que son sometidos.
        p.my-3 El tratamiento previo al transporte, el ruido, las vibraciones, el reagrupamiento social, el hacinamiento, los factores climáticos (temperatura, humedad, gases, entre otros), la carga y descarga, el tiempo de transporte, la privación de aguas y los alimentos son factores estresantes para considerar.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-10  
        .cajon.color-secundario.p-4(style="background: #DCF6FE")
          p.mt-0.mb-2 Los animales que van a ser conducidos a los centros de sacrificio deben ser llevados desde los corrales al vehículo siguiendo los principios de la zona de fuga y punto de balance. Además, es importante que coman bien, ya que durante el viaje se generan pérdidas de peso.
          p.mb-0 Para disminuir el estrés se debe evitar transportar animales provenientes de distintos lugares de crianza, con el objetivo de prevenir una lucha entre cohortes y no trasladar animales enfermos o débiles. 

        p.my-3 Seguido podemos ver algunos requisitos de transporte:

        .row.justify-content-center
          .col-lg-6.crd--avatarHorizontal-left-bgr1.p-3.mb-3.m-auto
            .row.align-items-center.top
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema4/img15.svg", alt="", width= "60px", height="60px")
              .col(style="z-index:1")
                p.mb-0.pe-3 La superficie de carga y las paredes de las jaulas deben estar bien ensambladas sin dejar superficies cortantes ni grietas.
          .col-lg-6.crd--avatarHorizontal-left-bgr1.p-3.mb-3.m-auto
            .row.align-items-center.top
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema4/img15.svg", alt="", width= "60px", height="60px")
              .col(style="z-index:1")
                p.mb-0.pe-3 Las paredes deben ser de 1,8 metros de altura para bovinos y de 0,6 metros para ganado menor.
        .row.justify-content-center
          .col-lg-6.crd--avatarHorizontal-left-bgr1.p-3.mb-3.m-auto
            .row.align-items-center.top
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema4/img15.svg", alt="", width= "60px", height="60px")
              .col(style="z-index:1")
                p.mb-0.pe-3 Deben ser fáciles de limpiar y desinfectar.
          .col-lg-6.crd--avatarHorizontal-left-bgr1.p-3.mb-3.m-auto
            .row.align-items-center.top
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema4/img15.svg", alt="", width= "60px", height="60px")
              .col(style="z-index:1")
                p.mb-0.pe-3 Los vehículos deben disponer de suficiente ventilación a unos 0,6 u 0,8 metros sobre la superficie de carga.
        .row.justify-content-center
          .col-lg-12.crd--avatarHorizontal-left-bgr1.p-3.mb-3.m-auto
            .row.align-items-center.top
              .col-auto(style="z-index:1")
                figure
                  img(src="@/assets/curso/temas/tema4/img15.svg", alt="", width= "60px", height="60px")
              .col(style="z-index:1")
                p.pe-3.mb-0 Cuando se transportan bovinos se debe respetar la densidad de la carga del vehículo, lo que favorece a una buena ventilación que ayuda a disminuir el estrés y a minimizar el riesgo de la morbilidad del animal durante el viaje, disminuyendo las pérdidas.

    .row.justify-content-center.my-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
            h5 Tabla 3.
            span <em>Normas recomendadas para la densidad de carga</em>
        .tabla-b
          table.text-center
            caption Fuente: The World Organization for Animal Health (2010).
            thead
              tr
                th(style="background: #DFE5AD; border: 1.2px solid #000000") Animal
                th(style="background: #F6F8E9; border: 1.2px solid #000000") Peso (kg)
                th(style="border: 1.2px solid #000000") Densidad ( kg/m2)
                th(style="border: 1.2px solid #000000") Espacio de animal en (m2)
                th(style="border: 1.2px solid #000000") N° de animales por 10 m2
            tbody
              tr
                td(rowspan="2") Terneros
                td 50
                td 220
                td 0,23
                td 43
              tr
                td 70
                td 246
                td 0,28
                td 36
              tr
                td(rowspan="4") Bovinos
                td 300
                td 344
                td 0,84
                td 12
              tr
                td 500
                td 393
                td 1,27
                td 8
              tr
                td 600
                td 408
                td 1,47
                td 7
              tr
                td 700
                td 400
                td 1,75
                td 6

    .row.mt-4.mb-4.align-items-center(data-aos="fade-left")
      .col-auto
        img(src='@/assets/curso/temas/tema1/img2.svg', alt='Imagen decorativa')
      .col.px-0
        h3.mb-0 Sacrificio en la producción bovina
      
    p.my-3 Sacrificar los animales de forma humanitaria es un aspecto importante en el bienestar animal. Cuando el ganado es llevado al centro de sacrificio estos deben contar con corrales que estén diseñados respetando los principios para su bienestar.
    p.my-3 Es importante evitar juntar animales de diferentes hatos y con cuernos. Tener presente que el ganado antes del sacrificio debe descansar más o menos 12  horas y tener a disposición agua potable y alimento.


    h5.mt-4.green_icon(data-aos="fade-left") Insensibilización
      img.my-3(src='@/assets/curso/temas/tema3/img3.svg', alt='Imagen decorativa')

    .row.justify-content-center.my-3
      .col-lg-4.col-md-8.align-content-center
        img(src='@/assets/curso/temas/tema4/img16.png', alt='Imagen decorativa')(style="height: 430px")
      .col-lg-8 
        p.my-3 Es un proceso donde el animal es puesto en un estado inconsciente con el fin de que no sufra dolor en el momento del sacrificio. Para el caso de los bovinos se pueden utilizar medidas mecánicas como por ejemplo a través de una pistola de perno cautivo que se dispara en la frente del animal y le ocasiona un daño cerebral de manera inmediata dejándolo inconsciente.
        .fondo-vineta
          p <b>Los sistemas utilizados para producir la insensibilización deben reunir los siguientes parámetros:</b>
          ul.m-0
            li 
              span No afectar las propiedades de conservación de la carne para lo cual deberán permitir un rápido desangrado evitando la incorporación de suciedad en los tejidos internos.
          ul.m-0
            li 
              span No disminuir la calidad de la carne evitando alterar sus características físicas, químicas e higiénicas. 
          ul.m-0
            li 
              span Deben insensibilizar al animal evitando dolores y sufrimientos innecesarios, pero no provocarán la muerte.
          ul.m-0
            li 
              span Ser de fácil aplicación demandando poco esfuerzo al operador y evitando el uso de equipos complejos.
          ul.m-0
            li 
              span Producir efecto rápido y eficaz adaptándose al ritmo del trabajo de la faena y evitando repeticiones del proceso.
          ul.m-0
            li 
              span No representar riesgo alguno para el operador, ya sea por efecto directo de su aplicación o por acciones defensivas de los animales. 
    h5.mt-4.green_icon(data-aos="fade-left") Desangrado
      img.my-3(src='@/assets/curso/temas/tema3/img3.svg', alt='Imagen decorativa')

    p.my-3 El desangrado se produce al seleccionar los vasos sanguíneos a la entrada del pecho (yugular y carótida), es el proceso de matanza propiamente dicho, provoca la muerte como consecuencia del fallo cardiaco inducido por la hipovolemia.
    p.my-3 La eliminación del mayor volumen de sangre además de provocar una muerte rápida al animal reviste gran importancia en la presentación comercial de la carne en su higiene (la sangre favorece el crecimiento microbiano) y en la propagación de su periodo de conservación, así como de productos que sean elaborados con ella.
    p.my-3 El tiempo transcurrido entre la insensibilización debe reducirse al mínimo para que se pueda aprovechar al máximo el efecto de aturdimiento y al mismo tiempo evitar que las hormonas liberadas por el estrés se disminuyan por todo el cuerpo mediante la circulación afectando la calidad de la carne.


</template>

<script>
export default {
  name: 'Tema4',
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
