let KMP = (S,T) => {
  let  i = 0,j = 0;
  let next= [T.length]
  console.log(next)
  next[0] = -1
  while( i < S.length && j < T.length){
      if(j === -1 || S[i] === T[j]){
          i++
          j++
      }else{         
          j = next[j]
          console.log(j)
      }
  }
  if( j === T.length){
      return i-j;
  }else{
      return -1    //没有
  }
}

console.log(KMP('gjiemqaznnnqaz','qaz'))