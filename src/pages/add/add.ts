import {Component,ElementRef} from '@angular/core';
import {IonicPage,NavController,NavParams} from 'ionic-angular';
import {FormBuilder,FormArray,FormGroup,Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { Http , Headers, RequestOptions} from '@angular/http';
import axios from 'axios';
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

	async manage(val: any) {
		let postData=new FormData();
		postData.append('name',this.name+" - "+this.selectGame);
		postData.append('detail',this.detail);		
		for(var i = 0; i < this.form_egg.controls.egg.value.length; i++){
			postData.append('egg_name[]',this.form_egg.controls.egg.value[i].easter_name);
			postData.append('egg_detail[]',this.form_egg.controls.egg.value[i].easter_detail);
		}
		var input = document.querySelectorAll('input[type="file"]');
		var config = {headers: {'Authorization': 'Client-ID 57ce76ef7323415'}};
		var promises = [];
		for (var i = 0; i < input.length; i++) {
			let formData=new FormData();
			formData.append('image' , input[i].files[0], input[i].files[0].name);
			promises.push(axios.post("https://api.imgur.com/3/image", formData,config));
		}
		axios.all(promises).then(function(results) {
			results.forEach(function(response) {
				console.log(response.data.data.link);
				postData.append('egg_pic[]',response.data.data.link);
			})
			postData.append('pic',results[0].data.data.link);
			axios.post('https://unswayable-dozen.000webhostapp.com/post.php?method=add', postData);
		});	
	}
}