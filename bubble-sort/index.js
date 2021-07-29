function bubbleSort(arr){
    for(let i=arr.length; i>0; i--){
        for(let j=0; j<i-1; j++)
        {
            if(arr[j] >= arr[j+1]){
                swapElements(arr, j, j+1);
            }   
        }       

    }
    console.log(arr);
}
function swapElements(arr, indx1, indx2){
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2]  = temp;
    console.log(arr, indx1, indx2)
}
bubbleSort([3,6,8,34,23,54,234,34,2334,23,23,43,3,2,1]);