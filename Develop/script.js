// Get form, item, and Work Day Scheduler
var addToWorkDayScheduler = document.querySelector('#add-to-Work Day Scheduler');
var WorkDayScheduler = document.querySelector('#Work Day Scheduler-item');
var WorkDayScheduler = document.querySelector('#Work Day Scheduler');

addToWishList.addEventListener('submit', function (event) {

	// Don't submit the form
	event.preventDefault();

	// Ignore it if the Work Day Scheduler item is empty
	if (wishlistItem.value.length < 1) return;

	// Add item to Work Day Scheduler
	WorkDayScheduler.innerHTML += '<li>' + WorkDayScheduler.value + '</li>';

	// Clear input
	WorkDayScheduler.value = '';

}, false);

//Color coding to indicate whether it is in the past, present, or future
function colorSchedule() {
	var currentHour = moment().hours();

	$("input").each(function () {
		var rowHour = $(this).attr("id");
		var rowNumber = parseInt(rowHour);
		if (rowNumber < currentHour) {
			$(this).addClass("past");
		} else if (rowNumber === currentHour) {
			$(this).removeClass("past");
			$(this).addClass("present");
		} else {
			$(this).removeClass("past");
			$(this).removeClass("present");
			$(this).addClass("future");
		}
	});
};
//FUnction to save to local storage
$(".saveBtn").click(function () {
	var scheduleInputs = $(this).siblings(".event").val();
	var inputsLocation = $(this).siblings(".event").attr("id");
	localStorage.setItem(inputsLocation, scheduleInputs);
});

setInterval(getDate, 1000);
colorSchedule();
setInterval(colorSchedule, 1000);
renderStoredInputs();

function newFunction() {
return moment().hours();
}