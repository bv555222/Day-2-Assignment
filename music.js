var songs = [
    {
        id : 1,
        imageSrc : "./Thumbnails/ignite.jpg",
        audioSrc : "./Thumbnails/Ignite - Alan Walker- [MyMp3Bhojpuri.In].mp3",
        title : "Ignite - Alan Walker"
    },
    {
        id :2,
        imageSrc: "./Thumbnails/sorry.jfif",
        audioSrc : "./Thumbnails/Justin_Bieber_-_Sorry_Qoret.com.mp3",
        title : "Sorry - Justin Biber"
    },
    {
        id : 3,
        imageSrc : "./Thumbnails/shape fyou.png",
        audioSrc : "./Thumbnails/Shape of You - Ed Sheeran- [MyMp3Bhojpuri.In].mp3",
        title : "Shape Of You  - Ed Sheeran"
    },

    {
        id :4,
        imageSrc : "./Thumbnails/despacito.jfif",
        audioSrc : "./Thumbnails/Despacito(PaglaSongs).mp3",
        title : "Despacito - Luis Fonsi"
    },

    {
        id: 5,
        imageSrc : "./Thumbnails/letmeloveu.jpg",
        audioSrc : "./Thumbnails/Let-Me-Love-You(PaglaSongs).mp3",
        title : "Let-Me-Love-You - DJ Snake"
    },

    {
        id : 6,
        imageSrc : "./Thumbnails/halloffame.jpg",
        audioSrc : "./Thumbnails/The-Script-Hall-of-Fame-via-Naijafinix.com_.mp3",
        title : "Hall of fame- The Script"
    },

    {
        id : 7,
        imageSrc : "./Thumbnails/suburban cradels.jpg",
        audioSrc : "./Thumbnails/Cradles(PaglaSongs).mp3",
        title : "Cradels - Sub Urban"
    },

    {
        id : 8,
        imageSrc : "./Thumbnails/thunder.jpg",
        audioSrc : "./Thumbnails/Imagine Dragons - Thunder Mp3 Song Download.mp3",
        title : "Thunder - Imagine Dragons"
    }

]

function playAudio(songid){
 var song = songs.find(function(song,index){return song.id===songid});
 
 document.getElementById("Thumbnail").src=song.imageSrc;
 document.getElementById("song").src=song.audioSrc;
 document.getElementById("audio_player_title").innerText=song.title;
 document.getElementById("song").play();
}