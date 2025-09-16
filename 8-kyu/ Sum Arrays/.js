
function sum(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((acc, num) => acc + num, 0);
}
