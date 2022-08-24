console.log("hello world") 
console.log(process.argv)

if (process.argv[2] === 'Alex') {
    console.log("Its Alex")
} else {
    console.log("Not Alex")
} 

const app = (names) => {
    switch(names[2]) {
        case 'Alex':
            const alex = names[2]
            console.log(alex + ' is stored in a const')
            break;
        case 'Steve':
            const steve = names[2]
            console.log(steve + ' is stored in a const')
            break;
        default:
            console.log('No name')
    }
} 

app(process.argv)