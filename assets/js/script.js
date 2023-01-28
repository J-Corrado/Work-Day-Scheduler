// Displays the time of day and current date
function timeAndDay(){
  var today = dayjs().format('dddd, MMM D YYYY, h:mm:ss a');
  $('#currentDay').html(today);
};
});
