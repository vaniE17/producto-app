import Recat, {userState} from 'react';
const producto=({name,price})=>{
    return(
        <div className="prodcut">
            <h3>{name}</h3>
            <p>Precio: $</p>
        </div>
    );
};

const productos=()=>{
    const [producto] = userState([
    {id: 1, nombre: 'Camisa Elegante Mujer', descripcion: 'Camisa de algodon, disponible en varios colores.', precio: '$59', imagen: 'https://www.google.com/imgres?q=camisa%20elegante%20dama&imgurl=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F0bb14633-b0d7-4ef4-9c89-5e775e50c67b.b8bdc743c2105fddfa320b25c7445676.jpeg%3FodnHeight%3D612%26odnWidth%3D612%26odnBg%3DFFFFFF&imgrefurl=https%3A%2F%2Fwww.walmart.com.mx%2Fip%2Fropa-para-mujer%2Fboton-de-y-blusas-elegante-de-de-monocromatica-boton-de-cuello-de-suelto-casual-ajuste-camisas-blanco-sunnimix-camisa-de-senoras%2F00075290999000&docid=gQgzzyoPyb9QdM&tbnid=t5h-pdFOXuxHnM&vet=12ahUKEwiV0r_Gu-6LAxU4MUQIHfIhG_8QM3oECHkQAA..i&w=612&h=612&hcb=2&ved=2ahUKEwiV0r_Gu-6LAxU4MUQIHfIhG_8QM3oECHkQAA'},
    {id: 2, nombre: 'Tenis', descripcion: 'Zapatos comodos para correr o hacer deporte.', precio: '$895', imagen: 'https://www.google.com/imgres?q=tenis%20zapatos&imgurl=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FEukAAOSwZd5kWgPC%2Fs-l1200.jpg&imgrefurl=https%3A%2F%2Flandacbio.ipn.mx%2F%3Fn%3D808122832616&docid=Nmvnn0H5hFEVXM&tbnid=ividyQQ2SnNYdM&vet=12ahUKEwiXqs2Que6LAxUkLkQIHXIoJA0QM3oECFwQAA..i&w=800&h=800&hcb=2&itg=1&ved=2ahUKEwiXqs2Que6LAxUkLkQIHXIoJA0QM3oECFwQAA'},
    {id: 3, nombre: 'Audifonos Bluetooth', descripcion: 'Auriculares inalambricos con excelente calidad de sonido.', precio: '$250', imagen: 'https://www.google.com/imgres?q=audifonos%20inalambricos&imgurl=https%3A%2F%2Fminisomx.vtexassets.com%2Farquivos%2Fids%2F258619-800-800%3Fv%3D638139516363770000%26width%3D800%26height%3D800%26aspect%3Dtrue&imgrefurl=https%3A%2F%2Fwww.miniso.com.mx%2Faudifonos-inalambricos-con-estuche-de-carga-blancos-5x5-cm-tws-2-2%2Fp&docid=X3P1IASBCgOl0M&tbnid=hGTRg7dpQ8SgSM&vet=12ahUKEwit6P3Cuu6LAxUdI0QIHaBsBnYQM3oECH4QAA..i&w=800&h=800&hcb=2&ved=2ahUKEwit6P3Cuu6LAxUdI0QIHaBsBnYQM3oECH4QAA'},
    {id: 4, nombre: 'Reloj', descripcion: 'Reloj moderno con pantalla digital y correa de cuero.', precio: '$645', imagen: 'https://www.google.com/imgres?q=reloj%20inteligente&imgurl=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Ffae7eb9c-f8d0-4533-93ab-841d9f8a7bd2.787c516c919ce947bbae42d0fcc5e4ac.jpeg%3FodnHeight%3D612%26odnWidth%3D612%26odnBg%3DFFFFFF&imgrefurl=https%3A%2F%2Fwww.walmart.com.mx%2Fip%2Fsmartwatch-y-wearables%2F2022-nuevo-reloj-inteligente-con-bluetooth-para-mujer-reloj-de-moda-para-mujer-pantalla-completamente-tactil-de-1-69-pulgadas-presion-arterial-reloj-inteligente-deportivo-para-mujer-tan-jianjun-unisex%2F00485782247548&docid=0P8QyKcoR2QheM&tbnid=8JafxOyj4lBgoM&vet=12ahUKEwiPwqiMu-6LAxX8IkQIHSnALaIQM3oECBkQAA..i&w=612&h=612&hcb=2&ved=2ahUKEwiPwqiMu-6LAxX8IkQIHSnALaIQM3oECBkQAA'}
]);

function mostrarProductos(){
    const ListaProductos=document.getElementById('product-list');

    ListaProductos.innerHTML='';

    productos.forEach(producto=>{
        const tarjetaProducto=document.createElement('div');
        tarjetaProducto.classList.add('product-card');

        tarjetaProducto.innerHTML=`
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <div class="price">${producto.precio}</div>
        <button>Añadir</button>
    `;
    ListaProductos.appendChild(tarjetaProducto);
    });
}
};
mostrarProductos();
export default productos;