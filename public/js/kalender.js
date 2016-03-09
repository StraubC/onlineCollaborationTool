(function() {
	$('#calendar').fullCalendar({
    	height: 600, 
    	lang: 'de',
    	weekNumbers: true,

    	dayClick: function(date, jsEvent, view) {

        	alert('Clicked on: ' + date.format());

        	$(this).css('background-color', 'red');
        }  
    });

});