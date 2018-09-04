import {Answer} from "./answer";

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
