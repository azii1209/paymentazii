document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button[data-copy]');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const text = button.getAttribute('data-copy');
      navigator.clipboard.writeText(text).then(() => {
        alert(`Nomor ${text} berhasil disalin!`);
      });
    });
  });
});
