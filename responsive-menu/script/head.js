 $(document).ready(function(e) {
  var window_width=$( window ).width();
 	var html="<a id='pull' href='javascript:void(0)'>"+'Menu'+"<img src='images/menu.png'/>"+"</a>";
    html+="<ul class='menu_ul'>";
	html+="<li class='menu_li'>"+"<a class='menu-link' href='javascript:void(0)'>"+'products'+"</a>";
	html+="<div class='menu-div'>"+"<div class='submenu-left'>"+"<h4>"+"Learning and Games"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Catch The Bullet"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Snoopy Doo"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Scooby Doo"+"</a>"+"</li>"+"</ul>"+"</div>"
	     +"<div class='submenu-middle'>"+"<h4>"+"Playing Games"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Restore The Bullet"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Popeye"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Energy resources"+"</a>"+"</li>"+"</ul>"+"</div>"
	     +"<div class='submenu-right'>"+"<h4>"+"Teaching"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Improve Air Quality"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Warranty"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Registration"+"</a>"+"</li>"+"</ul>"+"</div>"
	    +"</div>"+"</li>";
	html+="<li class='menu_li'>"+"<a class='menu-link' href='javascript:void(0)'>"+'downloads'+"</a>";
	html+="<div class='menu-div'>"+"<div class='submenu-left'>"+"<h4>"+"Gadget Finder"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Troubleshooting"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Tax Credit"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Owner's Guides"+"</a>"+"</li>"+"</ul>"+"</div>"
	     +"<div class='submenu-middle'>"+"<h4>"+"Packaged Games"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Thermal Systems"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Packaged systems"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Gadgetted Systems"+"</a>"+"</li>"+"</ul>"+"</div>"
	     +"<div class='submenu-right'>"+"<h4>"+"Learning Games"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Fires"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Refridgerators"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Heating and Cooling"+"</a>"+"</li>"+"</ul>"+"</div>"
	    +"</div>"+"</li>";
	html+="<li class='menu_li'>"+"<a class='menu-link' href='javascript:void(0)'>"+'applications'+"</a>";
	html+="<div class='menu-div'>"+"<div class='submenu-left'>"+"<h4>"+"utilities"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Catch The Bullet"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Snoopy Doo"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Scooby Doo"+"</a>"+"</li>"+"</ul>"+"</div>"
	     +"<div class='submenu-middle'>"+"<h4>"+"Playing Games"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Catch The Bullet"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Snoopy Doo"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Scooby Doo"+"</a>"+"</li>"+"</ul>"+"</div>"
	     +"<div class='submenu-right'>"+"<h4>"+"Learning Games"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Catch The Bullet"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Snoopy Doo"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Scooby Doo"+"</a>"+"</li>"+"</ul>"+"</div>"
	    +"</div>"+"</li>";
	html+="<li class='menu_li'>"+"<a class='menu-link' href='javascript:void(0)'>"+'projects'+"</a>";
	html+="<div class='menu-div'>"+"<div class='submenu-left'>"+"<h4>"+"Red Cross"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Safety Measures"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Cross Check"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Prevention"+"</a>"+"</li>"+"</ul>"+"</div>"
	     +"<div class='submenu-middle'>"+"<h4>"+"Hazards"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Dangers"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Preoccupations"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Me and You"+"</a>"+"</li>"+"</ul>"+"</div>"
	     +"<div class='submenu-right'>"+"<h4>"+"Learning Games"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Catch The Bullet"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Snoopy Doo"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Scooby Doo"+"</a>"+"</li>"+"</ul>"+"</div>"
	    +"</div>"+"</li>";
	html+="<li class='menu_li'>"+"<a class='menu-link' href='javascript:void(0)'>"+'freeware'+"</a>";
	html+="<div class='menu-div'>"+"<div class='submenu-left'>"+"<h4>"+"Green Tree Express"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Catch The Bullet"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Snoopy Doo"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Scooby Doo"+"</a>"+"</li>"+"</ul>"+"</div>"
	     +"<div class='submenu-middle'>"+"<h4>"+"Playing Games"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Catch The Bullet"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Snoopy Doo"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Scooby Doo"+"</a>"+"</li>"+"</ul>"+"</div>"
	     +"<div class='submenu-right'>"+"<h4>"+"Learning Games"+"</h4>"+"<ul class='sub-menu'>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Glossary"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"Savings"+"</a>"+"</li>"+"<li class='sub-li'>"+"<a href='javascript:void(0)'>"+"rating"+"</a>"+"</li>"+"</ul>"+"</div>"
	    +"</div>"+"</li>";
	html+="</ul>";
	
	$("header").append(html);
	
	$(".menu-link").on('mouseover',function(){
	$(".menu-link").removeClass("active");
	$(".menu_li").removeClass("active");
	$(".menu-div").css("display","none");
    if($(this).next().css("display")=="none")
    $(this).next().css("display","block");
    else
    $(this).next().css("display","none");
    $(this).addClass("active");
    if(window_width<=640)
    $(this).parent().addClass("active");
	});
	var height1=$("header").height();
       var height2=$(".menu-div").height();
       req_height=height1+height2;
       console.log(window_width);
	$(document).bind('mousemove',function(e){ 
       //console.log("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY);
       //console.log(e.pageY);
       if(e.pageY>675&&window_width<=640)
       {
       $(".menu-div").css("display","none");
       $(".menu-link").removeClass("active");
       $(".menu_li").removeClass("active");
       $(".sub-menu").css("display","none");
       }
        if(req_height<e.pageY&&window_width>640)
       {
       $(".menu-div").css("display","none");
       $(".menu-link").removeClass("active");
       $(".menu_li").removeClass("active");
       }     
    });
    
    $(".menu-div h4").each(function(){
    $(this).click(function(event){
     if($(this).css('cursor')=="pointer")
    {
    	 event.preventDefault();
    	$(".sub-menu").css("display","none");
    	/*if($(this).next().css("display")=="none"&&count==0)
    	{
    	$(this).next().slideDown();
    	count++;
        }
        else
        	$(this).next().slideUp();*/
    	if($(this).next().css("display")=="none")
    		$(this).next().css("display","block");
    	else
    		$(this).next().css("display","none");
    }
    });
   });
    $("#pull img").click(function(){
    	$(".menu_ul").slideToggle();
      		$(".menu-div").css("display","none");
      		 $(".menu-link").removeClass("active");
            $(".menu_li").removeClass("active");

    })
	});