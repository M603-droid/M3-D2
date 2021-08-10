"strict mode";

const album1 = {
  name: "Bohemian Rhapsody (The Original Soundtrack)",
  artist: "Queen",
  year: "2018",
  albumCover: "electric-warrior.png",
  duration: "22 Songs, 1 hr 19 min",
  songList: [
    {
      title: "20th Century Fox Fanfare",
      songDuration: "0.25",
      songArtist: "Queen",
    },
    {
      title: "Somebody to Love",
      songDuration: "4.56",
      songArtist: "Queen",
    },

    {
      title: "Doing All Right... Revisited",
      songDuration: "3.17",
      songArtist: "Queen",
    },

    {
      title: "Keep Yourself Alive",
      songDuration: "3.56",
      songArtist: "Queen",
    },

    {
      title: "Killer Queen",
      songDuration: "2.59",
      songArtist: "Queen",
    },

    {
      title: "Fat Bottomed Girls",
      songDuration: "4.38",
      songArtist: "Queen",
    },
    {
      title: "Bohemian Rhapsody",
      songDuration: "5.55",
      songArtist: "Queen",
    },
    {
      title: "Now I'm Here",
      songDuration: "4.26",
      songArtist: "Queen",
    },
    {
      title: "Crazy Little Thing Called Love",
      songDuration: "2.43",
      songArtist: "Queen",
    },
    {
      title: "Love of My Life",
      songDuration: "4.29",
      songArtist: "Queen",
    },
    {
      title: "We Will Rock You",
      songDuration: "2.09",
      songArtist: "Queen",
    },
    {
      title: "Another One Bites the Dust",
      songDuration: "3.35",
      songArtist: "Queen",
    },
    {
      title: "I Want to Break Free",
      songDuration: "3.43",
      songArtist: "Queen",
    },
    {
      title: "Under Pressure",
      songDuration: "4.04",
      songArtist: "Queen feat. David Bowie",
    },
    {
      title: "Who Wants to Live Forever",
      songDuration: "5.15",
      songArtist: "Queen",
    },
    {
      title: "Bohemian Rhapsody(Live)",
      songDuration: "2.28",
      songArtist: "Queen",
    },
    {
      title: "Radio Ga Ga",
      songDuration: "4:06",
      songArtist: "Queen",
    },
    {
      title: "Ay-Oh",
      songDuration: "0:41",
      songArtist: "Queen",
    },
    {
      title: "Hammer to Fall",
      songDuration: "4:04",
      songArtist: "Queen",
    },
    {
      title: "We Are the Champions",
      songDuration: "3:57",
      songArtist: "Queen",
    },
    {
      title: "Don't Stop Me Now... Revisited",
      songDuration: "3:38",
      songArtist: "Queen",
    },
    {
      title: "The Show Must Go On",
      songDuration: "4:32",
      songArtist: "Queen",
    },
  ],
};

const album2 = {
  name: "News of the World",
  artist: "Queen",
  year: "1977",
  albumCover: "dogrel.png",
  duration: "11 Songs, 39 min",
  songList: [
    {
      title: "We Will Rock You",
      songDuration: "2:01",
      songArtist: "Queen",
    },
    {
      title: "We Are the Champions",
      songDuration: "2:59",
      songArtist: "Queen",
    },

    {
      title: "Sheer Heart Attack",
      songDuration: "3:26",
      songArtist: "Queen",
    },

    {
      title: "All Dead, All Dead",
      songDuration: "3:10",
      songArtist: "Queen",
    },

    {
      title: "Spread Your Wings",
      songDuration: "4:34",
      songArtist: "Queen",
    },

    {
      title: "Fight from the Inside",
      songDuration: "4.38",
      songArtist: "Queen",
    },
    {
      title: "Get Down, Make Love",
      songDuration: "5.55",
      songArtist: "Queen",
    },
    {
      title: "Sleeping on the Sidewalk",
      songDuration: "4.26",
      songArtist: "Queen",
    },
    {
      title: "Who Needs You",
      songDuration: "2.43",
      songArtist: "Queen",
    },
    {
      title: "It's Late",
      songDuration: "4.29",
      songArtist: "Queen",
    },
    {
      title: "My Melancholy Blues",
      songDuration: "2.09",
      songArtist: "Queen",
    },
  ],
};

