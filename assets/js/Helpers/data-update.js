

function updateCopyrightYear() {
    const currentYear = new Date().getFullYear(); // 2024
    const copyrightElement = document.querySelector('.footer');
  
    if (copyrightElement) {
      copyrightElement.textContent = `copyright ${currentYear}.`
    }
  }
  
  export default updateCopyrightYear