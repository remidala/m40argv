const Movie = require("./utils")

console.log(process.argv)

const app = (argsArr) => {
    try {
        switch (argsArr[2]){
            case 'add':
                // console.log("inside add")
                // const movie = argsArr[3]
                // console.log(movie + 'is stored') 

                // const actor = argsArr[4]
                // console.log(actor + 'is stored')

                // const movieArr = [argsArr[3], argsArr[4]]
                // console.log(movieArr)
                const movie = new Movie(argsArr[3], argsArr[4])
                movie.add()
                console.log(movie.list())
                break;
            default:
                console.log("incorrect command")
                break;
        }
    } catch (error){
        console.log(error)
    }
}
app(process.argv)



