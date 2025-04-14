export default function createIteratorObject(report) {
  let all = [];
  for (const department of Object.values(report.allEmployees)) {
    all = [...all, ...department];
  }
  return all[Symbol.iterator]();
}
