document.addEventListener("DOMContentLoaded", function() {
    const images = ['./images/Tarots Card/Tarot1.png', "./images/Tarots Card/Tarot2.png", "./images/Tarots Card/Tarot3.png", "./images/Tarots Card/Tarot4.png","./images/Tarots Card/Tarot5.png", "./images/Tarots Card/Tarot6.png", "./images/Tarots Card/Tarot7.png", "./images/Tarots Card/Tarot8.png", "./images/Tarots Card/Tarot9.png", "./images/Tarots Card/Tarot10.png"];
    const imagesRepeat = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    function getRandomImage() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (imagesRepeat[randomIndex] >= 2);
    imagesRepeat[randomIndex]++;
    return images[randomIndex];
    }

    document.getElementById('cardf1').src = getRandomImage();
    document.getElementById('cardf2').src = getRandomImage();
    document.getElementById('cardf3').src = getRandomImage();
    document.getElementById('cardf4').src = getRandomImage();
    document.getElementById('cardf5').src = getRandomImage();
    document.getElementById('cardf6').src = getRandomImage();
    document.getElementById('cardf7').src = getRandomImage();
    document.getElementById('cardf8').src = getRandomImage();
    document.getElementById('cardf9').src = getRandomImage();
    document.getElementById('cardf10').src = getRandomImage();
    document.getElementById('cardf11').src = getRandomImage();
    document.getElementById('cardf12').src = getRandomImage();
    document.getElementById('cardf13').src = getRandomImage();
    document.getElementById('cardf14').src = getRandomImage();
    document.getElementById('cardf15').src = getRandomImage();
    document.getElementById('cardf16').src = getRandomImage();
    document.getElementById('cardf17').src = getRandomImage();
    document.getElementById('cardf18').src = getRandomImage();
    document.getElementById('cardf19').src = getRandomImage();
    document.getElementById('cardf20').src = getRandomImage();

    var SelectCards = [];
    var SelectBackcover = [];

    function flipcard(Cardnumber){
        var cardBack = document.getElementById('cardb' + Cardnumber);
        var cardFront = document.getElementById('cardf' + Cardnumber);
        
        cardBack.style.display = 'none';
        cardFront.style.display = 'block';
        SelectCards.push(cardFront.id);
        SelectBackcover.push(cardBack.id);
        
        setTimeout(function() {
          cardFront.classList.add('flipped');
        }, 100);
      }
      

    function Memorama(Cardnumber) {
    flipcard(Cardnumber);
    if (SelectCards.length === 2 ) {
        var firstTAROT = document.getElementById(SelectCards[0]);
        var secondTAROT = document.getElementById(SelectCards[1]);
        var CoverOne = document.getElementById(SelectBackcover[0]);
        var CoverTwo = document.getElementById(SelectBackcover[1]);


        if (firstTAROT.src === secondTAROT.src) {           
        firstTAROT.style.display = 'block';
        secondTAROT.style.display = 'block';
        firstTAROT.classList.add('locket');
        secondTAROT.classList.add('locket');
        firstTAROT.classList.remove('flipped')
        secondTAROT.classList.remove('flipped')
        SelectCards = [];
        SelectBackcover = [];
        } else {
        setTimeout(function() {
            firstTAROT.style.display = 'none';
            secondTAROT.style.display = 'none';
            CoverOne.style.display = 'block';
            CoverTwo.style.display = 'block';
            firstTAROT.classList.remove('flipped')
            secondTAROT.classList.remove('flipped')
            SelectCards = [];
            SelectBackcover = [];
            
        }, 1200);
        }
    }
    }
        var memoriaTimeout;
        function memoriaDebounced(cardId) {
        // Cancela el temporizador anterior si lo hay
        clearTimeout(memoriaTimeout);
        // Crea un nuevo temporizador que ejecutará la función después de 1 segundo
        memoriaTimeout = setTimeout(function() {
            Memorama(cardId);
        }, 3000);
        }
        
        // Asigna la función de "debouncing" a cada botón
        document.getElementById('cardb1').onclick = function() { memoriaDebounced(1) };
        document.getElementById('cardb2').onclick = function() { memoriaDebounced(2) };
        document.getElementById('cardb3').onclick = function() { memoriaDebounced(3) };
        document.getElementById('cardb4').onclick = function() { memoriaDebounced(4) };
        document.getElementById('cardb5').onclick = function() { memoriaDebounced(5) };
        document.getElementById('cardb6').onclick = function() { memoriaDebounced(6) };
        document.getElementById('cardb7').onclick = function() { memoriaDebounced(7) };
        document.getElementById('cardb8').onclick = function() { memoriaDebounced(8) };
        document.getElementById('cardb9').onclick = function() { memoriaDebounced(9) };
        document.getElementById('cardb10').onclick = function() { memoriaDebounced(10) };
        document.getElementById('cardb11').onclick = function() { memoriaDebounced(11) };
        document.getElementById('cardb12').onclick = function() { memoriaDebounced(12) };
        document.getElementById('cardb13').onclick = function() { memoriaDebounced(13) };
        document.getElementById('cardb14').onclick = function() { memoriaDebounced(14) };
        document.getElementById('cardb15').onclick = function() { memoriaDebounced(15) };
        document.getElementById('cardb16').onclick = function() { memoriaDebounced(16) };
        document.getElementById('cardb17').onclick = function() { memoriaDebounced(17) };
        document.getElementById('cardb18').onclick = function() { memoriaDebounced(18) };
        document.getElementById('cardb19').onclick = function() { memoriaDebounced(19) };
        document.getElementById('cardb20').onclick = function() { memoriaDebounced(20) };


        document.getElementById('cardb1').onclick = function() {Memorama(1) };
        document.getElementById('cardb2').onclick = function() {Memorama(2) };
        document.getElementById('cardb3').onclick = function() {Memorama(3) };
        document.getElementById('cardb4').onclick = function() {Memorama(4) };
        document.getElementById('cardb5').onclick = function() {Memorama(5) };
        document.getElementById('cardb6').onclick = function() {Memorama(6) };
        document.getElementById('cardb7').onclick = function() {Memorama(7) };
        document.getElementById('cardb8').onclick = function() {Memorama(8) };
        document.getElementById('cardb9').onclick = function() {Memorama(9) };
        document.getElementById('cardb10').onclick = function() {Memorama(10) };
        document.getElementById('cardb11').onclick = function() {Memorama(11) };
        document.getElementById('cardb12').onclick = function() {Memorama(12) };
        document.getElementById('cardb13').onclick = function() {Memorama(13) };
        document.getElementById('cardb14').onclick = function() {Memorama(14) };
        document.getElementById('cardb15').onclick = function() {Memorama(15) };
        document.getElementById('cardb16').onclick = function() {Memorama(16) };
        document.getElementById('cardb17').onclick = function() {Memorama(17) };
        document.getElementById('cardb18').onclick = function() {Memorama(18) };
        document.getElementById('cardb19').onclick = function() {Memorama(19) };
        document.getElementById('cardb20').onclick = function() {Memorama(20) };

})