# Load local images with base64

```js
const file = document.querySelector('input');
const img = document.querySelector('img')

file.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const image = new FileReader();
  image.onload = () => {      
    const base64 = image.result;
    img.src = base64;
  };
  image.readAsDataURL(file)
});
```

## ...how does that work?

The [**input file**](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file), allows the user to select a file, or multiple files if the multiple attribute is included, using the built-in file selection UI of your operating system. When the user finishes selecting a file or files, the [**change**](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) event is fired. You can access the list of files from [**event.target.files**](https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications#accessing_selected_files_on_a_change_event), which is a FileList object. Each FileList item is a File object. Then, the [**file reader**](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) gets this files contents through [**reader.result**](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/result) and with [**load**](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/load_event)\* allows to put this data as the source of the img when the [**readAsDataURL**](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL) is done.


\* The difference between onload and onloadend is that the last one keeps going even if there's an error.