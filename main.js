// JavaScript Document

let section = document.querySelectorAll(
'section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll=()=>{
	section.forEach(sec=>{
		let top = window.scrollY;
		 
		let height = sec.offsetHeight;
		
		let offset = sec.offsetTop - 100;
		
		let id = sec.getAttribute('id');
		
		if(top >= offset && top < offset + height){
			navlinks.forEach(links=>{
				links.classList.remove('active');
				
				document.querySelector('header nav a[href*='+id+']').classList.add('active');
			})
		}
	})
}