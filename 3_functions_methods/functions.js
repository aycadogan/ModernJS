greet();
greet();
greet();


// Function Expression

const speak = function(){
    console.log('good day!');
}

speak();
speak();
speak();

// Function Declaration

function greet(){
    console.log('hi!');
}

// Arguments & Parameters

const talk = function( name = 'ayca' , time = 'night'){
    console.log(`good ${time} ${name} `);
}

talk();
talk('luigi','morning');

// Returning Values

const calcArea = function(radius){
    return 3.14 * radius**2;
} 

const area = calcArea(5);
console.log(area);

const calcVol = function(area){

}

calcVol(area)