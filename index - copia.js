

const datosUsuario = {
  user: "francisco",
  clave: "123"
}

console.log(datosUsuario.user);
console.log(datosUsuario.clave);
function loguear (){
 
  let UserInput = document.getElementById("usuario").value;
  let ClaveInput = document.getElementById("clave").value;

  if (datosUsuario.user === UserInput && datosUsuario.clave=== ClaveInput ){
    window.location="Inventario.html"
  }
  else{
alert("Usuario o contraseña incorrectos")

  }
}

