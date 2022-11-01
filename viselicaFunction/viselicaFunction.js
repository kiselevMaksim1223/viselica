// word - загаданное слово
var word = pickWord();
// FinalWord: итоговый массив
var FinalWord = setupFinalWord(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;
// кол во попыток
var Trys = 10;
// цикл на проверку буквы и кол во попыток
while (remainingLetters > 0 && Trys > 0) {
    showPlayerProgress(FinalWord);
    // guess: ответ игрока
    var Guess = getGuess();
    if (Guess === null) {
        break;
    } else if (Guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        // проверяем регистр чтобы был строчные буквы
        Guess = Guess.toLowerCase();
        // уменьшаем попытки
        Trys--;
        // correctGuesses: количество открытых букв
        var correctGuesses = updateGameState(Guess, word,
            FinalWord);
            // вот здесь what нужна))
        remainingLetters = remainingLetters-correctGuesses;
        // alert (remainingLetters);
    }
}
showAnswerAndCongratulatePlayer(FinalWord);