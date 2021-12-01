<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 <em>Servlets</em> y JSP
    

    .row.justify-content-between.align-items-center.mb-5
      .col-lg-6.order-2.order-lg-2
        .tarjeta.tarjeta--azulRey
          .px-5
                  
            figure.mb-4
              img.mt-0(src="@/assets/curso/tema2/comilla.svg", alt="imagen ambiental", style="width: 70px;")
                  
            p.text-white.mb-4 Los <em>Servlets</em> y los JSP (<em>Java Server Pages</em>), son tecnologías que se utilizan para realizar ejecuciones en servidores Java, permitiendo extender los servicios de un servidor <em>web</em>. 
            .floatRight.pb-5.justify-content-end
              p.pe-3.mb-0.text-white  (Berzal, 2007)
              i.fas.fa-square.cac(style='color: #FFA726')
      .col-12.col-lg-5.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img.mx-auto(src="@/assets/curso/tema2/img1.svg", alt="imagen ambiental", style="width: 499px")

    p.mb-4 Un ejemplo sencillo de lo que se puede hacer con JSP y <em>Servlet</em> es que por medio de una página JSP se consigue hacer un formulario que contenga una serie de datos como: primer nombre, segundo nombre, edad, correo y, a través de un <em>servlet</em>, realizar el envío de estos registros para que sean almacenados en una base de datos y que, finalmente, el usuario pueda visualizar esta información.
    p.mb-5 A continuación se pueden conocer los procesos principales de estas tecnologías y algunos aspectos generales del uso de JSP y <em>Servlet</em>:

    .row.justify-content-center.mb-5
      .col-lg-12.fondo-slider.mb-4
        SlyderE.p-5.pb-3(indicadores="centro")
          .row.justify-content-around.align-items-center
            .col-md-6.order-2.order-lg-1
              h4 Los <em>servlets</em>
              p.mb-0 Adecuan el proceso de las peticiones que entran al servidor, procesan los datos de formularios, generan contenidos de varios tipos y redirecciona las peticiones.
                  
            .col-10.col-md-5.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img2.svg', alt='imagen ambiental', style='width: 440px')
                
          .row.justify-content-around.align-items-center
            .col-md-6.order-2.order-lg-1
              h4 JSP (<em>Java Server Pages</em>)
              p.mb-0 Es un código Java que se ejecuta en un servidor remoto, que lee las acciones del usuario desde formularios html, donde el servidor realiza consultas, usualmente a bases de datos, para obtener la información solicitada por el usuario y devolviendo una página <em>html</em> dinámica y en tiempo real.
                  
            .col-10.col-md-5.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img3.svg', alt='imagen ambiental', style='width: 440px')
                
          .row.justify-content-around.align-items-center
            .col-md-6.order-2.order-lg-1
              h4 Los archivos JSP
              p.mb-0 Están formados por código Java dentro de etiquetas 
                b &lt;html&gt; 
                b-none con extensión 
                b .jsp 
                b-none Estos archivos deben ser guardados en la carpeta del contenido <em>web</em> del servidor. El código JSP inicia con 
                b  &lt;%   %&gt;.
                
            .col-10.col-md-5.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img4.svg', alt='imagen ambiental', style='width: 520px')
                
          .row.justify-content-around.align-items-center
            .col-md-6.order-2.order-lg-1
              h4 Ejemplo
              p.mb-0 Este es un ejemplo sencillo de código JSP.
                  
            .col-10.col-md-5.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img5.svg', alt='imagen ambiental', style='width: 440px')
                
          .row.justify-content-around.align-items-center
            .col-md-6.order-2.order-lg-1
              h4 <em>Software</em> requerido
              p.mb-0 El <em>software</em> que se necesita para trabajar con JSP y <em>Servlets</em> es: 
                b Java JEE IDE 
                b-none (<em>NetBeans</em>, <em>Eclipse</em>), y el Servidor <em>Web </em>(<em>Tomcat</em>).
                  
            .col-10.col-md-5.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img6.svg', alt='imagen ambiental', style='width: 440px')
                
          .row.justify-content-around.align-items-center
            .col-md-6.order-2.order-lg-1
              h4 Otros requerimientos
              p.mb-0 Para crear ejecutar y probar <em>servlets</em> y páginas JSP, se debe configurar un entorno de desarrollo; las herramientas y pasos de configuración son: instalar el 
                b JDK 
                b-none (Kit de desarrollo De Java), instalar 
                b IDE Netbeans 
                b-none en <a style="color: blue;" href="https://netbeans.apache.org/download/index.html" target="_blank">https://netbeans.apache.org/download/index.html</a>, instalar Tomcat: Servidor de Aplicaciones, que es un <em>software</em> de código abierto; una vez terminada la configuración de las herramientas se inicia la introducción al tema de los <em>servlets</em>.
                  
            .col-10.col-md-5.order-1.order-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img7.svg', alt='imagen ambiental', style='width: 440px')
                

    p.mb-4 Hacer uso de los enlaces que se le ofrecen a continuación, para profundizar en lo relacionado con tecnologías <em>Servlet</em> y JSP:

    .row.justify-content-around.align-items-center.mb-5.p-5(style='background-color: #F3F9FF;')
      .col-11.col-lg-3.mb-4.mb-lg-0
        figure
          img.m-auto(src='@/assets/curso/tema2/img8.svg', alt='imagen ambiental', style='width: 312px')
          
      .col-lg-4
        
        a.anexo.anexo-fondo.mb-5(href="https://www.oracle.com/java/technologies/downloads/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 Enlace para descargar JDK (Kit de desarrollo De Java) 
        
        a.anexo.anexo-fondo.mb-5(:href="obtenerLink('/downloads/Anexo_2_Tomcat.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p.mb-0 Instalación de <em>Tomcat</em>
          
        a.anexo.anexo-fondo.mb-0(href="https://tomcat.apache.org/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p.mb-0 Configuración y ejecución de Tomcat



    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      .h2 2.1 Introducción a <em>servlets</em>
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 <em>Servlet</em> es un programa que se lleva a cabo en una aplicación o servidor <em>Web</em>; se emplea como capa que intercede entre la base de datos y el servidor de peticiones HTTP, por medio de un navegador <em>Web</em> o cualquier otro cliente HTTP (Gómez, 2017).
        p.mb-5 A continuación, se pueden conocer algunas ventajas de utilizar <em>servlet</em>:
        ul.lista-ul.mb-0
          li 
            i.fas.fa-layer-group.pe-4(style='color: #039BE5')
            p.mb-0 Rendimiento: a diferencia de CGI 
              b <em>(Common Gateway Interface) </em>
              b-none el rendimiento de un <em>servlet</em> es mucho mejor.
            
          li 
            i.fas.fa-layer-group.pe-4(style='color: #039BE5')
            p.mb-0 No necesita procesos independientes para operar las solicitudes del cliente.
            
          li 
            i.fas.fa-layer-group.pe-4(style='color: #039BE5')
            p.mb-0 Ya que los <em>servlet</em> están escritos en Java los hace una plataforma independiente.
            
          li 
            i.fas.fa-layer-group.pe-4(style='color: #039BE5')
            p.mb-0 Creíble: resguarda los recursos del servidor debido a el servidor de seguridad de Java.
            
      .col-11.col-lg-6
        .titulo-quinto.color-acento-contenido.mb-4
          h5 Arquitectura de un <em>servlet</em>
          
        figure
          img.m-auto(src='@/assets/curso/tema2/img9.svg', alt='imagen ambiental', style='width: 530px;')


    .row.justify-content-center.mb-5.py-4(style='background-color: #F3F9FF;')
      .col-lg-10
        h3.text-center.mb-4 Las tareas principales de un <em>servlet</em> son:
        LineaTiempoB.color-secundario.mb-5(:datos="datosLineaTiempoB")


      
    .row.justify-content-center.mb-5(style='background-color: #F3F9FF;')
      .col-lg-6.mb-4.mb-lg-0.pt-4
        h4.mb-4 Ciclo de vida de un <em>Servlet</em>
        p.mb-0 A diferencia de las clases en Java, que inician con un método 
          b <em>main (), </em>
          b-none en los <em>servlets</em> son “llamados” unos métodos, al recibir peticiones. A esta metodología se le llama ciclo de vida de un <em>servlet</em> y se compone por tres métodos: 
          b <em>init, service, destroy</em>.
          
      .col-10.col-lg-6
        figure
          img.m-auto(src='@/assets/curso/tema2/img10.svg', alt='imagen ambiental', style='width: 520px;')


    p.mb-5 Se puede explorar el recurso que se muestra a continuación para conocer el ciclo de vida de un <em>Servlet</em>; procurar llevar registro, en la libreta personal de apuntes, de los aspectos más importantes y destacados.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-quinto.color-acento-contenido.mb-4
          h5.mb-0 Ciclo de vida de un <em>Servlets</em>
              
        
        ImagenInfografica.color-primario.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/infografia2.svg', alt='Ciclo de vida de un Servlets')
              
              
          .tarjeta.color-verdoso.p-3(x="44%" y="25%" numero="")
            p.mb-0 El <em>servlet</em> inicia por medio de una llamada al método <em>init</em> (). Este método está definido para ser llamado una sola vez, cuando el <em>servlet</em> es invocado se crea una instancia del <em>servlet</em> generando un hilo nuevo de cada solicitud. 
              
          .tarjeta.color-verdoso.p-3(x="44%" y="60%" numero="")
            p.mb-0 En segundo lugar, es llamado el método de servicio para hacer la gestión de la solicitud del cliente. La función del método <em>service</em> es atender las peticiones <em>get</em> y <em>post</em> de los clientes; cuando se realiza el llamado a este método, invoca a <em>doGet</em> () y <em>doPost</em> (), dependiendo del caso que sea.
              
          .tarjeta.color-verdoso.p-3(x="44%" y="85%" numero="")
            p.mb-0 Por último se llama al método <em>destroy</em> para finalizar el <em>Servlet</em>. Como su nombre lo indica, se encarga al destruir el <em>servlet</em> sobrescribiendo el método <em>destroy</em> ().
              



    p.mb-4 
      b Ejemplo de <em>Servlet</em>
    
    p.mb-4 El siguiente código muestra un 
      b Hola Mundo 
      b-none en un <em>Servlet</em>, con sus métodos de ciclo de vida.


    .row.justify-content-center.align-items-center.py-5.px-4(style='background-color: #12263F; border-radius: 30px;')
      .col-lg-6
        figure(data-aos='fade-right')
          img.m-auto(src='@/assets/curso/tema2/img12.svg', alt='imagen ambiental', style='width: 440px;')
          
      .col-lg-6
        figure(data-aos='fade-left')
          img.m-auto(src='@/assets/curso/tema2/img12.png', alt='imagen ambiental', style='width: 590px;')
        
    
    .row.justify-content-center.mb-5
      .col-lg-10(style='background-color: #DEE4F0; border-radius: 30px;')
        .p-5
          .row.justify-content-center
            .col-lg-10
              p.mb-4 En el código anterior se hace lo siguiente:
              ul.lista-ul.mb-0
                li 
                  i.fas.fa-layer-group.pe-4(style='color: #039BE5')
                  p.mb-0 Se crea la clase 
                    b HolaMundo 
                    b-none que hereda de 
                    b <em>HttpServlet </em>
                    b-none (línea 1).
                    
                li 
                  i.fas.fa-layer-group.pe-4(style='color: #039BE5')
                  p.mb-0 La clase 
                    b <em>HttpServlet </em>
                    b-none contiene el método 
                    b <em>doGet </em>
                    b-none que se encarga de recibir la petición del usuario que realiza desde el navegador.
                    
                li 
                  i.fas.fa-layer-group.pe-4(style='color: #039BE5')
                  p.mb-0 El método 
                    b <em>doGet </em>
                    b-none recibe dos argumentos request (para procesar la petición) y 
                    b <em>response </em>
                    b-none (para dar respuesta a la petición).
                    
                li 
                  i.fas.fa-layer-group.pe-4(style='color: #039BE5')
                  p.mb-0 Se sobrescribe el método 
                    b <em>doGet </em>
                    b-none (línea 6) para crear la lógica de respuesta del usuario, se establece el formato de la respuesta del usuario en formato 
                    b html 
                    b-none y se crea el contenido de la respuesta.
                    


    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-gradiente.p-3.mb-5(style='border-radius: 20px;')
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/icon6.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.col-lg-8.mb-3.mb-sm-0
                  h3.mb-1.text-white Video <em>servlet</em>
                  p.mb-0.text-white Visualice el vídeo que se propone para ahondar en los aspectos más importantes de este punto:
                .col-sm-auto
                  a.boton.color-acento-contenido(href="https://www.youtube.com/watch?v=KxP2sJwCGXw" target="_blank")
                    span #[strong Ver]
                    i.fas.fa-link


    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      .h2 2.2 Formularios <em>HTML</em> con <em>Servlets</em>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-2.order-lg-1
        p.mb-4 Las páginas <em>web</em> contienen formularios <em>html</em> para la solicitud de información al usuario. El proceso de recolección de datos y respuesta, de este formulario, se debe hacer por medio de un programa. Esto lo hace un <em>servlet</em> que recoge las peticiones de un formulario y las procesa.
        .cajon.color-primario.p-4.mb-5
          p.mb-0 La declaración de un formulario HTML se hace por medio de la etiqueta 
            b &lt;form&gt;, 
            b-none donde es primordial que se especifique el método por el que se realizará el envío de los datos, los cuales pueden ser <em>get</em> o <em>post</em>.
        p.mb-0 A continuación, se presentan los aspectos más relevantes, en lo relativo a formularios <em>html</em> con <em>servlets</em>:
          
      .col-lg-6.mb-4.mb-lg-0.order-1.order-lg-2
        figure(data-aos='fade-left')
          img.m-auto(src='@/assets/curso/tema2/img13.jpg', alt='imagen ambiental', style='width: 590px;')


    figure.mb-5
      .video
        <iframe width="950" height="534" src="https://www.youtube.com/embed/2NfNxqeKGU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      .h2 2.3 <em>HTTP Session</em>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-2.order-lg-1
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Las sesiones son creadas para hacer un seguimiento y para memorizar las acciones de un usuario en un sitio <em>web</em>. Las 
          b <em>java session </em>
          b-none permiten guardar información entre las diversas peticiones HTTP, siendo una clase que se utiliza para realizar seguimiento a las sesiones; son objetos almacenados también del lado del servidor.
          
        p.mb-4 Para poder hacer uso de este objeto, se requiere obtener un objeto de la sesión, para poder escribirlo, eliminarlo o leerlo, una vez cerrada la sesión.
        p.mb-5 Los métodos más utilizados de <em>HTTPSession</em> son:
          
        ul.lista-ul.mb-0
          li 
            i.fas.fa-layer-group.pe-4(style='color: #039BE5')
            p.mb-0
              b #[span.italic getId ()], 
              b-none retorna el identificador que es asignado a la sesión, se utiliza para la identificación de la sesión.
            
          li 
            i.fas.fa-layer-group.pe-4(style='color: #039BE5')
            p.mb-0
              b #[span.italic isNew ()], 
              b-none retorna valor booleano true en caso de que el cliente no tenga una sesión.
            
          li 
            i.fas.fa-layer-group.pe-4(style='color: #039BE5')
            p.mb-0
              b #[span.italic setAttribute ()], 
              b-none establece un objeto a la sesión, empleando un nombre explícito.
            
          li 
            i.fas.fa-layer-group.pe-4(style='color: #039BE5')
            p.mb-0
              b #[span.italic getAttribute ()], 
              b-none retorna el objeto que fue asignado a la sesión, el cual se identifica con el nombre que le fue asignado.
            
          li 
            i.fas.fa-layer-group.pe-4(style='color: #039BE5')
            p.mb-0
              b #[span.italic setInactiveInterval ()], 
              b-none detalla el mayor tiempo que exista entre las peticiones continuas del cliente. 
            
          li 
            i.fas.fa-layer-group.pe-4(style='color: #039BE5')
            p.mb-0 
              b #[span.italic invalidate ()], 
              b-none elimina la sesión actual.
            
      .col-8.col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0
        figure(data-aos='fade-left')
          img.m-auto(src='@/assets/curso/tema2/img14.svg', alt='imagen ambiental', style='width: 430px;')


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-2.order-lg-2
        .tarjeta.tarjeta--azulRey
          .px-5
                  
            figure.mb-4
              img.mt-0(src="@/assets/curso/tema2/comilla.svg", alt="imagen ambiental", style="width: 70px;")
                  
            p.text-white.mb-4 El método utilizado para obtener la sesión de un usuario es #[span.italic getSession ()] este método regresa una interfaz de tipo #[span.italic HttpSession], Esta interfaz está dentro del paquete javax. servlet.http y es usada por el contenedor de páginas JSP que permite la creación de una sesión entre el cliente y el servidor.
              
            .floatRight.pb-5.justify-content-center
              p.pe-3.mb-0.text-white 
                b &lt;%HttpSession variable =request.getSession(); %&gt;
              i.fas.fa-square.cac(style='color: #FFA726')
              
      .col-10.col-lg-6.order-1.order-lg-1.mb-4.mb-lg-0
        figure
          img.mx-auto(src="@/assets/curso/tema2/img15.svg", alt="imagen ambiental", style="width: 540px")



    .row.justify-content-center.mb-5(style="background-color: #E5F5FC")
      .col-lg-11.mt-5
        p.mb-4 A continuación, se puede conocer el funcionamiento básico de las sesiones; se debe recordar llevar registro de los aspectos más relevantes y destacados en la libreta personal de apuntes:
        p.mb-5 Observe atentamente la gráfica. Identifique cómo ella representa a 3 usuarios que navegan por el mismo sitio <em>web</em>.
      .row.justify-content-center
        .col-lg-10
          ImagenInfografica.color-primario.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/infografia1.png', alt='funcionamiento básico de las sesiones')
                
            .tarjeta.color-verdoso.p-3(x="20%" y="4%" numero="1")
              p.mb-0 Cada uno de estos tres usuarios accede al archivo JSP, el cual crea un objeto 
                b <em>session </em>
                b-none único para cada uno de ellos.
              
            .tarjeta.color-verdoso.p-3(x="58.4%" y="4%" numero="2")
              p.mb-0 La gráfica también representa cómo estos objetos 
                b <em>session </em>
                b-none son guardados en la memoria del servidor. Los mismos, permiten acceder a una serie de métodos que pertenecen a los objetos de tipo 
                b <em>session.</em>
            
            .tarjeta.color-verdoso.p-3(x="77.6%" y="15%" numero="3")
              p.mb-0 El método 
                b <em>SetAttribute </em>
                b-none tiene dos atributos (nombre, objeto); donde el objeto es el que se almacenará en la sesión.
              
            .tarjeta.color-verdoso.p-3(x="77.6%" y="30%" numero="4")
              p.mb-0 Identifique cómo el 
                b <em>getAttribute </em>
                b-none devuelve el objeto que se ha almacenado en la sesión.
              
            .tarjeta.color-verdoso.p-3(x="77.6%" y="50%" numero="5")
              p.mb-0 Por último, observe en la gráfica la representación de cómo el método 
                b <em>isNew </em>
                b-none permite comprobar si la 
                b <em>session </em>
                b-none es nueva o no.
              

    separador
    #t_2_4.titulo-segundo.color-acento-contenido
      .h2 2.4 Elementos de JSP

    .contenedor-total.mb-0.mb-lg-4
      figure
        img.mx-auto(src='@/assets/curso/tema2/img16.jpg' alt='Imagen ambiental' style='')
      .contenedor-text
        .row.justify-content-center
          .col-auto
            p.mb-0 En JSP se encuentran tres tipos de elementos que pueden ser insertados en una página <em>web</em>: el código, las directivas y las acciones. Cada uno de ellos favorece las distintas ejecuciones que se requieren en la construcción de aplicaciones con JAVA.
            

    p.mb-5 A continuación, descubra todos los aspectos importantes y destacados de JSP:

    .row.justify-content-center.mb-5
      .col-9.col-lg-6.mb-4.mb-lg-0
        figure
          img.mx-auto(src='@/assets/curso/tema2/img17.svg' alt='Imagen ambiental' style='')
          
      .col-lg-6
        LineaTiempoD.color-primario
          .row.justify-content-center(numero="1" titulo="Códigos")
            .col-md-12
              p.mb-0 Se puede introducir código Java de varias clases como (variables, métodos, sentencias etc.) y ser ejecutado en el contenedor JSP.
                
          .row.justify-content-center(numero="2" titulo="Directivas")
            .col-md-12
              p.mb-0 Brindan información general de la página y muestran lo que debe hacer el motor JSP con la página JSP. Para indicar una directiva se utiliza el símbolo arroba @. Existen tres tipos: 
                b <em>Page, Include y Taglib</em>.
                
          .row.justify-content-center(numero="3" titulo="Acciones")
            .col-md-12
              p.mb-0 Facilitan, al motor, datos referentes a las acciones que debe realizar cuando se procesa la página (redirecciones). Hay 7 tipos: 
                b <em>Param, Forward, Include, UseBean, getProperty, setProperty, Plugin. </em>
                
          .row.justify-content-center(numero="4" titulo="Inserción de código Java")
            .col-md-12
              p.mb-4 Existen tres formas para insertar código java en 
                b Jsp: 
              p.mb-2
                b Expresione 
                b-none(style='color: #1565C0;') &lt;%= expresión java%&gt;
              p.mb-2
                b Scriptlets 
                b-none(style='color: #1565C0;') &lt;% varias líneas de código java %&gt;
              p.mb-2
                b Declaraciones 
                b-none(style='color: #1565C0;') &lt;%! Declara variables o métodos %&gt;
                
          .row.justify-content-center(numero="5" titulo="Expresiones")
            .col-md-12
              p.mb-3 Encerrado en la etiqueta 
                b &lt;%= expresión %&gt;, 
                b-none evalúa la expresión para convertir su resultado en un <em>String</em>, siendo este insertado en la salida. Sólo tiene una línea de código.  
              p.mb-2 
                b Ejemplos: 
              p.mb-2
                b-none(style='color: #1565C0;') &lt;%= 
                b-none new Date() 
                b-none(style='color: #1565C0;') %&gt;
                
              p.mb-2 
                b-none(style='color: #1565C0;') &lt;%= 
                b-none 10+1 
                b-none(style='color: #1565C0;') %&gt;
              p.mb-2 
                b-none(style='color: #1565C0;') &lt;%= 
                b-none 10&lt;4 
                b-none(style='color: #1565C0;') %&gt;
                
          .row.justify-content-center(numero="6" titulo="Scriptlets")
            .col-md-12
              p.mb-3 Inician con un paréntesis triangular y símbolo porcentaje y terminan con porcentaje y paréntesis triangular 
                b &lt;%  &nbsp;  %&gt;, 
                b-none no tienen signo igual y pueden agregar varias líneas de java por ejemplo bucles, condicionales.
                
              p
                b-none(style='color: #1565C0;') &lt;%
                
              p(style='color: #039BE5;') for(int i=0; i&lt;10; i++)
              p(style='color: #039BE5;') System.out.println(“La cantidad es” + i );
              
              p
                b-none(style='color: #1565C0;') %&gt;
                
                
          .row.justify-content-center(numero="7" titulo="Declaraciones")
            .col-md-12
              p.mb-3 Inician con un paréntesis triangular símbolo porcentaje y una exclamación, terminan con porcentaje y paréntesis triangular 
                b &lt;%!  &nbsp;  %&gt;, 
                b-none se pueden escribir varias líneas de código y realizar declaraciones.
              p
                b-none(style='color: #1565C0;') &lt;%!
                
              p(style='color: #039BE5;') private int total;
              p(style='color: #039BE5;') public int suma (int a, int b){
              p(style='color: #039BE5;') total = a + b;
              p(style='color: #039BE5;') return total
              p(style='color: #039BE5;') }
              
              p
                b-none(style='color: #1565C0;') %&gt;

    p.mb-5 Para afianzar sus conocimientos en elementos JSP, le invitamos a visualizar el siguiente vídeo. Recuerde llevar registro de lo más destacado en su libreta personal de apuntes.

    figure.mb-4
      .video
        <iframe width="950" height="534" src="https://www.youtube.com/embed/Exf3CGjyZzU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    



    separador
    #t_2_5.titulo-segundo.color-acento-contenido
      .h2 2.5 MVC

    .row.justify-content-center.mb-5
      .col-lg-6.order-2.order-lg-1.onTop.mt-lg-5
        .bg--verdoso.neg--left
          p.mb-0 El MVC (Modelo-Vista-Controlador) es un patrón de diseño estándar que se usa a la hora de crear aplicaciones dinámicas con 
            b Java. 
            b-none Consiste en separar la parte lógica de los proyectos de la parte visual y lo hace integrando <em>Servlets</em> y <em>JSP</em> donde los <em>Servlets</em> se encargan de la parte lógica y los <em>JSP</em> de la parte visual.
            
      .col-lg-6.order-1.order-lg-2
        figure
        img.mx-auto(src='@/assets/curso/tema2/img18.jpg' alt='Imagen ambiental' style='width: 600px;')


    TabsC.color-secundario
      .py-3.py-md-4(titulo="División de la aplicación que realiza el patrón")
        .row
          .col-md-12
            .row
              .col-auto
                .titulo-sexto.color-acento-botones
                  span #[strong Arquitectura MVC]
            figure
              img.m-auto(src='@/assets/curso/tema2/img20.svg', alt='Arquitectura MVC')
              
              
      .py-3.py-md-4(titulo="Patrón modelo-vista-controlador")
        .row.justify-content-center.align-items-center
          .col-md-6.order-2.order-lg-1
            .tarjeta-numerada.color-acento-contenido.p-4.ps-5.pb-0.mb-4(style="border-bottom: 0")
              .tarjeta-numerada__numero
                .h2.text-white 1
              h4 El modelo
              p.mb-0 Realiza el almacenamiento y la manipulación de los datos.
              
            .tarjeta-numerada.color-acento-contenido.p-4.ps-5.pb-0.mb-4(style="border-bottom: 0")
              .tarjeta-numerada__numero
                .h2.text-white 2
              h4 La vista
              p.mb-0 Se encarga de la presentación con la que el usuario realizará la interacción, habitualmente en HTML.
              
            .tarjeta-numerada.color-acento-contenido.p-4.ps-5.pb-0.mb-4(style="border-bottom: 0")
              .tarjeta-numerada__numero
                .h2.text-white 3
              h4 EL controlador
              p.mb-0 Recoge los datos de entrada que envía el usuario, realiza la solicitud de acciones al modelo y modera la vista.
              
          .col-md-6.order-1.order-lg-2.mb-4.mb-lg-0
            figure
              img.m-auto(src='@/assets/curso/tema2/img19.svg', alt='imagen ambiental', style='width: 400px')
              
        
          






</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        titulo: '<h5>Datos de transmisión</h5>',
        texto:
          'Se encarga de leer claramente los datos de transmisión de un cliente (navegador), incluyendo un formulario HTML.',
        icono: require('@/assets/curso/tema2/icon1.svg'),
      },
      {
        titulo: '<h5>Remisión de peticiones http</h5>',
        texto:
          'Remite una petición HTTP de los datos contenidos en el navegador incluyendo <em>cookies</em>.',
        icono: require('@/assets/curso/tema2/icon2.svg'),
      },
      {
        titulo: '<h5>Tratamiento de datos</h5>',
        texto:
          'Trata los datos y produce resultados accediendo a la base de datos.',
        icono: require('@/assets/curso/tema2/icon3.svg'),
      },
      {
        titulo: '<h5>Envío de documentos</h5>',
        texto:
          'Envía documentos al cliente (navegador), los cuales pueden ser de varios tipos como textos, binarios, etc.',
        icono: require('@/assets/curso/tema2/icon4.svg'),
      },
      {
        titulo: '<h5>Envíos de respuesta</h5>',
        texto:
          'Realiza envíos de respuesta HTTP implícita al cliente (navegador).',
        icono: require('@/assets/curso/tema2/icon5.svg'),
      },
    ],
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
