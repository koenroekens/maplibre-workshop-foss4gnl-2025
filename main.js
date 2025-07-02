import * as maplibregl from "https://esm.sh/maplibre-gl";
import { Protocol } from "https://esm.sh/pmtiles";


const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    //style: 'https://demotiles.maplibre.org/style.json', // style URL
    style: './assets/style.json',
    center: [5.66509, 51.96857],
    zoom: 13 // starting zoom
});

map.addLayer({
    id: "wandeling",
    source: 'wandeling_32983',
    type: 'symbol',
  layout: {

        "text-field": ['get', 'name']
  }
});

map.addSource('wandeling_32983', {
    type: 'geojson',
    data: './assets/wandeling.json'
    
});

