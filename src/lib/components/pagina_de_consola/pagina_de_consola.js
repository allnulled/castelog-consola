
window.PaginaDeConsola = Castelog.metodos.un_componente_vue2("PaginaDeConsola",
  "<div class=\"PaginaDeConsola Component\">"
 + "    <h5>"
 + "      <router-link to=\"/\">Inicio</router-link> » <span>Consola</span>"
 + "    </h5>"
 + "    <div id=\"consola_de_castelog\">"
 + "      <textarea ref=\"consola_de_castelog\"></textarea>"
 + "    </div>"
 + "    <table>"
 + "      <tr>"
 + "        <td style=\"width: 100%;\">"
 + "          <button style=\"width: 100%;\" v-on:click=\"() => ejecutar_codigo_castelog()\">Ejecutar</button>"
 + "        </td>"
 + "        <td style=\"width: 1%;\">"
 + "          <button v-on:click=\"() => guardar_codigo_castelog()\">Guardar</button>"
 + "        </td>"
 + "      </tr>"
 + "    </table>"
 + "    <div id=\"consola_de_salida\">"
 + "      <textarea ref=\"consola_de_salida\"></textarea>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { consola_entrada_codemirror:undefined,
consola_salida_codemirror:undefined
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ async ejecutar_codigo_castelog() {try {
const codigo_castelog = this.consola_entrada_codemirror.getValue(  );
const codigo_js = this.$window.Castelog_parser.parse( codigo_castelog );
const resultado = (await this.$window.eval( "(async () => {const __dirname = process.cwd();" + codigo_js + "})()" ));
const resultado_json = JSON.stringify( resultado,
null,
4 );
this.consola_salida_codemirror.setValue( resultado_json );
} catch(error) {
this.root.gestionar_error( error );}
},
async guardar_codigo_castelog() {
}
},
mounted() {try {
this.consola_entrada_codemirror = CodeMirror.fromTextArea( this.$refs.consola_de_castelog,
{ lineNumbers:true
} );
this.consola_salida_codemirror = CodeMirror.fromTextArea( this.$refs.consola_de_salida,
{ lineNumbers:true
} );
} catch(error) {
console.log(error);
throw error;
}

}
};},
  null);