"use strict";




//Enable tooltips everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})


/* Vanilla RSS - https://github.com/sdepold/vanilla-rss */

	const rss = new RSS(
	    document.querySelector("#rss-feeds"),
	    //Change this to your own rss feeds
        "https://feeds.feedburner.com/TechCrunch/startups",
	    {
		     // how many entries do you want?
		    // default: 4
		    // valid values: any integer
		    limit: 3,
		    
		    
		    // will request the API via https
			// default: false
			// valid values: false, true
			ssl: true,
		  
			 // outer template for the html transformation
			// default: "<ul>{entries}</ul>"
			// valid values: any string
			layoutTemplate: "<div class='items'>{entries}</div>",
		
			// inner template for each entry
			// default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
			// valid values: any string
			entryTemplate: '<div class="item"><h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fas fa-external-link-alt"></i>Read more</a></div></div>',
		    
	    }
	);
	rss.render();

    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "nfolkman", { responsive: true });



/* ----- Contact Form ----- */

	 (function ($) {
		"use strict";
  
		
		/*==================================================================
		[ Validate ]*/
		var name = $('.validate-input input[name="name"]');
		var email = $('.validate-input input[name="email"]');
		var subject = $('.validate-input input[name="subject"]');
		var message = $('.validate-input textarea[name="message"]');
  
  
		$('.validate-form').on('submit',function(){
			 var check = true;
  
			 if($(name).val().trim() == ''){
				  showValidate(name);
				  check=false;
			 }
  
			 if($(subject).val().trim() == ''){
				  showValidate(subject);
				  check=false;
			 }
  
  
			 if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
				  showValidate(email);
				  check=false;
			 }
  
			 if($(message).val().trim() == ''){
				  showValidate(message);
				  check=false;
			 }
  
			 return check;
		});
  
  
		$('.validate-form .input1').each(function(){
			 $(this).focus(function(){
				 hideValidate(this);
			});
		});
  
		function showValidate(input) {
			 var thisAlert = $(input).parent();
  
			 $(thisAlert).addClass('alert-validate');
		}
  
		function hideValidate(input) {
			 var thisAlert = $(input).parent();
  
			 $(thisAlert).removeClass('alert-validate');
		}
		
		
  
  })(jQuery);
    