import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TurnoverServiceService } from '../../service/turnover-service.service';
import { Client } from 'src/app/interface/client-interface';
import { ClientServiceService } from 'src/app/service/client-service.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  constructor(private clientService : ClientServiceService) { }
  inviaCliente(form: NgForm){
    if (form.valid) {
      const client: Client = form.value;

      // const clientDate = formatDate(client.addDate, 'yyyy-MM-dd', 'en-US');
      // const lastContact = formatDate(client.lastContact, 'yyyy-MM-dd', 'en-US');

      // client.addDate = new Date(clientDate);
      // client.lastContact = new Date(lastContact);

      this.clientService.saveClient(client).subscribe(
        response => {
          console.log('Cliente aggiunto con successo:', response);
  
        },
        error => {
          console.error('Errore nell\'invio del cliente:', error);
  
        }
      );
    } else {
      console.error('Il modulo non è valido');
    }
  }

}
