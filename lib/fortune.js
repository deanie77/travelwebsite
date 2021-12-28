const fortuneCookies = [
    'conquer your fears or they will conquer you',
    'rivers need springs',
    'do not fear what you don\'t know',
    'you will have a pleasent surprise',
    'whenever possible, keep it simple',
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random()*fortuneCookies.length)
    return fortuneCookies[idx]
}