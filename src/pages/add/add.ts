import {Component,ElementRef} from '@angular/core';
import {IonicPage,NavController,NavParams} from 'ionic-angular';
import {FormBuilder,FormArray,FormGroup,Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Http , Headers, RequestOptions} from '@angular/http';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-add',
	templateUrl: 'add.html',
})

export class AddPage {
	public form_egg: FormGroup;		

	constructor(public navCtrl: NavController, public navParams: NavParams, private _FB: FormBuilder,public httpClient: HttpClient,public http: Http) {
		this.initializeItems();
		 this.form_egg = this._FB.group({			 
			 egg     : this._FB.array([
				this.initTechnologyFields()
			 ])
		  });
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddPage');
		this.selectGame = "Select Game!!";
		this.description = "please select game to add easter eggs";
	}

	items;
	selectGame;
	description;
	name;
	detail;
	

	chooseGame(game: string) {
		this.selectGame = game;
		this.description = "";
	}

	initializeItems() {
		this.items = [
			'XCOM 2',
			'Dishonored 2',
			'Total War: Warhammer 2',
			'League of Legends',
			'Dark Souls 3',
			'Stardew Valley',
			'God of war 3',
			'Fallout 4',
			'Grand Theft Auto 5',
			'red dead redemption 2',
			'Subnautica',
			'Assassin\'s creed Origins',
			'Diablo 3',
			'Assassin\'s Creed Odyssey',
			'Devil May Cry 5',
			'Metro Exodus',
			'Counter-Strike: Global Offensive',
			'Undertale',
			'The Elder Scrolls 5: Skyrim',
			'Mafia 2',
			'Bioshock Infinite',
			'Overwatch',
			'Marvel\'s Spider-Man',
			'Minecraft',
			'Uncharted 4',
			'The Witcher 3: Wild Hunt',
			'Borderlands'
		];
	}

	getItems(ev) {
		// Reset items back to all of the items
		this.initializeItems();

		// set val to the value of the ev target
		var val = ev.target.value;

		// if the value is an empty string don't filter the items
		if (val && val.trim() != '') {

			this.items = this.items.filter((item) => {
				return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
	}

	initTechnologyFields(): FormGroup {
		return this._FB.group({
			easter_name: ['', Validators.required],
			easter_detail: ['', Validators.required],
			easter_file: ['', Validators.required]
		});
	}

	addNewInputField(): void {
		const control = < FormArray > this.form_egg.controls.egg;
		control.push(this.initTechnologyFields());
	}
	removeInputField(i: number): void {
		const control = < FormArray > this.form_egg.controls.egg;
		control.removeAt(i);
	}

	manage(val: any): void {
		let temp:any;
		var input = document.querySelectorAll('input[type="file"]');
		let headers = new Headers();
		headers.append('Authorization' , 'Client-ID 57ce76ef7323415');
		let options = new RequestOptions({ headers: headers });
		let postData=new FormData();
		postData.append('name',this.name+" - "+this.selectGame);
		postData.append('detail',this.detail);
		postData.append('pic','');
		for(var i = 0; i < this.form_egg.controls.egg.value.length; i++){
			postData.append('egg_name[]',this.form_egg.controls.egg.value[i].easter_name);
			postData.append('egg_detail[]',this.form_egg.controls.egg.value[i].easter_detail);
			//postData.append('egg_pic[]','');
		}
		for (var i = 0; i < input.length; i++) {
			
			let formData=new FormData();
			formData.append('image' , input[i].files[0], input[i].files[0].name);
			this.http.post("https://api.imgur.com/3/image",formData,options)
			.subscribe(data => {
					console.log(data);
					temp=data;
					var json = JSON.parse(temp._body);
					postData.append('egg_pic[]',"https://imgur.com/"+json.data.id);
				}, error => {
					console.log(error);
			});
		}
		this.httpClient.post('https://unswayable-dozen.000webhostapp.com/post.php?method=add',postData)
		.subscribe(data => {
				console.log(data['_body']);
			}, error => {
				console.log(error);
		});
		
		
	}
}