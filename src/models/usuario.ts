import * as bcrypt from "bcrypt";
import {v4 as uuidv4} from "uuid";

export default class Usuario {

    private readonly _uuid: string;
    private readonly _name: string;
    private readonly _email: string;
    private readonly _password: string;
    private readonly _photo: string | null;
    private readonly _enterprise: string;

    private constructor(name: string, email: string, senha: string, photo: string | null, enterprise: string) {
        this._uuid = uuidv4();
        this._name = name
        this._email = this.validateEmail(email)
        this._password = this.validateSenha(senha)
        this._photo = photo
        this._enterprise = enterprise
    }

    static create(uuid:string | null, name: string, email: string, password: string, photo: string | null, enterprise: string) {

        if(uuid == null && name != '' && email != '' && password != ''){
            return new Usuario(name, email, password, photo, enterprise)
        } else {
            return 'algum campo está em branco'
        }
        
    }
    private validateSenha( password: string) {
        const validatesenha = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$")
        
        if(password == "" || password == null || !(validatesenha.test(password))) {
          throw new Error("senha é obrigatorio, devendo conter números, simbolos e letras maiusculas e minusculas ")
    
        }
        const salt = bcrypt.genSaltSync(12);
        let passwordH = bcrypt.hashSync(password, salt);
        return passwordH
    }

    private validateEmail(email: string) {
    
    
        const validateEmail = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z]+[0-9]{2})+)(@aluno.ifce.edu.br)")
        const validateEmail1 = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z])+)(@ifce.edu.br)")
    
        if(this.name == "" || this.name == null) {
          throw new Error("nome é obrigatorio")
        }
    
        if(email == "" || email == null ) { //validade se nao e nulo ou vazio
          if(!(validateEmail.test(this.email)) || !(validateEmail1.test(this.email))) { //validade se o email é de aluno ou professor
            throw new Error("crie o email apartir do email institucional")
          }
          
        }
        return email
        
        
        
    }
    

    public get name() : string {
        return this._name
    }
    
    public get email() : string {
        return this._email
    }
    
    public get password() : string {
        return this._password
    }
    
    public get photo() : string | null {
        return this._photo
    }
    
    
    
}