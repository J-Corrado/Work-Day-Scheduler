// Displays the time of day and current date
function timeAndDay(){
  var today = dayjs().format('dddd, MMM D YYYY, h:mm:ss a');
  $('#currentDay').html(today);
};
$(document).ready(function () {
  $('.saveBtn').on('click', function () {
      // Gets the sibling near the "description" class and sets their values to the text variable
      var text = $(this).siblings('.description').val();
      // Gets the parent element with an "id" attribute of "this" and sets it to the time variable
      var time = $(this).parent().attr('id');

      // Sets the text value to the time key and then saves it to local storage
      localStorage.setItem(time, text);
  })
});
