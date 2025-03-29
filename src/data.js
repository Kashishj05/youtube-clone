export const API_KEY = "AIzaSyAZ-oKXxs0t5LPi8Ibg_jVJmiHaV0yKUgg"


export const value_converter = (value) =>{
    if(value >= 1000000){
        return Math.floor(value/1000000)+'M'
    }else if(value>= 1000){
        return Math.floor(value/1000)+'k';
    }
    else{
        return value;
    }

}