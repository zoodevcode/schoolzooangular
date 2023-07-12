import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  nom!: string;
  prenom!: string;
  mois: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  jours: number[] = Array.from({length: 31}, (_, i) => i + 1);
  annees: number[] = Array.from({length: new Date().getFullYear() - 1959}, (_, i) => 1960 + i);

  selectedMois!: string;
  selectedJour!: number;
  selectedAnnee!: number;

  sexe!: string;
  niveauEtude!: string;
  email!: string;
  telephone!: string;
  http: any;
   
  submitForm() {
    // Créez un objet représentant les données du formulaire
    const formData = {
      nom: this.nom,
      prenom: this.prenom,
      selectedJour: this.selectedJour,
      selectedAnnee: this.selectedAnnee,
      selectedMois: this.selectedMois,
      telephone: this.telephone,
      sexe: this.sexe,
      email: this.email,
      niveauEtude: this.niveauEtude


  };

  
   // Envoyez la requête HTTP POST vers le serveur Spring Boot
   this.http.post('http://localhost:8080/students', formData).subscribe(
    (response: any) => {
      console.log('Formulaire soumis avec succès', response);
      // Réinitialisez les valeurs du formulaire si nécessaire
      this.resetForm();
    },
    (error: any) => {
      console.error('Erreur lors de la soumission du formulaire', error);
      // Gérez l'erreur de manière appropriée
    }
  );
  }

  resetForm() {
    this.nom = '';
    this.prenom = '';
    this.selectedMois = '';
    this.selectedJour = -1;
    this.selectedAnnee = -1;
    this.sexe = '';
    this.niveauEtude = '';
    this.email = '';
    this.telephone = '';
  }
}
