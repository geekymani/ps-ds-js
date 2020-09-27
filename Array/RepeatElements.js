let arr = [1,2,3,3,4,6,7,6,8];

function printRepeating(arr)  
    { 
        let count= {}; 
  
        console.log("Repeated elements are : "); 
        for (let i = 0; i < arr.length; i++)  
        { 
            if (count[arr[i]] == 1) 
                console.log(arr[i] + " "); 
            else
                if(!count[arr[i]]){
                    count[arr[i]] = 1;
                } else {
                    count[arr[i]] = count[arr[i]]++; 
                }
        } 
    } 


printRepeating(arr);