
//получить корзину


function renderCart() {
  $('#cart').empty();
  $.get('http://localhost:3000/cart', {}, function(goods) {
    var $ul = $('<ul />');
    var total = 0;
    goods.forEach(function(item) {
      $ul.append(
        $('<li />', {
          text: item.name + ' (' + item.quantity + ')'
        })
        .append(
          $('<button />', { 
            text: 'Remove',
            'data-id': item.id,
            'data-price': item.price,
            'data-name': item.name,
            'data-quantity': item.quantity
          })
        )
      );
      total += +item.quantity * +item.price;
    });
    $('#cart').append($ul);
    $('#cart').append($('<div />', { text: 'Total: ' + total + ' rub.' }))
  }, 'json');
}