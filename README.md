# mixed-messages-project


## Fortune Teller
Fortune Teller is a javascript program built in Visual Studio Code that gives you a morning, afternoon, and night fortune and luck approximation based on random number generation.

### How it works:
Fortune Teller uses random number generation to assign 3 variables a random number between 0 and 1. If that number is below 0.25, luck will be "poor", and a "poor" fortune will be assigned to that portion of the day, via a "xFortune" variable (ex: morningFortune). Similar mechanics are used to determine neutral luck (0.25 to 0.74999...) and good luck (0.75+). Average luck for the day is the sum of these 3 numbers, divided by 3. These numbers are also the luck percentage that is displayed in the console next to each period of the day, rounded to the nearest whole number, using .fixedTo(0).

The specific fortune that is assigned to that variable is chosen by random number generation between 0 and the length of the array that it is being chosen from, minus 1. The number generated removes and assigns the specified element from the relevant array, and removes it to prevent duplicate fortunes being output for the other times of day.

The array of fortunes was populated by submissions from https://fortuneandframe.com/apps/fortunes/all, curated by myself.

The text output to the console is created using console.log() and template literals to insert the variables directly into the string. Line breaks are created in the console by using blank console.log() calls to separate the times of day to improve readability.



### Resources
* https://fortuneandframe.com/apps/fortunes/all

### Languages used
* Javascript

### Technology used
* Visual Studio Code

* Git-Bash

* Windows Command Prompt (for testing)