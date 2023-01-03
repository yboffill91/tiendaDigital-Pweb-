const prodContenet = document.getElementById("prodContenet");
const verCarrito = document.getElementById("verCarrito");
const modal = document.getElementById("modal");
const productos = [
  {
    id: 1,
    nombre: "Movil GDM",
    descripcion: "Movil de gama media GDM",
    precio: 16450,
    img: "./src/product/movil1.jpg",
  },
  {
    id: 2,
    nombre: "Movil Xiaomi",
    descripcion: "Movil de gama media Xiaomi",
    precio: 17000,
    img: "./src/product/movil2.jpg",
  },
  {
    id: 3,
    nombre: "Movil UMIGIGI",
    descripcion: "Movil de gama media UMIDIGI",
    precio: 14750,
    img: "./src/product/movil3.jpg",
  },
  {
    id: 4,
    nombre: "3 Gamer Set",
    descripcion: "Set de monitores gamer",
    precio: 37800,
    img: "./src/product/display1.png",
  },
  {
    id: 5,
    nombre: "HiSense UWide",
    descripcion: "Monitor ultra wide HiSense View",
    precio: 23540,
    img: "./src/product/display2.jpg",
  },
  {
    id: 6,
    nombre: "HP Offce NG",
    descripcion: "Monitor HP 15",
    precio: 11000,
    img: "./src/product/display3.jpg",
  },
  {
    id: 7,
    nombre: "MacBook Pro M1",
    descripcion: "Portatil MacBook Pro M1 512 Gb",
    precio: 124750,
    img: "./src/product/portatil1.jpg",
  },
  {
    id: 8,
    nombre: "MacBook Air M1",
    descripcion: "NotePad MacBook Air M1 256 Gb",
    precio: 99000,
    img: "./src/product/portatil2.jpg",
  },
  {
    id: 9,
    nombre: "Acer Inspire 15",
    descripcion: "Portatil Acer Inspire 15 1TB",
    precio: 55000,
    img: "./src/product/portatil3.jpg",
  },
  {
    id: 10,
    nombre: "Logitech Teclado",
    descripcion: "Teclado mecanico Logitech USB",
    precio: 750,
    img: "./src/product/teclado1.jpg",
  },
  {
    id: 11,
    nombre: "MDesk Cam",
    descripcion: "C&aacute;mara Web para Monitores de Escritorio",
    precio: 500,
    img: "./src/product/webcam1.jpg",
  },
  {
    id: 12,
    nombre: "SHome Cam",
    descripcion: "C&aacute;mara web para Monitores de Escritorio",
    precio: 750,
    img: "./src/product/webcm2.png",
  },
];
let carrito = [];
productos.forEach((producto) => {
  let contenido = document.createElement("div");
  contenido.innerHTML = `
  <div class="tarjeta">
          <div class="tarjetaInterior">
            <img src="${producto.img}" />
            <div><h1 class="nombreProducto">${producto.nombre}</h1></div>
            <div>
              <p class="descripcionProducto">${producto.descripcion}</p>
            </div>
            <div class="precio">&dollar; ${producto.precio}.00</div>
          </div>
    `;
  prodContenet.append(contenido);
  let botonComprar = document.createElement("button");
  botonComprar.innerHTML = `
  <span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M23.25 17.35V11.2h-6.2v-3h6.2V2.05h3V8.2h6.15v3h-6.15v6.15ZM14.5 44q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55Q13 36.8 14.5 36.8q1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55Q16 44 14.5 44Zm20.2 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55Q36.2 44 34.7 44ZM14.5 33.65q-2.1 0-3.075-1.7-.975-1.7.025-3.45l3.05-5.55L7 7H3.1V4h5.8l8.5 18.2H32l7.8-14 2.6 1.4-7.65 13.85q-.45.85-1.225 1.3-.775.45-1.825.45h-15l-3.1 5.45h24.7v3Z"/></svg>
</span>
A&ntilde;adir al carrito
  `;
  contenido.append(botonComprar);
  botonComprar.addEventListener("click", () => {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      img: producto.img,
    });
  });
});
verCarrito.addEventListener("click", () => {
  modal.innerHTML="";
  modal.style.display="flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "mHeader";
  modalHeader.innerHTML = `
  <h1>Carrito</h1>
  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"/></svg></span>
  `;
  modal.append(modalHeader);
  const cerrarCarrito = document.createElement("h1");
  cerrarCarrito.innerText = "X";
  cerrarCarrito.className = "cerrarCarrito";
  cerrarCarrito.addEventListener("click", ()=>{
    modal.style.display="none";
  })
  modalHeader.append(cerrarCarrito);
  carrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modalContent";
    carritoContent.innerHTML = `
    <div class="modalLista">
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <h3>&dollar;${producto.precio}.00</h3>
    </div>
    <hr>
    `;
    modal.append(carritoContent);
  });
  const total = carrito.reduce((acc, el) => acc + el.precio, 0);
  
  const totalPagar=document.createElement("div");
  totalPagar.className="totales";
  totalPagar.innerHTML=`
  <h3>Monto Total: &dollar;${total}.00</h3>

  `
  let totalDesc=total-total/10;
  const descuento=document.createElement("div");
  descuento.innerHTML=`
  <h3>Total a Pagar: &dollar;${totalDesc}.00</h3>
  <h3>Ahorro de: &dollar;${total-totalDesc}.00</h3>
  `
  totalPagar.append(descuento);
  modal.append(totalPagar);
  const metPago=document.createElement("div");
  metPago.className="metPago";
  metPago.innerHTML=`
  <button class="transfermovil"><img src="./src/icons/transfermovilico.png">Transfermovil</button>
  <button class="enzona"><img src="./src/icons/enzonaico.png">EnZona</button>
  `
  modal.append(metPago);
});
