import * as bcrypt from "bcrypt";

export default class Usuario {
    private readonly _nome: string
    private readonly _email: string
    private readonly _senha: string
    private readonly _foto: string | null

    private constructor(nome: string, email: string, senha: string, foto: string | null) {
        this._nome = nome
        this._email = this.validateEmail(email)
        this._senha = this.validateSenha(senha)
        this._foto = foto
    }

    static create(nome: string, email: string, senha: string, foto: string | null) {
        if(nome != '' && email != '' && senha != ''){
            return new Usuario(nome, email, senha, foto)
        } else {
            return 'algum campo está em branco'
        }
        
    }
    private validateSenha( senha: string) {
        const validatesenha = new RegExp("^(?=.*[A-Za-z])(?=.*?[0-9]).{6,}$")
        
        if(senha == "" || senha == null || !(validatesenha.test(senha))) {
          throw new Error("senha é obrigatorio, devendo conter números, simbolos e letras maiusculas e minusculas ")
    
        }
        const salt = bcrypt.genSaltSync(12);
        let senhaH = bcrypt.hashSync(senha, salt);
        return senhaH
    }

    private validateEmail(email: string) {
    
    
        const validateEmail = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z]+[0-9]{2})+)(@aluno.ifce.edu.br)")
        const validateEmail1 = new RegExp("(([a-z]+\.?[a-z]+\.?[a-z])+)(@ifce.edu.br)")
    
        if(this.nome == "" || this.nome == null) {
          throw new Error("nome é obrigatorio")
        }
    
        if(email == "" || email == null ) { //validade se nao e nulo ou vazio
          if(!(validateEmail.test(this.email)) || !(validateEmail1.test(this.email))) { //validade se o email é de aluno ou professor
            throw new Error("crie o email apartir do email institucional")
          }
          
        }
        return email
        
        
        
    }
    

    public get nome() : string {
        return this._nome
    }
    
    public get email() : string {
        return this._email
    }
    
    public get senha() : string {
        return this._senha
    }
    
    public get foto() : string | null {
        return this._foto
    }
    
    
    
}