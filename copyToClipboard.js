function createTextArea(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  return textarea;
}

function selectText(textarea) {
  if (navigator.userAgent.match(/ipad|iphone/i)) {
    const range = document.createRange();
    range.selectNodeContents(textarea);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    textarea.setSelectionRange(0, 999999);
  } else {
    textarea.select();
  }
}

function copyToClipboard(text) {
  const textarea = createTextArea(text);
  selectText(textarea);
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

window.copyToClipboard = copyToClipboard;
