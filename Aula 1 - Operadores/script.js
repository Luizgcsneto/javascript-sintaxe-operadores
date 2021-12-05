function comparaNumeros(num1,num2){

    let resultado
    if(num1 !== num2)
        resultado = num1 + num2

    if(num1 !== num2 && resultado < 10 && resultado < 20){
        console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultado}, que é menor que 10 e menor que 20`)
    } else if (num1 !== num2 && resultado > 10 && resultado < 20){
        console.log(`Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultado}, que é maior que 10 e menor que 20`)
    } else {
       console.log(`os números são iguais`)
    }

}

comparaNumeros(1,2)