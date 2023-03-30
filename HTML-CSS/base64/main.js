const file = document.querySelector('input');
const img = document.querySelector('img')

file.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const image = new FileReader();
  //image.onload = () => {
  image.addEventListener('load', () => {       
    const base64 = image.result;
    img.src = base64;
  });
  image.readAsDataURL(file)
});
