$('.file .txtInput').on("change", function(){ uploadFilePath(this); });

function uploadFilePath(elm) {
  var path = $(elm).val();
  path = path.split('\\').pop();
  $(elm).siblings('.val').html(path);
}