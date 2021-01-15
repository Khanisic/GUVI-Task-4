var request = new XMLHttpRequest;
request.open('GET', 'https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var readData = JSON.parse(this.response);

  //Question 1

    const area = readData.filter((x) =>{
        return x.region === "Asia";
    });
    console.log(area);

  //Question 2

const pop = readData.filter((x) =>{
    return x.population  < 200000;
});
console.log(pop);

 // Question 3

const details = readData.forEach(i => {
    console.log(`${i.name} ${i.capital} ${i.flag}`);
});


//Question 4

const population = readData.reduce((acc,currentval) =>{
    return acc + currentval.population;
},0);
console.log(population);


 //Question 5


const US = readData.filter((x) =>{
    return x.currencies[0].code  == 'USD';
});
console.log(US);







}

