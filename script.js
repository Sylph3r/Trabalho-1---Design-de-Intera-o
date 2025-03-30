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
  const imageInputBefore = document.getElementById('imageInputBefore');
  const imageInputAfter = document.getElementById('imageInputAfter');
  const imageSizeBefore = document.getElementById('imageSizeBefore').value + 'px';
  const imageSizeAfter = document.getElementById('imageSizeAfter').value + 'px';

  headerPreview.style.backgroundColor = bgColor;
  headerPreview.style.border = `${borderWidth} ${borderStyle} ${borderColor}`;
  headerPreview.style.padding = padding;
  
  headerPreview.innerHTML = "";
  const container = document.createElement('div');
  container.style.display = "flex";
  container.style.alignItems = "center";
  container.style.gap = "10px";

  const imgBefore = document.createElement('img');
  imgBefore.style.display = "none";

  const textElement = document.createElement('h3');
  textElement.style.color = textColor;
  textElement.style.fontSize = fontSize;
  textElement.textContent = headerText;

  const imgAfter = document.createElement('img');
  imgAfter.style.display = "none";

  container.appendChild(imgBefore);
  container.appendChild(textElement);
  container.appendChild(imgAfter);
  headerPreview.appendChild(container);

  if (imageInputBefore.files.length > 0) {
      const file = imageInputBefore.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
          imgBefore.src = e.target.result;
          imgBefore.style.width = imageSizeBefore;
          imgBefore.style.display = "block";
      };
      reader.readAsDataURL(file);
  }

  if (imageInputAfter.files.length > 0) {
      const file = imageInputAfter.files[0];
      const reader = new FileReader();
      reader.onload = function (e) {
          imgAfter.src = e.target.result;
          imgAfter.style.width = imageSizeAfter;
          imgAfter.style.display = "block";
      };
      reader.readAsDataURL(file);
  }
}

document.querySelectorAll('.form-control').forEach(input => {
  input.addEventListener('input', updateHeader);
});