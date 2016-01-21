var countUpTo = function(goal, step) {
  var answer = "";
  for(var i=1; i <= goal; i++) {
    answer = answer + i + ",";
  }
  answer = answer.slice(0, answer.length-1);
  return answer;
}
