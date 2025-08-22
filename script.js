document.addEventListener('DOMContentLoaded', () => {
  const button1 = document.getElementById('single-dog-button');
  const button2 = document.getElementById('multiple-dogs-button');
  const container1 = document.querySelector('.single-image-container');
  const container2 = document.querySelector('.multiple-image-container');

  async function getSingleDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    container1.classList.remove('hidden');
    container1.innerHTML = '';
    const img1 = document.createElement('img');
    img1.src = data.message;
    img1.alt = 'Random dog image';
    container1.appendChild(img1);
  }

  async function getMultipleDogImages() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/2');
    const data = await response.json();

    container2.classList.remove('hidden');
    container2.innerHTML = '';
    data.message.forEach((dogImage) => {
      const img2 = document.createElement('img');
      img2.src = dogImage;
      img2.alt = 'Random dog image';
      container2.appendChild(img2);
    });
  }

  button1.addEventListener('click', getSingleDogImage);
  button2.addEventListener('click', getMultipleDogImages);
});
