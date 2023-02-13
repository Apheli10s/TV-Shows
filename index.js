class TvShow {
    constructor(name, genre, image, url){
        this.name = name;
        this.genre = genre;
        this.image = image;
        this.url = url;
    }

    toText(){
        return `${this.name} (${this.genre})`;
    }

    toHtml(){
        return `<div>
        <h1>${this.name}</h1>
        <p>(${this.genre})</p>
        <span><a href="${this.url}"  target="_blank">Visit Website</a></span>
        <div><img src="${this.image}" alt="${this.name}" width="400"></div>
        
        </div>`;
    }
}


const request = fetch("./data.json")  //fetch kreira promise, stvaramo uspjesan then i neuspjesan reject
    .then((response) =>{
        return response.json();
        })
        .then((json)=>{
            for(let i =0; i<json.length; i++){
                const tvShow = new TvShow(json[i].name, json[i].genres[0], json[i].image.original, json[i].url);

                //console.log(json[i].name, json[i].genres[0]); //izbaci ime svake serije i zanr na indexu 0
                
                document.body.innerHTML += tvShow.toHtml();      
            }
        });

console.log(request);