import { latinToMorse, morseToLatin  } from './dictionnaire.js';


const encodeBtn = document.getElementById('encodeBtn');
const decodeBtn = document.getElementById('decodeBtn');
const resetBtn = document.getElementById('clearBtn');


// Étape 1: Fonction pour obtenir un tableau de caractères à partir de l'alphabet latin/Français
function getLatinCharacterList(text) {
    return text.split('');
};

// Etape 2: Fonction pour traduire un caractère latin en morse
function translateLatinCharacter(character) {
    const upperChar = character.toUpperCase();
    return latinToMorse[upperChar];
};

 // Étape 3: Fonction pour encoder du texte Français/Latin en code morse
function encode(text) {
    const characters = getLatinCharacterList(text);

    const morseChars = characters.map(character => { 
        if (character === ' ') {
            return '/'; // Séparateur de mots en morse en Morse
        };
        return translateLatinCharacter(character);
        });
        return morseChars.join(' ');
};

// Etape 4: Répéter les étapes 1 à 3 pour décoder du morse en texte
function getMorseCharacterList(morse) {
    return morse.split(' ');
};

// Ajout du séparateur de mots (slash) dans le dictionnaire morseToLatin pour ne pas avoir à définir une condition dans la fonction decode
        
function translateMorseCharacter(morseChar) {  
    return morseToLatin[morseChar];
}

function decode(morse) {
    const morseChars = getMorseCharacterList(morse);
    const latinChars = morseChars.map(morseChar => translateMorseCharacter(morseChar));
    return latinChars.join('');
};

// Étape 5: Récupération des datas dans les input pour encoder et décoder
encodeBtn.addEventListener('click', () => {
    const latinText = document.getElementById('latinText').value;
    const morseResult = encode(latinText);
    document.getElementById('morseResult').textContent = morseResult;
});

decodeBtn.addEventListener('click', () => { 
    const morseCode = document.getElementById('morseCode').value;
    const latinResult = decode(morseCode);
    document.getElementById('latinResult').textContent = latinResult;
});

function reset() {
    document.getElementById('latinText').value = '';
    document.getElementById('latinResult').textContent = '';
    document.getElementById('morseCode').value = '';
    document.getElementById('morseResult').textContent = '';  
};

resetBtn.addEventListener('click', reset); // Ecouteur d'événement au clic du bouton "Effacer", la fonction reset est appelée
