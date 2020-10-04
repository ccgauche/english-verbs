import Verb from "./verb";

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const verbs = shuffle([
    //new Verb("ÊTRE", ["be", "was/were", "been"]),
    //new Verb("FAIRE (Action)", ["make", "made", "made"]),
    new Verb("COÛTER", ["cost", "cost", "cost"]),
    new Verb("COUPER", ["cut", "cut", "cut"]),
    new Verb("FRAPPER", ["hit", "hit", "hit"]),
    new Verb("BLESSER", ["hurt", "hurt", "hurt"]),
    new Verb("PERMETTRE, LOUER", ["let", "let", "let"]),
    new Verb("LIRE", ["read", "read", "read"]),
    new Verb("FIXER", ["set", "set", "set"]),
    new Verb("FERMER", ["shut", "shut", "shut"]),
    new Verb("(se) COURBER", ["bend", "bent", "bent"]),
    new Verb("APPORTER", ["bring", "brought", "brought"]),
    new Verb("CONSTRUIRE", ["build", "built", "built"]),
    new Verb("BRÛLER", ["burn", "burnt", "burnt"]),
    new Verb("ACHETTER", ["buy", "bought", "bought"]),
    new Verb("ATTRAPER", ["catch", "caught", "caught"]),
    new Verb("DISTRIBUER", ["deal", "dealt", "dealt"]),
    new Verb("RÊVER", ["dream", "dreamt", "dreamt"]),
    new Verb("(se) SENTIR, EPROUVER", ["feel", "felt", "felt"]),
    new Verb("(se) BATTRE, COMBATTRE", ["fight", "fought", "fought"]),
    new Verb("TROUVER", ["find", "found", "found"]),
]);

let index = 0;

export function hint() {
    verbs[index].displayAnswers();
}

export function init() {
    index = 0;
    verbs[index].display();
}

export function check() {
    if (verbs[index].check()) {
        index++;
        verbs[index].display();
    }
}