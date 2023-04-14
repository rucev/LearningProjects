const fav = document.querySelector('.fav-button');
const like = document.querySelector('.like-button');



const fill = (item) => {
  item.classList.add('filled')
  if(item === fav) {
    const pathList = document.querySelectorAll('.fav-button > path');
    pathList.forEach(path => path.setAttribute('d', 'm233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z'));
  }
  if(item === like) {
    const pathList = document.querySelectorAll('.like-button > path');
    pathList.forEach(path => path.setAttribute('d', 'm480 935-41-37q-106-97-175-167.5t-110-126Q113 549 96.5 504T80 413q0-90 60.5-150.5T290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.5T880 413q0 46-16.5 91T806 604.5q-41 55.5-110 126T521 898l-41 37Z'));
  }
};

const unfill = (item) => {
  item.classList.remove('filled');
  if(item === fav) {
    const pathList = document.querySelectorAll('.fav-button > path');
    pathList.forEach(path => path.setAttribute('d', 'm323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z'));
  }
  if(item === like) {
    const pathList = document.querySelectorAll('.like-button > path');
    pathList.forEach(path => path.setAttribute('d', 'm480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z'));
  }
}

const press = (item) => {
  item.classList.contains('filled') ? unfill(item) : fill(item)
}

fav.addEventListener('click', () => press(fav))

like.addEventListener('click', () => press(like))

