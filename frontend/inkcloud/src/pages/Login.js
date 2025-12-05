import Button from "../Components/Button";
import Campos from "../Components/Campos";
import Label from "../Components/Label";
import Semi_titulo from "../Components/Semi_titulo";
import Titulo_logo from "../Components/Titulo_logo";

function Login() {
    return (
        <>
            <div className="Titulos">
                <Titulo_logo></Titulo_logo>
                <Semi_titulo subTitulo="Login"></Semi_titulo>
            </div>
            <div className="container-inputs">
                <Label label="Nome"></Label>
                <Campos placeholder="Jonasquim" tipo="text" ></Campos>
                <Label label="Senha"></Label>
                <Campos placeholder="************" tipo="password" ></Campos>
                <div className="botoes">
                    <Button tipo="submit" nome="Cancelar"></Button>
                    <Button tipo="submit" nome="Entrar"></Button>
                </div>
            </div>
        </>
    )
}


export default Login;