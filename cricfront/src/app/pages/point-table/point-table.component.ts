import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Team {
  name: string;
  flag: string;
  matches: number;
  won: number;
  lost: number;
  tied: number;
  nr: number;
  points: number;
  nrr: number;
}

interface MatchResult {
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  result: string;
  date: string;
}

@Component({
  selector: 'app-point-table',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.css']
})
export class PointTableComponent {
  pointTable: Team[] = [
    { name: 'India', flag: 'india.png', matches: 9, won: 9, lost: 0, tied: 0, nr: 0, points: 18, nrr: 1.407 },
    { name: 'South Africa', flag: 'south-africa.png', matches: 9, won: 7, lost: 2, tied: 0, nr: 0, points: 14, nrr: 1.261 },
    { name: 'Australia', flag: 'australia.png', matches: 9, won: 7, lost: 2, tied: 0, nr: 0, points: 14, nrr: 0.841 },
    { name: 'New Zealand', flag: 'new-zealand.png', matches: 9, won: 5, lost: 4, tied: 0, nr: 0, points: 10, nrr: 0.743 },
    { name: 'Pakistan', flag: 'pakistan.png', matches: 9, won: 4, lost: 5, tied: 0, nr: 0, points: 8, nrr: -0.199 },
    { name: 'Afghanistan', flag: 'afghanistan.png', matches: 9, won: 4, lost: 5, tied: 0, nr: 0, points: 8, nrr: -0.336 },
    { name: 'England', flag: 'england.png', matches: 9, won: 3, lost: 6, tied: 0, nr: 0, points: 6, nrr: -0.572 },
    { name: 'Bangladesh', flag: 'bangladesh.png', matches: 9, won: 2, lost: 7, tied: 0, nr: 0, points: 4, nrr: -1.087 },
    { name: 'Sri Lanka', flag: 'sri-lanka.png', matches: 9, won: 2, lost: 7, tied: 0, nr: 0, points: 4, nrr: -1.419 },
    { name: 'Netherlands', flag: 'netherlands.png', matches: 9, won: 2, lost: 7, tied: 0, nr: 0, points: 4, nrr: -1.825 }
  ];

  recentResults: MatchResult[] = [
    { team1: 'India', team2: 'Netherlands', score1: '410/4', score2: '250/10', result: 'India won by 160 runs', date: '12 Nov 2023' },
    { team1: 'Australia', team2: 'South Africa', score1: '215/10', score2: '212/10', result: 'Australia won by 3 runs', date: '16 Nov 2023' },
    { team1: 'England', team2: 'Pakistan', score1: '337/9', score2: '244/10', result: 'England won by 93 runs', date: '11 Nov 2023' }
  ];
}