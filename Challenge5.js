function challenge5(text){
    let space=0;
    for(let i=0;i<text.length;i++){
        if(text[i]===' '){
            space++;
        }
    }return space;
}

console.log(challenge5("this is java script"));