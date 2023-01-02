const prodContenet = document.getElementById("prodContenet");
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
            <div>
              <button class="addCar" id="addCar">
                <span> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48">
                  <path
                    d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.5 0 2.55 1.05 1.05 1.05 1.05 2.55 0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.15 0 1.75 1.05.6 1.05 0 2.1L34.7 23.25q-.55.95-1.425 1.525t-1.925.575H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4h14.4Z"
                  />
                </svg> </span>
                A&ntilde;adir al carrito
              </button>
            </div>
          </div>
    `;
  prodContenet.append(contenido);
  let comprar = document.getElementById("addCar");
});
