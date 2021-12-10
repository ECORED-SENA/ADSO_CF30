(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema1"],{"0225":function(a,e,t){a.exports=t.p+"img/img5.a3e2e7ee.jpg"},"02c8":function(a,e,t){"use strict";t.r(e);var s=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"curso-main-container pb-3"},[s("BannerInterno"),s("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a._m(0),a._m(1),a._m(2),a._m(3),a._m(4),a._m(5),a._m(6),s("div",{staticClass:"row justify-content-center align-items-center mb-5 pb-lg-5"},[s("div",{staticClass:"col-lg-6 order-2 order-lg-1"},[s("div",{staticClass:"p-4 mb-4",staticStyle:{"background-color":"#F3F9FF"}},[s("p",{staticClass:"mb-0"},[a._v("Además de tener a disposición el "),s("b-none",[s("em",[a._v("Driver ")])]),s("b-none",[a._v("JDBC correspondiente, para la base de datos que se desea conectar, se requiere de un conjunto adicional de ")]),s("b",[a._v("clases e interfaces Java ")]),s("b-none",[a._v(" para hacer uso del "),s("em",[a._v("driver,")]),a._v(" para lo cual es necesario importar los paquetes "),s("em",[a._v("java.sql")]),a._v(" o "),s("em",[a._v("javax.sql.")])])],1)]),s("p",{staticClass:"mb-0"},[a._v("A continuación, se describen algunas de las clases más importantes dentro de estas librerías, y otros elementos, para gestionar correctamente una base de datos por medio de JDBC:")])]),a._m(7)]),s("div",{staticClass:"row justify-content-center mb-5"},[s("div",{staticClass:"col-lg-9"},[s("ImagenInfografica",{staticClass:"color-primario mb-4",scopedSlots:a._u([{key:"imagen",fn:function(){return[s("figure",[s("img",{attrs:{src:t("0d70"),alt:"Texto que describa la imagen"}})])]},proxy:!0}])},[s("div",{staticClass:"tarjeta color-verdoso p-3",attrs:{x:"22%",y:"19%",numero:""}},[s("div",{staticClass:"h5 mb-2"},[s("em",[a._v("DriverManager")])]),s("p",{staticClass:"mb-0"},[a._v("Clase estática que permite la gestión del "),s("em",[a._v("driver")]),a._v(" JDBC disponible para la aplicación. Por medio del método "),s("em",[a._v("getConnection")]),a._v(" crea una instancia de tipo "),s("em",[a._v("Connection")]),a._v(" mediante la cual se realiza el flujo de envío y recibo de información, hacia y desde la base de datos destino.")])]),s("div",{staticClass:"tarjeta color-verdoso p-3",attrs:{x:"22.5%",y:"42%",numero:""}},[s("div",{staticClass:"h5 mb-2"},[s("em",[a._v("Connection")])]),s("p",{staticClass:"mb-0"},[a._v("Interfaz Java que permite establecer una conexión con una base de datos específica por medio de la cual se puede extraer información de la descripción de tablas, procedimientos almacenados y ejecutar sentencias SQL. Se instala un objeto de este tipo invocando el método "),s("em",[a._v("getConnection")]),a._v(" del "),s("em",[a._v("DriverManager")]),a._v(" al cual se le debe pasar como parámetros las credenciales (usuario y contraseña) del usuario de base de datos destino y la cadena de conexión correspondiente.")])]),s("div",{staticClass:"tarjeta color-verdoso p-3",attrs:{x:"22.5%",y:"62%",numero:""}},[s("div",{staticClass:"h5 mb-2"},[s("em",[a._v("Statement")])]),s("p",{staticClass:"mb-0"},[a._v("Interfaz java usada para la ejecución de sentencias SQL estáticas y retornar los resultados que son producidos por estas sentencias. Una instancia de este tipo se obtiene de la ejecución del método "),s("em",[a._v("createStatement()")]),a._v(" desde una instancia de un objeto de tipo "),s("em",[a._v("connection.")])])]),s("div",{staticClass:"tarjeta color-verdoso p-3",attrs:{x:"50%",y:"28%",numero:""}},[s("div",{staticClass:"h5 mb-2"},[s("em",[a._v("ResultSet")])]),s("p",{staticClass:"mb-0"},[a._v("Tipo especial de dato que representa un conjunto de datos de tipo tabular, ideal para referenciar resultados obtenidos, por medio de una consulta que retorna un conjunto de datos estructurados como, por ejemplo, los de una consulta SELECT. Un "),s("em",[a._v("ResultSet")]),a._v(" es un apuntador, tipo cursor, direccionado a la primera posición de toda la estructura tabular que está referenciando.")])]),s("div",{staticClass:"tarjeta color-verdoso p-3",attrs:{x:"50%",y:"72%",numero:""}},[s("div",{staticClass:"h5 mb-2"},[a._v("Método "),s("em",[a._v("Next()")])]),s("p",{staticClass:"mb-0"},[a._v("Además de desplazarse una posición de forma lineal dentro de la estructura también devuelve como resultado un valor "),s("em",[a._v("Booleano")]),a._v(" para informar si el desplazamiento realizado encontró, o no, un conjunto de datos válidos; así es posible, entonces, determinar cuándo se alcanza el final de los elementos.")])])])],1)]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-10"},[s("div",{staticClass:"tarjeta color-gradiente p-3 mb-5"},[s("div",{staticClass:"row justify-content-around align-items-center"},[a._m(8),s("div",{staticClass:"col"},[s("div",{staticClass:"row justify-content-between align-items-center"},[s("div",{staticClass:"col col-lg-9 mb-3 mb-sm-0"},[s("p",{staticClass:"mb-0 text-white"},[a._v(" Para profundizar y conocer los elementos más importantes de las clases e interfaces Java más usadas, se debe visitar el anexo "),s("b",[a._v("Clases e interfaces Java")]),s("b-none",[a._v(", disponible en el siguiente enlace:")])],1)]),s("div",{staticClass:"col-sm-auto"},[s("a",{staticClass:"boton color-acento-contenido",attrs:{href:a.obtenerLink("/downloads/Anexo1_Clases.pdf"),target:"_blank"}},[s("span",[a._v("Descargar")]),s("i",{staticClass:"fas fa-file-download"})])])])])])])])]),s("separador"),a._m(9),s("p",{staticClass:"mb-4"},[a._v("Garantizar la conexión a una base de datos requiere la aplicación concreta de los pasos ya explicados. En este punto, se debe tomar nota de ellos y registrar en su libreta personal de apuntes, las acciones que permiten cumplirlos (explicados en el anexo: "),s("b",[a._v("Clases e interfaces Java")]),s("b-none",[a._v(").")])],1),a._m(10),s("p",{staticClass:"mb-4"},[a._v("Para afianzar los conocimientos logrados hasta este punto, se debe visualizar el vídeo que se propone a continuación. En este se realiza un ejemplo sencillo y se presentan las prácticas de cada paso descrito.")]),a._m(11)],1)],1)},i=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"titulo-principal color-acento-contenido"},[t("div",{staticClass:"titulo-principal__numero"},[t("span",{staticClass:"text-white"},[a._v("1")])]),t("h1",[a._v("Java con JDBC")])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("figure",{staticClass:"mb-5",attrs:{"data-aos":"fade-left"}},[s("img",{staticClass:"m-auto",attrs:{src:t("309b"),alt:"imagen ambiental"}})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",{staticClass:"mb-5"},[a._v("Cuando se habla de JDBC ("),t("em",[a._v("Java Data Base Connectivity")]),a._v(") se hace referencia a un "),t("em",[a._v("Driver")]),a._v(" que encapsula un conjunto de clases e interfaces escritas de Java, creadas para establecer conexiones, enviar sentencias SQL y procesar los datos resultantes sobre bases de datos relacionales, ver figura 1.")])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"row justify-content-center align-items-center mb-5"},[s("div",{staticClass:"titulo-sexto color-acento-contenido mb-4"},[s("span",[s("strong",[a._v("Figura 1")]),a._v(" "),s("em",[a._v("Java")]),a._v(" con JDBC")])]),s("div",{staticClass:"col-lg-6"},[s("figure",{staticClass:"mb-4 mb-lg-0",attrs:{"data-aos":"fade-right"}},[s("img",{staticClass:"m-auto",staticStyle:{width:"540px"},attrs:{src:t("b135"),alt:"Java con JDBC"}})])]),s("div",{staticClass:"col-lg-6"},[s("p",{staticClass:"mb-4"},[a._v("En términos más generales, JDBC es uno de los puentes que puede ser usado en Java para comunicar una aplicación Java con un servidor de bases de datos relacionales.")]),s("p",{staticClass:"mb-4"},[a._v("Trabajar conexiones a bases de datos con JDBC implica realizar, cuidadosamente, acciones como las que se enuncian a continuación, ver tabla 1:")]),s("ul",{staticClass:"lista-ul mb-0"},[s("li",[s("i",{staticClass:"fas fa-layer-group",staticStyle:{color:"#039BE5"}}),s("p",{staticClass:"mb-0"},[a._v("Manejar manualmente las conexiones y desconexiones a la base de datos.")])]),s("li",[s("i",{staticClass:"fas fa-layer-group",staticStyle:{color:"#039BE5"}}),s("p",{staticClass:"mb-0"},[a._v("Ser cuidadosos en la escritura de sentencias SQL a ser ejecutadas en el servidor.")])]),s("li",[s("i",{staticClass:"fas fa-layer-group",staticStyle:{color:"#039BE5"}}),s("p",{staticClass:"mb-0"},[a._v("Conocer las relaciones existentes en el modelo de base de datos a manipular.")])]),s("li",[s("i",{staticClass:"fas fa-layer-group",staticStyle:{color:"#039BE5"}}),s("p",{staticClass:"mb-0"},[a._v("Conocer las características de la base de datos a manipular ya que esto podría afectar las consultas.")])])])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"tarjeta--container row mb-5"},[s("div",{staticClass:"col-md tarjeta color-secundario text-white p-5"},[s("div",{staticClass:"row justify-content-center mb-4"},[s("div",{staticClass:"col-6"},[s("figure",[s("img",{staticClass:"m-auto",staticStyle:{width:"200px"},attrs:{src:t("ff66"),alt:"icono ambiental"}})])])]),s("h3",{staticClass:"text-center"},[a._v("Tenga presente ")]),s("p",{staticClass:"text-center px-lg-5"},[a._v("Cada sistema gestor de base de datos (SGBD) provee su propio JDBC para la manipulación de sus sistemas con las aplicaciones Java. Dependiendo de la base de datos a las que se desee conectar, se debe hacer la descarga del "),s("em",[a._v("driver")]),a._v(" JDBC correspondiente. ")])]),s("div",{staticClass:"col-md tarjeta color-primario text-white p-5",staticStyle:{"background-color":"#1565C0"}},[s("div",{staticClass:"row justify-content-center mb-4"},[s("div",{staticClass:"col-6"},[s("figure",[s("img",{staticClass:"m-auto",staticStyle:{width:"200px"},attrs:{src:t("418a"),alt:"icono ambiental"}})])])]),s("h3",{staticClass:"text-center"},[a._v("Importante")]),s("p",{staticClass:"text-center px-lg-5"},[a._v("Esta tabla muestra las direcciones oficiales para la descarga del "),s("em",[a._v("Driver")]),a._v(" JDBC, para las bases de datos relaciones más utilizadas, comúnmente, en la industria del "),s("em",[a._v("Software")]),a._v(".")])])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"row justify-content-center align-items-center mb-5"},[s("div",{staticClass:"titulo-sexto color-acento-botones mb-4"},[s("span",[s("strong",[a._v("Tabla 1")]),a._v(" "),s("em",[a._v("Drivers ")]),a._v(" JDBC para SGBD")])]),s("div",{staticClass:"col-lg-6 mb-4 mb-lg-0"},[s("div",{staticClass:"tabla-b color-acento-botones mb-5"},[s("table",{staticStyle:{"min-width":"600px"}},[s("thead",[s("tr",{staticClass:"text-white",staticStyle:{"background-color":"#ff4a69"}},[s("td",{staticStyle:{width:"24%"}},[s("b",[a._v("Base de Datos")])]),s("td",[s("b",[a._v("Página oficial para descarga de JDBC")])])])]),s("tbody",[s("tr",[s("td",[s("b",[a._v("Mysql")])]),s("td",[s("a",{staticClass:"anexo mb-4 mb-lg-0",staticStyle:{"background-color":"#f6f6f626"},attrs:{href:"https://dev.mysql.com/downloads/connector/j/",target:"_blank"}},[s("div",{staticClass:"anexo__icono"},[s("img",{attrs:{src:t("f7ba")}})]),s("div",{staticClass:"anexo__texto"},[s("p",{staticClass:"mb-0",staticStyle:{color:"#12263F"}},[s("span",{staticClass:"italic"},[a._v("MySQL Community")])])])])])]),s("tr",[s("td",[s("b",[a._v("SQL Server")])]),s("td",[s("a",{staticClass:"anexo mb-4 mb-lg-0",staticStyle:{"background-color":"#f6f6f626"},attrs:{href:"https://docs.microsoft.com/en-us/sql/connect/jdbc/download-microsoft-jdbc-driver-for-sql-server?view=sql-server-ver15",target:"_blank"}},[s("div",{staticClass:"anexo__icono"},[s("img",{attrs:{src:t("f7ba")}})]),s("div",{staticClass:"anexo__texto"},[s("p",{staticClass:"mb-0",staticStyle:{color:"#12263F"}},[s("span",{staticClass:"italic"},[a._v("Microsoft JDBC Driver for SQL Server")])])])])])]),s("tr",[s("td",[s("b",[a._v("Oracle")])]),s("td",[s("a",{staticClass:"anexo mb-4 mb-lg-0",staticStyle:{"background-color":"#f6f6f626"},attrs:{href:"https://www.oracle.com/database/technologies/jdbc-upc-downloads.html",target:"_blank"}},[s("div",{staticClass:"anexo__icono"},[s("img",{attrs:{src:t("f7ba")}})]),s("div",{staticClass:"anexo__texto"},[s("p",{staticClass:"mb-0",staticStyle:{color:"#12263F"}},[s("span",{staticClass:"italic"},[a._v("Oracle Database")])])])])])]),s("tr",[s("td",[s("b",[a._v("PostgreSQL")])]),s("td",[s("a",{staticClass:"anexo mb-4 mb-lg-0",staticStyle:{"background-color":"#f6f6f626"},attrs:{href:"https://jdbc.postgresql.org/download.html",target:"_blank"}},[s("div",{staticClass:"anexo__icono"},[s("img",{attrs:{src:t("f7ba")}})]),s("div",{staticClass:"anexo__texto"},[s("p",{staticClass:"mb-0",staticStyle:{color:"#12263F"}},[a._v("PostgreSQL")])])])])]),s("tr",[s("td",[s("b",[a._v("DB2")])]),s("td",[s("a",{staticClass:"anexo mb-4 mb-lg-0",staticStyle:{"background-color":"#f6f6f626"},attrs:{href:"https://www.ibm.com/support/pages/db2-jdbc-driver-versions-and-downloads",target:"_blank"}},[s("div",{staticClass:"anexo__icono"},[s("img",{attrs:{src:t("f7ba")}})]),s("div",{staticClass:"anexo__texto"},[s("p",{staticClass:"mb-0",staticStyle:{color:"#12263F"}},[a._v("IBM DB2")])])])])])])])])]),s("div",{staticClass:"col-10 col-lg-6"},[s("figure",[s("img",{staticClass:"m-auto",staticStyle:{width:"600px"},attrs:{src:t("0225"),alt:"imagen ambiental"}})])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_1_1"}},[t("div",{staticClass:"h2"},[a._v("1.1 Clases e interfaces Java")])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"col-10 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0"},[s("figure",[s("img",{staticClass:"m-auto",staticStyle:{width:"540px"},attrs:{src:t("93aa"),alt:"imagen ambiental"}})])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"col-3 col-sm-2 col-lg-1"},[s("img",{attrs:{src:t("b731")}})])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_1_2"}},[t("div",{staticClass:"h2"},[a._v("1.2 Conexión a base de datos desde aplicación Java")])])},function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("div",{staticClass:"row justify-content-center align-items-center mb-4"},[s("div",{staticClass:"col-lg-6 order-2 order-lg-1"},[s("p",{staticClass:"mb-4"},[a._v("Los pasos que deben realizarse para garantizar una conexión a base de datos desde una aplicación Java, utilizando JDBC, son:")]),s("ol",{staticClass:"lista-ol--cuadro ps-3"},[s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[s("strong",[a._v("1")])])]),s("p",{staticClass:"mb-0"},[a._v("Descarga del "),s("em",[a._v("Driver")]),a._v(" JDBC (Si no se tiene).")])]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[s("strong",[a._v("2")])])]),s("p",{staticClass:"mb-0"},[a._v("Importar el "),s("em",[a._v("Driver")]),a._v(" descargado en las librerías del proyecto Java.")])]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[s("strong",[a._v("3")])])]),s("p",{staticClass:"mb-0"},[a._v("Importar el paquete java.sql.*;")])]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[s("strong",[a._v("4")])])]),s("p",{staticClass:"mb-0"},[a._v("Inicializar el "),s("em",[a._v("Driver")]),a._v(" usando la sentencia "),s("em",[a._v("Class.forName")])])]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[s("strong",[a._v("5")])])]),s("p",{staticClass:"mb-0"},[a._v("Crear un Objeto de tipo Connection por medio del "),s("em",[a._v("DriverManager")])])]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[s("strong",[a._v("6")])])]),s("p",{staticClass:"mb-0"},[a._v("Crear un objeto "),s("em",[a._v("Statement")]),a._v(" que permite configurar las sentencias SQL desde el Objeto de "),s("em",[a._v("Connection")]),a._v(" creado en el punto anterior")])]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[s("strong",[a._v("7")])])]),s("p",{staticClass:"mb-0"},[a._v("Ejecutar la sentencia SQL usando cualquiera de los métodos del objeto "),s("em",[a._v("Statement")]),a._v(".")])]),s("li",[s("div",{staticClass:"lista-ol--cuadro__vineta"},[s("span",[s("strong",[a._v("8")])])]),s("p",{staticClass:"mb-0"},[a._v("Procesar los resultados de la sentencia ejecutada por medio de un "),s("em",[a._v("ResultSet")]),a._v(" y sus métodos de apoyo.")])])])]),s("div",{staticClass:"col-10 col-lg-6 mb-4 mb-lg-0 order-1 order-lg-2"},[s("figure",{staticClass:"mb-4 mb-lg-0",attrs:{"data-aos":"fade-left"}},[s("img",{staticClass:"m-auto",staticStyle:{width:"520px"},attrs:{src:t("94f4"),alt:"Texto que describa la imagen"}})])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("figure",{staticClass:"mb-0"},[t("div",{staticClass:"video"},[t("iframe",{attrs:{width:"950",height:"534",src:"https://www.youtube.com/embed/NeEC83DeAC0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}],o={name:"Tema1",components:{},data:function(){return{}},mounted:function(){var a=this;this.$nextTick((function(){a.$aosRefresh()}))},updated:function(){this.$aosRefresh()}},c=o,r=t("2877"),n=Object(r["a"])(c,s,i,!1,null,null,null);e["default"]=n.exports},"0d70":function(a,e,t){a.exports=t.p+"img/infografia1.eeda6994.svg"},"309b":function(a,e,t){a.exports=t.p+"img/img1.ae412707.jpg"},"418a":function(a,e,t){a.exports=t.p+"img/img4.963474c1.svg"},"93aa":function(a,e,t){a.exports=t.p+"img/img6.2db98bbd.svg"},"94f4":function(a,e,t){a.exports=t.p+"img/img7.73f5dca6.svg"},b135:function(a,e,t){a.exports=t.p+"img/img2.749fc73b.svg"},b731:function(a,e,t){a.exports=t.p+"img/icon1.fc9d279f.svg"},f7ba:function(a,e,t){a.exports=t.p+"img/icono-link.3b7ca9a0.svg"},ff66:function(a,e,t){a.exports=t.p+"img/img3.b4e3765d.svg"}}]);
//# sourceMappingURL=tema1.ea84e211.js.map