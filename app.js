/*******Quest. 1 ********/
function pow(val,pwr){
    return val ** pwr;
}
var value = prompt("Enter number");
var power = prompt("Enter power value");
alert(value + " raised to " + power + " = " + pow(value,power) );

/*******Quest. 2 ********/
function isLeapYear(year){
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
        return year + " is leap year";
    }else{
        return year + " is not leap year";
    }
}
 var year = prompt("Enter a year to check if its leap year");
alert(isLeapYear(year));

/*******Quest. 3 ********/
//method 1
function areaOfTriangle(a, b, c){
    function calcS(){
        return (a + b + c)/2; 
    }
    var s = calcS();
    return s*(s-a)*(s-b)*(s-c);
}

alert("Area of triangle is " + areaOfTriangle(4,5,5))

//method 2
function calcS(x, y, z){
    return (x + y + z)/2; 
}
function areaOfTriangle(a, b, c){
    var s = calcS(a, b, c);
    return s*(s-a)*(s-b)*(s-c);
}

alert("Area of triangle is " + areaOfTriangle(4,5,5))

/*******Quest. 4 ********/

function average(sub1, sub2, sub3){
    return (sub1 + sub2 + sub3)/3;
}
function perc(sub1, sub2, sub3){
    return ((sub1 + sub2 + sub3)/300)*100;
}
function mainFunction(sub1, sub2, sub3){
    alert("Average = " + average(sub1,sub2,sub3).toFixed(2) + "\n Percentage = " + perc(sub1,sub2,sub3).toFixed(2));
}
var subject1 = +prompt("Enter marks obtained in subject 1 out of 100");
var subject2 = +prompt("Enter marks obtained in subject 1 out of 100");
var subject3 = +prompt("Enter marks obtained in subject 1 out of 100");
mainFunction(subject1, subject2, subject3);

/*******Quest. 5 ********/
var str = prompt("Enter any string");
var char = prompt("Enter the char you want to search");
function indexof(char){
    var i = 0;
    while(i < str.length){
        if(str.charAt(i) === char){
            return i;
            break;
        }
        i++;
    }if(i === str.length){
        return -1;
    }
}

console.log(char + " is found at " + indexof(char));

// method 2
var str = prompt("Enter any string");
var char = prompt("Enter the char you want to search");
function indexof(char){
    var i = 0;
    while(i < str.length){
        switch(str[i]){
            case char:
                return i;
                break;
        }
        i++;
    }switch(i){
        case str.length:
        return -1;
    }
}
console.log(char + " is found at " + indexof(char));

/*******Quest. 6 ********/
function deleteVowel(sentence){
    var newSentence = "";
    var i = 0;
    while(i < sentence.length){
        switch(sentence[i]){
            case 'a':
                newSentence[i] +=  "";
                break;
            case 'e':
                newSentence[i] +=  "";
                break;
            case 'i':
                newSentence[i] +=  "";
                break;
            case 'o':
                newSentence[i] +=  "";
                break;
            case 'u':
                newSentence[i] +=  "";
                break;
            default:
                    newSentence += sentence[i];
        }
        
        i++;
    }
    return newSentence;
}
var sentence = prompt("Enter a sentence");
console.log(deleteVowel(sentence));

//method 2
function deleteVowel(sentence){
    var newSentence = "";
    var i = 0;
    while(i < sentence.length){
        if(sentence[i] === 'a' || sentence[i] === 'A' 
        || sentence[i] === 'e' || sentence[i] === 'E'
        || sentence[i] === 'i' || sentence[i] === 'I'
        || sentence[i] === 'o' || sentence[i] === 'O'
        || sentence[i] === 'u' || sentence[i] === 'U'){
           newSentence[i] +=  "";
        }
        else{
            newSentence += sentence[i];
        }
        i++;
    }
    return newSentence;
}
var sentence = prompt("Enter a sentence");
console.log(deleteVowel(sentence));

/*******Quest. 7 ********/
function countVowelPair(char){
        switch(char){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                return true;
            default:
                return false;
        }
    }
    var text = prompt("Enter a sentence to count vowel in succession")
    var i = 0, count = 0;
    while(i < text.length - 1){
        var char = text[i];
        var next = text[i + 1];
        if(countVowelPair(char)
         && countVowelPair(next)){
            count++;
        }
        i++;
    }
    console.log(count);



/*******Quest. 8 ********/
function meter(distance){
    return distance * 1000;
}
function feet(distance){
    return distance * 3281;
}
function inches(distance){
    return distance * 39370;
}
function centimeter(distance){
    return distance * 100000;
}

var distance = +prompt("Enter distance in km");
console.log("distance in meter " + meter(distance)+ " m");
console.log("distance in feet " + feet(distance) + " ft");
console.log("distance in inches " + inches(distance) + " inchs");
console.log("distance in centimeter " + centimeter(distance) + " cm");

/*******Quest. 9 ********/
function calcPay(hours){
        if(hours >= 40){
            return (hours - 40) * 12;
    }else{
                return "not worked over time" 
    }
}
var hours = +prompt("Enter number of hours you worked");
alert("Total = " + calcPay(hours));

/*******Quest. 10 ********/
function withdraw(amount){
    // var hundred = 0, fifty = 0, ten = 0;
    console.log(Math.floor(amount/100));
    console.log(Math.floor((amount%100)/50));
    console.log(Math.floor(((amount%100)%50)/10));
}

withdraw(prompt("Enter amount"));