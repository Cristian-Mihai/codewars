// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str){
  const strSplit = str.split('')
  const reversedArr = strSplit.reverse()
  return reversedArr.join('')
}

// :)