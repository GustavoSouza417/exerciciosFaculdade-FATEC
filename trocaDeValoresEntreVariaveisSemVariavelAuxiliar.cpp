/*
	Author: Gustavo Silva Souza
	Date: 28/02/24 09:50
	Description: programa que l� duas vari�veis e troca o valor delas entre elas
*/



//bibliotecas
#include <stdio.h>
#include <locale.h>



//prototipa��o
int lerNum();
void trocaValores(int *, int *);
void exibirTroca(int, int);



//fun��o principal
main()
{
	setlocale(LC_ALL, "Portuguese");
	
	int a, b;
	a = b = 0;
	
	a = lerNum();
	b = lerNum();
	
	trocaValores(&a, &b);
	exibirTroca(a, b);
}



//fun��es
int lerNum()
{
	int numero = 0;
	printf("Digite um n�mero: ");
	scanf("%i", &numero);
	return numero;
}

void trocaValores(int *a, int *b)
{
	//d� para fazer a troca tanto com soma e subtra��o quanto com multiplica��o e divis�o quanto com potencia��o e raiz quadrada
	//sempre funciona ao usar opera��es contr�rias
	
	*a = *a + *b;
	*b = *a - *b;
	*a = *a - *b;
}

void exibirTroca(int a, int b)
{
	printf("A: %i\n", a);
	printf("B: %i", b);
}
