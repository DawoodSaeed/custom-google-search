const officeData = [
  {
    name: "Islamabad Office",
    lat: 33.6844,
    lng: 73.0479,
    city: "Islamabad",
    country: "Pakistan",
  },
  {
    name: "Lahore Office",
    lat: 31.5204,
    lng: 74.3587,
    city: "Lahore",
    country: "Pakistan",
  },
  {
    name: "Karachi Office",
    lat: 24.8607,
    lng: 67.0011,
    city: "Karachi",
    country: "Pakistan",
  },
  {
    name: "Rawalpindi Office",
    lat: 33.5651,
    lng: 73.0169,
    city: "Rawalpindi",
    country: "Pakistan",
  },
  {
    name: "faisalabad office",
    lat: 31.4504,
    lng: 73.135,
    city: "Faisalabad",
    country: "Pakistan",
  },

  {
    name: "Office 2",
    lat: 40.7128,
    lng: -74.006,
    city: "New York",
    country: "USA",
  },
  {
    name: "Office 3",
    lat: 34.0522,
    lng: -118.2437,
    city: "Los Angeles",
    country: "USA",
  },
  {
    name: "Office 4",
    lat: 48.8566,
    lng: 2.3522,
    city: "Paris",
    country: "France",
  },
  {
    name: "Office 5",
    lat: 55.7558,
    lng: 37.6176,
    city: "Moscow",
    country: "Russia",
  },
  {
    name: "Office 6",
    lat: -33.8679,
    lng: 151.2093,
    city: "Sydney",
    country: "Australia",
  },
  {
    name: "Office 7",
    lat: 35.682839,
    lng: 139.759455,
    city: "Tokyo",
    country: "Japan",
  },
  {
    name: "Office 8",
    lat: 19.4326,
    lng: -99.1332,
    city: "Mexico City",
    country: "Mexico",
  },
  {
    name: "Office 9",
    lat: 37.7749,
    lng: -122.4194,
    city: "San Francisco",
    country: "USA",
  },
  {
    name: "Office 10",
    lat: 51.1657,
    lng: 10.4515,
    city: "Berlin",
    country: "Germany",
  },
  {
    name: "Office 11",
    lat: -22.9068,
    lng: -43.1729,
    city: "Rio de Janeiro",
    country: "Brazil",
  },
  {
    name: "Office 12",
    lat: -34.6118,
    lng: -58.4173,
    city: "Buenos Aires",
    country: "Argentina",
  },
  {
    name: "Office 13",
    lat: 41.9028,
    lng: 12.4964,
    city: "Rome",
    country: "Italy",
  },
  {
    name: "Office 14",
    lat: 35.682839,
    lng: 139.759455,
    city: "Seoul",
    country: "South Korea",
  },
  {
    name: "Office 15",
    lat: 55.7558,
    lng: 37.6176,
    city: "St. Petersburg",
    country: "Russia",
  },
  {
    name: "Office 16",
    lat: -33.8688,
    lng: 151.2093,
    city: "Melbourne",
    country: "Australia",
  },
  {
    name: "Office 17",
    lat: 41.3851,
    lng: 2.1734,
    city: "Barcelona",
    country: "Spain",
  },
  {
    name: "Office 18",
    lat: 31.9686,
    lng: -99.9018,
    city: "Austin",
    country: "USA",
  },
  {
    name: "Office 19",
    lat: 40.7128,
    lng: -74.006,
    city: "Boston",
    country: "USA",
  },
  {
    name: "Office 20",
    lat: 37.7749,
    lng: -122.4194,
    city: "San Jose",
    country: "USA",
  },
  {
    name: "Office 21",
    lat: 51.5074,
    lng: -0.1278,
    city: "Manchester",
    country: "UK",
  },
  {
    name: "Office 22",
    lat: 32.7767,
    lng: -96.797,
    city: "Dallas",
    country: "USA",
  },
  {
    name: "Office 23",
    lat: -22.9068,
    lng: -43.1729,
    city: "Sao Paulo",
    country: "Brazil",
  },
  {
    name: "Office 24",
    lat: 55.7558,
    lng: 37.6176,
    city: "Novosibirsk",
    country: "Russia",
  },
  {
    name: "Office 25",
    lat: 40.7128,
    lng: -74.006,
    city: "Philadelphia",
    country: "USA",
  },
  {
    name: "Office 26",
    lat: 34.0522,
    lng: -118.2437,
    city: "San Diego",
    country: "USA",
  },
  {
    name: "Office 27",
    lat: 35.682839,
    lng: 139.759455,
    city: "Osaka",
    country: "Japan",
  },
  {
    name: "Office 28",
    lat: 51.1657,
    lng: 10.4515,
    city: "Munich",
    country: "Germany",
  },
  {
    name: "Office 29",
    lat: 48.8566,
    lng: 2.3522,
    city: "Lyon",
    country: "France",
  },
  {
    name: "Office 30",
    lat: 34.0522,
    lng: -118.2437,
    city: "San Jose",
    country: "USA",
  },
  {
    name: "Office 31",
    lat: -33.8679,
    lng: 151.2093,
    city: "Canberra",
    country: "Australia",
  },
  {
    name: "Office 32",
    lat: 41.9028,
    lng: 12.4964,
    city: "Milan",
    country: "Italy",
  },
  {
    name: "Office 33",
    lat: -34.6118,
    lng: -58.4173,
    city: "Cordoba",
    country: "Argentina",
  },
  {
    name: "Office 34",
    lat: 19.4326,
    lng: -99.1332,
    city: "Guadalajara",
    country: "Mexico",
  },
  {
    name: "Office 35",
    lat: -22.9068,
    lng: -43.1729,
    city: "Brasilia",
    country: "Brazil",
  },
  {
    name: "Office 36",
    lat: 41.9028,
    lng: 12.4964,
    city: "Naples",
    country: "Italy",
  },
  {
    name: "Office 37",
    lat: 35.682839,
    lng: 139.759455,
    city: "Nagoya",
    country: "Japan",
  },
  {
    name: "Office 38",
    lat: 55.7558,
    lng: 37.6176,
    city: "Kazan",
    country: "Russia",
  },
  {
    name: "Office 39",
    lat: 48.8566,
    lng: 2.3522,
    city: "Nice",
    country: "France",
  },
  {
    name: "Office 40",
    lat: 34.0522,
    lng: -118.2437,
    city: "San Bernardino",
    country: "USA",
  },
  {
    name: "Office 41",
    lat: 31.9686,
    lng: -99.9018,
    city: "Houston",
    country: "USA",
  },
  {
    name: "Office 42",
    lat: 40.7128,
    lng: -74.006,
    city: "Chicago",
    country: "USA",
  },
  {
    name: "Office 43",
    lat: -33.8679,
    lng: 151.2093,
    city: "Perth",
    country: "Australia",
  },
  {
    name: "Office 44",
    lat: 51.5074,
    lng: -0.1278,
    city: "Birmingham",
    country: "UK",
  },
  {
    name: "Office 45",
    lat: 32.7767,
    lng: -96.797,
    city: "Fort Worth",
    country: "USA",
  },
  {
    name: "Office 46",
    lat: -22.9068,
    lng: -43.1729,
    city: "Salvador",
    country: "Brazil",
  },
  {
    name: "Office 47",
    lat: 55.7558,
    lng: 37.6176,
    city: "Ekaterinburg",
    country: "Russia",
  },
  {
    name: "Office 48",
    lat: 40.7128,
    lng: -74.006,
    city: "Washington",
    country: "USA",
  },
  {
    name: "Office 49",
    lat: 34.0522,
    lng: -118.2437,
    city: "Santa Monica",
    country: "USA",
  },
  {
    name: "Office 50",
    lat: 35.682839,
    lng: 139.759455,
    city: "Yokohama",
    country: "Japan",
  },
];

