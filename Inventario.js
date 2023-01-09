// El siguiente programa esta basado en un inventario de Laptop que utilizo en mi trabajo actulamente en planilla excel. Como proyecto final pretendo hacer un programa de ese inventario en JS y HTML.
    // Arreglo de objetos: Defini un arreglo de objeto con los datos del inventario y agrege 15 objetos con push dentro del programa.
    // Todas las salidas se visualizan con "console.table"
    // Agregar nuevos productos: Se realizo una funcion para agregar nuevos productos con un ciclo while que consulta si quiere agregar mas items.
    // Eliminar Items : Se realizo una funcion para eliminar Items del inventario seleccionados por el indice.
    // Actualizar inventario: Se realizo una funcion para actualizar inventario. Usuario debe seleccionar indice de elemento a modificar y luego ingresar con prompt que items desea actualizar. Luego debe ingresar con prompt la actualizacion.
    // Filtrar productos por items ( Estado, ubicacion, etc)
    // Finalmente se realizan una serie de preguntas para acceder a las funciones creadas.


      //Funcion de botones para desplegar ventana de agregar activos
      function mostrarVentanaEmergente() {
        var ventana = document.getElementById("miVentanaEmergente");
        ventana.style.display = "block";
      }
       //Funcion de botones para ocultar ventana de agregar activos
      function OcultarAddLaptop() {
        var ventana = document.getElementById("miVentanaEmergente");
        ventana.style.display = "none";
      }

      //Creacion de funcion constructora
    function LaptopInv (indice, CodigoInv, Estado, Usuario, Ubicacion, MarcaModelo,NumeroSerie, Caracteristicas, Categoria, Condicion) {
        this.indice = indice ;
        this.CodigoInv = CodigoInv;
        this.Estado = Estado;
        this.Usuario = Usuario;
        this.Ubicacion = Ubicacion;
        this.MarcaModelo = MarcaModelo;
        this.NumeroSerie = NumeroSerie;
        this.Caracteristicas = Caracteristicas;
        this.Categoria = Categoria;
        this.Condicion = Condicion;
      }

             //Cargar datos de inicio al arreglo
            
             // Guardar la cadena de texto en el localStorage con condicional para no soobrescribir localstorage
         const laptop = [];
         let indice = 15; // El índice parte en 15

        

          if (laptop.length === 0 ){
      
        laptop.push (new LaptopInv (1, "CUL-NB-0001", "Asignado","Felipe Morales","Santa Elisa","HP 14 ","CND6250XGJ","Intel i3-5005U 2,0 Ghz - 4 GB - SSD 240 GB","4","Bueno"))
        laptop.push (new LaptopInv (2,"CUL-NB-0002", "Asignado","Bastian Herrera","Santa Elisa","HP 14"," CND6250XGJ","Intel i3-5005U 2,0 Ghz - 4 GB - SSD 240 GB","4","Bueno"))
        laptop.push (new LaptopInv (3,"CUL-NB-0003", "Dado de Baja","","","ACER Aspire 3 A315-51","NXH37AL0086380E0973400","Intel i5-8250U 1,8 Ghz - 4GB - 16GB OPTANE - DD 1TB","3","Bueno"))
        laptop.push (new LaptopInv (4,"CUL-NB-0004", "Asignado","Macarena Moya","Belgica","HP 14","CND6250XGJ","Intel i3-5005U 2,0 Ghz - 8GB - SSD 240 GB","4","Regular"))
        laptop.push (new LaptopInv (5,"CUL-NB-0005", "Asignado","Gerardo Verdugo ","Belgica","HP modelo HP 250 G4","CND5315WBJ","Intel i3-4005U 1,7 Ghz - 4Gb - SSD 240 GB","4","Regular"))
        laptop.push (new LaptopInv (6,"CUL-NB-0006", "Asignado","Pedro Valenzuela","Oficina Central","HP 240 G3","CND51808B3","Intel i3-4005U 1,7 Ghz - 4GB - SSD 240 GB","4","Bueno"))
        laptop.push (new LaptopInv (7,"CUL-NB-0007", "Dado de Baja","","","HP Pavillion","B3CTTFC","Intel i7-6500U 2,59 Ghz - 8 GB - SSD 480GB","1","Malo"))
        laptop.push (new LaptopInv (8,"CUL-NB-0008", "Asignado","David Vera","Oficina","HP 14"," CND6250XGJ","Intel i3-3110M 2,4 Ghz - 8GB - 128 GB SSD","4","Regular"))
        laptop.push (new LaptopInv (9,"CUL-NB-0009", "Dado de Baja","","","HP 14","5CD5054Y4V","intel Celeron N2840 2,16 Ghz - 4GB - DD 500 GB","6","Malo"))
        laptop.push (new LaptopInv (10,"CUL-NB-0010", "Asignado","Felipe Hojman","Oficina Central","ACER A515-51G","NXH2LAL00182107ACA3400","Intel i7-8550U 1,9 Ghz - 8 GB - SSD 1 TB","2","Bueno"))
        laptop.push (new LaptopInv (11,"CUL-NB-0011", "Asignado","Carolina Valle L.","Santa Elisa","HP 14"," 5CG6115MHH","Intel i3-5005U 2,0 Ghz - 4GB RAM - HH 480 GB GB","4","Bueno"))
        laptop.push (new LaptopInv (12,"CUL-NB-0012", "Dado de Baja","","","HP 240 G3","CND51807XJ","Intel i3-4005U 1,70 Ghz - 4GB RAM - DD 900 GB","5","Bueno"))
        laptop.push (new LaptopInv (13,"CUL-NB-0013", "Asignado","Camila Cisterna","Santa Elisa","HP 14","5CG6115Q1S","Intel i3-5005U 2,0 Ghz - 4 GB - SSD 240 GB","4","Bueno"))
        laptop.push (new LaptopInv (14,"CUL-NB-0014", "Dado de Baja","","","Toshiba Satellite-L45 B","6E134830S","Intel i3-4005U 1,7 Ghz - 4GB RAM - DD 700 GB","5","Malo"))
        laptop.push (new LaptopInv (15,"CUL-NB-0015", "Asignado","Sebastian Vasquez","Belgica","Toshiba SATELLITE C45-ASP4310FL","ZD115276C","Intel i3-3110M 2,4 Ghz - 8GB - 240 GB SSD","4","Bueno"))

      }
        // Funcion para guardar arreglo de objetos base
          function guardarArreglo() {

            
    // Convertir el arreglo a una cadena de texto con JSON.stringify()
    const arregloString = JSON.stringify(laptop);
    // Guardar la cadena de texto en el localStorage con condicional para no soobrescribir localstorage
    if (localStorage.getItem("laptop") === null){
    localStorage.setItem("laptop", arregloString);
  }
  }
  function cargarArreglo() {
    // Obtener la cadena de texto del localStorage
    const arregloString = localStorage.getItem("laptop");
    // Convertir la cadena de texto a un arreglo de objetos con JSON.parse()
     const arreglolaptop = JSON.parse(arregloString);
    // Recorrer el arreglo y agregar cada objeto al DOM
    for (let i = 0 ; i < arreglolaptop.length; i++) {
      const row = `
          <td><input type="checkbox"></td>
          <td>${arreglolaptop[i].indice}</td>
          <td>${arreglolaptop[i].CodigoInv}</td>
          <td>${arreglolaptop[i].Estado}</td>
          <td>${arreglolaptop[i].Usuario}</td>
          <td>${arreglolaptop[i].Ubicacion}</td>
          <td>${arreglolaptop[i].MarcaModelo}</td>
          <td>${arreglolaptop[i].NumeroSerie}</td>
          <td>${arreglolaptop[i].Caracteristicas}</td>
          <td>${arreglolaptop[i].Categoria}</td>
          <td>${arreglolaptop[i].Condicion}</td>
        </tr>
      `;
      // Agregar la fila a la tabla
      document.getElementById('laptop-table').innerHTML += row;
      }
   
  }

  guardarArreglo()
  cargarArreglo();


   //Funcion para agregar Laptop a Inventario
    function GuardarLaptop(){

      

      Indice = laptop.length +1
      CodigoInv = document.getElementById("CodInternoInput").value,
      Estado = document.getElementById("EstadoInput").value,
      Usuario= document.getElementById("Usuarioinput").value,
      Ubicacion= document.getElementById("UbicacionInput").value,
      MarcaModelo= document.getElementById("MarcaInput").value,
      NumeroSerie= document.getElementById("NserieInput").value,
      Caracteristicas= document.getElementById("CaracteristicasInput").value,
      Categoria = document.getElementById("CategoriaInput").value,
      Condicion = document.getElementById("CondicionInput").value
      laptop.push(new LaptopInv(Indice , CodigoInv , Estado, Usuario, Ubicacion, MarcaModelo, NumeroSerie, Caracteristicas, Categoria, Condicion));

       //Obtener ultimo elemento del array - seleccionar elemento del local storage . transformar a json - agregar a localstorage
      const ultimoElemento = laptop[laptop.length - 1];
      let ValorActualLocalStorage = localStorage.getItem("laptop");
      let objeto = JSON.parse(ValorActualLocalStorage);
      objeto.push(ultimoElemento);
      let objetoString = JSON.stringify(objeto);
      localStorage.setItem("laptop", objetoString);

      const rowN = `
          <td><input type="checkbox"></td>
          <td>${ultimoElemento.indice}</td>
          <td>${ultimoElemento.CodigoInv}</td>
          <td>${ultimoElemento.Estado}</td>
          <td>${ultimoElemento.Usuario}</td>
          <td>${ultimoElemento.Ubicacion}</td>
          <td>${ultimoElemento.MarcaModelo}</td>
          <td>${ultimoElemento.NumeroSerie}</td>
          <td>${ultimoElemento.Caracteristicas}</td>
          <td>${ultimoElemento.Categoria}</td>
          <td>${ultimoElemento.Condicion}</td>
        </tr>
      `;
document.getElementById('laptop-table').innerHTML += rowN;

          // Mostrar una alerta de sweetalert para confirmar que se ha guardado el arreglo
          Swal.fire({
            title: 'Guardado',
            text: 'Se a guardado el activo con codigo interno : ' +  ultimoElemento.CodigoInv ,
            icon: 'success'
          });
    }

    // Funcion para Eliminar Laptop de Inventario

    function DelLaptop() {

      let indice = Number(prompt("Ingrese Indice (Index) de producto a eliminar"));

      if (indice > laptop.length) {
        alert("El indice no existe");
        return;
      }

      if (isNaN(indice)) {
        alert("El indice no existe");
        return;
      }

        for (let i = 0; i <= laptop.length; i++) {
          if (i === indice) {
            const deleteindex = laptop[i];
            laptop.splice(i, 1);
            console.log("Se a Eliminado el siguiente producto: " + deleteindex.CodigoInv)
            console.log(" Tabla actualizada a la fecha :  " + new Date());
            console.table(laptop);
            break;
          }

        }
    }

