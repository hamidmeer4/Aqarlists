import { Component, HostListener, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-verticale-chart',
  templateUrl: './verticale-chart.component.html',
  styleUrls: ['./verticale-chart.component.scss']
})
export class VerticaleChartComponent implements OnInit {
  view: [number, number] = [600, 400];
  showXAxis = true;
  showYAxis = true;
  colorScheme: Color = {
    domain: ['#002F6D', '#002F6D4D'],
    name: '',
    selectable: false,
    group: ScaleType.Time
  };
  showLabels = true;

  public multi = [
    {
      "name": "1 Aug",
      "series": [
        {
          "name": "2018",
          "value": 224
        },
        {
          "name": "2017",
          "value": 122
        }
      ]
    },
    {
      "name": "8 Aug",
      "series": [
        {
          "name": "2018",
          "value": 112
        },
        {
          "name": "2017",
          "value": 76
        }
      ]
    },
    {
      "name": "15 Aug",
      "series": [
        {
          "name": "2018",
          "value": 296
        },
        {
          "name": "2017",
          "value": 209
        }
      ]
    },
    {
      "name": "22 Aug",
      "series": [
        {
          "name": "2018",
          "value": 257
        },
        {
          "name": "2017",
          "value": 205
        }
      ]
    },
    {
      "name": "29 Aug",
      "series": [
        {
          "name": "2018",
          "value": 196
        },
        {
          "name": "2017",
          "value": 129
        }
      ]
    },
    {
      "name": "5 Sep",
      "series": [
        {
          "name": "2018",
          "value": 204
        },
        {
          "name": "2017",
          "value": 149
        }
      ]
    }
  ];

  ngOnInit(): void {
    this.updateViewDimensions();
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateViewDimensions();
  }

  private updateViewDimensions(): void {
    const width = window.innerWidth * 0.8;
    const height = 400;
    this.view = [width, height];
  }
}
