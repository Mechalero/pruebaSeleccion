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
	tipoDoc:String;
	documento:String;
	estado:String;
	rol:String;
	preguntas: Array<Answer>; 
}
