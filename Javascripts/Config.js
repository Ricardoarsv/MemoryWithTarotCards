firebase.initializeApp({
    apiKey: "AIzaSyBmEs3aJE7Tw8g6iseXp83SyVDOmuXmIMk",
    authDomain: "tarotmemorama.firebaseapp.com",
    projectId: "tarotmemorama",
    storageBucket: "tarotmemorama.appspot.com",
    messagingSenderId: "1037554128513",
    appId: "1:1037554128513:web:2f499b58061b9efc665f80",
    measurementId: "G-KD2L2KDRYG"
  });

  const db = firebase.firestore();

  

// Score database //
    db.collection("Score")
    .orderBy("Time", "asc")
    .limit(10)
    .onSnapshot((querySnapshot) => {
        if (querySnapshot.size > 10) {
            const lastDoc = querySnapshot.docs[querySnapshot.size - 1];
            const lastTime = lastDoc.data().Time;
            lastDoc.ref.delete();
        }
    Puntajes.innerHTML = '';
    querySnapshot.forEach((doc) => {
        var SecondsBD = `${doc.data().Time}`
        var TimeScore = SgtoTimer(SecondsBD);
        Puntajes.innerHTML += `
        <tr>
            <td>${doc.data().Username}</td>
            <td>${TimeScore}</td>
        </tr>`;
    });
});


function SgtoTimer(segundos){
    var horas = Math.floor(segundos / 3600);
    var minutos = Math.floor((segundos % 3600) / 60);
    var segundosRestantes = segundos % 60;
    return horas + ":" + (minutos < 10 ? "0" : "") + minutos + ":" + (segundosRestantes < 10 ? "0" : "") + segundosRestantes;
};