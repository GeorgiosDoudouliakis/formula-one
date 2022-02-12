import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Map from 'ol/Map';
import * as olProj from 'ol/proj';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  @Input() lat: string;
  @Input() long: string;
  map: Map;

  constructor() { }

  ngOnInit(): void {
    this.initializeMap();
    this.initializePoint();
  }

  private initializeMap() {
    this.map = new Map({
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

  private initializePoint() {
    const pointFeature = new Feature({
      geometry: new Point(fromLonLat([+this.long, +this.lat])),
      size: 20,
    });

    const vectorSource = new VectorSource({
      features: [pointFeature],
    });

    const vectorLayer = new VectorLayer({
      source: vectorSource,
      style: this.styleFunction(),
    });

    this.map.addLayer(vectorLayer);
  }

  private styleFunction() {
    return new Style({
      image: new CircleStyle({
        radius: 10,
        fill: new Fill({ color: '#E10600' }),
        stroke: new Stroke({ color: 'white', width: 1 })
      })
    })
  }
}
