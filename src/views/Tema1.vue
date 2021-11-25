<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Java con JDBC

    figure.mb-5(data-aos='fade-left')
      img(src="@/assets/curso/tema1/img1.jpg", alt="imagen ambiental", style='').m-auto

    p.mb-5 Cuando se habla de JDBC (<em>Java Data Base Connectivity</em>) se hace referencia a un <em>Driver</em> que encapsula un conjunto de clases e interfaces escritas de Java, creadas para establecer conexiones, enviar sentencias SQL y procesar los datos resultantes sobre bases de datos relacionales, ver figura 1.

    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-4
        span #[strong Figura 1] <em>Java</em> con JDBC
          
      .col-lg-6
        figure.mb-4.mb-lg-0(data-aos='fade-right')
          img(src="@/assets/curso/tema1/img2.svg", alt="Java con JDBC", style='width: 540px;').m-auto
      .col-lg-6
        p.mb-4 En términos más generales, JDBC es uno de los puentes que puede ser usado en Java para comunicar una aplicación Java con un servidor de bases de datos relacionales.
        p.mb-4 Trabajar conexiones a bases de datos con JDBC implica realizar, cuidadosamente, acciones como las que se enuncian a continuación, ver tabla 1:
        ul.lista-ul.mb-0
          li 
            i.fas.fa-layer-group(style='color: #039BE5')
            p.mb-0 Manejar manualmente las conexiones y desconexiones a la base de datos.
              
          li 
            i.fas.fa-layer-group(style='color: #039BE5')
            p.mb-0 Ser cuidadosos en la escritura de sentencias SQL a ser ejecutadas en el servidor.
              
          li 
            i.fas.fa-layer-group(style='color: #039BE5')
            p.mb-0 Conocer las relaciones existentes en el modelo de base de datos a manipular.
              
          li 
            i.fas.fa-layer-group(style='color: #039BE5')
            p.mb-0 Conocer las características de la base de datos a manipular ya que esto podría afectar las consultas.
              

    .tarjeta--container.row.mb-5
    
      .col-md.tarjeta.color-secundario.text-white.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.m-auto(src='@/assets/curso/tema1/img3.svg', alt='icono ambiental', style='width: 200px')
          
        h3.text-center Tenga presente 
        p.text-center.px-lg-5 Cada sistema gestor de base de datos (SGBD) provee su propio JDBC para la manipulación de sus sistemas con las aplicaciones Java. Dependiendo de la base de datos a las que se desee conectar, se debe hacer la descarga del <em>driver</em> JDBC correspondiente. 
      
      
      .col-md.tarjeta.color-primario.text-white.p-5(style='background-color: #1565C0;')
        .row.justify-content-center.mb-4
          .col-6
            figure
              img.m-auto(src='@/assets/curso/tema1/img4.svg', alt='icono ambiental', style='width: 200px')
          
        h3.text-center Importante
        p.text-center.px-lg-5 Esta tabla muestra las direcciones oficiales para la descarga del <em>Driver</em> JDBC, para las bases de datos relaciones más utilizadas, comúnmente, en la industria del <em>Software</em>.

    .row.justify-content-center.align-items-center.mb-5
      .titulo-sexto.color-acento-botones.mb-4
        span #[strong Tabla 1] <em>Drivers </em> JDBC para SGBD
        
      .col-lg-6.mb-4.mb-lg-0
        .tabla-b.color-acento-botones.mb-5
          table(style="min-width: 600px;")
            thead
              tr.text-white(style= "background-color: #ff4a69;")
                td(style='width: 24%')
                  b Base de Datos
                td 
                  b Página oficial para descarga de JDBC
            tbody
              tr
                td 
                  b Mysql
                td
                  
                  a.anexo.mb-4.mb-lg-0(href="https://dev.mysql.com/downloads/connector/j/" target="_blank" style='background-color: #f6f6f626')
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0(style='color: #12263F') MySQL Community
              tr
                td 
                  b SQL Server
                td
                  
                  a.anexo.mb-4.mb-lg-0(href="https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15" target="_blank" style='background-color: #f6f6f626')
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0(style='color: #12263F') Microsoft JDBC Driver for SQL Server
              tr
                td 
                  b Oracle
                td
                  
                  a.anexo.mb-4.mb-lg-0(href="https://www.oracle.com/database/technologies/jdbc-upc-downloads.html" target="_blank" style='background-color: #f6f6f626')
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0(style='color: #12263F') Oracle Database
              tr
                td 
                  b PostgreSQL
                td
                  
                  a.anexo.mb-4.mb-lg-0(href="https://jdbc.postgresql.org/download.html" target="_blank" style='background-color: #f6f6f626')
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0(style='color: #12263F') PostgreSQL
              tr
                td 
                  b DB2
                td
                  a.anexo.mb-4.mb-lg-0(href="https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads" target="_blank" style='background-color: #f6f6f626')
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0(style='color: #12263F') IBM DB2
                
      .col-10.col-lg-6
        figure
          img.m-auto(src='@/assets/curso/tema1/img5.jpg', alt='imagen ambiental', style='width: 600px')


    #t_1_1.titulo-segundo.color-acento-contenido
      .h2 1.1 Clases e interfaces Java


    .row.justify-content-center.align-items-center.mb-5.pb-lg-5
      .col-lg-6.order-2.order-lg-1
        .p-4.mb-4(style="background-color: #F3F9FF;")
          p.mb-0 Además de tener a disposición el 
            b-none <em>Driver </em>
            b-none JDBC correspondiente, para la base de datos que se desea conectar, se requiere de un conjunto adicional de 
            b clases e interfaces Java 
            b-none  para hacer uso del <em>driver,</em> para lo cual es necesario importar los paquetes <em>java.sql</em> o <em>javax.sql.</em>
          
        p.mb-0 A continuación, se describen algunas de las clases más importantes dentro de estas librerías, y otros elementos, para gestionar correctamente una base de datos por medio de JDBC:
          
      .col-10.col-lg-6.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img.m-auto(src='@/assets/curso/tema1/img6.svg', alt='imagen ambiental', style='width: 540px')


    .row.justify-content-center.mb-5
      .col-lg-9
        ImagenInfografica.color-primario.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/infografia1.svg', alt='Texto que describa la imagen')
              
              
          .tarjeta.color-verdoso.p-3(x="22%" y="19%" numero="")
            .h5.mb-2 <em>DriverManager</em>
            p.mb-0 Clase estática que permite la gestión del <em>driver</em> JDBC disponible para la aplicación. Por medio del método <em>getConnection</em> crea una instancia de tipo <em>Connection</em> mediante la cual se realiza el flujo de envío y recibo de información, hacia y desde la base de datos destino.
            
          .tarjeta.color-verdoso.p-3(x="22.5%" y="42%" numero="")
            .h5.mb-2 <em>Connection</em>
            p.mb-0 Interfaz Java que permite establecer una conexión con una base de datos específica por medio de la cual se puede extraer información de la descripción de tablas, procedimientos almacenados y ejecutar sentencias SQL. Se instala un objeto de este tipo invocando el método <em>getConnection</em> del <em>DriverManager</em> al cual se le debe pasar como parámetros las credenciales (usuario y contraseña) del usuario de base de datos destino y la cadena de conexión correspondiente.
            
          .tarjeta.color-verdoso.p-3(x="22.5%" y="62%" numero="")
            .h5.mb-2 <em>Statement</em>
            p.mb-0 Interfaz java usada para la ejecución de sentencias SQL estáticas y retornar los resultados que son producidos por estas sentencias. Una instancia de este tipo se obtiene de la ejecución del método <em>createStatement()</em> desde una instancia de un objeto de tipo <em>connection.</em>
            
          .tarjeta.color-verdoso.p-3(x="50%" y="28%" numero="")
            .h5.mb-2 <em>ResultSet</em>
            p.mb-0 Tipo especial de dato que representa un conjunto de datos de tipo tabular, ideal para referenciar resultados obtenidos, por medio de una consulta que retorna un conjunto de datos estructurados como, por ejemplo, los de una consulta SELECT. Un <em>ResultSet</em> es un apuntador, tipo cursor, direccionado a la primera posición de toda la estructura tabular que está referenciando.
            
          .tarjeta.color-verdoso.p-3(x="50%" y="72%" numero="")
            .h5.mb-2 Método <em>Next()</em>
            p.mb-0 Además de desplazarse una posición de forma lineal dentro de la estructura también devuelve como resultado un valor <em>Booleano</em> para informar si el desplazamiento realizado encontró, o no, un conjunto de datos válidos; así es posible, entonces, determinar cuándo se alcanza el final de los elementos.
            

    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-gradiente.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/icon1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.col-lg-9.mb-3.mb-sm-0
                  p.mb-0.text-white  Para profundizar y conocer los elementos más importantes de las clases e interfaces Java más usadas, se debe visitar el anexo 
                    b Clases e interfaces Java
                    b-none , disponible en el siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-contenido(:href="obtenerLink('/downloads/Anexo1clases.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      .h2 1.2 Conexión a base de datos desde aplicación Java
  


    p.mb-4 Garantizar la conexión a una base de datos requiere la aplicación concreta de los pasos ya explicados. En este punto, se debe tomar nota de ellos y registrar en su libreta personal de apuntes, las acciones que permiten cumplirlos (explicados en el anexo: 
      b Clases e interfaces Java
      b-none ).

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6.order-2.order-lg-1
        p.mb-4 Los pasos que deben realizarse para garantizar una conexión a base de datos desde una aplicación Java, utilizando JDBC, son:
        ol.lista-ol--cuadro.ps-3
          li 
            .lista-ol--cuadro__vineta
              span #[strong 1]
            p.mb-0 Descarga del <em>driver</em> JDBC (Si no se tiene).
              
          li 
            .lista-ol--cuadro__vineta
              span #[strong 2]
            p.mb-0 Importar el <em>Driver</em> descargado en las librerías del proyecto Java.
              
          li 
            .lista-ol--cuadro__vineta
              span #[strong 3]
            p.mb-0 Importar el paquete java.sql.*;
              
          li 
            .lista-ol--cuadro__vineta
              span #[strong 4]
            p.mb-0 Inicializar el <em>Driver</em> usando la sentencia <em>Class.forName</em>
              
          li 
            .lista-ol--cuadro__vineta
              span #[strong 5]
            p.mb-0 Crear un Objeto de tipo Connection por medio del <em>DriverManager</em>
              
          li 
            .lista-ol--cuadro__vineta
              span #[strong 6]
            p.mb-0 Crear un objeto <em>Statement</em> que permite configurar las sentencias SQL desde el Objeto de <em>Connection</em> creado en el punto anterior
              
          li 
            .lista-ol--cuadro__vineta
              span #[strong 7]
            p.mb-0 Ejecutar la sentencia SQL usando cualquiera de los métodos del objeto <em>Statement</em>.
              
          li 
            .lista-ol--cuadro__vineta
              span #[strong 8]
            p.mb-0 Procesar los resultados de la sentencia ejecutada por medio de un <em>ResultSet</em> y sus métodos de apoyo.
              
      .col-10.col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-4.mb-lg-0(data-aos="fade-left")
          img(src='@/assets/curso/tema1/img7.svg', alt='Texto que describa la imagen', style='width:520px;').m-auto

    p.mb-4 Para afianzar los conocimientos logrados hasta este punto, se debe visualizar el vídeo que se propone a continuación. En este se realiza un ejemplo sencillo y se presentan las prácticas de cada paso descrito.
    
    figure.mb-0
      .video
        <iframe width="950" height="534" src="https://www.youtube.com/embed/NeEC83DeAC0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
