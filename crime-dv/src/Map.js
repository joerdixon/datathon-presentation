import { useEffect } from 'react';
import './Map.css';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import * as d3 from 'd3';

function Map() {
    useEffect(() => {
        // coordinates for seattle to center the map
        const home = {lat: 47.646197, long:-122.312542, zoom:13};

        // base map element on the DOM
        let map = L.map('map', {
                zoomControl: false,
                minZoom: 10
            }).setView([home.lat, home.long], home.zoom);

        // leaflet map overlay
        L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
            maxZoom: 20
        }).addTo(map);
        L.svg({clickable:true}).addTo(map);

        d3.json('./example/mcpp.geojson').then(function(json) {
            const projectPoint = function(x, y) {
                    const point = map.latLngToLayerPoint(new L.LatLng(y, x))
                    this.stream.point(point.x, point.y)
                };
            let projection = d3.geoTransform({point: projectPoint});
            let geoGenerator = d3.geoPath().projection(projection);
            
            const overlay = d3.select(map.getPanes().overlayPane);
            
            const svg = overlay.select('svg').attr("pointer-events", "auto"),
                    g = svg.append('g').attr('class', 'leaflet-zoom-hide');
            
            // Create the MCPP path regions
            const path = g.selectAll('path')
                .data(json.features)
                .enter()
                .append('path')
                .attr('d', geoGenerator)
                .attr('fill-opacity', 0.2)
                .attr('fill', 'steelblue')
                .attr('stroke', '#fff')
                .attr('stroke-width', .3)
                .on("mouseover", function(d) {
                    d3.select(this).attr("fill-opacity", 1.0)
                
                })
                .on("mouseout", function(d) {
                    d3.select(this).attr("fill-opacity", 0.2)
                })
                .on("click", function(e, d) {
                    // add MCPP onclick events here, d3.select(this).attr() changes the style of the selected element
                    return
                });
            const onZoom = () => {path.attr('d', geoGenerator);}
            onZoom()
            map.on('zoomend', onZoom)
        })
    }, [])


    return (
        <div id="map" style="height:100vh;"></div>
    );
}

export default Map;
