# JavaScript - Memory

Du använder dig av DOM:en för att interagera med HTML/CSS. Du använder enbart Vanilla JavaScript (inget ramverk/bibliotek). Du stylar i CSS efter egna prefrenser.

Använd dig av lämpliga JavaScript-funktioner som createBoard(), clickCard(), etc

## Spelregler

* En spelare flippar ett kort och memorerar värdet. Samma spelare flippar ett nytt kort. Om de båda korten har lika värdet erhåller spelaren paret, eller erhåller en viss poäng. Om de båda flippade korten inte är lika, vänds korten tillbaka, och nästa spelare får försöka på nytt.

* Du är fri att välja spelregler för "winning-state". Om du utgår från en spelare kan exempelivs en timer ange sluttiden och hur många par som nåddes. Om du utgår från två spelare kan slutstadiet vara när alla kort är matchade och vem som uppnådde flest. 

## Generera spelyta

Använd dig av bilder eller emojiis för att representera kortens värden. 

Det finns två alternativ att generera spelytan: 

* Från en statisk html (lätta alternativet)

* Generera dynamisk (lite svårare, men kan också genrera nya spelomgångar). 
Du utgår från `<div id="game-area">` och lägger till antalet element dynamiskt med `document.createElement('div')`. Varje element i sig behöver representeras av ett värde, exempelvis av en array. För varje spelomgång behöver spelplanen "shufflas" (använd dig dig Math.random())




* Enklast är att utgå från en spelare (men i praktiken kan två spela bakom samma datormus). Använd gärna en.  

