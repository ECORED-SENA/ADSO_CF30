export default {
  global: {
    componenteFormativo: 'Construcción de aplicaciones con JAVA',
    descripcionCurso:
      'Mediante el estudio de este componente, el aprendiz estará capacitado para procesar y aplicar conceptos sobre lenguajes de programación, formularios HTML, elementos de JSP, Java, programación orientada a objetos, entre otros. En el mismo sentido, potenciará sus habilidades para la construcción de aplicaciones con Java y construcción de aplicaciones web básicas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Java con JDBC',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clases e interfaces JAVA',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Conexión a base de datos desde aplicación Java',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Servlets</em> y JSP',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción a <em>servlets</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Formularios HTML con <em>Servlets</em>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'HTTP <em>Session</em>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Elementos de JSP',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'MVC',
            hash: 't_2_5',
          },
        ],
      },
      /*{
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fundamentación Textil',
        desarrolloContenidos: true,
      },*/
    ],
    subMenu: [
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
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  referencias: [
    {
      referencia:
        'Berzal, F., Cubero, J., y Cortijo, F. (2007). Desarrollo profesional de aplicaciones <em>web</em> con <em>Asp.Net.</em> ',
      link:
        'https://books.google.es/books?hl=es&lr=&id=J1d_9l6zlAIC&oi=fnd&pg=PA3&dq=servlests+y+jsp+fernando+berzal&ots=GsR9oMYn8M&sig=YaCnuz6ed8E_kEo_G1CPHH-KjjU',
    },
    {
      referencia:
        'Gallagher, J. (4 de mayo de 2021). Los lenguajes de programación más populares <em>Career Karma.</em>',
      link: 'https://careerkarma.com/blog/top-programming-languages-2021/',
    },
    {
      referencia:
        'Gómez, M., & Cervantes, J. (2017). Introducción a la Programación <em>Web</em> con <em>Java</em>: <em>JSP </em>y <em>Servlets</em>, <em>JavaServer Faces.</em>',
    },
    {
      referencia:
        '<em>Statistics Times </em>(2021). Principales idiomas informáticos. <em>STATISTICSTIMES</em>. ',
      link: 'https://statisticstimes.com/tech/top-computer-languages.php',
    },
  ],
  glosario: [
    {
      termino: 'CGI',
      significado:
        'Interfaz de entrada común, se refiere a un sistema de comunicación que le indica al servidor <em>web</em> como enviar y recibir datos de una aplicación de servidor a un cliente.',
    },
    {
      termino: '<em>Frameworks</em>',
      significado:
        'Marco de trabajo que ofrece una estructura base para elaborar un proyecto con objetivos específicos, una especie de plantilla.',
    },
    {
      termino: 'Html',
      significado:
        '<em>HyperText Markup Language</em> Lenguaje de Marcas de Hipertexto.',
    },
    {
      termino: 'JDK',
      significado: 'Kit de Desarrollo de Java permite. ',
    },
    {
      termino: 'URL',
      significado:
        'Sus siglas (Localizador uniforme de recursos) facilita la recuperación de información determinada en internet se escribe en el navegador para ingresar a una página determinada.',
    },
  ],
  /*complementario: [
    
  ],*/
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto temático',
        centro: 'Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'Zulema León Escobar',
        cargo: 'Experta temática',
        centro: 'Centro de Teleinformática y Producción Industrial',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro: 'Centro agropecuario La Granja, Regional Tolima',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Luis Arévalo Mantilla'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      /*{
        nombre: '',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },*/
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
