var button = document.getElementById('searchBtn');
var searchInput = document.getElementById('searchInput');
var parent = document.getElementById('parent');

button.addEventListener('click',function(){
    fetch("https://api.lyrics.ovh/suggest/"+searchInput.value)
    .then( res => res.json())
    .then( data => {
    console.log(data);
    const songName = data.data.map(songName=>songName.title);
    
    const titleName = data.data.map(titleName=>titleName.artist.name);
    console.log(titleName);
    //const song_Name = songName.slice(0,10);
    //const title_Name = titleName.slice(0, 10);

    var template = "";
    for(let i=0; i<10; i++){
        const element = songName[i];
        const element2 = titleName[i];
        console.log(element2);
        console.log(element);

        const li = `<p><strong>${element}</strong> Album by <span>${element2}</span> <button class="btn btn-success"> Get Lyrics </button> </p>`
        template +=li

    }
    parent.innerHTML = template;
});
})
