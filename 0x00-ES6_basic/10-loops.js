export default function appendToEachArrayValue(array, appendString) {
  const copy = [...array];

  for (const [index, value] of copy.entries()) {
    copy[index] = appendString + value;
  }

  return copy;
}
