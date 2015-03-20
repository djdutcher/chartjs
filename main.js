
//$("#test").text('Changed')

$(document).ready(function() {
	var data = {
		labels : [ "A", "B", "C", "D", "E", "F", "G" ],
		datasets : [
			{
				data : [65, 59, 80, 81, 56, 55, 40]
			},
		]
	};

	var ctx = document.getElementById("myChart").getContext("2d");
	var myLineChart = new Chart(ctx).Line(data);

	$("#click").click(function(evt) {
		evt.preventDefault();
		$("#output").text("Click");
		
	});
});





