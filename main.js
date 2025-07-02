import * as maplibregl from "https://esm.sh/maplibre-gl";
import { Protocol } from "https://esm.sh/pmtiles";


const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    //style: 'https://demotiles.maplibre.org/style.json', // style URL
    style: './assets/style.json',
    center: [5.66509, 51.96857],
    zoom: 13 // starting zoom
});

map.addSource('some id', {
    type: 'geojson',
    data: './assets/wandeling.json'
});


const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);