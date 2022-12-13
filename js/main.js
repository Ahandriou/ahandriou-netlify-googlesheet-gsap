
function getUsers() {

  $.ajax({
    // 1)   On definit le fichier vers lequel on envoie la requete
    url: 'https://sheets.googleapis.com/v4/spreadsheets/1fnFiXQ_t-5JQQ4yezHCiQucu43b9PxHTnybs_hirbRs/values/Sheet1?key=AIzaSyAJiGonV9z_YJkpJPb9So3iJIyzXS8KAbU',



    // 2) On spécifie la méthode
    type: 'GET', // Le type de la requete http, ici get

    // 3) on définit les variables POST qui sont ennvoyées au fichier .php qui les récupère sous forme de $_POST["nom"] 
    data: {
    }, // On fait passer nos variables au script

    // 4) format de retour du fichier php dans "data"
    dataType: 'json',

    // 5) fonction à effectuer en cas de succès
    success: function (monArray) {

      console.log(monArray.values);


      var html = '';
      let nom;
      let prenom;
      let gender;
      let picture;

      for (i = 1; i < monArray.values.length; i++) {
        nom = monArray.values[i][0].toUpperCase();
        prenom = monArray.values[i][1];
        gender = monArray.values[i][2];
        picture = monArray.values[i][3];

        console.log(monArray.values);
        console.log(nom);


        html += '<div id="id_' + i + '" class="contenu tous ' + nom + ' ' + gender + ' ";"">';

        html += '<h1>';
        html += nom;
        html += '</h1>';

        html += '<h2>';
        html += prenom;
        html += '</h2>';

        if (picture) {
          html += '<img src=img/' + picture + '>';
        }

        console.log(picture);

        html += '</div>';

      }

      //['nom', 'prenom', 'gender', 'picture']

      $('.main').html(html);
      const timeline = gsap.timeline({
        defaults: {
          duration: 1,
          // 
        },
        paused: true,
        onStart: foncstart,
        onUpdate: foncupdate,
        onComplete: fonccomplete
      });
      
      timeline
      
        .fromTo('body', {
          backgroundColor: '#fff'
        }, {
          backgroundColor: '#232323'
        })
        
        
        .fromTo('.main .contenu', {
          opacity: 0,
          y: -20,
        }, {
          opacity: 1,
          y: 0,
          stagger: 0.4
      
        },
        )
      
      timeline.play();


    }//success

  }) // intro ajax function 


}

const foncstart = () => {
  console.log('start');
}
const foncupdate = () => {
  console.log('update');
}
const fonccomplete = () => {
  console.log('complete');
}


getUsers();
