$(document).ready(function() {
  $(document).on('click', '.add', function(event) { // нажатие на кнопку добавить
    console.log("товар добавлен в корзину");
    var addTov = {
      text: $('#inpTextField').val(),
      approved: false,
    };
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/addtobasket/',
      data: addTov,
      success: function() {
       // -----
      },
    });
  });
});
