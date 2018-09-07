$(document).ready(function() {
// вывод товаров

  $('.product_lst').empty();
  $.get('http://localhost:3000/products', {}, function(goods) {
    var $div = $('.product_lst');
    goods.forEach(function(item) {
     $div.append(
        $('<div />', {
          class: "prod",
          "data-tovid": item.id
        })
        .append(
          $('<a />',{
            class: "product"            
          })
          .append(
            $('<img />', { 
              src: "img/" + item.image
           })
          )
          .append(
            $('<p />',{
              text: item.name            
            })
          )
          .append(
            $('<span />',{
              text: "$" + item.price            
            })
          )
        )
        
        .append(
          $('<div />',{
            class: "add-flex"
         
          })

          .append(
            $('<a />',{
              class: "add",
              text: "Add to Cart"            
            })
          ) 
        )
        
    )
    }
    
    ); 
    $('.product_lst').append($div);
  }, 'json');

// вывож товаров


// нажатие на кнопку добавить
  $(document).on('click', '.add', function(event) {
    var addTov = {
      id_product: 123,
      quantity: 1,
      id: $(this).parent().parent().attr('data-tovid'),
    };
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/cart',
      data: addTov,
      //success: 0,
      //error:  function() {
      //  console.log("ошибка");
      //}
    });
  });
});
