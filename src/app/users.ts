interface Answer {
	numero:Number;
	nota:number;
	respuesta:String;
	estado:Boolean;
}

export class Users {
	_id: String;
	nombres: String;
	apellidos: String;
	upd:String;
	create:String;
	tipoDoc:String;
	documento:String;
	estado:String;
	rol:String;
	preguntas: Array<Answer>; 
}
