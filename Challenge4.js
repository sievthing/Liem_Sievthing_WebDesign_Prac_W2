function challenge4(text,char){
    let j=0;
    for(let i=0;i<text.length;i++){
        if(text[i]===char){
            j++;
        }
    }return j;
}

console.log(challenge4("abc",'d'));