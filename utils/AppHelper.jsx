export const copyToClipBoard = async (copyText) => {
  try {
    await navigator.clipboard.writeText(copyText);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
