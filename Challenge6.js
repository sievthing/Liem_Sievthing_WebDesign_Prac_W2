function challenge6(votes){
    let A=0,B=0,C=0;

    if(votes.length==0){
        return"There is not vote yet";
    }

    for(let i=0;i<votes.length;i++){
        if(votes[i]==='A'){
            A++;
        }else if(votes[i]==='B'){
            B++;
        }else if(votes[i]==='C'){
            C++;
        }
    }

    if(A>B && A>C){
        return "A is the winner";
    }else if(B>A && B>C){
        return "B is the winner";
    }else if(C>A && C>B){
        return "C is the winner";
    }else if(A==B && A>C){
        return "A and B are both winners";
    }else if(A==C && A>B){
        return "A and C are both winners";
    }else if(B==C && B>A){
        return "B and C are both winners";
    }else{
        return "Win all three";
    }
}

console.log(challenge6(['A','B','A','C','A']));