import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-practise25',
  standalone: true,
  imports: [
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './practise25.component.html',
  styleUrl: './practise25.component.scss'
})
export class Practise25Component {
  animalControl = new FormControl<Animal | null>(null, Validators.required);

  animals: Animal[] = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];

  selectedOption = ''
  selectArray = [
    { name: '拉麵' },
    { name: '壽司' },
  ]
}

interface Animal {
  name: string;
  sound: string;
}
