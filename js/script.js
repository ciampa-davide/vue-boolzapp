var app = new Vue(
  {
    el:"#root",
    data:{
      contacts: [
  	{
  		name: 'Michele',
  		avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-372-456324.png',
  		visible: true,
  		messages: [
  			{
  				date: '10/01/2020 15:30:55',
  				text: 'Hai portato a spasso il cane?',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 15:50:00',
  				text: 'Ricordati di dargli da mangiare',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 16:15:22',
  				text: 'Tutto fatto!',
  				status: 'received'
  			}
  		],
  	},
  	{
  		name: 'Fabio',
  		avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-367-456319.png',
  		visible: true,
  		messages: [
  			{
  				date: '20/03/2020 16:30:00',
  				text: 'Ciao come stai?',
  				status: 'sent'
  			},
  			{
  				date: '20/03/2020 16:30:55',
  				text: 'Bene grazie! Stasera ci vediamo?',
  				status: 'received'
  			},
  			{
  				date: '20/03/2020 16:35:00',
  				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
  				status: 'sent'
  			}
  		],
  	},
  	{
  		name: 'Samuele',
  		avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
  		visible: true,
  		messages: [
  			{
  				date: '28/03/2020 10:10:40',
  				text: 'La Marianna va in campagna',
  				status: 'received'
  			},
  			{
  				date: '28/03/2020 10:20:10',
  				text: 'Sicuro di non aver sbagliato chat?',
  				status: 'sent'
  			},
  			{
  				date: '28/03/2020 16:15:22',
  				text: 'Ah scusa!',
  				status: 'received'
  			}
  		],
  	},
  	{
  		name: 'Luisa',
  		avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png',
  		visible: true,
  		messages: [
  			{
  				date: '10/01/2020 15:30:55',
  				text: 'Lo sai che ha aperto una nuova pizzeria?',
  				status: 'sent'
  			},
  			{
  				date: '10/01/2020 15:50:00',
  				text: 'Si, ma preferirei andare al cinema',
  				status: 'received'
  			}
  		],
  	},
  ],
  otherUser:{}
},
    methods: {

      selectUser: function(index){
        this.otherUser = this.contacts[index];
        console.log(this.otherUser);
      }
  }
})