// Funcion para actualizar inventario

    function ModLaptop() {

        const index = prompt("ingrese indice de producto a modificar (Ejemplo: 1, 2, 3 ,4 ....");
        const objeto = laptop[index];

        let repeticion = true;

        while(repeticion){

            const New = prompt("Indique Items a actualizar: Usuario , Ubicacion , Caracteristicas , Categoria , Condicion");

            switch (New) {

              case 'Usuario':
                const NewUser = prompt("Ingrese nuevo nombre de usuario");
                objeto.Usuario = NewUser;
                console.log("Usted a actualizado el producto: " + laptop[index].CodigoInv + "    al siguiente propietario:  " + NewUser )
                break;

              case 'Ubicacion':
                    const NewUbic = prompt("Ingrese nueva ubicacion");
                    objeto.Ubicacion = NewUbic;
                    console.log("Usted a actualizado el producto: " + laptop[index].CodigoInv + "    A la siguiente Ubicacion:  " + NewUbic )
                break;

              case 'Caracteristicas':
                  const NewCaract = prompt("Ingrese nueva caracteristica de hardware ");
                  objeto.Caracteristicas = NewCaract;
                  console.log("Usted a actualizado el producto: " + laptop[index].CodigoInv + "    A la caracteristica de Hardware:  " + NewCaract )
                break;

              case 'Categoria':
                    const NewCategoria = prompt("Ingrese nueva categoria");
                    objeto.Categoria = NewCategoria;
                    console.log("Usted a actualizado el producto: " + laptop[index].CodigoInv + "    A la categoria:  " + NewCategoria )
               break;

              case 'Condicion':
                const NewCondicion = prompt("Ingrese nueva condicion de equipo");
                objeto.Condicion = NewCondicion;
                console.log("Usted a actualizado el producto: " + laptop[index].CodigoInv + "    A la condicion:  " + NewCondicion )
              break;

                default:
                alert("No es un Items valido");
                console.log("No es un Items valido");


            }

            repeticion = confirm("¿Desea actualizar otro Parametro del equipo o producto?")

            if( repeticion === false){

              break;
            }
            }

            console.log(" Tabla actualizada a la fecha :  " + new Date());
            console.table(laptop);

    }

