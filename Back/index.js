const express = require("express") /* Importem express per poder-lo utilitzar. */

var app = express() /* Creem una variable per utilitzar express. */

app.get("/", function (request, response) { /* Aquesta es la estructura bàsica d'una petició web. */
    response.send("Resposta activa!")
})
app.listen(10000, function () { /* Redirigim les peticions entrants d'un port concret. */
    console.log("Started application on port %d", 10000)
});