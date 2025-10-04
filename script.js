// console.log("lets write js")
// let currentsong = new Audio();
// let songs;
// let currfolder;

// function secondsToMinuteSeconds(seconds) {
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);

//     const formattedMins = mins.toString().padStart(2, '0');
//     const formattedSecs = secs.toString().padStart(2, '0');

//     return `${formattedMins}:${formattedSecs}`;
// }


// async function getsongs(folder) {
//     currfolder = folder;
//     let a = await fetch(`http://127.0.0.1:5500/${folder}/`)
//     let response = await a.text();
//     console.log(response)
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a")
//     songs = []
//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.split(`/${folder}/`)[1])
//         }
//     }


//     // show all the song in playlist
//     let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
//     songul.innerHTML = ""
//     for (const song of songs) {
//         songul.innerHTML = songul.innerHTML + `<li><img class="invert" src="music.svg" alt="">
//                         <div class="info">
//                             <div> ${song.replaceAll("%20", " ")}</div>
//                             <div>halle</div>
//                         </div>
                        
//                         <div class="playnow">
//                             <span>Play Now</span>
//                             <img class="invert" src="play.svg" alt="">
//                         </div> </li>`;
//     }

//     // attach an event listener to each song
//     Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
//         e.addEventListener("click", element => {

//             console.log(e.querySelector(".info").firstElementChild.innerHTML)
//             playmusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
//         })
//     })

//     return songs;

// }

// const playmusic = (track, pause = false) => {
//     currentsong.src = `/${currfolder}/` + track
//     if (!pause) {
//         currentsong.play()
//         play.src = "pause.svg"
//     }
//     document.querySelector(".songinfo").innerHTML = decodeURI(track)
//     document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
// }

// async function displayalbumb(){
//     let a = await fetch(`http://127.0.0.1:5500/songs/`)
//     let response = await a.text();
//     // console.log(response)
//     let div = document.createElement("div")
//     div.innerHTML = response;
//     let anchors = div.getElementsByTagName("a")
//     let cardcontainer = document.querySelector(".cardcontainer")
//     Array.from(anchors).forEach(async e=>{
//         if (e.href.includes("/songs")) {
//             let folder = e.href.split("/").slice(-2)[0]


//             // get the metadata of the folder
//             let a = await fetch(`http://127.0.0.1:5500/songs/${folder}/info.json`)
//             let response = await a.json();
//             console.log(response)
//             cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="" class="card">
//                         <div class="play">
//                             <svg width="" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
//                                 <circle cx="50" cy="50" r="48" fill="#1DB954" />
//                                 <polygon points="40,30 70,50 40,70" fill="black" />
//                             </svg>

//                         </div>
//                         <img src="/songs/${folder}/cover.jpeg"
//                             alt="">
//                         <h2>${response.title}</h2>
//                         <p>${response.description}</p>
//                     </div>`


//         }
//     })
// }

// async function main() {


//     // get the list of all the songs
//     await getsongs("songs/jk")
//     playmusic(songs[4], true)

//     // display all the albumbs on the page
//     displayalbumb()


//     // attach and event listener to play next and previous
//     play.addEventListener("click", () => {
//         if (currentsong.paused) {
//             currentsong.play()
//             play.src = "pause.svg"
//         }
//         else {
//             currentsong.pause()
//             play.src = "play.svg"
//         }
//     })

//     // listen for time update events
//     currentsong.addEventListener("timeupdate", () => {
//         console.log(currentsong.currentTime, currentsong.duration);
//         document.querySelector(".songtime").innerHTML = `${secondsToMinuteSeconds(currentsong.currentTime)}/${secondsToMinuteSeconds(currentsong.duration)}`
//         document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
//     })

//     // Add an event listener to seekbar
//     document.querySelector(".seekbar").addEventListener("click", e => {
//         let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
//         document.querySelector(".circle").style.left = percent + "%";
//         currentsong.currentTime = ((currentsong.duration) * percent) / 100
//     })

//     // add an event listener for hamburger
//     document.querySelector(".hamburger").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "0"
//     })

//     // add an event listener for close button
//     document.querySelector(".close").addEventListener("click", () => {
//         document.querySelector(".left").style.left = "-120%"
//     })

