
window.PaginaDeFicheros = Castelog.metodos.un_componente_vue2("PaginaDeFicheros",
  "<div class=\"PaginaDeFicheros Component\">"
 + "    <h5>"
 + "      <router-link to=\"/\">Inicio</router-link> » <span>Ficheros</span>"
 + "    </h5>"
 + "    <div class=\"panel_tipo_1\">"
 + "      <ul>"
 + "        <li v-for=\"fichero, fichero_index in ficheros\" v-bind:key=\"'fichero-' + fichero_index\">"
 + "          <div v-if=\"fichero.tipo === 'directorio'\" class=\"como_link_de_directorio\" v-on:click=\"() => cambiar_a_directorio(fichero.ruta_completa)\">"
 + "            {{ fichero.ruta }}"
 + "          </div>"
 + "          <div v-else class=\"como_link_de_fichero\" v-on:click=\"() => abrir_fichero(fichero.ruta_completa)\">"
 + "            {{ fichero.ruta }}"
 + "          </div>"
 + "        </li>"
 + "      </ul>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { directorio_actual:process.cwd(  ),
ficheros:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ abrir_fichero( ruta_completa ) {try {
const parametros_de_ruta = new URLSearchParams(  );
parametros_de_ruta.set( "fichero",
ruta_completa );
const url_de_destino = "/fichero?" + parametros_de_ruta.toString(  );
this.$router.history.push( url_de_destino );
} catch(error) {
console.log(error);
throw error;
}

},
cambiar_a_directorio( ruta_completa ) {try {
this.directorio_actual = ruta_completa;
process.chdir( this.directorio_actual );
this.cargar_ficheros(  );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
cargar_ficheros() {try {
this.ficheros = [ ".." ].concat( require( "fs" ).readdirSync( this.directorio_actual ) ).map( ( fichero ) => {try {
const ruta_completa = require( "path" ).resolve( this.directorio_actual,
fichero );
const es_directorio = require( "fs" ).lstatSync( ruta_completa ).isDirectory(  );
return { ruta_completa,
ruta:fichero,
tipo:( es_directorio ? "directorio" : "fichero" )
};
} catch(error) {
console.log(error);
throw error;
}

} );
} catch(error) {
console.log(error);
throw error;
}

}
},
mounted() {try {
this.cargar_ficheros(  );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);