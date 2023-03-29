document.addEventListener("DOMContentLoaded", function() {
    const SountrackMusic = document.getElementById('Soundtrack');
    SountrackMusic.volume = 0.3;
    
    var Play = document.getElementById('Nomute');
    var DontPlay = document.getElementById('Mute')
    function ChangeState(){
        if (Play.style.display === 'block') {
            Play.style.display = 'none';
            SountrackMusic.volume = 0;
            DontPlay.style.display = 'block';
        } else {
            DontPlay.style.display = 'none';
            SountrackMusic.volume = 0.3;
            Play.style.display = 'block';
        }
    }

    document.getElementById('Nomute').onclick = ChangeState;
    document.getElementById('Mute').onclick = ChangeState;

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
        var AudioFlipcard = document.getElementById('Flipcard');
        AudioFlipcard.volume = 0.2;

        AudioFlipcard.play();
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
        var AudioSuccess = document.getElementById('SuccessMatch')
        AudioSuccess.volume = 0.4;

        if (firstTAROT.src === secondTAROT.src) {           
        firstTAROT.style.display = 'block';
        secondTAROT.style.display = 'block';
        firstTAROT.classList.add('locket');
        secondTAROT.classList.add('locket');
        firstTAROT.classList.remove('flipped')
        secondTAROT.classList.remove('flipped')
        AudioSuccess.play()
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
        let lastClickTime = 0;

        document.getElementById('cardb1').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(1);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb2').onclick = function() {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime > 1240) {
                Memorama(2);
                lastClickTime = currentTime;
            }
            };
        document.getElementById('cardb3').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(3);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb4').onclick = function() {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime > 1240) {
                Memorama(4);
                lastClickTime = currentTime;
            }
            };

        document.getElementById('cardb5').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(5);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb6').onclick = function() {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime > 1240) {
                Memorama(6);
                lastClickTime = currentTime;
            }
            };

        document.getElementById('cardb7').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(7);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb8').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(8);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb9').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(9);
            lastClickTime = currentTime;
        }
        };
        
        document.getElementById('cardb10').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(10);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb11').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(11);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb12').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(12);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb13').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(13);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb14').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(14);
            lastClickTime = currentTime;
        }
        };
        document.getElementById('cardb15').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(15);
            lastClickTime = currentTime;
        }
        };
        document.getElementById('cardb16').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(16);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb17').onclick = function() {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime > 1240) {
                Memorama(17);
                lastClickTime = currentTime;
            }
            };

        document.getElementById('cardb18').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(18);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb19').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(19);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb20').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 1240) {
            Memorama(20);
            lastClickTime = currentTime;
        }
        };
        
})