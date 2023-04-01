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
    
    var MenuA = document.getElementById('Menuanimado')
    var MenuState = document.getElementsByClassName('menu');
    function Togglemenu() {
        if (MenuState[0].style.display === 'none') {
          MenuState[0].style.display = 'block';
          MenuA.classList.add('Show');
          console.log('Se aplico')
        } else {
          MenuState[0].style.display = 'none';
          MenuA.classList.remove('Show');
          console.log('Se quito')
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

    var SecondsFirebase = 0;
    var seconds = 0;
    var minutes = 0;
    var hours = 0;
    var timer;

    function startTimer() {
    timer = setInterval(showTime, 1000); // Se ejecuta la función showTime cada segundo (1000 milisegundos)
    }

    function showTime() {
    SecondsFirebase++;
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
        minutes = 0;
        hours++;
        }
    }
    document.getElementById("Timer").innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    }

    function stopTimer() {
    clearInterval(timer);
    }

    var Scorestate = document.getElementsByClassName('score')[0];
    function ShowScore(){
        if (Scorestate.style.visibility === 'hidden'){
            Scorestate.style.visibility = 'visible'
        } else {
            Scorestate.style.visibility = 'hidden'
        }
    }

    document.getElementById("Timer").onclick = ShowScore

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
        

        setTimeout(function(){
            cardBack.style.display = 'none';
            cardFront.style.display = 'block';
            console.log('se aplico')
        },600);
    

        
        SelectCards.push(cardFront.id);
        SelectBackcover.push(cardBack.id);
        
        setTimeout(function() {
          cardBack.classList.add('flipped');
        }, 100);
      }
      
      
      var LastCard = 0
      var Finishstate = document.getElementById('FinishMenu');
      function Finish(){
            Finishstate.style.display = 'block';
    }
      
    var Startstate = document.getElementById('StartMenu');
    function StartGame(){
            Startstate.style.display = 'none';
            SountrackMusic.play();
            startTimer();
    }
    setTimeout(() => {
        document.getElementById('StartMenu').onclick = StartGame;
    }, 1000);
    

    function Memorama(Cardnumber) {
    flipcard(Cardnumber);
    if (SelectCards.length === 2 ) {
        var firstTAROT = document.getElementById(SelectCards[0]);
        var secondTAROT = document.getElementById(SelectCards[1]);
        var CoverOne = document.getElementById(SelectBackcover[0]);
        var CoverTwo = document.getElementById(SelectBackcover[1]);
        var AudioSuccess = document.getElementById('SuccessMatch')
        var BgChange = document.getElementsByTagName('body')[0];
        AudioSuccess.volume = Soundcontrol.value;

        if (firstTAROT.src === secondTAROT.src) {
            setTimeout(function(){
                firstTAROT.style.display = 'block';
                secondTAROT.style.display = 'block';
                firstTAROT.classList.add('locket');
                secondTAROT.classList.add('locket');
                CoverOne.classList.remove('flipped');
                CoverTwo.classList.remove('flipped');
            },650 )           
            
        if (soundstate === true){
            setTimeout(function(){
                AudioSuccess.play();
            },500 )
            
            LastCard = LastCard + 2
            if (LastCard === 20){
                ShowScore();
                stopTimer();
                setTimeout(function(){
                Finish();
                BgChange.style.background = 'url(./images/Fondos/WINGiftBg.gif)';
                },100 )

            }
        }
        
        SelectCards = [];
        SelectBackcover = [];
        } else {
        setTimeout(function() {
            
            setTimeout(function(){
                firstTAROT.style.display = 'none';
                secondTAROT.style.display = 'none';
                CoverTwo.style.display = 'block';
                CoverOne.style.display = 'block';
            }, 400)
            
            
            
            CoverOne.classList.remove('flipped')
            CoverTwo.classList.remove('flipped')
            SelectCards = [];
            SelectBackcover = [];
            
        }, 650);
        }
    }
    }
        let lastClickTime = 0;

        document.getElementById('cardb1').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(1);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb2').onclick = function() {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime > 650) {
                Memorama(2);
                lastClickTime = currentTime;
            }
            };
        document.getElementById('cardb3').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(3);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb4').onclick = function() {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime > 650) {
                Memorama(4);
                lastClickTime = currentTime;
            }
            };

        document.getElementById('cardb5').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(5);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb6').onclick = function() {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime > 650) {
                Memorama(6);
                lastClickTime = currentTime;
            }
            };

        document.getElementById('cardb7').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(7);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb8').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(8);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb9').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(9);
            lastClickTime = currentTime;
        }
        };
        
        document.getElementById('cardb10').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(10);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb11').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(11);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb12').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(12);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb13').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(13);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb14').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(14);
            lastClickTime = currentTime;
        }
        };
        document.getElementById('cardb15').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(15);
            lastClickTime = currentTime;
        }
        };
        document.getElementById('cardb16').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(16);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb17').onclick = function() {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime > 650) {
                Memorama(17);
                lastClickTime = currentTime;
            }
            };

        document.getElementById('cardb18').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(18);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb19').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(19);
            lastClickTime = currentTime;
        }
        };

        document.getElementById('cardb20').onclick = function() {
        const currentTime = new Date().getTime();
        if (currentTime - lastClickTime > 650) {
            Memorama(20);
            lastClickTime = currentTime;
        }
        };

    ///Base de datos///
    function guardar() {
        var username = document.getElementById("Name").value;

        db.collection("Score").where("Username", "==", username).get()
            .then((querySnapshot) => {
                if (querySnapshot.size > 0) {
                    // Si el nombre de usuario ya existe, actualizar el documento correspondiente
                    var idDocumento = querySnapshot.docs[0].id;
                    var tiempoActual = querySnapshot.docs[0].data().Time;
                    var tiempoNuevo = SecondsFirebase;

                    if (tiempoNuevo <= tiempoActual) {
                        db.collection("Score").doc(idDocumento).update({
                            Time: tiempoNuevo
                            // Aquí puedes actualizar otros campos si es necesario
                        })
                        .then(() => {
                            alert('Score has been updated');
                            Finishstate.style.display = 'none';
                        })
                        .catch((error) => {
                            Finishstate.style.display = 'none';
                            alert('Something went wrong while updating the score');
                        });
                    } else {
                        alert('New score is lower than the current score');
                    }
                } else {
                    // Si el nombre de usuario no existe, agregar un nuevo documento a la colección
                    db.collection("Score").add({
                        Username: username,
                        Time: SecondsFirebase,
                        // Agrega aquí otros campos si es necesario
                    })
                    .then(() => {
                        alert('Score has been saved');
                        Finishstate.style.display = 'none';
                    })
                    .catch((error) => {
                        alert('Something went wrong while saving the score');
                    });
                }
            })
            .catch((error) => {
                alert('Something went wrong while checking if the username already exists');
            });
    }
    document.getElementById('Save').onclick = guardar;
})