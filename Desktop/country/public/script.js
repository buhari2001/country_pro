var inp=document.getElementById("p1");
var btn=document.getElementById("p2");
//seperating
var headlogo=document.getElementById('p10');
var yname=document.getElementById("p3");
var continent=document.getElementById("p4");
var currency=document.getElementById("p5");
var population=document.getElementById("p6");
var timez=document.getElementById("p7");
var capital=document.getElementById("p9");
var imageElement = document.getElementById('myImage');
var maplink=document.getElementById("map-link");
var clogo=document.getElementById("imgm");
function convertPopulationToWords(population) {
    const suffixes = ["", "thousand", "million", "billion", "trillion"];
  
    if (population < 1000) {
      return population.toString();
    }
  
    const suffixIndex = Math.floor(Math.log10(population) / 3);
    const suffix = suffixes[suffixIndex];
  
    const divider = Math.pow(10, suffixIndex * 3);
    const convertedValue = (population / divider).toFixed(1);
  
    return convertedValue + " " + suffix;
  }

btn.addEventListener('click',()=>{
    fetch(`https://restcountries.com/v3.1/name/`+inp.value)
    .then(result=>result.json())
    .then(data=>{
       // var cname=data['0']['name']['common']
        var conti=data['0']['continents']
        var curre=data['0']['currencies'][Object.keys(data['0']['currencies'])]['name']
        var popu=data['0']['population']
        var timezo=data['0']['timezones']
        var xcap=data['0']['capital']
        var imageUrl =data['0']['flags']['png']
        var nam=data['0']['name']['common']
        var mapp=data['0']['maps']['googleMaps']
        var logoc=data['0']['coatOfArms']['png']
        var logohead=data['0']['flags']['png']


        //yname.innerHtml=`name :${cname}`
        continent.innerHTML=`Continent : ${conti}`
        currency.innerHTML= `Currency : ${curre}`
        population.innerHTML=`Population : ${convertPopulationToWords(popu)}`
        timez.innerHTML=`Timezone : ${timezo}`
        capital.innerHTML=`Capital :${xcap}`
        imageElement.src = imageUrl;
        yname.innerHTML=`Name : ${nam}`
        maplink.href=mapp;
        clogo.src=logoc;
        headlogo.src=logohead;
    })
    .catch(err=>{
        document.getElementById("error").innerHTML="*Invalid Input"

        setTimeout(() => {
            document.getElementById("error").innerHTML="";
        }, 4000);
    })
})