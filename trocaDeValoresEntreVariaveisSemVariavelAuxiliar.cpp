/*
	Author: Gustavo Silva Souza
	Date: 28/02/24 09:50
	Description: programa que lê duas variáveis e troca o valor delas entre elas
*/



//bibliotecas
#include <stdio.h>
#include <locale.h>



//prototipação
int lerNum();
void trocaValores(int *, int *);
void exibirTroca(int, int);



//função principal
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



//funções
int lerNum()
{
	int numero = 0;
	printf("Digite um número: ");
	scanf("%i", &numero);
	return numero;
}

void trocaValores(int *a, int *b)
{
	//dá para fazer a troca tanto com soma e subtração quanto com multiplicação e divisão quanto com potenciação e raiz quadrada
	//sempre funciona ao usar operações contrárias
	
	*a = *a + *b;
	*b = *a - *b;
	*a = *a - *b;
}

void exibirTroca(int a, int b)
{
	printf("A: %i\n", a);
	printf("B: %i", b);
}
