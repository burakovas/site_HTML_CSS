$(document).ready(function() {
  $(document).on('click', '.add', function(event) {// нажатие на кнопку добавить
    console.log('товар добавлен в корзину');
    var addTov = {
      id_product: 123,
      quantity: 1,
    };
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/addToBasket/',
      data: addTov,
      success: function() {
       // -----
      },
    });
  });
});
