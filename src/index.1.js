
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"1","contenido":{"head":"<head>\n    <title>Castelog OS</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/win7/win7.scoped.2.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/codemirror/codemirror.css\" />\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"lib/theme/theme.css\" />\n    <script src=\"lib/calo/calo.js\"></script>\n    <script src=\"lib/calo/castelog.parser.js\"></script>\n    <script src=\"lib/codemirror/codemirror.js\"></script>\n    <script src=\"lib/components/pagina_de_inicio/pagina_de_inicio.js\"></script>\n    <script src=\"lib/components/pagina_de_ficheros/pagina_de_ficheros.js\"></script>\n    <script src=\"lib/components/pagina_de_fichero/pagina_de_fichero.js\"></script>\n    <script src=\"lib/components/pagina_de_consola/pagina_de_consola.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app win7\">"
 + "    <router-view :root=\"this\"></router-view>"
 + "    <div v-if=\"error\">"
 + "      <div>Nombre: {{ error.name }}</div>"
 + "      <div>Mensaje: {{ error.message }}</div>"
 + "      <div>Pila: {{ error.stack }}</div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { data() {try {
return { error_id:undefined,
error:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async mostrar_error( error,
tiempo = 10 * 1000 ) {try {
this.error = error;
this.$forceUpdate( true );
clearTimeout( this.error_id );
this.error_id = setTimeout( () => {try {
this.error = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
tiempo );
} catch(error) {
console.log(error);
throw error;
}

},
async gestionar_error( error ) {try {
console.log(error);
this.mostrar_error( error,
10 * 1000 );
} catch(error) {
console.log(error);}
}
},
watch:{ 
},
beforeMount() {
},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/consola",
name:"PaginaDeConsola",
component:window.PaginaDeConsola,
props:{ 
}
},
{ path:"/ficheros",
name:"PaginaDeFicheros",
component:window.PaginaDeFicheros,
props:{ 
}
},
{ path:"/fichero",
name:"PaginaDeFichero",
component:window.PaginaDeFichero,
props:{ 
}
},
{ path:"/",
name:"PaginaDeInicio",
component:window.PaginaDeInicio,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");