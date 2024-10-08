import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

import { JsonDataService } from '../services/json-data.service';

@Component({
	selector: 'app-smes',
	templateUrl: './smes.component.html',
	styleUrls: ['./smes.component.scss'],
	animations: [
		trigger('fadeIn', [
			transition(':enter', [
				// :enter is alias to 'void => *'
				style({ opacity: 0 }),
				animate(600, style({ opacity: 1 })),
			]),
		]),
		trigger('fadeInGrow', [
			transition(':enter', [
				query(':enter', [
					style({ opacity: 0, marginTop: 20 }),
					stagger('1300ms', [
						animate('400ms ease', style({ opacity: 1, marginTop: 0 }))
					])
				], { optional: true })
			])
		])
	],
})
export class SmesComponent implements OnInit {

	chatSamples = [
		{
			senderId: 'SAPAMA',
			chats: [
				{
					type: '',
					message: ''
				},
				{
					type: 'IN',
					message: 'QLN8X4J07KX5YZ confirmed KES 4,500 received from Saul 2547XXXXXXXX at 30/09/2022 8:28 AM'
				},
				{
					type: '',
					message: ''
				},
				{
					type: 'IN',
					message: 'Dear Joshua, Your balance for W1 is 900.00. Kindly clear your bill via MPESA Paybill 40XXXXX (Sapama Investments), account number W1 to avoid penalties and inconveniences.'
				},
			]
		},
		{
			senderId: 'CAKE_YARD',
			chats: [
				{
					type: '',
					message: ''
				},
				{
					type: 'IN',
					message: 'Dear John, your order for Vanilla 2kg cake, item number #102, has been received. Please pay a deposit of Ksh 1200 for it to be confirmed. Regards Cakeyard, Till No: 685330.'
				},
				{
					type: '',
					message: ''
				},
				{
					type: 'IN',
					message: 'Dear John, your payment for item number #102 costing Ksh 1200 has been received.'
				},
			]
		},
		{
			senderId: 'Pika Sauce',
			chats: [
				{
					type: '',
					message: ''
				},
				{
					type: 'IN',
					message: 'Hello, reward yourself with some awesome burgers for 25% less on selected burgers or get 50% off on Pizza Pies this week. T&C\'s apply. Valid while stocks lasts.'
				},
				{
					type: 'IN',
					message: 'Hello, get KES 150 off your next 2 orders worth KES 700 & above with the promo code 150KESOFF. Valid for this week\'s orders only. T&C\'s apply.'
				},
			]
		},
		{
			senderId: 'Tujenge HW',
			chats: [
				{
					type: '',
					message: ''
				},
				{
					type: 'IN',
					message: 'Dear Ned, your payment for 50 Iron Sheets has been received. A transporter is en-route to your drop-off location and will be in touch for further delivery instructions.'
				},
				{
					type: 'IN',
					message: 'Happy New Month ! We celebrate you for being part of us , enjoy 5% off on selected items this month , click https://tujengehardware.co.ke/offers.'
				},
			]
		}
	];


	ngOnInit(): void {


		this.currentChat = this.chatSamples[0];
		setTimeout(() => {
			this.goToNextChat();
		}, 9000);


		goToNextChat(): void {

			for(let i = 0; i <= 1000; i++) {
			// console.log(i);

			setTimeout(() => {

				this.activeChatIndex += 1;
				this.activeChatIndex = this.activeChatIndex % this.chatSamples.length;

				this.currentChat = '';

				setTimeout(() => {
					this.currentChat = this.chatSamples[this.activeChatIndex];
				}, 10);

			}, i * 9000)

		}
	}
}
}


