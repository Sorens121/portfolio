// change active class on click
function onClick(e) {
    let elements = document.querySelector('#navlist a.active');
    if(elements !== null){
        elements.classList.remove('active');
    }
    e.target.className ='active';
}

let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

console.log(`Width: ${w}, Height: ${h}`);
// change navigation on scroll
if(w > 768){
    window.addEventListener('scroll', event => {
        let nav = document.querySelector('.navheader');
    
        (window.scrollY >= 40) ? nav.classList.add('scroll') : nav.classList.remove('scroll');
        //let scrollval = window.scrollY;
        //console.log(scrollval);
    });
    
    // active navigation on scroll
    window.addEventListener('scroll', event => {
        let navigationLinks = document.querySelectorAll('nav ul li a');
        let fromTop = window.scrollY;
    
        navigationLinks.forEach(link => {
            let section = document.querySelector(link.hash);
    
            // console.log("scrollY: "+fromTop)
            // console.log("offsetTop:"+section.offsetTop);
            // console.log("offsetHeight: "+section.offsetHeight);
    
            if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
}

// when menu-toggle is activated in small screen devices
function onMenuclick() {
    let menu = document.querySelector('.menu-toggle');
    //console.log('Menu button pressed');
    menu.classList.toggle('active');
    let nav = document.querySelector('.nav-scroll');
    nav.classList.toggle('active');
}
// skills animation using jQuery
jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});

// Modal
// getting all modal triggering elements
let porfolio_btn = document.querySelectorAll('.portfolioModal');

porfolio_btn.forEach(function(e) {
    e.onclick = function() {
        let modal = e.getAttribute('data-toggle');
        console.log(modal);
        document.getElementById(modal).style.display = 'block';
    };
});

// getting all close elements
let close_btn = document.querySelectorAll('.close');

close_btn.forEach(function(e) {
    e.onclick = function() {
        let modal = e.closest('.modal').style.display = 'none';
    }
});

// when clicked outside
window.onclick = function(e) {
    if(e.target.className === 'modal') {
        e.target.style.display = 'none';
    }
};
/*
let modals = document.querySelectorAll('.modal');
//console.log(modals);

for(let i = 0; i < close_btn.length; i++){
    close_btn[i].onclick = function() {
        let modal = document.getElementsByClassName('modal')[i].id;
        console.log(modal);
        document.getElementById(modal).style.display ='none';
    }
    
}
*/
// modalBtn.addEventListener('click', openModal);

// function openModal() {
//     modal.style.display = 'block';
// }

// closeBtn.addEventListener('click', closeModal);

// function closeModal() {
//     modal.style.display = 'none';
// }

// Outside click
// window.addEventListener('click', clickOutside);

// function clickOutside(e) {
//     if(e.target == modal)
//         modal.style.display = 'none';
// }

