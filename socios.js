$(document).ready(function() {
	var contador_msgs = 0;

	$("#tabs").tabs();

	$.getJSON("timeline.json").done(function(data) {
		console.log("timeline");
		printMsgs(data.Msgs, "#msgs");
	}).fail(function(){
		alert("No se han podido cargar los mensajes");
	});

	$.getJSON("myline.json").done(function(data) {
		console.log("myline");
		printMsgs(data.Msgs, "#msgs2");
	}).fail(function(){
		alert("No se han podido cargar mis mensajes");
	});

	$("#update").click(function(){
		$.getJSON("update.json").done(function(data) {
			console.log("update");
			if(contador_msgs == 0){
				contador_msgs++;
				printMsgs(data.Msgs, "#newMsgs");
			}else{
				alert("no hay ningun mensaje nuevo");
			}
		}).fail(function(){
			alert("No se han podido cargar los nuevos mensajes");
		});
	});

	function printMsgs (msgs, id){ 
        for (var i in msgs){
			$(id).prepend("<div>" + msgs[i].contenido + "<li>" + msgs[i].fecha + "</li>" + "</div>");
            $(id).prepend("<div>" + '<img id="img" src='+ msgs[i].avatar + '>' + " " + msgs[i].autor + ", Asunto:  " + msgs[i].titulo + "  <div>");
        }
        $(id).accordion({collapsible: true, active:false, heightStyle: "content"});
    };
});
