# Mr.Roboger's Neighborhood

#### Arrays & Looping Independent Project for Epicodus, 10-30-2020

#### By Agata Kolodziej

## Description

Third independent project for Epicodus. It is a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number following specific exceptions. This project demonstrates my knowledge of Loops and Arrays in JavaScript and jQuery so far. I created a form that will prompt the user to enter a number and return a range of numbers (starting from 0 to the inputted number) converting certain digits (1,2,3) into strings ("Beep!", "Boop!", "Won't you be my neighbor?").

## Specifications

### Describe: beepBoop()

| Test                                                                      | Expect                                                                                                                                                                  |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| It will return a range of numbers from 0 to the user's inputted number    | beepBoop(4).toEqual([0, 1, 2, 3, 4]);                                                                                                                                   |
| It will replace all numbers containing 1 with "Beep!"                     | beepBoop(10).toEqual([0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, "Beep!"]);                                                                                                    |
| It will replace all numbers containing 2 with "Boop!"                     | beepBoop(12).toEqual([0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]);                                                                            |
| It will replace all numbers containing 3 with "Won't you be my neighbor?" | beepBoop(13).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]);                     |
| It will display inputted name in "Won't you be my neighbor?"              | beepBoop("input#name").toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor name?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor name?"]); |
| It will return the reverse order of numbers when user clicks "Reverse!"   | beepBoop(4).toEqual([4, "Won't you be my neighbor name?", "Boop!", "Beep!", 0]);                                                                                        |

## Setup/Installation Requirements

##### Software Requirements

1. Internet browser
2. A code editor such as VSCode to view and edit the code

##### View Online

- To view in browser click the GH-Pages link: [Mr.Roboger's Neighborhood](https://agatakolohe.github.io/roboger/)
- Type in a number into the text box and click submit
- Enjoy the range of numbers in Mr. Roboger's neighborhood
- Repeat to get new number ranges

##### Open Locally

- Click on the link to my repository: [My Repository](https://github.com/agatakolohe/roboger.git)
- Click on the green "Code" button and copy the repository URL
- Open your terminal and use the command `git clone https://github.com/agatakolohe/roboger.git` into the directory you would like to clone the repository
- Open in text editor to view code and make changes

## Known Bugs

No known bugs present.

## Support and Contact Details

If any errors or bugs occur use Chrome DevTools or please email me, <agatakolohe@gmail.com>

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- jQuery
- VS Code
- GitHub

### License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2020 Agata Kolodziej
