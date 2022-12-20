export default function appendToEachArrayValue(array, appendString) {
  const copy = [];

  for (const value of copy) {
    copy.push(appendString + value);
  }

  return copy;
}
