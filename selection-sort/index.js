function swapElements(arr, indx1, indx2){
    let temp = arr[indx1];
    arr[indx1] = arr[indx2];
    arr[indx2]  = temp;
    console.log(arr, indx1, indx2)
}

function selectionSort(arr){
    for(let i=0; i<arr.length; i++) {
        let index=i;
        let min= arr[i];
        for(let j=i+1; j<arr.length; j++){
            if(arr[j]<min){
                min = arr[j];
                index=j;
            }
        }
        swapElements(arr, i, index);
    }
    console.log(arr);
}
selectionSort([3,6,8,34,23,54,234,34,2334,23,23,43,3,2,1])