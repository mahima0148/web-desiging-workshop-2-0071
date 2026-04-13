document cument.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    console.log('Navigation clicked:', link.textContent);
  });
});