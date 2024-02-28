/*
	Author: Gustavo Silva Souza
	Date: 28/02/24 08:07
	Description: programa que soma dois n�meros
*/



//bibliotecas
#include <stdio.h>
#include <locale.h>


//prototipa��o
float somador(float n1, float n2); //tudo isso se chama "assinatura da fun��o", que cont�m o nome dela, o tipo e os par�metros dela
float lerNum();
void gerarLinha(int qtdCaracteres);



//fun��o principal
int main()
{	
	setlocale(LC_ALL, "Portuguese");
	printf("Resultado: %.2f", somador(lerNum(), lerNum()));
}



//fun��es
float somador(float n1, float n2)
{
	return n1 + n2;
}

float lerNum()
{
	float n = 0;
	printf("N�mero: ");
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
