function printResult(resultObj: { val: number; timestamp: Date }) {
  console.log(resultObj.val + "" + resultObj.timestamp);
}

printResult({ val: 0, timestamp: new Date() });
