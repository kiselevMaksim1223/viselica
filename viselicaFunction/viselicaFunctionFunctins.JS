// функция выбора рандомного слова
var pickWord = function (words) {
    var words = [
        'вода',
        'доктор',
        'нора',
        'страус'];

    return words[Math.floor(Math.random() * words.length)];
};

// функция заполнения нового массива символом "_"
var setupFinalWord = function (word) {
    var FinalWord = [];
    for (var i = 0; i < word.length; i++) {
        FinalWord[i] = '_';
    }
    return FinalWord;
}
// функция отображния текущего сосотояния
var showPlayerProgress = function (FinalWord) {
    return alert(FinalWord.join(' '));
}
// функция вызова окна ввода символов
var getGuess = function () {
    return prompt('Напишите букву или нажмите "Отмена" для выхода из игры!');
}
// функция проверки введенной буквы
var updateGameState = function (Guess, word, FinalWord) {
    // what это число необходимое для возвращения и подсчета оставшихся букв 
    what = 0;
    for (var j = 0; j < word.length; j++) {
        if (word[j] === Guess && FinalWord[j] === '_') {
            FinalWord[j] = Guess
            what++;
        }
    }
    return what;
}
// функция которая показываетрезультат и/или показывает победу или поражение
var showAnswerAndCongratulatePlayer = function (FinalWord) {
    showPlayerProgress(FinalWord);
    if (Trys > 0) {
        return alert('WIIIN');
    } else {
        return alert('trys end');
    }
}