// Funcion para filtrar equipos en base a un items en especifico (  Estado , Usuario , Ubicacion ,MarcaModelo, Caracteristicas , Categoria , Condicion)

  function Filtro (){

    const NewFilter = prompt("Indique Items a filtrar: Estado , Usuario , Ubicacion , MarcaModelo , Caracteristicas , Categoria  , Condicion");
    const FilterItems = prompt(" Ingrese Items por el cual quiere filtrar ( Ejemplo: Estado => Asignado , Ubicacion => Santa Elisa , Usuario => Juan Perez etc...")


    switch (NewFilter) {

      case 'Estado':

      const EstadoFiltro = laptop.filter((item) => item.Estado === FilterItems);
        console.table(EstadoFiltro);
        console.log(" Tabla actualizada a la fecha :  " + new Date());

        if (EstadoFiltro.length === 0) {
            console.log("No se ha encontrado ningún elemento con el Estado especificado");

            return;
          }

        break;

        case 'Usuario':

        const UsuarioFiltro = laptop.filter((item) => item.Usuario === FilterItems);
        console.table(UsuarioFiltro);
        console.log(" Tabla actualizada a la fecha :  " + new Date());

        if (UsuarioFiltro.length === 0) {
            console.log("No se ha encontrado ningún elemento con el Usuario especificado");
            return;
          }
        break;

        case 'Ubicacion':

        const UbicacionFiltro = laptop.filter((item) => item.Ubicacion === FilterItems);
        console.table(UbicacionFiltro);
        console.log(" Tabla actualizada a la fecha :  " + new Date());

        if (UbicacionFiltro.length === 0) {
            console.log("No se ha encontrado ningún elemento con la Ubicacion especificada");

            return;
          }
        break;

        case 'Caracteristicas':

        const CaracteristicasFiltro = laptop.filter((item) => item.Caracteristicas === FilterItems);
        console.table(CaracteristicasFiltro);
        console.log(" Tabla actualizada a la fecha :  " + new Date());

        if (CaracteristicasFiltro.length === 0) {
            console.log("No se ha encontrado ningún elemento con las Caracteristicas especificadas");
            return;
          }
        break;

        case 'NumeroSerie':

        const NumeroSerieFiltro = laptop.filter((item) => item.NumeroSerie === FilterItems);
        console.table(NumeroSerieFiltro);
        console.log(" Tabla actualizada a la fecha :  " + new Date());

        if (NumeroSerieFiltro.length === 0) {
            console.log("No se ha encontrado ningún elemento con las Caracteristicas especificadas");
            return;
          }
        break;

        case 'Categoria':

        const CategoriaFiltro = laptop.filter((item) => item.Categoria === FilterItems);
        console.table(CategoriaFiltro);
        console.log(" Tabla actualizada a la fecha :  " + new Date());

        if (CategoriaFiltro.length === 0) {
            console.log("No se ha encontrado ningún elemento con la Categoria especificada");

            return;
          }
        break;

        case 'Condicion':

        const CondicionFiltro = laptop.filter((item) => item.Condicion === FilterItems);
        console.table(CondicionFiltro);
        console.log(" Tabla actualizada a la fecha :  " + new Date());

        if (CondicionFiltro.length === 0) {
            console.log("No se ha encontrado ningún elemento con la Condicion especificada");

            return;
          }
        break;


        default:
            alert(NewFilter + "  No existe como parametro a filtrar en la tabla. Indique Items a filtrar: Estado , Usuario , Ubicacion , MarcaModelo , Caracteristicas , Categoria  , Condicion");
            console.log(NewFilter + "  No existe como parametro a filrar en la tabla.ndique Items a filtrar: Estado , Usuario , Ubicacion , MarcaModelo , Caracteristicas , Categoria  , Condicion");

    }



  }



// alert(" Bienvenido al Inventario tecnilogico. Lo que ve en pantalla es el inventario actual");

// const pregunta1 =confirm ("¿Desea agregar un nuevo Equipo o Producto?")

// if (pregunta1 === true){
//     AddLaptop();

// }
// const pregunta2 =confirm ("¿Desea modificar algun equipo o producto?")

// if(pregunta2 === true){

//     ModLaptop();
// }

// const pregunta3 =confirm ("¿Desea Eliminar algun equipo o producto?")

// if(pregunta3 === true){

//     DelLaptop();
// }

// const pregunta4 =confirm ("¿Desea Filtrar por algun parametro de algun equipo o producto?")

// if(pregunta4 === true){

//     Filtro();
// }



