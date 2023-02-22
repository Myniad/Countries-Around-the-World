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
        let colorNode1=document.querySelector("#color1")
        colorNode1.style.backgroundColor=this.colors[1]
        let colorNode2=document.querySelector("#color2")
        colorNode1.style.backgroundColor=this.colors[2]
        let colorNode3=document.querySelector("#color3")
        colorNode1.style.backgroundColor=this.colors[3];
    }




}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


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


    country.DisplayColors();

}
