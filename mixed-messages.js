let poorFortunes = [];
let neutralFortunes = [];
let goodFortunes = [];

poorFortunes.push('Be careful who you trust. Salt and sugar look the same.')
poorFortunes.push("One bad chapter doesn't mean your story is over.")
poorFortunes.push('Breathe. This is just a chapter, not your whole story.')
poorFortunes.push("All endings are also beginnings. We just don't know it at the time.")
poorFortunes.push('There are no regrets in life. Just lessons.')
poorFortunes.push('When you come to the end of your rope, tie a knot and hold on.')
poorFortunes.push("There are things in life that you can't control, and aren't supposed to.")
poorFortunes.push('Stop trying to calm the storm. Calm yourself, the storm will pass.')
poorFortunes.push("Buckle up, and know it's going to be a tremendous amount of work, but embrace it.")
poorFortunes.push("The challenge is not to be perfect. It's to be whole.")

neutralFortunes.push('The road to success is always under construction.')
neutralFortunes.push('The best way to predict your future is to create it.')
neutralFortunes.push('Try and fail, but never fail to try.')
neutralFortunes.push('Make happiness a priority, and be gentle with yourself in the process.')
neutralFortunes.push("Distractions will look like opportunities when you don't know where you are going.")
neutralFortunes.push("If you don't like the road you're walking, start paving another one.")
neutralFortunes.push("Happiness is not something that just comes to you. It's an active process.")
neutralFortunes.push('You have to be where you are to get where you need to go.')
neutralFortunes.push("Make bold choices and make mistakes. It's all those things that add up to the person you become.")
neutralFortunes.push('You have to be unique and different and shine in your own way.')

goodFortunes.push('It is never too late to be what you might have been.')
goodFortunes.push('Little by little, one travels far.')
goodFortunes.push("You'll move mountains.")
goodFortunes.push('There are far, far better things ahead than any we leave behind.')
goodFortunes.push('Persistence can change failure into extraordinary achievement.')
goodFortunes.push("Don't be afraid. Be focused. Be determined. Be hopeful. Be empowered.")
goodFortunes.push('The future belongs to those who believe in the beauty of their dreams.')
goodFortunes.push('The only impossible journey is the one you never begin.')
goodFortunes.push('Believe and act as if it were impossible to fail.')
goodFortunes.push('If you can imagine it, you can achieveit; if you can dream it, you can become it.')

let morningLuck = Math.random().toFixed(2);
let afternoonLuck = Math.random().toFixed(2);
let nightLuck = Math.random().toFixed(2);
let averageLuck = ((morningLuck + afternoonLuck + nightLuck) / 3).toFixed(2);

let morningFortune;
let afternoonFortune;
let nightFortune;


let numberPicked;

const fortunePicker = (fortune) => {
    numberPicked = Math.floor(Math.random() * fortune.length);
    return numberPicked;
}


if (morningLuck < 0.25){
    morningFortune = poorFortunes[fortunePicker(poorFortunes)]
} else if (morningLuck >= 0.25 && morningLuck < 0.75) {
    morningFortune = neutralFortunes[fortunePicker(neutralFortunes)];
} else if (morningLuck >= 0.75) {
    morningFortune = goodFortunes[fortunePicker(goodFortunes)];
}

if (afternoonLuck < 0.25){
    afternoonFortune = poorFortunes[fortunePicker(poorFortunes)]
} else if (afternoonLuck >= 0.25 && afternoonLuck < 0.75) {
    afternoonFortune = neutralFortunes[fortunePicker(neutralFortunes)];
} else if (afternoonLuck >= 0.75) {
    afternoonFortune = goodFortunes[fortunePicker(goodFortunes)];
}

if (nightLuck < 0.25){
    nightFortune = poorFortunes[fortunePicker(poorFortunes)]
} else if (nightLuck >= 0.25 && nightLuck < 0.75) {
    nightFortune = neutralFortunes[fortunePicker(neutralFortunes)];
} else if (nightLuck >= 0.75) {
    nightFortune = goodFortunes[fortunePicker(goodFortunes)];
}

console.log('Your fortunes for today are as follows:');
console.log(`Morning: ${morningFortune} You are ${morningLuck*100}% lucky at this time.`);
console.log(`Afternoon: ${afternoonFortune} You are ${afternoonLuck*100}% lucky at this time.`);
console.log(`Night: ${nightFortune} You are ${nightLuck*100}% lucky at this time`);

console.log(`Your average luck for the day is ${averageLuck*100}%.`);