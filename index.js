document.addEventListener("DOMContentLoaded", function() {
    const SountrackMusic = document.getElementById('Soundtrack');
    let volumeControl = document.getElementById('volumeControl');
    SountrackMusic.volume = 0.01;
    SountrackMusic.volume = volumeControl.value;

    var Play = document.getElementById('Nomute');
    var DontPlay = document.getElementById('Mute');
    var musicstate = true;

    Play.addEventListener('click', ChangeState);
    DontPlay.addEventListener('click', ChangeState);

    SountrackMusic.play();
    
    function ChangeState(){
        if (Play.style.display === 'block') {
            Play.style.display = 'none';
            SountrackMusic.volume = 0;
            musicstate = false;
            DontPlay.style.display = 'block';
            
        } else {
            DontPlay.style.display = 'none';
            musicstate = true;
            SountrackMusic.volume = 0.1;
            Play.style.display = 'block';
        }
    }

    volumeControl.addEventListener('input', function() {
        if (musicstate === true){
            SountrackMusic.volume = volumeControl.value;
        } else {
            SountrackMusic.volume = 0;
        }
    });

    var DontPlaySounds = document.getElementById('Mutesounds')
    var PlaySounds = document.getElementById('SoundIcon')
    let AudioFlipcard1 = document.getElementById('Flipcard');
    let AudioSuccess1 = document.getElementById('SuccessMatch')
    var soundstate = true
    var Soundcontrol = document.getElementById('soundcontrol');
    function Togglesounds(){
        if (PlaySounds.style.display === 'block') {
            PlaySounds.style.display = 'none';
            AudioFlipcard1.pause();
            AudioSuccess1.pause();
            soundstate = false
            DontPlaySounds.style.display = 'block';
        } else {
            DontPlaySounds.style.display = 'none';
            soundstate = true
            AudioFlipcard1.volume = Soundcontrol.value;
            AudioSuccess1.volume = Soundcontrol.value;
            PlaySounds.style.display = 'block';
        }
    }

    document.getElementById('Mutesounds').onclick = Togglesounds;
    document.getElementById('SoundIcon').onclick = Togglesounds;

    var MenuState = document.getElementsByClassName('menu');
    function Togglemenu() {
        if (MenuState[0].style.display === 'none') {
          MenuState[0].style.display = 'block';
        } else {
          MenuState[0].style.display = 'none';
        }
      }
      
      document.getElementById('Menu').onclick = Togglemenu;
    
    const images1 = './images/Tarots Card/TarotsBackcover1.webp';
    const images2 = './images/Tarots Card/TarotsBackcover2.webp';
    const images3 = './images/Tarots Card/TarotsBackcover3.webp';
    const images4 = './images/Tarots Card/TarotsBackcover4.webp';

    document.getElementById('Backcoverexample1').onclick = function() {
        document.getElementById('cardb1').src = images1;
        document.getElementById('cardb2').src = images1;
        document.getElementById('cardb3').src = images1;
        document.getElementById('cardb4').src = images1;
        document.getElementById('cardb5').src = images1;
        document.getElementById('cardb6').src = images1;
        document.getElementById('cardb7').src = images1;
        document.getElementById('cardb8').src = images1;
        document.getElementById('cardb9').src = images1;
        document.getElementById('cardb10').src = images1;
        document.getElementById('cardb11').src = images1;
        document.getElementById('cardb12').src = images1;
        document.getElementById('cardb13').src = images1;
        document.getElementById('cardb14').src = images1;
        document.getElementById('cardb15').src = images1;
        document.getElementById('cardb16').src = images1;
        document.getElementById('cardb17').src = images1;
        document.getElementById('cardb18').src = images1;
        document.getElementById('cardb19').src = images1;
        document.getElementById('cardb20').src = images1;
    };

        document.getElementById('Backcoverexample2').onclick = function() {
        document.getElementById('cardb1').src = images2;
        document.getElementById('cardb2').src = images2;
        document.getElementById('cardb3').src = images2;
        document.getElementById('cardb4').src = images2;
        document.getElementById('cardb5').src = images2;
        document.getElementById('cardb6').src = images2;
        document.getElementById('cardb7').src = images2;
        document.getElementById('cardb8').src = images2;
        document.getElementById('cardb9').src = images2;
        document.getElementById('cardb10').src = images2;
        document.getElementById('cardb11').src = images2;
        document.getElementById('cardb12').src = images2;
        document.getElementById('cardb13').src = images2;
        document.getElementById('cardb14').src = images2;
        document.getElementById('cardb15').src = images2;
        document.getElementById('cardb16').src = images2;
        document.getElementById('cardb17').src = images2;
        document.getElementById('cardb18').src = images2;
        document.getElementById('cardb19').src = images2;
        document.getElementById('cardb20').src = images2;
    };

    document.getElementById('Backcoverexample3').onclick = function() {
        document.getElementById('cardb1').src = images3;
        document.getElementById('cardb2').src = images3;
        document.getElementById('cardb3').src = images3;
        document.getElementById('cardb4').src = images3;
        document.getElementById('cardb5').src = images3;
        document.getElementById('cardb6').src = images3;
        document.getElementById('cardb7').src = images3;
        document.getElementById('cardb8').src = images3;
        document.getElementById('cardb9').src = images3;
        document.getElementById('cardb10').src = images3;
        document.getElementById('cardb11').src = images3;
        document.getElementById('cardb12').src = images3;
        document.getElementById('cardb13').src = images3;
        document.getElementById('cardb14').src = images3;
        document.getElementById('cardb15').src = images3;
        document.getElementById('cardb16').src = images3;
        document.getElementById('cardb17').src = images3;
        document.getElementById('cardb18').src = images3;
        document.getElementById('cardb19').src = images3;
        document.getElementById('cardb20').src = images3;
    };

    document.getElementById('Backcoverexample4').onclick = function() {
        document.getElementById('cardb1').src = images4;
        document.getElementById('cardb2').src = images4;
        document.getElementById('cardb3').src = images4;
        document.getElementById('cardb4').src = images4;
        document.getElementById('cardb5').src = images4;
        document.getElementById('cardb6').src = images4;
        document.getElementById('cardb7').src = images4;
        document.getElementById('cardb8').src = images4;
        document.getElementById('cardb9').src = images4;
        document.getElementById('cardb10').src = images4;
        document.getElementById('cardb11').src = images4;
        document.getElementById('cardb12').src = images4;
        document.getElementById('cardb13').src = images4;
        document.getElementById('cardb14').src = images4;
        document.getElementById('cardb15').src = images4;
        document.getElementById('cardb16').src = images4;
        document.getElementById('cardb17').src = images4;
        document.getElementById('cardb18').src = images4;
        document.getElementById('cardb19').src = images4;
        document.getElementById('cardb20').src = images4;
    };


    const images = ['./images/Tarots Card/Tarot1.webp', "./images/Tarots Card/Tarot2.webp", "./images/Tarots Card/Tarot3.webp", "./images/Tarots Card/Tarot4.webp","./images/Tarots Card/Tarot5.webp", "./images/Tarots Card/Tarot6.webp", "./images/Tarots Card/Tarot7.webp", "./images/Tarots Card/Tarot8.webp", "./images/Tarots Card/Tarot9.webp", "./images/Tarots Card/Tarot10.webp"];
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
        AudioFlipcard.volume = Soundcontrol.value;
        if (soundstate === true){
            AudioFlipcard.play();
        }
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
        AudioSuccess.volume = Soundcontrol.value;

        if (firstTAROT.src === secondTAROT.src) {           
        firstTAROT.style.display = 'block';
        secondTAROT.style.display = 'block';
        firstTAROT.classList.add('locket');
        secondTAROT.classList.add('locket');
        firstTAROT.classList.remove('flipped')
        secondTAROT.classList.remove('flipped')
        if (soundstate === true){
            AudioSuccess.play();
        }
        
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

        const cards = document.querySelectorAll('.TarotCards');

        let cartasLevantadas = 0;

        cards.forEach(card => {
        card.addEventListener('click', () => {

            card.classList.add('locket');
    
            cartasLevantadas++;
            
            if (cartasLevantadas === cards.length) {
            verificarCartasLevantadas();
            }
        });
        });

        function verificarCartasLevantadas() {
        const cards = document.querySelectorAll('.TarotCards');

        let EveryUp = true;
        cards.forEach(card => {
            if (!card.classList.contains('locket')) {
            EveryUp = false;
            return;
            }
        });

        if (EveryUp) {
            alert('¡Felicidades! Has levantado todas las cartas.');
        }
        }

})