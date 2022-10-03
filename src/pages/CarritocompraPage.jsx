import "../styles/carritocompra.css";
import i1 from "../img/1.jpg"
import i2 from "../img/2.jpg"
import i3 from "../img/3.jpg"
import i4 from "../img/4.jpg"
import i5 from "../img/5.jpg"
import i6 from  "../img/6.jpg"

const carritocompraPage = () => {

    return (
        <body class="b">

    <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
    <header>
        <div class="container">
            <h1 class="text-center">TIENDA componentes PC</h1>
            
        </div>
    </header>
    
    <section class="store">
        <div class="container">
            <div class="items">
                <div class="row">

                    <div class="col-12 col-md-6">
                        <div class="item shadow mb-4">
                            <h3 class="item-title">tarjetagrafica</h3>
                            <img class="item-image" src={i1}/>

                            <div class="item-details">
                                <h4 class="item-price">1099€</h4>
                                <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="item shadow mb-4">
                            <h3 class="item-title">Corei5</h3>

                            <img class="item-image" src={i2}/>

                            <div class="item-details">
                                <h4 class="item-price">199€</h4>
                                <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="item shadow mb-4">
                            <h3 class="item-title">Memoria RAM</h3>

                            <img class="item-image" src={i3}/>

                            <div class="item-details">
                                <h4 class="item-price">339€</h4>
                                <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="item shadow mb-4">
                            <h3 class="item-title">Pantalla</h3>

                            <img class="item-image" src={i4}/>

                            <div class="item-details">
                                <h4 class="item-price">199€</h4>
                                <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <div class="item shadow mb-4">
                            <h3 class="item-title">CPU BOX</h3>

                            <img class="item-image" src={i5}/>
                            <div class="item-details">
                                <h4 class="item-price">39€</h4>
                                <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="item shadow mb-4">
                            <h3 class="item-title">Ventilador pc</h3>

                            <img class="item-image" src={i6}/>
                            <div class="item-details">
                                <h4 class="item-price">19€</h4>
                                <button class="item-button btn btn-primary addToCart">AÑADIR AL CARRITO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="shopping-cart">
        <div class="container">
            <h1 class="text-center">CARRITO</h1>
            
            <div class="row">
                <div class="col-6">
                    <div class="shopping-cart-header">
                        <h6>Producto</h6>
                    </div>
                </div>
                <div class="col-2">
                    <div class="shopping-cart-header">
                        <h6 class="text-truncate">Precio</h6>
                    </div>
                </div>
                <div class="col-4">
                    <div class="shopping-cart-header">
                        <h6>Cantidad</h6>
                    </div>
                </div>
            </div>
            
            <div class="shopping-cart-items shoppingCartItemsContainer">
            </div>
            

            
            <div class="row">
                <div class="col-12">
                    <div class="shopping-cart-total d-flex align-items-center">
                        <p class="mb-0">Total</p>
                        <p class="ml-4 mb-0 shoppingCartTotal">0€</p>
                        <div class="toast ml-auto bg-info" role="alert" aria-live="assertive" aria-atomic="true"
                            data-delay="2000">
                            <div class="toast-header">
                                <span>✅</span>
                                <strong class="mr-auto ml-1 text-secondary">Elemento en el carrito</strong>
                                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="toast-body text-white">
                                Se aumentó correctamente la cantidad
                            </div>
                        </div>
                        <button class="btn btn-success ml-auto comprarButton" type="button" data-toggle="modal"
                            data-target="#comprarModal">Comprar</button>
                    </div>
                </div>
            </div>

            

            
            <div class="modal fade" id="comprarModal" tabindex="-1" aria-labelledby="comprarModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="comprarModalLabel">Gracias por su compra</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>Pronto recibirá su pedido</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            


        </div>

    </section>
    


    
    <footer class="bg-dark p-3 mt-5">
        <p class="text-center m-0 text-muted">Tienda componentes PC</p>
    </footer>
    




    
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
        integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
        integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
        crossorigin="anonymous"></script>

    

</body> ); 
function addItemToShoppingCart(itemTitle, itemPrice, itemImage) {
    const elementsTitle = shoppingCartItemsContainer.getElementsByClassName(
      'shoppingCartItemTitle'
    );
    for (let i = 0; i < elementsTitle.length; i++) {
      if (elementsTitle[i].innerText === itemTitle) {
        let elementQuantity = elementsTitle[
          i
        ].parentElement.parentElement.parentElement.querySelector(
          '.shoppingCartItemQuantity'
        );
        elementQuantity.value++;
        $('.toast').toast('show');
        updateShoppingCartTotal();
        return;
      }
    }
  
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = `
    <div class="row shoppingCartItem">
          <div class="col-6">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${itemImage} class="shopping-cart-image">
                  <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
              </div>
          </div>
          <div class="col-2">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
              </div>
          </div>
          <div class="col-4">
              <div
                  class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button">X</button>
              </div>
          </div>
      </div>`;
    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItemsContainer.append(shoppingCartRow);
  
    shoppingCartRow
      .querySelector('.buttonDelete')
      .addEventListener('click', removeShoppingCartItem);
  
    shoppingCartRow
      .querySelector('.shoppingCartItemQuantity')
      .addEventListener('change', quantityChanged);
  
    updateShoppingCartTotal();
  }
  
  function updateShoppingCartTotal() {
    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal');
  
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem');
  
    shoppingCartItems.forEach((shoppingCartItem) => {
      const shoppingCartItemPriceElement = shoppingCartItem.querySelector(
        '.shoppingCartItemPrice'
      );
      const shoppingCartItemPrice = Number(
        shoppingCartItemPriceElement.textContent.replace('€', '')
      );
      const shoppingCartItemQuantityElement = shoppingCartItem.querySelector(
        '.shoppingCartItemQuantity'
      );
      const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
      );
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    });
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}€`;
  }
  
  function removeShoppingCartItem(event) {
    const buttonClicked = event.target;
    buttonClicked.closest('.shoppingCartItem').remove();
    updateShoppingCartTotal();
  }
  
  function quantityChanged(event) {
    const input = event.target;
    input.value <= 0 ? (input.value = 1) : null;
    updateShoppingCartTotal();
  }
  
  function comprarButtonClicked() {
    shoppingCartItemsContainer.innerHTML = '';
    updateShoppingCartTotal();
  }};
export default carritocompraPage;