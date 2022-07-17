//Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
//that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

const min = function(list){
    list.sort((a,b)=>(a-b))
    return list[0];
}

const max = function(list){
    list.sort((a,b)=>(b-a))
    return list[0];
}

//OUTRA FORMA

const min = function(list){
    
    return Math.min(...list);
}

const max = function(list){
    
    return Math.max(...list);
}