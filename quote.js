$(document).ready(function(){
	var quote;
	var author;
	function newQuote (){
		$.ajax({
			url: "https://api.forismatic.com/api/1.0/",
			jsonp: "jsonp",
			dataType: "jsonp",
			data: {
				method: "getQuote",
				lang: "en",
				format: "jsonp"
			},
			success: function(res){

				quote = res.quoteText;
				author = res.quoteAuthor;
				$("#quote").text(quote);
				if(author){
					$("#author").text("- " + author);
				}else{
					$("#author").text("unkown");
				}
			}

		});
	}

	$("#getQuote").on("click",function(event){
		event.preventDefault();
		newQuote();
	})

	$("#shareQuote").on("click", function(event){
		event.preventDefault();
		 window.open("http://twitter.com/intent/tweet?text=" + encodeURIComponent(quote + "-- " + author));
	})
})