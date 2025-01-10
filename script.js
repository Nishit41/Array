const secondLargestElement=(arr) => {
  //brute force
  //copyArr
//   let copyArr=[];
//   let largestElement = Math.max(...arr);
//   for(let i=0; i<arr.length; i++){
//      if(arr[i] !== largestElement){
//         copyArr.push(arr[i]);
//      }
//   }; 
   
//   //Find Largest in this copyArr
//   let secondLargestElement = Math.max(...copyArr);
//   console.log("secondLargest=>",secondLargestElement);
//   return secondLargestElement;


//secondLargest without bruteforce
 let largestElement = -Infinity;
 let secondLargest = -Infinity;
 for(let num of arr){
    if(num > largestElement){
        secondLargest = largestElement;
        largestElement = num;
    }
    else if(num >secondLargest && num < largestElement ){
        secondLargest = num;
    }
 }

 console.log("2ndLArgest",secondLargest)
}
const arr = [12, 35, 1, 10, 34, 1]
secondLargestElement(arr)
