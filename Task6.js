/**
 * Task 6: Return the file extension or "false" if no extension
 */
function getFileExtension(file) {
  return file.substring(str.lastIndexOf('.' +1 ,str.length));
}
console.log(getFileExtension('mozio.png'));
