
let ingresosHTML="";
let totalIngresos=0;

let EgresosHTML="";
let totalEgresos=0;


let agregarDato=(event)=>{
    event.preventDefault(); //evita que la pagina se recargue al hacer click

    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = document.getElementById("valor").value;


if(descripcion!="" && valor !== ""){
    console.log("descripcion: "+ descripcion);
    console.log("valor: "+ valor);
    if(tipo==="ingreso"){
        //hace algo
        cargarIngresos(descripcion, Number(valor));

    }else if(tipo==="egreso"){
        //hace otra cosa
        cargarEgresos(descripcion, Number(valor));
    }
    document.getElementById("descripcion").value="";
    document.getElementById("valor").value="";

}else{
    alert("Debe completar todos los campos");
}
console.log(tipo);

}


let cargarIngresos = (descripcion, valor) =>{
    //ingresosHTML = ingresosHTML + crearIngresosHTML(descripcion, valor)  
    ingresosHTML += crearIngresosHTML(descripcion, valor)
    totalIngresos+=valor;
    let porcentaje = (totalEgresos/totalIngresos*100)
    let presupuestoTotal= (totalIngresos-totalEgresos)
    document.getElementById("ingresoTotal").textContent = formatearCLP(totalIngresos);
    document.getElementById("presupuesto").textContent = formatearCLP(presupuestoTotal);// modi
    document.getElementById("lista-ingresos").innerHTML=ingresosHTML;
    document.getElementById("porcentaje").textContent= porcentaje + "%";

}


let crearIngresosHTML=(descripcion, valor)=>{
    return `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">${formatearCLP(valor)}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`;
 }


 let cargarEgresos = (descripcion, valor) =>{
    //ingresosHTML = ingresosHTML + crearIngresosHTML(descripcion, valor)  
    EgresosHTML += crearEgresosHTML(descripcion, valor)
    totalEgresos+=valor;
    let porcentaje = (totalEgresos/totalIngresos*100)
    let presupuestoTotal= (totalIngresos-totalEgresos)
    document.getElementById("EgresoTotal").textContent = formatearCLP(totalEgresos);
    document.getElementById("presupuesto").textContent = formatearCLP(presupuestoTotal);// modi
    document.getElementById("lista-egresos").innerHTML=EgresosHTML;
    document.getElementById("porcentaje").textContent= porcentaje + "%";

}


let crearEgresosHTML=(descripcion,valor)=>{
    return `<div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor">${formatearCLP(valor)}</div>
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-circle-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            </div>`;
 }


 function formatearCLP(numero) {
    return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0
    }).format(numero);
}

