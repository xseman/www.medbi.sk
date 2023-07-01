import leaflet from "https://esm.sh/leaflet@1.9.3";

const map = leaflet
	.map("map")
	.setView([48.33122, 17.30852], 18);

const tiles = leaflet
	.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png")
	.addTo(map);

const marker = leaflet
	.marker([48.33125, 17.30853])
	.addTo(map);
