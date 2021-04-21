import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BitcoinService } from '../../services/bitcoin.service';
import data from '../../data/transactions';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  constructor(private bitcoinService: BitcoinService) {}

  async ngOnInit() {
    const data = await this.bitcoinService.getMarketPrice();
    const marketPriceY = data.map((coord) => coord.y);
    this.marketPriceY = marketPriceY;
    const marketPriceX = data.map((coord) =>
      new Date(coord.x).toLocaleTimeString()
    );
    this.marketPriceX = marketPriceX;

  }

  transactionsData = data.values;
  transactionsY = this.transactionsData.map((coord) => coord.y);

  marketPriceY = null;
  marketPriceX = null;


// First chart
  public lineChartData: ChartDataSets[] = [
    { data: this.transactionsY, label: 'Confirmed Transactions Per Day'},
  ];

  public lineChartLabels: Label[] = this.transactionsData.map((coord) =>
    new Date(coord.x).toLocaleTimeString()
  );
  public lineChartOptions: ChartOptions & { annotation?: any } = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#008b8b59',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  // Second chart
  public secondChartData: ChartDataSets[] = [
    { data: this.marketPriceY, label: 'Market Price (USD)'},
  ];

  public secondChartLabels: Label[] = this.marketPriceX
  public secondChartOptions: ChartOptions & { annotation?: any } = {
    responsive: true,
  };
  public secondChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: '#008b8b59',
    },
  ];
  public secondChartLegend = true;
  public secondChartType = 'line';
  public secondChartPlugins = [];
}
