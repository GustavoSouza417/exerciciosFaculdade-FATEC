//CABEÇALHO
	//descrição: programa que lê altura e peso, calcula o IMC e gera uma classificação de peso
	//autor:     Gustavo Silva Souza
	//data: 01/04/2023

//VARIÁVEIS
	//float peso, altura, imc

//INÍCIO
	var peso = 58.3
	var altura = 1.73

	if(peso == 0 || altura == 0){
		console.log("O valor \"0\" não pode ser computado para nenhum dos dois componentes")
	}
	else{
		if(peso < 0 || altura < 0){
			console.log("Digite apenas números naturais (maiores que zero)")
		}
		else{
			var imc = peso / (altura * altura)
			console.log(imc)

			if(imc <= 0){
				console.log("ERRO: o valor do IMC obtido é inválido")
			}
			else{
				if(imc > 0 && imc <= 16.9){
					console.log("Muito abaixo do peso")
				}
				else{
					if(imc >= 17 && imc <= 18.4){
						console.log("Abaixo do peso")
					}
					else{
						if(imc >= 18.5 && imc <= 24.9){
							console.log("Peso normal")
						}
						else{
							if(imc >= 25 && imc <= 29.9){
								console.log("Pouco acima do peso")
							}
							else{
								if(imc >= 30 && imc <= 34.9){
									console.log("Obesidade grau I")
								}
								else{
									if(imc >= 35 && imc <= 40){
										console.log("Obesidade grau II")
									}
									else{
										if(imc > 40){
											console.log("Obesidade grau III")
										}
										else{
											console.log("Ocorreu algum erro durante a execução do programa")
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
//FIM