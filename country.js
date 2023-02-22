class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }

    DisplayColors(){
        //Where all of the dom changes happen
        //this.name for accessing property
        //languagenode.innertext=
        let nameNode=document.querySelector("#CountryName")
        nameNode.innerText=this.name;
        let languageNode=document.querySelector("#OfficialLanguage")
        languageNode.innerText=this.lang;
        let greetingNode=document.querySelector("#HelloWorld")
        greetingNode.innerText=this.greeting;
        // let colorNode=document.querySelector("#color1")
        // colorNode.getElementsByClassName.color=this.colors;
        let colorNode1=document.querySelector("#Color1")
        colorNode1.style.backgroundColor=(this.colors[0]);
        let colorNode2=document.querySelector("#Color2")
        colorNode2.style.backgroundColor=(this.colors[1]);
        let colorNode3=document.querySelector("#Color3")
        colorNode3.style.backgroundColor=(this.colors[2]);
    }




}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["green", "red", "white"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Marhaban Bialealam", ["red", "white", "green"]);
let japan = new Country("Japan", "Japanese", "Kon'nichiwa sekai", ["white", "red", "red"]);
let germany = new Country("Germany", "German", "Hallo Welt", ["black", "yellow", "red"]);


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;  //replaced usa string with user input, aka the select
    // let input=inputNode.value;
    
    let country;

    if (input === "USA") {
        //set country to usa 
        country = usa;
        
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "Japan") {
        country = japan;
    }
    else if (input === "Germany") {
        country = germany;
    }


    country.DisplayColors();

}
