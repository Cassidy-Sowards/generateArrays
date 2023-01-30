generateArrays(4);

function generateArrays(index: number){
    console.log("num is " + index);
    let output: number[][] = [];
    for(let i = 0; i < index + 1; i ++){
        if(i > 0){
          output.push([i]); 
        }
    }



    console.log(output);


}
