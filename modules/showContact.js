export default function showContact() {
    const contactLink = document.getElementById('contact-link');
    const listSection = document.querySelector('.list-section');
    const addSection = document.querySelector('.add-section');
    const contactSection = document.querySelector('.contact-section');
  
    contactLink.addEventListener('click', () => {
      listSection.style.display = 'none';
      addSection.style.display = 'none';
      contactSection.style.display = 'block';
    });
  }