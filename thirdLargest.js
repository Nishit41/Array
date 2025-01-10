const findThirdLargest = (arr) =>{
    //bruteforce 
    let firstLargest = Math.max(...arr);
    let copyArr=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== firstLargest ){
            copyArr.push(arr[i]);
        }
    }

    let secondLargest = Math.max(...copyArr);
    let secondCopyArr=[];
    for(let i=0; i<copyArr.length; i++){    
       if(copyArr[i] !== secondLargest){
            secondCopyArr.push(copyArr[i]);
        }
    }

    let thirdLargest = Math.max(...secondCopyArr);
    console.log("thirdLargest",thirdLargest);
    // let thirdCopyArr = [];
    // for(let i=0; i<secondCopyArr.length; i++){    
    //    if(secondCopyArr[i] !== thirdLargest){
    //         secondCopyArr.push(copyArr[i]);
    //     }
    // }
}

findThirdLargest([5,10,20,15,8])