// function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     mapId: "871e4ead2b61627e",
//     center: { lat: 30.3753, lng: 69.3451 },
//     zoom: 4,
//   });

//   const officeDiv = document.createElement("div");
//   officeDiv.classList.add("office-div");
//   officeDiv.textContent = `1`;

// officeData.forEach((office) => {
//   const marker = new google.maps.Marker({
//     position: { lat: office.lat, lng: office.lng },
//     map: map,
//     title: office.name,
//     icon: "office-building.png",
//   });

//   marker.addListener("click", function () {
//     alert("Duhh, You Clicked Me !");
//   });
// });
// }

// window.initMap = initMap;

const locations = [
  { lat: 30.3753, lng: 69.3451 },
  { lat: -33.718234, lng: 150.363181 },
  { lat: -33.727111, lng: 150.371124 },
  { lat: -33.848588, lng: 151.209834 },
  { lat: -33.851702, lng: 151.216968 },
  { lat: -34.671264, lng: 150.863657 },
  { lat: -35.304724, lng: 148.662905 },
  { lat: -36.817685, lng: 175.699196 },
  { lat: -36.828611, lng: 175.790222 },
  { lat: -37.75, lng: 145.116667 },
  { lat: -37.759859, lng: 145.128708 },
  { lat: -37.765015, lng: 145.133858 },
  { lat: -37.770104, lng: 145.143299 },
  { lat: -37.7737, lng: 145.145187 },
  { lat: -37.774785, lng: 145.137978 },
  { lat: -37.819616, lng: 144.968119 },
  { lat: -38.330766, lng: 144.695692 },
  { lat: -39.927193, lng: 175.053218 },
  { lat: -41.330162, lng: 174.865694 },
  { lat: -42.734358, lng: 147.439506 },
  { lat: -42.734358, lng: 147.501315 },
  { lat: -42.735258, lng: 147.438 },
  { lat: -43.999792, lng: 170.463352 },
];
async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker"
  );

  const map = new Map(document.getElementById("map"), {
    center: { lat: 30.3753, lng: 69.3451 },
    zoom: 4,
    mapId: "871e4ead2b61627e",
  });

  const priceTag = document.createElement("div");

  priceTag.className = "price-tag";
  priceTag.textContent = "$2.5M";
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const markers = officeData.map((office, i) => {
    // const label = labels[i % labels.length];
    // const pinGlyph = new google.maps.marker.PinElement({
    //   glyph: label,
    //   glyphColor: "white",
    // });

    const priceTag = document.createElement("div");
    priceTag.className = "price-tag";
    priceTag.textContent = office.name;
    const marker = new google.maps.marker.AdvancedMarkerElement({
      position: { lat: office.lat, lng: office.lng },
      collisionBehavior: "OPTIONAL_AND_HIDES_LOWER_PRIORITY",
      content: priceTag,
    });

    map.addListener("zoom_changed", () => {
      const zoom = map.getZoom();

      if (zoom) {
        // Only show each marker above a certain zoom level.
        marker.map = zoom > 20 ? map : null;
      }
    });

    return marker;
  });

  new markerClusterer.MarkerClusterer({ markers, map });
}

initMap();
