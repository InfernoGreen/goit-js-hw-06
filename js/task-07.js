const fontSizeControl = document.getElementById('font-size-control');
    const textElement = document.getElementById('text');

    fontSizeControl.addEventListener('input', () => {
      const fontSize = fontSizeControl.value + 'px';
      textElement.style.fontSize = fontSize;
    });