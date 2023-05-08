
$(document).ready(function(){
		//FOR THE INPUT SEARCH BAR
		const IContainer = document.querySelector('.icon-container');
		const hidemenu = document.querySelector('.hide-menu-container');
		const showmenu = document.querySelector('.show-menu-container');
		$("#hide-menu").on("click",function(){
			$('.icon-container').addClass('show');
			hidemenu.style.display="none";
			
		})
		$("#show-menu").on("click",function(){
				$('.icon-container').removeClass('show');
				hidemenu.style.display="block";
		})

		var value = $("#myinput").val().toLowerCase();
	
		$("#card div").filter(function(){
			$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
		});
		$('span.clear').on("click",function(){
			var url = window.location.pathname;
			if(document.getElementById('myinput').value=='')
				{
					alert("Search Box is Clear");
				}
			else{
				console.log("clicked");
				document.getElementById('myinput').value='';
				sessionStorage.setItem("search_val",'');
				e = $.Event('keyup');
				e.keyCode= 13; // enter
				$('#myinput').trigger(e);
			}		
		});
		//FOR THE BUTTONS
		$('div.footer-btn.btn-1').on("click",function(){
			var url = window.location.pathname;
			var filename = url.substring(url.lastIndexOf('/')+1);
			if(filename!="index.html"){
					history.back();
					document.getElementById('myinput').value='';
					sessionStorage.setItem("search_val",'');
				}
		});
		//FOR THE BUTTONS
		$('div.footer-btn.btn-2').on("click",function(){
			var url = window.location.pathname;
			var filename = url.substring(url.lastIndexOf('/')+1);
			if(filename!="index.html"){
				location.replace("../index.html");
				document.getElementById('myinput').value='';
				sessionStorage.setItem("search_val",'');
			}		
		});
		//HOME 
		$('div.section-title').on("click",function(){
			var url = window.location.pathname;
			var filename = url.substring(url.lastIndexOf('/')+1);
			if(filename!="index.html"){
				location.replace("../index.html");
				document.getElementById('myinput').value='';
				sessionStorage.setItem("search_val",'');
			}										
		});
	$('a.calc-btn').on("click",function(){
			const sidenav = document.querySelector('.sidenav');
			if(sidenav.style.display== "none"){
				sidenav.style.display= "block";
				$("div.sidenav").addClass('open');
			}
			else{
				sidenav.style.display= "none";
				$("div.sidenav").removeClass('open');
			}
	});
	$('a.home-btn').on("click",function(){
			var url = window.location.pathname;
			var filename = url.substring(url.lastIndexOf('/')+1);
			if(filename!="index.html"){
				location.replace("../index.html");
				document.getElementById('myinput').value='';
				sessionStorage.setItem("search_val",'');
			}										
		});
	$('a.return-btn').on("click",function(){
			var url = window.location.pathname;
			var filename = url.substring(url.lastIndexOf('/')+1);
			if(filename!="index.html"){
					history.back();
					document.getElementById('myinput').value='';
					sessionStorage.setItem("search_val",'');
				}
		});
	$('a.close-btn').on("click",function(){
			const sidenav = document.querySelector('.sidenav');
			if(sidenav.style.display== "none"){
				sidenav.style.display= "block";
				$("div.sidenav").addClass('open');
			}
			if(sidenav.style.display=="block"){
				sidenav.style.display= "none";
				$("div.sidenav").removeClass('open');
			}
	})
    $('a.close-btn1').on("click",function(){
			const sidenav_vid = document.querySelector('.sidenav_vid');
            const hidemenu2 = document.querySelector('.hide-menu-container');
			if(sidenav_vid.style.display== "none"){
//                 $('body').css('overflow','auto');
				sidenav_vid.style.display= "block";
				$("div.sidenav_vid").addClass('open');
//                window.location.reload();
			}
			if(sidenav_vid.style.display=="block"){
                 $('body').css('overflow','auto');
				sidenav_vid.style.display= "none";
				$("div.sidenav_vid").removeClass('open');
                hidemenu2.style.display="block";
			}
	})
});

function searchValue(){
	var searchVal=document.getElementById("myinput").value;
	sessionStorage.setItem("search_val",searchVal);
}


//FOR EXCLUSIVE OPTION FOR CAPUCINO SHAPE AND STUDIO COL CLASS
$(document).ready(function(){
  if(window.innerWidth < 320){
    $('#col').removeClass('col');
  }
});

$(window).resize(function(){
  if(window.innerWidth < 320){
    $('#col').removeClass('col');
  }
});



$(document).ready(function(){
  if(window.innerWidth > 320){
    $('#col').addClass('col');
  }
});

$(window).resize(function(){
  if(window.innerWidth > 320){
    $('#col').addClass('col');
  }
});
