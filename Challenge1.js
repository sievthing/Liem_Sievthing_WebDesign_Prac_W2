function challenge1(width, height) {
    let rectangleString = '';
    // Your code
    for(let i=0;i<height;i++){
        for(let i=0;i<width;i++){
            rectangleString+='*';
        }rectangleString+='\n';
    }
    return rectangleString;
}


console.log(challenge1(5,4));
