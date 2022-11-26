/* Place angular imports */
import { Component, OnInit, Input } from '@angular/core';

/* Place open layers imports */
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import * as olProj from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Icon, Style } from 'ol/style';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Input() public lat: string;
  @Input() public long: string;
  private _map: Map;

  public ngOnInit(): void {
    this._initializeMap();
    this._initializePoint();
  }

  private _initializeMap(): void {
    this._map = new Map({
      target: 'map-container',
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([+this.long, +this.lat]),
        zoom: 8
      })
    });
  }

  private _initializePoint(): void {
    const pointFeature = new Feature({
      geometry: new Point(fromLonLat([+this.long, +this.lat])),
      size: 20,
    });

    const vectorSource = new VectorSource({
      features: [pointFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: this._styleFunction(),
    });

    this._map.addLayer(vectorLayer);
  }

  private _styleFunction(): Style {
    return new Style({
      image: new Icon({
          src: "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" height="36px" viewBox="0 0 24 24" width="36px" fill="#1f1f27"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`)
      })
    })
  }
}
