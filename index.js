//console.log('hello')
// kiiratok a terminalra
//console.log(process.argv)
//if (process.argv[2]==='Alex'){
//console.log('Its Alex')
//} else {
//console.log('Not Alex')
//}

const app = (names) => {
    switch (names[2]) {
        case 'Alex':
            const alex = names[2]
            console.log(alex + 'Its Alex')
            break;
        case 'Steve':
            const steve = names[2]
            console.log(steve + 'Steve')
            break;
        default:
            console.log('no name')
    }
}

app(process.argv)