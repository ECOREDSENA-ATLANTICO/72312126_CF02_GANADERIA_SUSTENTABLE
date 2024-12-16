export default {
  global: {
    componenteFormativo: 'Forrajes y planificación ganadera',
    descripcionCurso:
      'Los forrajes son una parte fundamental en la ganadería, ya que representan una fuente de alimentación esencial para los animales herbívoros, como vacas, ovejas y caballos. Se refieren a las plantas, ya sean frescas o secas, que se utilizan para alimentar al ganado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistema silvopastoril',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Banco de proteínas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La ganadería en colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Bienestar animal, instalaciones y transporte de bovinos.',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF02_72312126_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Planificación forrajera',
      referencia:
        'SENA (2022) Ecosistema de Recursos Educativos Digitales - Cap 32 - Planificación Forrajera (visión general). [Video].Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/NTInNPga31g?si=FEgxoZBlSCcbl2-V',
    },
  ],
  glosario: [
    {
      termino: 'Forrajes',
      significado:
        'los forrajes son plantas, ya sean frescas o secas, que se utilizan como alimento para el ganado herbívoro, como vacas, ovejas y caballos.',
    },
    {
      termino: 'Ganadería',
      significado:
        'la ganadería es una actividad económica que se dedica a la cría y manejo de animales para la producción de alimentos, fibras, pieles y otros productos.',
    },
    {
      termino: 'Planificación',
      significado:
        'la planificación ganadera es el proceso estratégico de organizar y gestionar todos los aspectos de una explotación ganadera con el objetivo de maximizar la producción, optimizar el uso de recursos y garantizar la sostenibilidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aguilar, N., Rossner, M. y Balbuena, O. (2012). Manual práctico de bienestar animal',
      link:
        'https://www.produccion-animal.com.ar/etologia_y_bienestar/bienestar_en_bovinos/73-Manual_bienestar.pdf',
    },
    {
      referencia:
        'De la sota, M. (2004). Manual de procedimiento de bienestar animal.',
      link: '',
    },
    {
      referencia:
        'FEDEGAN. (2009). Módulo, sistemas silvopastoriles. Bogotá, Colombia: Sanmartín Obregón & Cía',
      link: '',
    },
    {
      referencia:
        'FEDEGAN, Federación Colombiana de Ganaderos. Fondo Nacional del ganado. (2024). Proyecto ganadería colombiana sostenible',
      link:
        'https://www.fedegan.org.co/programas/proyecto-ganaderia-colombiana-sostenible',
    },
    {
      referencia:
        'ICA. (2006). Bienestar animal: nuevo reto para la ganadería. Consultado el 24 de marzo de 2015.',
      link: '',
    },
    {
      referencia:
        'The World Organization for Animal Health. (2010). Código sanitario para animales terrestres.',
      link:
        'https://www.woah.org/es/que-hacemos/normas/codigos-y-manuales/acceso-en-linea-al-codigo-terrestre/',
    },
    {
      referencia:
        'Villanueva, C., Ibrahim, M., Torres, K., Casasola, F. y Arguedas, R. (2005). Las cercas vivas en las fincas ganaderas.',
      link:
        'https://repositorio.catie.ac.cr/bitstream/handle/11554/7782/Cercas_vivas.pdf?sequence=2&isAllowed=y',
    },
    {
      referencia:
        'Zapata Cadavid Álvaro; Tapasco Silva, Beatriz Elena. (2020). Sistemas silvopastoriles. Aspectos teóricos y prácticos.',
      link:
        'https://cipav.org.co/wp-content/uploads/2020/08/sistemas-silvopastoriles-aspectos-teoricos-y-practicos.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el desarrollo agroecológico Y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro agroindustrial - Regional Quindío.',
        },
        {
          nombre: 'Luis Guillermo Álvarez García',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Bladimir Pérez Meriño',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Nelson Ivan Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
