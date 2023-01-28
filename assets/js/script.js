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
    // Grabs the locally stored hour data and sets it to the corresponding hour box
    $('#hour-5 .description').val(localStorage.getItem('hour-5'));
    $('#hour-6 .description').val(localStorage.getItem('hour-6'));
    $('#hour-7 .description').val(localStorage.getItem('hour-7'));
    $('#hour-8 .description').val(localStorage.getItem('hour-8'));
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
    $('#hour-18 .description').val(localStorage.getItem('hour-18'));

});
