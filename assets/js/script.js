// Modal
const myModal = document.getElementById('modalBox')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
});

// Headline
function changeHeadline(){
  let userInput = document.getElementById('news-headline').value;
  document.getElementById('headline').innerHTML = userInput;
}