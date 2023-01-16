export default function showAdd() {
    const addLink = document.getElementById('add-link');
    const listSection = document.querySelector('.list-section');
    const addSection = document.querySelector('.add-section');
    const contactSection = document.querySelector('.contact-section');
  
    addLink.addEventListener('click', () => {
      // document.getElementById('message').innerHTML = '';
      listSection.style.display = 'none';
      addSection.style.display = 'block';
      contactSection.style.display = 'none';
    });
  }