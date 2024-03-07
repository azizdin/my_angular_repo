import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaryDeductionComponent } from './features/salary-deduction/pages/salary-deduction/salary-deduction.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaryDeductionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-calculator';
}
