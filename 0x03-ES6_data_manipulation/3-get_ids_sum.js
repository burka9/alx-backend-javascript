export default function getStudentIdsSum(array) {
  return array instanceof Array ? array.reduce((total, id) => total + id) : 0;
}
