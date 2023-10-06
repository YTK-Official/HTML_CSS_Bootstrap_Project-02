copyToClipboard = async (id) => {
  const textarea = document.getElementById(id);
  try {
    await navigator.clipboard.writeText(textarea.value);
    console.log('success');
  } catch (err) {
    console.error('Failed to copy!', err);
  }
};