import Button from "../Components/Button";
import Campos from "../Components/Campos";
import Label from "../Components/Label";
import Semi_titulo from "../Components/Semi_titulo";
import Titulo_logo from "../Components/Titulo_logo";

function Cadastro() {
    return (
        <>
        <div>
            <Titulo_logo></Titulo_logo>
            <Semi_titulo subTitulo = "Cadastro"></Semi_titulo>
        </div>
        <div className="container-inputs">
            <Label label = "Nome"></Label>
            <Campos placeholder ="Fulano de Tal Oliveira" tipo="text" ></Campos>
            <Label label = "Criar Senha"></Label>
            <Campos placeholder ="************" tipo="password" ></Campos>
            <Label label = "Confirmar Senha"></Label>
            <Campos placeholder ="************" tipo="password" ></Campos>
            <Button tipo = "submit" nome="Enviar"></Button>
        </div>
        </>
    )
}




export default Cadastro;