//     // add an event listener for previos 
//     previous.addEventListener("click", () => {
//         console.log("previous clicked")
//         console.log(currentsong)
//         let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])

//         // console.log(songs, index)
//         if ((index - 1) >= 0) {
//             playmusic(songs[index - 1])

//         }
//     })
//     // add an event listener for next
//     next.addEventListener("click", () => {
//         console.log("next clicked")

//         let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])

//         console.log(songs, index)
//         if ((index + 1) < songs.length) {
//             playmusic(songs[index + 1])

//         }
//     })

//     // add an event listener for volume
//     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
//         console.log(e, e.target, e.target.value)
//         currentsong.volume = parseInt(e.target.value) / 100;
//     })

//     // load the playlist whenever card is clicked
//     Array.from(document.getElementsByClassName("card")).forEach(e => {
//         e.addEventListener("click", async items => {
//             songs = await getsongs(`songs/${items.currentTarget.dataset.folder}`)

//         })
//     })

// }

// main()


console.log("lets write js")
let currentsong = new Audio();
let songs;
let currfolder;

function secondsToMinuteSeconds(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    const formattedMins = mins.toString().padStart(2, '0');
    const formattedSecs = secs.toString().padStart(2, '0');

    return `${formattedMins}:${formattedSecs}`;
}

async function getsongs(folder) {
    currfolder = folder;
    let a = await fetch(`http://127.0.0.1:5500/${folder}/`)
    let response = await a.text();
    console.log(response)
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }

    let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    songul.innerHTML = ""
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `<li><img class="invert" src="music.svg" alt="">
                        <div class="info">
                            <div> ${song.replaceAll("%20", " ")}</div>
                            <div>halle</div>
                        </div>
                        
                        <div class="playnow">
                            <span>Play Now</span>
                            <img class="invert" src="play.svg" alt="">
                        </div> </li>`;
    }

    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playmusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })

    return songs;
}

const playmusic = (track, pause = false) => {
    currentsong.src = `/${currfolder}/` + track
    if (!pause) {
        currentsong.play()
        play.src = "pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function displayalbumb() {
    let a = await fetch(`http://127.0.0.1:5500/`)
        // songs daal dena upar link ke beech mein if dikkat aaye toh
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardcontainer = document.querySelector(".cardcontainer")
    Array.from(anchors).forEach(async e => {
        if (e.href.includes("/songs")) {
            let folder = e.href.split("/").slice(-2)[1]

            let a = await fetch(`http://127.0.0.1:5500/songs/${folder}/info.json`)
            let response = await a.json();
            console.log(response)
            cardcontainer.innerHTML = cardcontainer.innerHTML + ` <div data-folder="${folder}" class="card">
                        <div class="play">
                            <svg width="" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="48" fill="#1DB954" />
                                <polygon points="40,30 70,50 40,70" fill="black" />
                            </svg>
                        </div>
                        <img src="/songs/${folder}/cover.jpg"
                            alt="">
                        <h2>${response.title}</h2>
                        <p>${response.description}</p>
                    </div>`
        }
    })

    // ✅ Move card click listeners here after cards are created
    setTimeout(() => {
        Array.from(document.getElementsByClassName("card")).forEach(e => {
            e.addEventListener("click", async items => {
                songs = await getsongs(`songs/${items.currentTarget.dataset.folder}`)
            })
        })
    }, 500);
}

async function main() {
    await getsongs("songs/jk")
    playmusic(songs[4], true)

    // ✅ Wait for albums to load
    await displayalbumb()

    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play()
            play.src = "pause.svg"
        }
        else {
            currentsong.pause()
            play.src = "play.svg"
        }
    })

    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinuteSeconds(currentsong.currentTime)}/${secondsToMinuteSeconds(currentsong.duration)}`
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    })

    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentsong.currentTime = ((currentsong.duration) * percent) / 100
    })

    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    previous.addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playmusic(songs[index - 1])
        }
    })

    next.addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length) {
            playmusic(songs[index + 1])
        }
    })

    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        currentsong.volume = parseInt(e.target.value) / 100;
    })

    // add event listener yo mute the track
    document.querySelector(".volume > img").addEventListener("click", e=>{
        console.log(e.target)
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg","mute.svg")
            currentsong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg","volume.svg")
            currentsong.volume = 0.1;
             document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }
    })
}

main()
