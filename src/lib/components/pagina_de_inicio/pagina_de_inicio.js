
window.PaginaDeInicio = Castelog.metodos.un_componente_vue2("PaginaDeInicio",
  "<div class=\"PaginaDeInicio Component\">"
 + "    <h5>"
 + "      <span>Inicio</span>"
 + "    </h5>"
 + "    <ul class=\"fuente_monoespaciada\">"
 + "      <li>"
 + "        <router-link to=\"/ficheros\">"
 + "          <div class=\"como_link\">Ficheros</div>"
 + "        </router-link>"
 + "      </li>"
 + "      <li>"
 + "        <router-link to=\"/consola\">"
 + "          <div class=\"como_link\">Consola</div>"
 + "        </router-link>"
 + "      </li>"
 + "    </ul>"
 + "  </div>",
  function(component) {return { props:{ root:{ type:Object,
required:true
}
},
data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
mounted() {
}
};},
  null);