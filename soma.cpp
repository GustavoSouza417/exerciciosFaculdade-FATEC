/*
	Author: Gustavo Silva Souza
	Date: 28/02/24 08:07
	Description: programa que soma dois números
*/



//bibliotecas
#include <stdio.h>
#include <locale.h>


//prototipação
float somador(float n1, float n2); //tudo isso se chama "assinatura da função", que contém o nome dela, o tipo e os parâmetros dela
float lerNum();
void gerarLinha(int qtdCaracteres);



//função principal
int main()
{	
	setlocale(LC_ALL, "Portuguese");
	printf("Resultado: %.2f", somador(lerNum(), lerNum()));
}



//funções
float somador(float n1, float n2)
{
	return n1 + n2;
}

float lerNum()
{
	float n = 0;
	printf("Número: ");
	scanf("%f", &n);
	gerarLinha(50);
	return n;
}

void gerarLinha(int qtdCaracteres)
{
	for(int i = 0; i < qtdCaracteres; i++)
		printf("-");
	
	printf("\n");
}
