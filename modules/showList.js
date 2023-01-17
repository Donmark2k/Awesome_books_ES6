export default function showList() {
  const listLink = document.getElementById('list-link');
  const listSection = document.querySelector('.list-section');
  const addSection = document.querySelector('.add-section');
  const contactSection = document.querySelector('.contact-section');

  listLink.addEventListener('click', () => {
    listSection.style.display = 'block';
    addSection.style.display = 'none';
    contactSection.style.display = 'none';
  });
}