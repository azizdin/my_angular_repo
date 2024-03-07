import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { TextInputComponent } from '../../../../shared/components/text-input/text-input.component';

@Component({
  selector: 'app-salary-deduction',
  standalone: true,
  imports: [ButtonComponent, TextInputComponent],
  templateUrl: './salary-deduction.component.html',
  styleUrl: './salary-deduction.component.css',
})
export class SalaryDeductionComponent {}
