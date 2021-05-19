
window.addEventListener("resize", () => {

	let windwidth = window.innerWidth;
	let listlist = document.querySelector('.info-bar');
	let info_item = document.querySelectorAll(".info-item");

	if (windwidth > 991) {

		listlist.classList.remove("visible");
		listlist.classList.remove("modifylist");

		for (var i = 0; i < info_item.length; i++) {
	
			if (info_item[i].classList.contains('visible')) {
				info_item[i].classList.remove('visible');
			}
			if(info_item[i].classList.contains('modify')) {
				info_item[i].classList.remove('modify')
			}
		}
	}
});

// variables

let toop = document.querySelector(".top");

let items = document.querySelector(".info-list");

let itemsul = Array.from(items.children);

let info = document.querySelector('.info-content');

let divinfo = Array.from(info.children);

let button = document.querySelector('.button');

let navbar = document.querySelector(".navbar");

let header = document.querySelector(".header");

let totalheight = header.clientHeight + navbar.clientHeight;


// add  and remove fixed and visibility classes from toop button and navbar  
window.addEventListener("scroll", () => {

	let winscrrol = window.pageYOffset;
	
	if(winscrrol >= 460) {

		navbar.classList.add("fixed");

		toop.classList.add("visibility");	

	} else if (winscrrol < 460) {

		navbar.classList.remove("fixed");

		toop.classList.remove("visibility");

	} 
});


// scroll to top on click in button 
toop.addEventListener('click', () => {

	// window.scrollTo(0, 0);
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});

});

//  display item in menu bar 
button.addEventListener('click', () => {

	let info_bar = document.querySelectorAll('.info-item');
	let list = document.getElementById('info-content');

	list.classList.toggle('visible');
	list.classList.add('modifylist');
	
	for (var i = 0; i < info_bar.length; i++) {
		info_bar[i].classList.add('visible');
		info_bar[i].classList.add('modify');
	}

	info_bar.forEach( item => {
		item.addEventListener("click", () => { 
				list.classList.remove('visible');
		});
	});
});

itemsul.forEach((item, index) => {

	item.addEventListener('click', function () {

	let infocontent = document.querySelector(".info-content div");
	let allselecteditem = itemsul.filter(selecteditem => selecteditem.classList.contains('active'));
	
	allselecteditem.forEach(selecteditem => { 
		selecteditem.classList.remove('active'); 
	});

	ddddd(divinfo);
	
	item.classList.add('active');

	divinfo[index].classList.remove('hidden');
	divinfo[index].classList.add('visible');
	divinfo[index].classList.add(item.dataset.class);
	
	});
});

function ddddd (divinfos) {
	
	let alldivinfo =  divinfos.filter(divinfox => divinfox.classList.contains('visible'));
	
	alldivinfo.forEach(divvisible => { 
		divvisible.classList.remove('visible');
		divvisible.classList.add('hidden');	
	});
}