const generateAlbumPageJumbotron = function (album, container) {
  let newJumbotron = document.createElement("div");
  newJumbotron.innerHTML = `
    <div class="jumbotron jumbotron-fluid img-fluid album-jumbo pb-5">
      <div class="for-about-album">
        <img class="shadow-lg d-none d-sm-inline reflect" src="assets/${album.albumCover}" alt="">
        <div class="mt-3 mt-sm-0">
          <p><strong>ALBUM</strong> </p>
          <h1 class="album-title-jumbo">${album.name}</h1>
          
          <p class="album-summary"><img class="round-artist1 reflect" src="assets/mgmt.png" alt=""><strong> ${album.artist}</strong><i class="bi bi-dot"></i>2018<i class="bi bi-dot"></i>${album.duration}</p>
        </div>
      </div>
     
   </div>`;

  container.appendChild(newJumbotron);
};

const generateAlbumTable = function (albumTitle) {
  let albumTableBody = document.createElement("tbody");
  for (i = 0; i < albumTitle.songList.length; i++) {
    let newTableRow = document.createElement("tr");
    newTableRow.innerHTML = `<td scope="row" class="align-middle"> ${i + 1}</td>
        
      <td><div>${
        albumTitle.songList[i].title
      } </div> <div class="artist-name">Queen</div> </td>
      
      <td class="align-middle keep-on-page">${
        albumTitle.songList[i].songDuration
      }</td>`;
    albumTableBody.appendChild(newTableRow);
  }
  return albumTableBody;
};

const generateTrackList = function (album) {
  let albumTableContainer = document.createElement("div");
  albumTableContainer.classList.add(
    "main-container",
    "main-container-album",
    "container-fluid",
    "album-songs-container"
  );
  albumTableContainer.innerHTML = `  <div class="top-of-artist-songs mb-3 pt-3">
    <div class="spotify-circle">
      <div class="half-of-pause first-pause"></div>
      <div class="half-of-pause second-pause"></div>
    </div>
    <div class="album-heart"><i class="bi bi-heart"></i></div>
    <div class="album-dots"> <div class="small-circle"></div>
    <div class="small-circle"></div>
      <div class="small-circle"></div></div>
  </div>`;
  let tableBootRow = document.createElement("div");
  tableBootRow.classList.add("row", "ml-1");
  let table = document.createElement("table");
  table.classList.add("table", "table-borderless");
  table.innerHTML = `  <thead>
    <tr>
    <td>#</td>
    <td>TITLE</td>
    <td><i class="bi bi-clock keep-on-page-clock"></i></td>
  </tr>
  </thead>`;
  let tableBody = generateAlbumTable(album);
  table.appendChild(tableBody);
  tableBootRow.appendChild(table);
  albumTableContainer.appendChild(tableBootRow);
  let albumTableContainerDiv = document.getElementById(
    "album-table-container-div"
  );
  albumTableContainerDiv.appendChild(albumTableContainer);
};

const getQueryString = function () {
  let currentUrl = window.location.href.toString();
  let albumString = currentUrl.slice(-6);
  console.log(albumString);
  return albumString;
};

const generateAlbum = function (album) {
  let albumJumbotronContainer = document.getElementById(
    "album-jumbotron-container"
  );
  //   console.log(albumJumbotronContainer);
  let albumTableContainerDiv = document.getElementById(
    "album-table-container-div"
  );
  albumJumbotronContainer.innerHTML = "";
  albumTableContainerDiv.innerHTML = "";
  //   console.log(albumJumbotronContainer);
  generateAlbumPageJumbotron(album, albumJumbotronContainer);
  generateTrackList(album);
};

const queryString = getQueryString();

const choosePage = function () {
  if (queryString === "album1") {
    generateAlbum(album1);
  }

  if (queryString === "album2") {
    generateAlbum(album2);
  }
};

choosePage();
