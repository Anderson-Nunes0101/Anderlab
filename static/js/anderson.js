
        // Estrutura: cursos -> anos (1 a 4) -> disciplinas -> temas -> conteúdo detalhado
        const DATA = {
            cursos: {
                "informatica": {
                    nome: "Informática",
                    icone: "bi-laptop",
                    anos: {
                        1: {
                            disciplinas: {
                                "Programacao I": {
                                    temas: {
                                        "Algoritmos": `Algoritmo e uma sequencia de instrucoes finitas executadas numa quantidade finita de tempo, com o objectivo de resolver um problema. 
                                        Pode ser representado atraves de:
                                        <ol>
                                            <li>Descricao narrativa</li>
                                            <li>Fluxograma</li>
                                            <li>Pseudocodigo</li>
                                            <li>Linguagem de programacao</li>
                                        </ol>
                                        ` ,
                                        "Descricao narrativa": `Descrever o passo a passo da solução usando linguagem natural, focando na lógica e estrutura do algoritmo.
                                        exemplo: descrever os passos para preparar um café.<br>
                                        <strong>Algoritmo "cafe"</strong><br>
                                        <strong>inicio</strong><br>
                                            Passo 1: Pegue uma xícara limpa.<br>
                                            Passo 2: Coloque um filtro de papel no porta-filtro da cafeteira.<br>
                                            Passo 3: Adicione uma colher de café moído no filtro.<br>
                                            Passo 4: Encha o reservatório da cafeteira com água até a marca indicada.<br>
                                            Passo 5: Ligue a cafeteira e aguarde até que o café esteja pronto.<br>
                                            Passo 6: Sirva o café na xícara e aproveite!<br>
                                        <strong>fim</strong>    
                                        `,
                                        "como escrever um algoritmo": `
                                        O primeiro passo consiste em escrever o nome do algoritmo, seguindo as seguintes regras:
                                        <ol>
                                            <li>pode conter letras maiusculas ou minusculas</li>
                                            <li>pode conter numeros, mas nunca deve iniciar com um numero</li>
                                            <li>nao pode conter espacos</li>
                                            <li>nao pode conter caracteres especiais</li>
                                            <li>unico caractere especial permitido "_"</li>
                                            <li>o nome deve estar entre aspas</li>
                                        </ol>

                                        
                                        `,
                                        "Fluxograma": `Descreve o fluxo de um programa.
                                        As instrucoes sao colocadas dentro de figuras,cada uma com a sua devida funcao.<br>
                                        <img src="static/img/inicio.png" width="200px"><br>
                                        Figura usada para colocar inicio ou fim.<br>
                                        <img src="static/img/mensagens.png" width="200px"><br>
                                        Usada para imprimir mensagens na tela.O texto deve estar entre aspas e as variaveis devem estar fora delas e separadas por virgula.<br>
                                        <img src="static/img/dados.png" width="200px"><br>
                                        Usada para ler e guadar os dados inseridos pelo usuario.Sao guardados dentro de uma variavel, cujo nome obedece as regras do nome de um algoritmo<br>
                                        <img src="static/img/calculos.png" width="200px"><br>
                                        Usada para efectuar calculos(soma, divisao, etc)<br>
                                        <img src="static/img/condicao.png" width="200px"><br>
                                        Usada para colocar condicoes(que retornam verdadeiro ou falso)<br>

                                        `,
                                        "Operadores":`Sao usados para fazer  diferentes operacoes. Existem os seguintes operadores:
                                        <ul>
                                            <li><strong> aritmeticos </strong></li>
                                            +,-,*,/,^
                                            <li><strong> atribuicao </strong></li>
                                            <-, :=
                                            <li><strong> logicos </strong></li>
                                            >(maior),<(menor),>=(maior ou igual),<=(menor ou igual),<>(diferente),=(igual)
                                            <li><strong> relacionais </strong></li>
                                            % ou MOD (pega o resto da divisao),div(parte inteira da divisao)
                                        </ul>
                                        `,
                                        "Exemplos":`Escreva um algoritmo que receba um numero e se ele for maior que 10, mostre o seu dobro<br>
                                        <strong>Algoritmo "Dobro"</strong><br>
                                        <img src="static/img/ex1.png" width="400px"><br>

                                        `,
                                        "Estruturas de decisao":`Em algoritmos, estruturas de decisao servem para decidir que instrucao deve ser execucatada mediante uma certa condicao.<br>
                                        Pense no seguinte caso: voce vai ao mercado para comprar pao.Ao chegar na padaria, <strong>se</strong> tiver pao, voce compra, <strong>senao</strong>, voce nao compra<br>
                                        Isso acontece tambem com os algoritmos. uma instrucao sera executada se uma certa condicao for verdadeira ou outra instrucao, se for falsa.<br>
                                        <h4>Tipos de estrutura de decisao</h4>
                                        <ul>
                                            <li><strong> simples </strong></li>
                                            <img src="static/img/simples.png" width="200px"><br>
                                            A instrucao sera executada apenas em um dos lados(verdadeiro ou falso)
                                            <li><strong> composta </strong></li>
                                            <img src="static/img/composta.png" width="200px"><br>
                                            Havera duas instrucoes(uma para o lado verdadeiro e outra para o lado falso)
                                            <li><strong> encadeada </strong></li>
                                            <img src="static/img/encadeada.png" width="200px"><br>
                                            Uma condicao dentro da outra
                                        </ul>
                                        `,
                                        "Estruturas de repeticao":`O que seria uma repeticao??<br>
                                        Algo que sera feito mais de uma vez e da mesma forma. Em algoritmos, uma repeticao precisa de 4 condicoes:
                                        <ol>
                                            <li><strong> inicializacao da variavel de controle </strong></li>
                                            Responsavel por "contar" quantas vezes a instrucao sera repetida.
                                            <li><strong> condicao de paragem </strong></li>
                                            Responsavel por garantir que a repeticao pare, caso a condicao seja cumprida.
                                            <li><strong> instrucao a ser repetida </strong></li>
                                            Instrucao(accao) que queremos repetir.
                                            <li><strong> atualizacao da variavel de controle </strong></li>
                                            Responsavel por garantir que a repeticao nao aconteca infinitamente.
                                        </ol>
                                        `,
                                        "Exemplo":`
                                        Escreva um algoritmo que some todos os numeros de 1 ate 100 e mostre na tela.<br>
                                        <strong>Algoritmo "soma"</strong><br>
                                        <img src="static/img/ex2.png" width="400px"><br>
                                        `,
                                        "Tipos de repeticao":`
                                        <ol>
                                            <li><strong> pre-testada </strong></li>
                                            A condicao de paragem vem antes da instrucao a ser repetida.
                                           
                                            <li><strong> pos-testada </strong></li>
                                            A condicao de paragem vem depois da instrucao a ser repetida.
                                            
                                        </ol>
                                        `
                                        ,
                                        "Pseudocodigo":`
                                        Uma forma de representar algoritmos, que consiste em usar comandos em portugues.Diferente dos fluxogramas, o pseudocodigo nao usa figuras, mas possui mesma sintaxe dos fluxogramas<br>
                                        <h4>Declaracao de variaveis</h4>
                                        Em pseudocodigo, as variaveis precisam ser declaradas antes de serem usadas.<br>
                                        Essa declaracao sera feita numa area chamada VAR, onde serao colocados os seguintes tipos:
                                        <ol>
                                            <li><strong> inteiro </strong></li>
                                            A variavel pode receber qualquer numero inteiro(ex: 5).
                                           
                                            <li><strong> real </strong></li>
                                            A variavel pode receber qualquer numero com duas ou mais casas decimais(ex: 2.5).
                                            <li><strong> caractere </strong></li>
                                            A variavel pode receber textos(ex: Anderson Nunes)
                                            
                                        </ol>
                                        Abaixo esta o guia de conversao fluxograma-pseudocodigo<br>
                                        <img src="static/img/inicio.png" width="200px"> simplesmente escereve-se <strong>inicio/fim</strong><br>
                                        <img src="static/img/mensagens.png" width="200px"> substitui-se por<strong>escreva(" ")</strong><br>
                                        <img src="static/img/dados.png" width="200px">  substitui-se por <strong>leia ()</strong><br>
                                        <img src="static/img/calculos.png" width="200px"> simplesmente escereve-se o calculo sem figura nenhuma<br>
                                        <img src="static/img/condicao.png" width="200px">  substitui-se por <strong>Se</strong><br>
                                        `,
                                        "Pseudocodigo-Exemplo":`
                                        Escreva um algoritmo em pseudocodigo que receba um numero e se for par mostre o seu dobro,caso contrario o seu triplo.<br>
                                        <strong>Algoritmo "Anderson"</strong><br>
                                        Var<br>
                                        N,Dobro,Triplo: inteiro<br>
                                        <strong>Inicio</strong><br>
                                        <strong>escreva</strong>("insira um numero")<br>
                                        <strong>leia</strong>(N)<br>
                                        <strong>se</strong> (N%2=0) <strong>entao</strong> <br>
                                        Dobro<-N*2<br>
                                        <strong>escreva</strong>("O dobro desse numero e:",Dobro)<br>
                                        <strong>senao</strong><br>
                                        Triplo<-N*3<br>
                                        <strong>escreva</strong>("O triplo desse numero e:",Triplo)<br>
                                        <strong>fimSe</strong><br>
                                        <strong>fimAlgoritmo</strong><br>
                                        `,
                                        "Repeticao Pseudocodigo":`
                                        Existem 3 tipos de repeticao.
                                        <ol>
                                            <li><strong> enquanto </strong>...<strong> faca </strong></li>
                                            Enquanto condicao faca<br>
                                            instrucao<br>
                                            fimEnquanto
                                            <li><strong> repita </strong>...<strong> ate </strong></li>
                                            Repita<br>
                                            instrucao<br>
                                            ate condicao
                                            <li><strong> para </strong>...<strong> faca </strong></li>
                                            para x de y ate z passo n faca<br>
                                            instrucao<br>
                                            fimPara<br><br><hr>
                                            x-nome da variavel de controle<br>
                                            y-valor que a variavel de controle recebe na inicializacao<br>
                                            z-condicao de paragem(ate onde o x deve chegar)<br>
                                            n-valor do incremento(por exemplo, se for 1, significa que o x deve ser acrescentado +1 ate chegar no z)
                                        </ol>
                                        `,
                                        "Exemplo1":`Escreva um algoritmo que soma todos os numeros pares de 1 ate 100.<br>
                                        Podemos usar cada um dos tipos de repeticao.
                                         <ol>
                                            <li><strong> enquanto </strong>...<strong> faca </strong></li>
                                            <strong>Algoritmo "soma"</strong><br>
                                            VAR<br>
                                            i,SOMA:inteiro<br>
                                            <strong> Inicio </strong><br>
                                            i<-1<br>
                                            SOMA<-0<br>
                                            <strong> Enquanto </strong> i<=100 <strong> faca </strong><br>
                                            <strong> Se </strong> (i%2=0) <strong> entao </strong><br>
                                            SOMA<-SOMA+i<br>
                                            <strong> fimSe </strong><br>
                                            i<-i+1<br>
                                            <strong> fimEnquanto </strong><br>
                                            <strong>escreva</strong>(SOMA)<br>
                                            <strong> fimAlgoritmo </strong><br>

                                            <li><strong> repita </strong>...<strong> ate </strong></li>
                                            <strong>Algoritmo "soma"</strong><br>
                                            VAR<br>
                                            i,SOMA:inteiro<br>
                                            <strong> Inicio </strong><br>
                                            i<-1<br>
                                            SOMA<-0<br>
                                            <strong> repita </strong> <br>
                                            <strong> Se </strong> (i%2=0) <strong> entao </strong><br>
                                            SOMA<-SOMA+i<br>
                                            <strong> fimSe </strong><br>
                                            i<-i+1<br>
                                            <strong>ate</strong> i<=100<br>
                                            <strong>escreva</strong>(SOMA)<br>
                                            <strong> fimAlgoritmo </strong><br>

                                            <li><strong> para </strong>...<strong> faca </strong></li>
                                            <strong>Algoritmo "soma"</strong><br>
                                            VAR<br>
                                            i,SOMA:inteiro<br>
                                            <strong> Inicio </strong><br>
                                            i<-1<br>
                                            SOMA<-0<br>
                                            <strong> para </strong>i de 1 <strong> ate </strong>100 passo 1 <strong>faca</strong> <br>
                                            <strong> Se </strong> (i%2=0) <strong> entao </strong><br>
                                            SOMA<-SOMA+i<br>
                                            <strong> fimSe </strong><br>
                                            <strong> fimPara </strong> <br>
                                            <strong>escreva</strong>(SOMA)<br>
                                            <strong> fimAlgoritmo </strong><br>
                                        </ol>
                                        <h5>Explicacao</h5>
                                        Nos 3 casos, usamos a variavel i como variavel de controle.<br>
                                        Ela recebeu 1 e foi ate 100. PORQUE??<br>
                                        Porque o exercicio pedia para somar todos os numeros de 1 ate 100, logo o primeiro numero deve ser 1.<br>
                                        A variavel soma recebeu 0. Porque em todos os casos envolvendo soma, a variavel deve sempre receber 0 pois ele e neutro na adicao.<br>
                                        Quando escrevemos i<-i+1 significa que pegamos o antigo valor que estava no i e acrescentamos 1.<br>
                                        O mesmo acontece com SOMA<-SOMA+i... a soma esta recebendo o valor atual de i.
                                        
                                        `,
                                        "Java ":`Uma das formas de representação de algoritmos é através da linguagem de programação!<br>
                                        Java é uma linguagem de programação criada pela Sun Microsystems em 1995.<br>
                                        O Java não gera código diretamente para o sistema operacional.
                                        Ele gera um código intermediário chamado:Bytecode<br>
                                        Esse bytecode é executado por uma máquina virtual chamada:

                                        JVM (Java Virtual Machine)<br>

                                        Fluxo:<br>

                                        Código Java<br>
                                            ↓<br>
                                        Compilador<br>
                                            ↓<br>
                                        Bytecode<br>
                                            ↓<br>
                                        JVM<br>
                                            ↓<br>
                                        Sistema Operacional<br>

                                        Por isso o mesmo programa pode funcionar em:<br>

                                        Windows<br>
                                        Linux<br>
                                        MacOS<br>

                                        sem alterações.<br>
                                        Java é uma linguagem de programação orientada a objectos.<strong>O que isso quer dizer?</strong>...
                                        Significa que é baseada em classes e objectos(não se preocupe muito com esses nomes estranhos agora! mais adiante serão bem detalhados).
                                        Lembra dos pseudocódigos? Eles estavam te preparando para esse momento pois a sintaxe do java é igual a do pseudocódigo, só que em inglês.<br>
                                        Em java temos também nome do algoritmo, declaração de variáveis, início e fim.<br>
                                        Abaixo está um exemplo básico:
                                        <pre>
                                            <code class="language-java" >
public class Algoritmo{
    public static void main(String args[]){
        System.out.print("Hello world");
    }
}
                                            </code>
                                        </pre>
                                        <h4>public</h4>
                                        Indica que algo pode ser acessado de qualquer lugar.
                                        <h4>class</h4>
                                        Significa classe.
                                        <h4>public class</h4>
                                        Equivale ao nome do algoritmo.
                                        Em fluxogramas e pseudocódigos escrevíamos Algoritmo "Soma", em java o nome é escrito depois de public class, sem aspas e com a primeira letra maiúscula.
                                        

                                        `,
                                        "Tipos de dados":`
                                        <h3>O QUE SÃO TIPOS DE DADOS?</h3> 
                                        Imagine que você possui vários recipientes.Um recipiente para água.
                                        Outro para gasolina.
                                        Outro para areia.
                                        Misturar tudo seria um desastre.
                                        Por isso cada informação possui um tipo.<br>
                                        O Java precisa saber:<br>
                                        Quanto espaço reservar<br>
                                        Como armazenar<br>
                                        Como processar<br>
                                        Java possui 8 tipos primitivos.
                                        <h4>byte</h4>
                                        Ocupa 1 byte. Armazena números inteiros pequenos.De -128 até 127. Quer dizer que os números 128 em diante não são suportados aqui.
                                        <h4>short</h4>
                                        Ocupa 2 bytes. Armazena números inteiros relativamente maiores.
                                        <h4>int</h4>
                                        Ocupa 4 bytes. Armazena números inteiros maiores.
                                        <h4>long</h4>
                                        Ocupa 8 bytes. Armazena números inteiros muito grandes.exemplo:100000000
                                        <h4>float</h4>
                                        Ocupa 4 bytes. Armazena números decimais pequenos.exemplo:3.14
                                        <h4>double</h4>
                                        Ocupa 8 bytes. Armazena números decimais com muitas casas decimais.exemplo:3.141592653643
                                        <h4>char</h4>
                                        Usado para armazenar um caractere.Deve ser escrito entre aspas simples: 'A'
                                        <h4>boolean</h4>
                                        Usado para armazenar valores lógicos(verdadeiro ou falso).true /false
                                        <h4>string</h4>
                                        Não é necessariamente um tipo primitivo e sim uma classe usada para guardar textos. Devem ser escritos entre aspas.
                                        `,
                                        "decisão java":`
                                        Em java, temos 3 tipos de decisão(tal como no pseudocódigo):simples, composta e encadeada.<br>
                                        <h4>IF</h4>
                                        <pre>
                                            <code class="language-java" >
if (condicao){
    instrucao;
}
                                        </code>
                                        </pre>
                                        Usamos para saber SE uma certa condição é verdadeira(por exemplo, podemos querer saber se um número é par ou não) e uma instrução será executada, caso seja.
                                        Todas instruções em java devm ter um ponto e vírgula no fim das mesmas.
                                        <h4>ELSE IF</h4>
                                        <pre>
                                        <code class="language-java" >
else if (condicao){
    instrucao;
}
                                        </code>
                                        </pre>
                                        Usamos quando temos mais de uma condição por perguntar.Por exemplo, queremos saber se a média de um aluno é maior que 10.
                                        mas também queremos saber se a nota de matemática é superior a 12...

                                        <h4>ELSE</h4>
                                        <pre>
                                        <code class="language-java" >
else{
    instrucao;
}
                                        </code>
                                        </pre>
                                        Quando nenhuma da condições no if,é verdadeira, a instrução do else é executada.
                                        Suponha que a média do aluno não seja maior que 10 e a nota em matemática não seja superior a 12, podemos colocar no else a instrução que informa
                                        ao aluno que excluiu.
                                        `,
                                        "Exemplo2":` Escreva um programa que receba 3 notas de um aluno, calcule a média e informe se ele foi aprovado ao exame se media for maior ou igual a 10 e menor que 14,
                                        dispensado se média for maior que 14 ou excluído se a média for menor que 9. 
                                        <pre>
                                        <code class="language-java" >
import java.util.Scanner;
public class Media{
    public static void main(String []args){
        Scanner os=new Scanner;
        float nota1,nota2,nota3,media;
        System.out.print("insira a nota do teste 1");
        nota1=os.nextFloat();
        System.out.print("insira a nota do teste 2");
        nota2=os.nextFloat();
        System.out.print("insira a nota do teste 3");
        nota3=os.nextFloat();
        media=(nota1+nota2+nota3)/3;
        if(media<=9){
            System.out.print("excluído, média:"+media);
        }else if(media<=13){
            System.out.print("admitido ao exame, média:"+media);
        }else{
            System.out.print("dispensado, média:"+media);
        }
    }
}
                                        </code>
                                        </pre>

                                        
                                        `,
                                        "Switch case":`
                                        É usado nas decisões compostas, para melhor organização, sem necessidade de escrever muitas condições.
                                        A sintaxe do switch consiste em iterar sobre uma variável e usamos CASE para os diferentes casos.
                                        Podemos escrever um algoritmo que simula uma calculadora usando switch case.
                                        <pre>
                                        <code class="language-java" >
import java.util.Scanner;
public class Calculadora{
    public static void main(String []args){
        Scanner os=new Scanner;
        int n1,n2,n3;
        System.out.print("insira o primeiro valor");
        n1=os.nextInt();
        System.out.print("insira o segundo valor ");
        n2=os.nextInt();
        System.out.print("escolha uma opção");
        System.out.print("1.somar,2.subtrair,3.multiplicar,4.dividir");
        n3=os.nextInt();
        switch(n3){
            case 1:System.out.print(n1+n2);break;
            case 2:System.out.print(n1-n2);break;
            case 3:System.out.print(n1*n2);break;
            case 4:
                if (n2!=0){
                    System.out.print(n1/n2);
                }else{
                    System.out.print("impossível dividir por zero");
                }
                break;
            default:
                System.out.print("opção inválida");
                break;
        }
       
    }
}
                                        </code>
                                        </pre>
                                        <h4>Explicação</h4>
                                        No código acima nós lemos dois valores que foram inseridos pelo usuário,depois demos ao usuário a opção 
                                        de escolha entre as 4 opções disponíveis:soma,subtração,multiplicação e divisão.
                                        A opção escolhida foi salva na variável n3, por isso o switch recebeu essa variável como argumento.Quanto aos cases, 
                                        cada case é uma condição com uma instrução que será executada caso seja verdadeira. Por exemplo, case 1: System.out.print(n1+n2);break; 
                                        significa "se o valor que está na variável n3 for igual a 1, faça isso: System.out.print(n1+n2);break;". O break faz ele parar depois da instrução se ela tiver sido executada.
                                        Se o case envolver textos, eles devem estar entre aspas, por exemplo : case 'Anderson': System.out.print("Ele é inteligente");break;
                                        ou seja, se o valor que está na variável em questão for igual a Anderson, faça isso...
                                        O default será acionado quando nenhum dos cases tiver sido verdadeiro. Um exemplo simples, ao digita *155# você tem algumas opções(1 até 11),
                                        se você digitar 12, ele dirá "opção inválida", essa é a função do default, se nenhuma das condições for verdadeira, será executada a instrução do default.
                                        Veja cada case como um if, e um default como um else. 

                                        `,
                                        "Laços de repetição":`
                                        Em java, temos 3 tipos de repetição:for,while,do..while.<br>
                                        <strong> for </strong><br>
                                        Obedece as mesmas regras de repetição "para..faca" dos pseudocódigos, onde na mesma linha inicializamos a variável de controle, colocamos a condição de paragem 
                                        e a atualização da variável de controle. A instrução é colocada entre chavetas.Usamos esse laço somente quando sabemos onde devemos começar e onde devemos parar.
                                        Ou seja, usamos quando sabemos exactamente quantas vezes deve repetir. Num caso em que não sabemos quando irá parar(quando o usuário é quem decide quando parar) não podemos usar esse laço.
                                        Exemplo de uso:Algoritmo que soma todos números de 1 até 100.
                                        <pre>
                                        <code class="language-java" >
public class Soma{
    public static void main(String []args){
        int soma=0;
        for (int i=0; i<=100; i++){
            soma=soma+i;
        }
        System.out.print(soma);
       
    }
}
                                        </code>
                                        </pre>

                                        <strong> while </strong><br>
                                        Enquanto uma certa condição for verdadeira, uma ou mais instruções serão executadas.Podemos usar esse laço para resolver o exercício anterior.
                                        <pre>
                                        <code class="language-java" >
public class Soma{
    public static void main(String []args){
        int soma=0;
        int i=0;
        while(i<=100){
            soma=soma+i;
            i++;
        }
        System.out.print(soma);
       
    }
}
                                        </code>
                                        </pre>
                                        <strong> do...while </strong><br>
                                        Repita...até. Uma das diferentes formas de repetição.
                                        <pre>
                                        <code class="language-java" >
public class Soma{
    public static void main(String []args){
        int soma=0;
        int i=0;
        do{
            soma=soma+i;
            i++;
        }while(i<=100);
        System.out.print(soma);
       
    }
}
                                        </code>
                                        </pre>
                                        Em suma, todos os laços podem ser usados, porém há algumas restrições para o for e o do while.
                                        `,
                                        "Exercícios":`
                                        
                                        Escreva um algoritmo que receba um número e some os seus algarismos.
                                        <pre>
                                        <code class="language-java" >
import java.util.Scanner;
public class Soma{
    public static void main(String []args){
        Scanner os=new Scanner(System.in);
        System.out.print("insira um número");
        int numero=os.nextInt();
        int soma=0;
        while(numero!=0){
            int resto=numero%10;
            soma=soma+resto;
            numero=numero/10;
        }
        System.out.print(soma);
       
    }
}
                                        </code>
                                        </pre>
                                        `

                                   
                                    }
                                },
                                "Calculo I": {
                                    temas: {
                                        "Funções": `
                                        O que é uma função?Uma regra que estabelece uma correspondência entre dois conjuntos. Podemos considerar os números reais.
                                        Se a cada valor de $x$ faz corresponder um ou mais valores de $y$, então $y$ é uma função de $x$, ou seja $y=f(x)$.<br>
                                        Em outras palavras, quer dizer que $y$ depende de $x$.<br>
                                        <h4>Domínio</h4>
                                        O conjunto de todos os valores que o $x$ pode tomar.(sabemos que os números são infinitos, sendo assim, há uma necessidade de
                                        delimitar os números permitidos em cada função. por exemplo, podemos ter uma função que trabalhe apenas com os números maiores que 0 e menores que 10
                                        , ou seja de 1 até 9... percebeu a ideia do domínio?)<br>
                                        Para o estudo do domínio de uma função, há algumas condições a considerar.
                                        <ol>
                                            <li><strong> funções racionais: $y=\\frac{f(x)}{g(x)}$  </strong></li>
                                            condição : $g(x)\\ne 0$
                                            <li><strong> funções irracionais $y=\\sqrt[n]{f(x)} $ </strong></li>
                                            condição : $f(x) \\geq 0$
                                            <li><strong> função logarítmica </strong></li>
                                            
                                    
                                        </ol>
                                        `,
                                        "Componentes de Hardware": "CPU, memória RAM, HD/SSD, placa-mãe, periféricos e funções básicas.",
                                        "Sistemas de Numeração": "Binário, decimal, hexadecimal, conversões entre bases e aplicações."
                                    }
                                }
                            }
                        },
                        2: {
                            disciplinas: {
                                "Estrutura de Dados": {
                                    temas: {
                                        "Arrays e Matrizes": "Declaração, indexação, manipulação de arrays unidimensionais e bidimensionais.",
                                        "Listas Encadeadas": "Conceitos de nó, ponteiros, inserção e remoção em listas simplesmente encadeadas."
                                    }
                                },
                                "Banco de Dados I": {
                                    temas: {
                                        "Modelagem Conceitual": "Entidade, atributo, relacionamento, cardinalidade. Exemplo MER.",
                                        "SQL Básico": "SELECT, INSERT, UPDATE, DELETE, cláusulas WHERE e ORDER BY."
                                    }
                                }
                            }
                        },
                        3: {
                            disciplinas: {
                                "Redes de Computadores": {
                                    temas: {
                                        "Modelo OSI": "Camadas física, enlace, rede, transporte, sessão, apresentação e aplicação.",
                                        "Endereçamento IP": "IPv4, classes, máscara de sub-rede, CIDR, roteamento básico."
                                    }
                                }
                            }
                        },
                        4: {
                            disciplinas: {
                                "Segurança da Informação": {
                                    temas: {
                                        "Criptografia Simétrica": "AES, DES, princípios de chave secreta e modos de operação.",
                                        "Políticas de Segurança": "Controle de acesso, backup, auditoria e LGPD."
                                    }
                                }
                            }
                        }
                    }
                },
                "direito": {
                    nome: "Direito",
                    icone: "bi-bank2",
                    anos: {
                        1: {
                            disciplinas: {
                                "Introdução ao Direito": {
                                    temas: {
                                        "Normas Jurídicas": "Conceito, vigência, eficácia, sanção e classificação das normas.",
                                        "Ramos do Direito": "Direito Público, Privado, Diferenças entre Civil, Penal, Trabalhista."
                                    }
                                },
                                "Teoria Geral do Estado": {
                                    temas: {
                                        "Elementos do Estado": "Povo, território, governo soberano. Formas de Estado e Governo.",
                                        "Constituição": "Conceito, classificação, poder constituinte originário e derivado."
                                    }
                                }
                            }
                        },
                        2: {
                            disciplinas: {
                                "Direito Civil": {
                                    temas: {
                                        "Pessoa Natural e Jurídica": "Personalidade, capacidade, direitos da personalidade, registro civil.",
                                        "Obrigações": "Conceito, elementos, fontes, espécies, transmissão e extinção das obrigações."
                                    }
                                }
                            }
                        },
                        3: {
                            disciplinas: {
                                "Direito Penal": {
                                    temas: {
                                        "Princípios Penais": "Legalidade, anterioridade, insignificância, lesividade.",
                                        "Tipicidade e Ilicitude": "Conduta típica, causas excludentes de ilicitude, legítima defesa."
                                    }
                                }
                            }
                        },
                        4: {
                            disciplinas: {
                                "Direito do Trabalho": {
                                    temas: {
                                        "Contrato de Trabalho": "Requisitos, tipos, alteração, suspensão e extinção.",
                                        "Remuneração e Salário": "Diferenças, adicionais, 13º salário, férias e FGTS."
                                    }
                                }
                            }
                        }
                    }
                },
                "contabilidade": {
                    nome: "Contabilidade",
                    icone: "bi-graph-up",
                    anos: {
                        1: {
                            disciplinas: {
                                "Teoria da Contabilidade": {
                                    temas: {
                                        "Patrimônio": "Ativo, passivo, patrimônio líquido. Equação fundamental.",
                                        "Princípios Contábeis": "Entidade, continuidade, competência, prudência."
                                    }
                                }
                            }
                        },
                        2: {
                            disciplinas: {
                                "Contabilidade Financeira": {
                                    temas: {
                                        "Demonstrações Contábeis": "Balanço patrimonial, DRE, DFC, DLPA.",
                                        "Escrituração": "Livros diário e razão, partidas dobradas, lançamentos."
                                    }
                                }
                            }
                        },
                        3: {
                            disciplinas: {
                                "Análise das Demonstrações": {
                                    temas: {
                                        "Índices de Liquidez": "Liquidez corrente, seca, geral e imediata.",
                                        "Rentabilidade": "ROE, ROA, margem líquida, giro do ativo."
                                    }
                                }
                            }
                        },
                        4: {
                            disciplinas: {
                                "Contabilidade Tributária": {
                                    temas: {
                                        "Regimes Tributários": "Simples Nacional, Lucro Presumido, Lucro Real.",
                                        "PIS/COFINS": "Cumulatividade, não cumulatividade, alíquotas, bases de cálculo."
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };

        // Estado da navegação
        let estadoAtual = {
            nivel: "cursos",     // cursos, anos, disciplinas, temas, conteudo
            cursoId: null,
            ano: null,
            disciplinaNome: null,
            temaNome: null
        };

        let historicoEstados = [];  // para gerenciar volta manual (pilha simples)

        // Elementos do DOM
        const conteudoDiv = document.getElementById("conteudoDinamico");
        const btnVoltar = document.getElementById("btnVoltarNivel");
        const breadcrumbDiv = document.getElementById("breadcrumbNav");

        // Função auxiliar para salvar estado e empilhar
        function pushEstado(novoEstado) {
            historicoEstados.push({ ...estadoAtual });
            estadoAtual = { ...novoEstado };
            renderizarConteudo();
        }

        function voltarNivel() {
            if (historicoEstados.length === 0) return;
            const anterior = historicoEstados.pop();
            estadoAtual = { ...anterior };
            renderizarConteudo();
        }

        // Atualizar breadcrumb
        function atualizarBreadcrumb() {
            let html = '<i class="bi bi-house-door-fill"></i> Cursos';
            if (estadoAtual.nivel !== "cursos" && estadoAtual.cursoId) {
                const cursoNome = DATA.cursos[estadoAtual.cursoId]?.nome || estadoAtual.cursoId;
                html += ` &nbsp; / &nbsp; <i class="bi bi-folder"></i> ${cursoNome}`;
            }
            if ((estadoAtual.nivel === "disciplinas" || estadoAtual.nivel === "temas" || estadoAtual.nivel === "conteudo") && estadoAtual.ano) {
                html += ` &nbsp; / &nbsp; <span class="badge bg-secondary">${estadoAtual.ano}º Ano</span>`;
            }
            if ((estadoAtual.nivel === "temas" || estadoAtual.nivel === "conteudo") && estadoAtual.disciplinaNome) {
                html += ` &nbsp; / &nbsp; <i class="bi bi-book"></i> ${estadoAtual.disciplinaNome}`;
            }
            if (estadoAtual.nivel === "conteudo" && estadoAtual.temaNome) {
                html += ` &nbsp; / &nbsp; <i class="bi bi-file-text"></i> ${estadoAtual.temaNome}`;
            }
            breadcrumbDiv.innerHTML = html;
        }

        // Botão voltar exibição
        function gerenciarBotaoVoltar() {
            if (historicoEstados.length > 0 && estadoAtual.nivel !== "cursos") {
                btnVoltar.style.display = "inline-flex";
            } else {
                btnVoltar.style.display = "none";
            }
        }

        // =================== RENDERIZAÇÃO DOS NÍVEIS ===================
        function renderizarCursos() {
            const cursosList = Object.entries(DATA.cursos).map(([id, curso]) => {
                return `
                    <div class="col-md-6 col-lg-4 mb-4">
                        <div class="card card-curso h-100" data-curso-id="${id}">
                            <div class="card-body text-center p-4">
                                <i class="bi ${curso.icone} fs-1 text-primary"></i>
                                <h3 class="card-title mt-3">${curso.nome}</h3>
                                <p class="card-text text-muted">Clique para ver os anos letivos</p>
                                <span class="badge bg-info rounded-pill">${Object.keys(curso.anos).length} anos</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            return `
                <div class="row">
                    ${cursosList}
                </div>
                <div class="alert alert-light text-center mt-3">
                    <i class="bi bi-arrow-down-circle"></i> Selecione um curso acima
                </div>
            `;
        }

        function renderizarAnos(cursoId) {
            const curso = DATA.cursos[cursoId];
            if (!curso) return `<div class="alert alert-danger">Curso não encontrado</div>`;
            const anosDisponiveis = Object.keys(curso.anos).sort((a,b)=>a-b);
            let cardsAnos = '';
            anosDisponiveis.forEach(ano => {
                const qtdDisc = Object.keys(curso.anos[ano].disciplinas).length;
                cardsAnos += `
                    <div class="col-md-3 col-6 mb-3">
                        <div class="card text-center h-100 shadow-sm border-0 rounded-4" data-ano="${ano}" style="cursor:pointer;">
                            <div class="card-body py-4">
                                <div class="display-6 fw-bold">${ano}º</div>
                                <hr>
                                <span class="badge bg-secondary">${qtdDisc} disciplinas</span>
                                <p class="mt-2 small">Ano letivo</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            return `
                <div class="mb-3">
                    <h4><i class="bi bi-calendar-week"></i> Anos do curso: ${curso.nome}</h4>
                    <p class="text-muted">Escolha o ano para ver as disciplinas</p>
                </div>
                <div class="row g-3">
                    ${cardsAnos}
                </div>
            `;
        }

        function renderizarDisciplinas(cursoId, ano) {
            const curso = DATA.cursos[cursoId];
            if (!curso || !curso.anos[ano]) return `<div class="alert alert-warning">Nenhuma disciplina para este ano.</div>`;
            const disciplinasObj = curso.anos[ano].disciplinas;
            const disciplinasList = Object.keys(disciplinasObj);
            if (disciplinasList.length === 0) return `<div class="alert alert-info">Nenhuma disciplina cadastrada.</div>`;
            let listaHtml = `<div class="list-group">`;
            disciplinasList.forEach(nomeDisciplina => {
                const totalTemas = Object.keys(disciplinasObj[nomeDisciplina].temas).length;
                listaHtml += `
                    <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-disciplina="${nomeDisciplina}">
                        <div><i class="bi bi-journal-bookmark-fill me-2 text-primary"></i> <strong>${nomeDisciplina}</strong></div>
                        <span class="badge bg-primary rounded-pill">${totalTemas} temas</span>
                    </div>
                `;
            });
            listaHtml += `</div>`;
            return `
                <div class="mb-3">
                    <h4><i class="bi bi-book-half"></i> Disciplinas do ${ano}º ano - ${curso.nome}</h4>
                    <p>Clique em uma disciplina para explorar os temas.</p>
                </div>
                ${listaHtml}
            `;
        }

        function renderizarTemas(cursoId, ano, disciplinaNome) {
            const curso = DATA.cursos[cursoId];
            const disciplina = curso?.anos[ano]?.disciplinas[disciplinaNome];
            if (!disciplina) return `<div class="alert alert-danger">Disciplina não encontrada.</div>`;
            const temasObj = disciplina.temas;
            const temasList = Object.keys(temasObj);
            if (temasList.length === 0) return `<div class="alert alert-warning">Essa disciplina ainda não possui temas.</div>`;
            let temasHtml = `<div class="row g-3">`;
            temasList.forEach(tema => {
                temasHtml += `
                    <div class="col-md-6 col-lg-4">
                        <div class="card h-100 border-0 shadow-sm rounded-4 tema-item" data-tema="${tema}" style="cursor:pointer;">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <i class="bi bi-chat-right-quote fs-3 me-3 text-success"></i>
                                    <div>
                                        <h5 class="card-title mb-1">${tema}</h5>
                                        <small class="text-muted">Clique para abrir conteúdo</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            temasHtml += `</div>`;
            return `
                <div class="mb-3">
                    <h4><i class="bi bi-grid"></i> Temas de ${disciplinaNome} (${ano}º ano)</h4>
                    <p>Clique em um tema para visualizar o conteúdo completo.</p>
                </div>
                ${temasHtml}
            `;
        }

        function renderizarConteudoDetalhado(cursoId, ano, disciplinaNome, temaNome) {
            const curso = DATA.cursos[cursoId];
            const disciplina = curso?.anos[ano]?.disciplinas[disciplinaNome];
            const conteudoTexto = disciplina?.temas[temaNome];
            if (!conteudoTexto) return `<div class="alert alert-danger">Conteúdo não disponível para este tema.</div>`;
            return `
                <div class="conteudo-card">
                    <div class="d-flex align-items-center mb-3">
                        <i class="bi bi-file-earmark-text-fill fs-2 me-3 text-info"></i>
                        <h2 class="h3 mb-0">${temaNome}</h2>
                    </div>
                    <hr>
                    <div class="conteudo-texto" style="font-size: 1.1rem; line-height: 1.6;">
                        ${conteudoTexto}
                    </div>
                    <div class="alert alert-light mt-4">
                        <i class="bi bi-info-circle"></i> Material de apoio referente ao tema "${temaNome}" da disciplina ${disciplinaNome}.
                         Em caso de dúvidas contacte 868125856/ 841905479.
                    </div>
                </div>
            `;
        }

        // Controle principal de renderização e eventos
        function renderizarConteudo() {
            let html = '';
            const { nivel, cursoId, ano, disciplinaNome, temaNome } = estadoAtual;

            if (nivel === "cursos") {
                html = renderizarCursos();
            } else if (nivel === "anos") {
                html = renderizarAnos(cursoId);
            } else if (nivel === "disciplinas") {
                html = renderizarDisciplinas(cursoId, ano);
            } else if (nivel === "temas") {
                html = renderizarTemas(cursoId, ano, disciplinaNome);
            } else if (nivel === "conteudo") {
                html = renderizarConteudoDetalhado(cursoId, ano, disciplinaNome, temaNome);
            } else {
                html = `<div class="alert alert-danger">Estado inválido</div>`;
            }

            conteudoDiv.innerHTML = html;
            atualizarBreadcrumb();
            gerenciarBotaoVoltar();
            if (nivel === "conteudo") {

                    mermaid.run();

                    hljs.highlightAll();

                    renderMathInElement(conteudoDiv, {
                        delimiters: [
                            {left: "$$", right: "$$", display: true},
                            {left: "$", right: "$", display: false}
                        ]
                    });

            }
           

            // Após injetar HTML, anexar eventos conforme nível
            if (nivel === "cursos") {
                document.querySelectorAll("[data-curso-id]").forEach(el => {
                    el.addEventListener("click", (e) => {
                        const id = el.getAttribute("data-curso-id");
                        pushEstado({
                            nivel: "anos",
                            cursoId: id,
                            ano: null,
                            disciplinaNome: null,
                            temaNome: null
                        });
                    });
                });
            } 
            else if (nivel === "anos") {
                document.querySelectorAll("[data-ano]").forEach(el => {
                    el.addEventListener("click", (e) => {
                        const anoSelecionado = parseInt(el.getAttribute("data-ano"));
                        pushEstado({
                            nivel: "disciplinas",
                            cursoId: estadoAtual.cursoId,
                            ano: anoSelecionado,
                            disciplinaNome: null,
                            temaNome: null
                        });
                    });
                });
            }
            else if (nivel === "disciplinas") {
                document.querySelectorAll("[data-disciplina]").forEach(el => {
                    el.addEventListener("click", (e) => {
                        const disciplina = el.getAttribute("data-disciplina");
                        pushEstado({
                            nivel: "temas",
                            cursoId: estadoAtual.cursoId,
                            ano: estadoAtual.ano,
                            disciplinaNome: disciplina,
                            temaNome: null
                        });
                    });
                });
            }
            else if (nivel === "temas") {
                document.querySelectorAll("[data-tema]").forEach(el => {
                    el.addEventListener("click", (e) => {
                        const tema = el.getAttribute("data-tema");
                        pushEstado({
                            nivel: "conteudo",
                            cursoId: estadoAtual.cursoId,
                            ano: estadoAtual.ano,
                            disciplinaNome: estadoAtual.disciplinaNome,
                            temaNome: tema
                        });
                    });
                });
            }
        }

        // Configurar botão voltar e estado inicial
        function inicializar() {
            // estado inicial: cursos
            estadoAtual = {
                nivel: "cursos",
                cursoId: null,
                ano: null,
                disciplinaNome: null,
                temaNome: null
            };
            historicoEstados = [];
            btnVoltar.addEventListener("click", () => voltarNivel());
            renderizarConteudo();
        }

        inicializar();