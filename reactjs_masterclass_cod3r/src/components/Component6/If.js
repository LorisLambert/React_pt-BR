// ARQUIVO COM CONDICIONAL IF - OBS.: dessa forma, é possível identificar se não é número
// ESSE ARQUIVO NÃO NECESSITA DE IMPORT REACT

export default function (props){
    if(props.test){
        return props.children
    }else{
        return false
    }
}