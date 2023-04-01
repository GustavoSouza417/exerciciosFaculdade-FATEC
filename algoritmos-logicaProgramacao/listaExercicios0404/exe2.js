//CABEÇALHO
	//descrição: programa que lê 3 números e aponta qual deles é o maior
	//autor:     Gustavo Silva Souza
	//data:      01/04/2023

//VARIÁVEIS
	//float num1, num2, num3

//INÍCIO
	var num1 = 3
	var num2 = 3
	var num3 = 3

	/*
		num1 num2 num3
		num1 num3 num2

		num2 num1 num3
		num2 num3 num1

		num3 num1 num2
		num3 num2 num1
		
		num1 num2 | > num3
		num1 num2 | < num3

		num1 num3 | > num2
		num1 num3 | < num2

		num2 num3 | > num1
		num2 num3 | < num1

		num1 == num2 == num3
	*/

	if(num1 > num2 && num1 > num3 && num2 > num3){
		console.log("O número " + num1 + " é o maior")
	}
	else{
		if(num1 > num2 && num1 > num3 && num2 < num3){
			console.log("O número " + num1 + " é o maior")
		}
		else{
			if(num2 > num1 && num2 > num3 && num1 > num3){
				console.log("O número " + num2 + " é o maior")
			}
			else{
				if(num2 > num1 && num2 > num3 && num1 < num3){
					console.log("O número " + num2 + " é o maior")
				}
				else{
					if(num3 > num1 && num3 > num2 && num1 > num2){
						console.log("O número " + num3 + " é o maior")
					}
					else{
						if(num3 > num1 && num3 > num2 && num1 < num2){
							console.log("O número " + num3 + " é o maior")
						}
						else{
							if(num1 == num2 && num1 > num3){
								console.log("Há dois números iguais (" + num1 + ") e esse valor é maior que o outro (" + num3 + ")")
							}
							else{
								if(num1 == num2 && num1 < num3){
									console.log("Há dois números iguais (" + num1 + ") e esse valor é menor que o outro (" + num3 + ")")
								}
								else{
									if(num1 == num3 && num1 > num2){
										console.log("Há dois números iguais (" + num1 + ") e esse valor é maior que o outro (" + num2 + ")")
									}
									else{
										if(num1 == num3 && num1 < num2){
											console.log("Há dois números iguais (" + num1 + ") e esse valor é menor que o outro (" + num2 + ")")
										}
										else{
											if(num2 == num3 && num2 > num1){
												console.log("Há dois números iguais (" + num2 + ") e esse valor é maior que o outro (" + num1 + ")")
											}
											else{
												if(num2 == num3 && num2 < num1){
													console.log("Há dois números iguais (" + num2 + ") e esse valor é menor que o outro (" + num1 + ")")
												}
												else{
													if(num1 == num2 && num1 == num3){
														console.log("Nenhum número é maior que o outro. Todos são iguais (" + num1 + ")")
													}
													else{
														console.log("Ocorreu algum erro durante a execução da aplicação")
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
			}
		}
	}