const rootElem = document.querySelector('#root');
const imgList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
const mediaPath = 'media/';
let imgIndex = 0;

const galleryContainer = document.createElement('div');
const galleryMain = document.createElement('div');
const ulElem = document.createElement('ul');

rootElem.append(galleryContainer);
galleryContainer.append(galleryMain);
galleryContainer.append(ulElem);

galleryContainer.classList.add('gallery-container');
galleryMain.classList.add('gallery_main');
ulElem.classList.add('gallery-points');

ulElem.append(...imgList.map((_, index) => {
	const elem = document.createElement('li');
	elem.addEventListener('click', event => {
		const liElem = event.target;
		const liList = [...liElem.parentNode.children];
		imgIndex = liList.indexOf(liElem);
		elem.innerText = liList.indexOf(liElem) + 1;
		render();
	});
	return elem;
}));

const render = () => {
	galleryMain.style.backgroundImage = `url('${mediaPath+imgList[imgIndex]}')`;
	const liList = document.querySelectorAll('.gallery-points li');
	liList.forEach(act => act.classList.remove('active'));
	liList[imgIndex].classList.add('active');

};
render();