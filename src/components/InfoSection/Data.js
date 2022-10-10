
export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Halloween',
    headline: "Trick or Treat",
    description: 'Hello, what would you like this Halloween, A Trick or a Treat?',
    buttonLabel: 'Trick or Treat ?',
    imgStart: false,
    img: require('../../images/pumpkin.svg').default,
    alt: 'Image',
    dark: true,
    primary: true,
    darkText: false,
    buttonTo: "home",
    buttonR: false
}

export const homeObjOTwo = {
    id: 'trick',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'TRICK',
    headline: "You would like a Trick",
    description: 'Very brave of you to choose a trick instead of a treat? Arent you afraid itll be something scary? Or do you think it will just be a cute pcture of a dog?',
    buttonLabel: 'Trick please ',
    imgStart: true,
    img: require('../../images/startled.svg').default,
    alt: 'Image',
    dark: false,
    primary: false,
    darkText: true,
    buttonTo: "/trick",
    buttonR: true
}

export const homeObjThree = {
    id: 'treat',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'TREAT',
    headline: "You would like a Treat",
    description: 'Can never go wrong with a candy treat, although its kind of hard to give candy through a screen so how about this instead.',
    buttonLabel: 'Treat please ',
    imgStart: false,
    img: require('../../images/spooky.svg').default,
    alt: 'Image',
    dark: true,
    primary: true,
    darkText: false,
    buttonTo: "/treat",
    buttonR: true
}
