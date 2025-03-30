function updateHeader() {
  const headerPreview = document.getElementById('headerPreview');
  const bgColor = document.getElementById('bgColor').value;
  const headerText = document.getElementById('headerText').value;
  const textColor = document.getElementById('textColor').value;
  const fontSize = document.getElementById('fontSize').value + 'px';
  const borderStyle = document.getElementById('borderStyle').value;
  const borderWidth = document.getElementById('borderWidth').value + 'px';
  const borderColor = document.getElementById('borderColor').value;
  const padding = document.getElementById('padding').value + 'px';
  const imageInput = document.getElementById('imageInput');
  const imageSize = document.getElementById('imageSize').value + 'px';
  
  headerPreview.style.backgroundColor = bgColor;
  headerPreview.style.border = `${borderWidth} ${borderStyle} ${borderColor}`;
  headerPreview.style.padding = padding;
  headerPreview.innerHTML = `<h3 style="color: ${textColor}; font-size: ${fontSize};">${headerText}</h3>`;
  
  if (imageInput.files.length > 0) {
      const file = imageInput.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.style.width = imageSize;
          img.style.marginLeft = '10px';
          headerPreview.appendChild(img);
      }
      reader.readAsDataURL(file);
  }
}

document.querySelectorAll('.form-control').forEach(input => {
  input.addEventListener('input', updateHeader);
});