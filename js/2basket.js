// ---- 2 ----

$(document).ready(function() {
  $(document).on('click', '.tovdel', function(event) {// нажатие на кнопку удалить
    $.ajax({
      type: 'DELETE',
      url: 'http://localhost:3000/cart/' + $(this).attr('data-tovid'),
      success: function() {
        console.log('товар удален из корзины');
      },
      error: function() {
        console.log('такого товара нет в корзине');
      },
    });
  });
});

// ----- 4  ------ Не сделано
//чтение данных корзины чтобы в дальнейшем вывести в окне программы
function renderGoodsList() {
  $('#goods').empty();
  $.get('http://localhost:3000/goods', {}, function(goods) {
    var $ul = $('<ul />');
    goods.forEach(function(item) {
      $ul.append(
        $('<li />', {
          text: item.name + ' ' + item.price + ' rub.'
        })
        .append(
          $('<button />', { 
            text: 'Buy',
            'data-id': item.id,
            'data-price': item.price,
            'data-name': item.name
          })
        )
    )
    });
    $('#goods').append($ul);
  }, 'json');
}