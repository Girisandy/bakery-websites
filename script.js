let navbar=document.querySelector('nav')
document.querySelector('#menu-btn').onclick = () =>{
	navbar.classList.toggle('active');
}
window .onscroll = () =>{
	navbar.classList.remove('active');
}