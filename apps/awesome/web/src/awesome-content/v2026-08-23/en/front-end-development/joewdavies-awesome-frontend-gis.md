---
title: "Awesome Frontend GIS"
description: "Resources for Geographic Information Systems (GIS) in web browsers, covering the management, analysis, editing and visualization of geographic data. Find JavaScript mapping and processing libraries, open data and APIs, notebooks, web maps and applications, colour tools, icons and learning materials."
licenseSource: "github-joewdavies-awesome-frontend-gis-readme-md"
---

# Awesome Frontend GIS

Resources for Geographic Information Systems (GIS) in web browsers, covering the management, analysis, editing and visualization of geographic data. Find JavaScript mapping and processing libraries, open data and APIs, notebooks, web maps and applications, colour tools, icons and learning materials.

## <a id="-javascript-libraries"></a>JavaScript Libraries

### Mapping
Libraries for creating web maps:

- [antvis L7](https://github.com/antvis/L7) - Large-scale, WebGL-powered geospatial data visualization.
- [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/) - Modern JavaScript API and web component library for building interactive 2D and 3D web apps for the browser.
- [ArcGIS REST JS](https://github.com/Esri/arcgis-rest-js) - Compact, modular JavaScript wrappers for the ArcGIS REST API that run in Node.js and modern browsers.
- [Bertin.js](https://github.com/neocarto/bertin) - A JavaScript library for visualizing geospatial data and making thematic maps for the web.
- [Cesium.js](https://github.com/CesiumGS/cesium) - An open-source JavaScript library for 3D mapping of geospatial data, described as world-class in the original list.
- [d3-geo](https://github.com/d3/d3-geo) - A library for creating maps based on D3.js.
- [d3-geo-projection](https://github.com/d3/d3-geo-projection) - Extended geographic projections.
- [d3-geo-voronoi](https://github.com/Fil/d3-geo-voronoi) - Voronoi diagrams and Delaunay triangulation for the sphere.
- [datamaps](https://github.com/markmarkoh/datamaps) - Customizable map visualizations in one file.
- [Deck.GL](https://github.com/visgl/deck.gl) - WebGL2 powered geospatial visualization layers.
- [Eurostat-map](https://github.com/eurostat/eurostat-map.js) - Data-driven maps.
- [globe.gl](https://github.com/vasturiano/globe.gl) - This library is a convenience wrapper around the three-globe plugin, using Three.js/WebGL for 3D rendering.
- [Google Maps](https://developers.google.com/maps/documentation/javascript) - JavaScript API for Google Maps.
- [gridviz](https://github.com/eurostat/gridviz) - A package for visualizing gridded data.
- [HERE maps API](https://developer.here.com/develop/javascript-api) - Build web applications with feature-rich and customizable HERE maps.
- [iTowns](https://github.com/iTowns/itowns) - A Three.js-based framework written in JavaScript/WebGL for visualizing 3D geospatial data.
- [Leaflet](https://github.com/Leaflet/Leaflet) - An open-source JavaScript library for mobile-friendly interactive maps, described as a leading library in the original list.
- [Map Forecast API](https://github.com/windycom/API) - Simple-to-use library based on Leaflet 1.4.x. It allows you to show wind maps.
- [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js) - JavaScript library that uses WebGL to render interactive maps from vector tiles.
- [maplibre](https://github.com/maplibre/maplibre-gl-js) - It originated as an open-source fork of mapbox-gl-js, before their switch to a non-OSS license in December 2020.
- [MapTalks.js](https://github.com/maptalks/maptalks.js) - An open-source JavaScript library for integrated 2D/3D maps.
- [OpenLayers](https://github.com/openlayers/openlayers) - A high-performance, feature-packed library for creating interactive maps on the web.
- [react-simple-maps](https://github.com/zcreativelabs/react-simple-maps) - An SVG mapping component library for React, built on top of d3-geo.
- [Tangram](https://github.com/tangrams/tangram) - WebGL map rendering engine for creative cartography.
- [TerriaJS](https://github.com/TerriaJS/terriajs) - A library for building rich, web-based geospatial data explorers.
- [Wrld.js](https://github.com/wrld3d/wrld.js/) - Animated 3D city maps based on Leaflet.

### Data Processing
Libraries that help you analyse and process geospatial data:
- [Arc.js](https://github.com/springmeyer/arc.js) - Calculate great-circle routes as lines in GeoJSON or WKT format.
- [awesome-GeoJSON](https://github.com/tmcw/awesome-geojson) - Catalogue of GeoJSON tools.
- [Euclid.ts](https://github.com/mathigon/euclid.js) - 2D Euclidean geometry classes, utilities, and drawing tools.
- [flatbush](https://github.com/mourner/flatbush) - A really fast static spatial index for 2D points and rectangles in JavaScript.
- [FlatGeoBuf](https://github.com/flatgeobuf/flatgeobuf) - A performant binary encoding for geographic data based on flatbuffers.
- [flatten-js](https://github.com/alexbol99/flatten-js) - For manipulating geometrical shapes, finding intersections, checking inclusion, calculating distance, transformations, and more.
- [Galton](https://github.com/urbica/galton) - Lightweight Node.js isochrone server.
- [gdal3.js](https://github.com/bugra9/gdal3.js) - Convert raster and vector geospatial data to various formats.
- [geoblaze](https://github.com/GeoTIFF/geoblaze) - A blazing fast JavaScript raster processing engine.
- [geobuf](https://github.com/mapbox/geobuf) - A compact binary encoding for geographic data.
- [GeoTiff.js](https://github.com/geotiffjs/geotiff.js) - Parse TIFF files for visualization or analysis.
- [geolib](https://github.com/manuelbieh/geolib) - Library to provide basic geospatial operations.
- [geopackage-js](https://github.com/ngageoint/geopackage-js) - The GeoPackage JavaScript library provides the ability to read GeoPackage files.
- [geoparquet](https://github.com/opengeospatial/geoparquet) - Encoding geospatial data in Apache Parquet.
- [geotoolbox](https://github.com/neocarto/geotoolbox) - Provides several GIS operations for use with geojson properties.
- [geojson-merge](https://github.com/mapbox/geojson-merge) - Merge multiple GeoJSON files into one FeatureCollection.
- [geojson-vt](https://github.com/mapbox/geojson-vt) - A highly efficient JavaScript library for slicing GeoJSON data.
- [Geometric.js](https://github.com/HarryStevens/geometric) - A JavaScript library for doing geometry.
- [JSTS](https://github.com/bjornharrtell/jsts) - JavaScript Topology Suite.
- [koop](https://github.com/koopjs/koop) - A JavaScript toolkit for connecting incompatible spatial APIs.
- [math.gl](https://github.com/uber-web/math.gl) - JavaScript math library focused on geospatial and 3D use cases.
- [Proj4js](https://github.com/proj4js/proj4js) - Transform coordinates from one coordinate system to another.
- [rbush](https://github.com/mourner/rbush) - A high-performance JavaScript library for 2D spatial indexing.
- [spl.js](https://github.com/jvail/spl.js) - Makes it possible to use SpatiaLite functionality in JavaScript.
- [statsbreaks](https://github.com/riatelab/statsbreaks) - Split a quantitative dataset into classes for thematic mapping.
- [Turf.js](https://github.com/Turfjs/turf) - A JavaScript library for spatial analysis.
- [topoJSON](https://github.com/topojson/topojson) - Convert GeoJSON to TopoJSON for use in D3 maps.
- [Wicket](https://github.com/arthur-e/Wicket) - A modest library for moving between Well-Known Text (WKT) and various framework geometries.

### LiDAR
Tools for visualizing point clouds with web browsers:

- [Plasio](https://github.com/verma/plasio) - Drag-n-drop In-browser LAS/LAZ point cloud viewer.
- [Potree](https://github.com/potree/potree) - WebGL point cloud viewer for large datasets.
- [Potree & Cesium.js](https://potree.org/potree/examples/cesium_retz.html) - Rezt, Austria LIDAR viewer.
- [Three.js](https://threejs.org/examples/#webgl_loader_pcd) - Point cloud data loader.

### Remote Sensing

Resources for frontend earth observation and remote sensing:

- [EOSDIS Worldview](https://github.com/nasa-gibs/worldview) - Interactive interface for browsing global, full-resolution satellite imagery.
- [Google Earth Engine](https://developers.google.com/earth-engine/tutorials/tutorial_api_01) - Geospatial processing service.
- [Sentinel Hub custom scripts](https://github.com/sentinel-hub/custom-scripts) - A repository of custom scripts to be used with Sentinel Hub.
- [sentinelhub-js](https://github.com/sentinel-hub/sentinelhub-js/) - Download and process satellite imagery using Sentinel Hub services.
- [Spectral](https://github.com/awesome-spectral-indices/awesome-spectral-indices) - Awesome Spectral Indices for the Google Earth Engine JavaScript API.

## <a id="-data-sources"></a>Data sources
A collection of geospatial open data sources:

### Downloads
Data available for download:

- [ArcGIS Hub](https://hub.arcgis.com/) - Over 380,000 open datasets, according to the original list.
- [Copernicus global DEM](https://ec.europa.eu/eurostat/web/gisco/geodata/digital-elevation-model/copernicus#Elevation) - Global elevation tiles.
- [Copernicus open access hub](https://www.copernicus.eu/en/access-data/conventional-data-access-hubs) - Copernicus satellite imagery download.
- [ETOPO1](https://www.ngdc.noaa.gov/mgg) - 1 arc-minute global relief model of Earth's surface.
- [European population grids - GISCO](https://ec.europa.eu/eurostat/web/gisco/geodata/grids) - Population figures in grid cells.
- [European Postcodes Point Data](https://ec.europa.eu/eurostat/web/gisco/geodata/administrative-units/postal-codes) - Location of postal codes across Europe.
- [Geoboundaries](https://www.geoboundaries.org/) - An open, free political boundaries database, described as the world's largest in the original list.
- [Global Biodiversity Information Facility (GBIF)](https://www.gbif.org/) - Open access to biodiversity data.
- [Global Climate Monitor](https://kerdoc.cica.es/) - Global open climate data.
- [Global power plant database](https://datasets.wri.org/dataset/globalpowerplantdatabase) - Open source database of power plants.
- [Galileo](https://galileo.gisdata.io/) - Geospatial data discovery and management platform.
- [Healthcare Services in Europe](https://ec.europa.eu/eurostat/web/gisco/geodata/basic-services#Healthcare) - Locations of healthcare services in Europe.
- [HydroSHEDS](https://www.hydrosheds.org/) - Consistent hydrographic data for global applications.
- [NASA Earth Data](https://search.earthdata.nasa.gov/search) - Search, discover, visualize, refine, and access NASA Earth Observation data in your browser with Earthdata Search.
- [Natural Earth](https://www.naturalearthdata.com/) - Free vector and raster map data.
- [OpenAerialMap](https://openaerialmap.org/) - Open service for accessing licensed imagery.
- [OpenMapTiles](https://openmaptiles.org/) - Free OpenStreetMap Vector Tiles.
- [OpenStreetMap](https://www.geofabrik.de/data/download.html) - Free, world-wide geographic data set.
- [Open Topography](https://opentopography.org/) - High-resolution topography data and tools.
- [Ookla internet speed data](https://github.com/teamookla/ookla-open-data) - Global network performance metrics.
- [Sentinel Hub custom scripts](https://github.com/sentinel-hub/custom-scripts) - Repository of custom scripts for Sentinel Hub.
- [USGS Earth Explorer](https://earthexplorer.usgs.gov/) - Query and order satellite images and more.
- [World Atlas TopoJSON](https://github.com/topojson/world-atlas) - Natural Earth's vector data as TopoJSON.
- [World Bank](https://www.unccd.int/resources/knowledge-sharing-system/world-banks-open-data) - Free access to global development data.
- [WorldPop](https://www.worldpop.org/) - Open access spatial demographic datasets.

### Web APIs
RESTful APIs for consuming geospatial data on the fly:

- [Address API](https://gisco-services.ec.europa.eu/addressapi/docs/) - Pan-European address data with geocoding and reverse-geocoding.
- [API Geo](https://geo.api.gouv.fr/) - Official French geographical data API.
- [ArcGIS location services](https://developers.arcgis.com/rest/location-based-services/) - Basemaps, Geocoding, Places, routing, and GeoEnrichment.
- [bng2latlong](https://www.getthedata.com/bng2latlong) - Converts British National Grid to latitude and longitude.
- [breezometer](https://docs.breezometer.com/api-documentation/introduction/) - Air Quality, Weather, Pollen, and Environmental data.
- [Country State City API](https://countrystatecity.in/) - Database of city, state, and country data.
- [Geoapify](https://apidocs.geoapify.com/) - Geospatial services such as maps, geocoding, and routing.
- [geonames](http://www.geonames.org/export/web-services.html) - Supports placename lookup and reverse geocoding.
- [Geocode.xyz](https://geocode.xyz/) - Reverse geocoding, forward geocoding, and geoparsing API.
- [GISCO data distribution API](https://gisco-services.ec.europa.eu/distribution/v2/) - European Commission data source for administrative regions and boundaries.
- [GraphHopper Route Optimization API](https://www.graphhopper.com/route-optimization/) - Solves various vehicle routing problems.
- [movebank-api](https://github.com/movebank/movebank-api-doc) - Platform for animal tracking data.
- [OpenAQ](https://openaq.org/) - An open-source air quality data platform, described as the largest in the original list.
- [Open Charge Map API](https://openchargemap.org) - Public registry of electric vehicle charging locations.
- [OpenCage](https://opencagedata.com/api) - Forward and reverse geocoding API using open data.
- [Open-Meteo](https://open-meteo.com/) - Global weather forecast API.
- [Open Notify](http://open-notify.org/Open-Notify-API/) - ISS location and number of people in space.
- [Open Postcode Geo API](https://www.getthedata.com/open-postcode-geo-api) - British postcodes with geospatial data.
- [OpenSky API](https://github.com/openskynetwork/opensky-api) - Retrieve live airspace information.
- [openrouteservice](https://openrouteservice.org/dev/#/api-docs) - Directions, isochrones, and geocoding services.
- [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Overpass_API) - Retrieve OpenStreetMap data via Overpass API.
- [opentopodata API](https://www.opentopodata.org/) - Open Topography Data API.
- [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) - Retrieve OpenStreetMap data.
- [RainViewer](https://www.rainviewer.com/api.html) - Free weather radar and satellite data API.
- [REST countries](https://restcountries.com/) - Get country information via a RESTful API.
- [Sunrise and sunset](https://sunrise-sunset.org) - Provides sunset and sunrise times for locations.
- [TomTom](https://developer.tomtom.com/api-explorer-index/documentation/product-information/introduction) - Geocoding, routing, traffic, and more.
- [USGS earthquake data](https://earthquake.usgs.gov/fdsnws/event/1/) - Search earthquake data by various parameters.
- [ZipCheckup API](https://github.com/artakulov/us-water-quality-data) - Free REST API for US ZIP-level environmental safety data: water quality, air quality, PFAS, radon, lead, flood risk.
- [what3words](https://developer.what3words.com/public-api) - Converts 3-word addresses to coordinates.
- [PostalCodes](https://postalcodes.info/api) - Global postal code search, country exports, and address validation data.

### Collections
Compilations and repositories of open geospatial datasets:
- [awesome-public-datasets](https://github.com/awesomedata/awesome-public-datasets) - A repository of open datasets across many categories.
- [Free GIS data](https://freegisdata.rtwilson.com/) - Links to over 500 sites providing freely available geographic datasets.
- [Public APIs](https://github.com/public-apis-dev/public-apis) - A collective list of free APIs for use in software and web development.
- [WRI](https://datasets.wri.org/) - World Resources Institute.
- [David Rumsey map collection](https://www.davidrumsey.com/) - Historical map archives.

## <a id="-notebooks"></a>Notebooks
Some JavaScript notebooks to help you code:

### Beginner
- [Hello, Leaflet](https://observablehq.com/@observablehq/hello-leaflet) - ObservableHQ.
- [Hello, Bertin.js](https://observablehq.com/@neocartocnrs/hello-bertin-js) - Nicolas Lambert.
- [Hello, Mapbox GL](https://observablehq.com/@observablehq/hello-mapbox-gl) - Mike Bostock.
- [Hello, eurostat-map.js](https://observablehq.com/@joewdavies/eurostat-map-js) - Joe Davies.
- [Hello, gridviz](https://observablehq.com/@neocartocnrs/hello-gridviz) - Nicolas Lambert.

### Intermediate
- [World Tour](https://observablehq.com/@d3/world-tour) - D3.
- [Choropleth](https://observablehq.com/@d3/choropleth) - D3.
- [How to make a nice scalebar](https://observablehq.com/@jgaffuri/nice-scale-bar) - Julien Gaffuri.
- [#GISCHAT Twitter Users with MapBoxGL - Globe Projection](https://observablehq.com/@chriszrc/gischat-twitter-users-with-mapboxgl-globe-projection) - Chris Marx.
- [Hexgrid maps with d3-hexgrid](https://observablehq.com/@larsvers/hexgrid-maps-with-d3-hexgrid) - Larsvers.
- [Bivariate Choropleth with Continuous Color Scales](https://observablehq.com/@stephanietuerk/bivariate-choropleth-with-continuous-color-scales) - Stephanie Tuerk.
- [Visualizing Eurostat grid data using Three.js & D3](https://observablehq.com/@joewdavies/visualizing-eurostat-grid-data-using-three-js-d3) - Joe Davies.

### Advanced

- [Try to impeach this? Challenge accepted!](https://observablehq.com/@karimdouieb/try-to-impeach-this-challenge-accepted) - Karim Douieb.
- [Bars and pubs in Paris](https://observablehq.com/@neocartocnrs/bars-pubs-in-paris) - Nicolas Lambert.
- [Brussels Street Gender Inequality](https://observablehq.com/@karimdouieb/brussels-streets-gender-inequality) - Karim Douieb.
- [Animating voting maps with regl](https://observablehq.com/@bmschmidt/animating-voting-maps-with-regl) - Benjamin Schmidt.
- [Election maps as dorling striped circles](https://observablehq.com/@jgaffuri/election-map-dorling-striped-circles) - Julien Gaffuri.
- [GeoParquet on the web](https://observablehq.com/@kylebarron/geoparquet-on-the-web) - Kyle Barron.
- [Interactive Regl wind demo](https://observablehq.com/@dkaoster/interactive-regl-wind-demo) - Daniel Kao.
- [Dorling cartogram of the Spanish Presidential election](https://observablehq.com/@adrianblanco/dorling-cartogram-of-the-spanish-presidential-election) - Adrián Blanco.
- [Visualizing earthquakes with Three.js](https://observablehq.com/@joewdavies/visualizing-earthquakes-with-three-js) - Joe Davies.
- [GeoArrow and GeoParquet in deck.gl](https://observablehq.com/@kylebarron/geoarrow-and-geoparquet-in-deck-gl) - Kyle Barron.

## <a id="world_map-web-maps"></a>Web maps
Web maps showing geographic, historical, environmental and statistical information:

- [Map of notable people](https://tjukanovt.github.io/notable-people) - Topi Tjukanov.
- [Submarine cable map](https://www.submarinecablemap.com/) - TeleGeography.
- [Radio Garden](https://radio.garden/) - 3D Globe Radio Tuner.
- [Map of every building in the United States](https://www.nytimes.com/interactive/2018/10/12/us/map-of-every-building-in-the-united-states.html) - New York Times.
- [Map of the Roman transport network](https://orbis.stanford.edu/) - The Stanford Geospatial Network Model of the Roman World.
- [WebGL Wind](https://github.com/mapbox/webgl-wind) - A WebGL-powered visualization of wind power; the original list states that it can render up to 1 million wind particles at 60 fps.
- [Statistical Atlas](https://ec.europa.eu/statistical-atlas/viewer) - A Leaflet-powered atlas showcasing Eurostat's statistics.
- [ShadeMap](https://shademap.app/) - Every mountain, building and tree shadow in the world simulated for any date and time.
- [ClimateArchive](https://climatearchive.org/) - An interactive visualisation of climate model data across time and space.
- [Old Maps Online](https://www.oldmapsonline.org/) - Browse historical places and search for old maps with timeline.
- [chronotrains](https://www.chronotrains.com) - Where can you go by train in 8h?
- [Castlemap](https://thecastlemap.com/) - A night map built from Wikidata, described in the original list as covering 7,044 castles, fortresses and palaces worldwide.
- [Europe Beach Map](https://europebeachmap.com/) - Every notable European beach on one map, with sea temperature, sand and best season for each.
- [Detourmap](https://detourmap.com/) - Waterfalls, caves, volcanoes and lonely coasts, plus the ruins, tombs, ghost towns and shipwrecks people left behind, on one world map, built from Wikidata.
- [Planetary Atlas](https://planetatlas.org) - Zoomable maps of 14 worlds built from open NASA, USGS, ESA and JAXA imagery, with the IAU nomenclature and 69 surface mission landing sites.
- [FilmMap](https://thefilmmap.com/) - Film and television filming locations, each traced to a Wikidata statement. The original list describes 15,272 locations across 161 countries.
- [Forest Fires Map](https://forest-fires-map.vercel.app/) - Interactive web map of forest fires.

## <a id="-web-apps"></a>Web apps
Plug-and-play geospatial web apps:

- [city roads](https://anvaka.github.io/city-roads/) - Render every single road in any city at once.
- [Datawrapper](https://github.com/datawrapper/datawrapper) - Create charts, maps, and tables.
- [Fantasy Map Generator](https://github.com/Azgaar/Fantasy-Map-Generator) - Free web application for creating and editing fantasy maps.
- [GeoLibre](https://github.com/opengeos/GeoLibre) - A lightweight, cloud-native GIS platform for visualizing, exploring, and analyzing geospatial data across desktop and web environments, with a responsive layout for mobile screens.
- [geotiff.io](http://app.geotiff.io/) - Provides quick access to easy-to-use raster processing.
- [IMAGE](https://gisco-services.ec.europa.eu/image/) - Tool for generating thematic maps.
- [Kepler](https://kepler.gl/demo) - A powerful open-source geospatial analysis tool for large-scale datasets.
- [magrit](https://magrit.cnrs.fr/) - An online application for thematic mapping.
- [mapshaper](https://mapshaper.org/) - Online editor for map data.
- [MapOnShirt](https://maponshirt.com) - Create colorful designs from maps and turn them into products.
- [Maputnik](https://github.com/maputnik/editor) - Free and open visual editor for Mapbox GL styles.
- [mapus](https://github.com/alyssaxuu/mapus) - Tool for collaboratively exploring and annotating maps.
- [Peak Map](https://github.com/anvaka/peak-map) - Visualizes elevation of any area on the map with filled area charts.
- [Plasio](https://github.com/verma/plasio) - Drag-n-drop in-browser LAS/LAZ point cloud viewer.
- [StoryMap JS](https://storymap.knightlab.com/) - Open-source alternative to ESRI's Story Map application.
- [TopoExport](https://topoexport.com) - Export 2D contour lines and 3D topography using open-source datasets.
- [uMap](https://github.com/umap-project/umap) - Create maps with OpenStreetMap layers and embed them in your site.
- [bboxFinder](http://bboxfinder.com/) - Helper page for finding bbox values from a map.
- [geojson.io](https://geojson.io/) - A quick, simple tool for creating, viewing, and sharing spatial data.
- [GeoJSONLint](https://geojsonlint.com/) - Validate and view GeoJSON.
- [Pharos AI](https://conflicts.app) - Open-source real-time intelligence dashboard for geopolitical conflict tracking with interactive DeckGL/MapLibre geospatial visualization. ([Source Code](https://github.com/Juliusolsson05/pharos-ai))
- [Pumperly](https://github.com/GeiserX/pumperly) - Open-source fuel price comparison and EV charging route planner using MapLibre GL JS, PostGIS, Valhalla routing, and Photon geocoding.
- [gpx studio](https://github.com/gpxstudio/gpxstudio.github.io) - Online tool for GPX editing.

## <a id="-colour-advice"></a>Colour advice
Colour tools for data visualization and cartography, including palettes, colour scales and SVG patterns:

- [CartoColor](https://github.com/CartoDB/CartoColor) - A set of custom color palettes built on top of standards for color use on maps.
- [Chroma.js Color Palette Helper](https://gka.github.io/palettes/#/9) - Chroma.js-powered tool for mastering multi-hued, multi-stop color scales.
- [ColorBrewer](https://colorbrewer2.org/) - Colour advice for maps, based on Dr. Cynthia Brewer's research.
- [Dicopal.js](https://github.com/riatelab/dicopal.js) - Discrete color palettes for JavaScript.
- [Textures.js](https://github.com/riccardoscalco/textures) - JavaScript library for creating SVG patterns, designed for data visualization.
- [viz-palette](https://www.susielu.com/data-viz/viz-palette) - Tool optimized for tweaking, copying, and pasting colors in and out of JavaScript.

## <a id="-icons"></a>Icons
Icons to add to your GIS websites:
- [font-GIS](https://github.com/Viglino/font-gis) - An icon font set for GIS and spatial analysis tools.
- [Map Icons Collection](https://mapicons.mapsmarker.com/) - A set of more than 1000 free and customizable icons to use as placemarks for your POI (points of interest) locations on your maps.
- [Material Symbols](https://fonts.google.com/icons?icon.query=map) - Over 2,990 glyphs in a single font file with many design variants, according to the original list.
- [Geoapify map marker playground](https://apidocs.geoapify.com/playground/icon/) - The Marker Icon API lets you create beautiful icons and use them as Map Markers.

## <a id="-videos"></a>Videos
Videos of web mapping presentations and tutorials:

- [Mapping Geolocation with Leaflet.js - Working with Data and APIs in JavaScript](https://www.youtube.com/watch?v=nZaZ2dB6pow) - The Coding Train.
- [10 Maps, and the Tech and Stories Behind Them](https://www.youtube.com/watch?v=PpWAKVjPlgU) - Maarten Lambrechts.
- [Intermediate Three.js Tutorial - Create a Globe with Custom Shaders](https://www.youtube.com/watch?v=vM8M4QloVL0&t=4418s) - Chris Courses.
- [Statistical Cartography - Design principles for statistical map design](https://www.youtube.com/watch?v=e803ElX5Q_c) - Julien Gaffuri.

## <a id="-further-reading"></a>Further reading
- [Fundamentals of Data Visualization](https://clauswilke.com/dataviz/) - Claus O. Wilke.
- [A Workbook for Interactive Cartography and Visualization on the Open Web](https://github.com/uwcartlab/webmapping) - Robert Roth, Carl Sack, Gareth Baldrica-Franklin, Yuying Chen, Rich Donohue, Lily Houtman, Tim Prestby, Robin Tolochko, Nick Underwood.
- [Thematic Mapping: 101 Inspiring Ways to Visualise Empirical Data](https://www.esri.com/en-us/esri-press/browse/thematic-mapping) - Kenneth Field.
- [Color use guidelines for mapping and visualization](https://colorbrewer2.org/learnmore/schemes_full.html#qualitative) - Cynthia A. Brewer.
- [Geospatial Network Visualization](https://geonetworks.github.io/) - A collection of visualization techniques for geospatial network data.
