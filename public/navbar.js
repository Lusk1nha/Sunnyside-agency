const btnNavbar = document.querySelector('.button--mobile')

btnNavbar.addEventListener('click', () => {
  const navbar = document.querySelector('.navbar')
  navbar.classList.toggle('mobile')
})