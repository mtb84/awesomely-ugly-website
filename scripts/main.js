// let button = document.querySelector('button');
//   button.addEventListener('click', function(event){
//       var image = document.getElementsByClassName('image');
//       if (image.src.match("https://i1.sndcdn.com/avatars-000117078572-q59edo-t500x500.jpg" )) {
//           image.src = 'https://i.pinimg.com/originals/05/1e/37/051e37662a8d8927fab62d790f3ae8bd.jpg';
//       } else {
//           image.src = "https://i1.sndcdn.com/avatars-000117078572-q59edo-t500x500.jpg";
//       }
//   });


  let swapButton = document.querySelector('button');
let image = document.querySelector('img');

swapButton.addEventListener('click', () => {
    image.src = 'https://i.pinimg.com/originals/05/1e/37/051e37662a8d8927fab62d790f3ae8bd.jpg';
})