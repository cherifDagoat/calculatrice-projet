// je recupere le formulaire
var form = document.getElementById('monFormulaire');
var resultat = document.getElementById('resultats');
var erreur = document.getElementById('erreur');

// quand on soumet le formulaire
form.addEventListener('submit', function(event) {
    event.preventDefault(); // pour pas recharger
    
    // je prends les valeurs
    var n1 = document.getElementById('nb1').value;
    var n2 = document.getElementById('nb2').value;
    var operation = document.getElementById('operation').value;
    
    // je cache tout avant
    resultat.style.display = 'none';
    erreur.style.display = 'none';
    
    // verification des champs vides
    if(n1 == '' || n2 == '') {
        erreur.innerHTML = 'Il faut remplir les 2 champs';
        erreur.style.display = 'block';
        return;
    }
    
    // je transforme en nombre
    var num1 = Number(n1);
    var num2 = Number(n2);
    
    // si num2 est zero ça pose probleme pour la division
    if(num2 == 0 && operation == 'division') {
        erreur.innerHTML = 'Le deuxième nombre ne peut pas être 0 (division par zéro)';
        erreur.style.display = 'block';
        return;
    }
    
    // calculs selon l'operation choisie
    var resultatCalcul;
    var symbole;
    
    if(operation == 'addition') {
        resultatCalcul = num1 + num2;
        symbole = '+';
    } else if(operation == 'soustraction') {
        resultatCalcul = num1 - num2;
        symbole = '-';
    } else if(operation == 'multiplication') {
        resultatCalcul = num1 * num2;
        symbole = '×';
    } else if(operation == 'division') {
        resultatCalcul = num1 / num2;
        symbole = '÷';
    }
    
    // affichage
    resultat.innerHTML = '<p><strong>Résultat:</strong> ' + num1 + ' ' + symbole + ' ' + num2 + ' = ' + resultatCalcul.toFixed(2) + '</p>';
    resultat.style.display = 'block';
});