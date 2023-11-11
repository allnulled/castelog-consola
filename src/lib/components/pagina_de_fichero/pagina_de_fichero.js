
window.PaginaDeFichero = Castelog.metodos.un_componente_vue2("PaginaDeFichero",
  "<div class=\"PaginaDeFichero Component\">"
 + "    <h5>"
 + "      <router-link to=\"/\">Inicio</router-link> » "
 + "      <router-link to=\"/ficheros\">Ficheros</router-link> » "
 + "      <span>Fichero</span>"
 + "    </h5>"
 + "    <table>"
 + "      <tr>"
 + "        <td style=\"width:100%;\">"
 + "          <div class=\"fuente_monoespaciada\">{{ ruta_de_fichero }}</div>"
 + "        </td>"
 + "        <td>"
 + "          <button style=\"width: 100%;\" v-on:click=\"() => guardar_fichero()\">Guardar</button>"
 + "        </td>"
 + "      </tr>"
 + "    </table>"
 + "    <div class=\"editor_de_fichero\">"
 + "      <textarea ref=\"editor_de_fichero\"></textarea>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { ruta_de_fichero:undefined,
editor_de_fichero_codemirror:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ guardar_fichero() {try {
const contenido = this.editor_de_fichero_codemirror.getValue(  );
require( "fs" ).writeFileSync( this.ruta_de_fichero,
contenido,
"utf8" );
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {try {
this.editor_de_fichero_codemirror = CodeMirror.fromTextArea( this.$refs.editor_de_fichero,
{ lineNumbers:true
} );
const parametros_de_ruta_en_texto = this.$window.location.href.substr( this.$window.location.href.indexOf( "?" ) );
const parametros_de_ruta = new URLSearchParams( parametros_de_ruta_en_texto );
this.ruta_de_fichero = parametros_de_ruta.get( "fichero" );
const contenido_de_fichero = require( "fs" ).readFileSync( this.ruta_de_fichero,
"utf8" );
this.editor_de_fichero_codemirror.setValue( contenido_de_fichero );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);