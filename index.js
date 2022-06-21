const fs = require("fs")
const path = require("path")

const sortFolder = (read, gender, write) => {
    fs.readdir(path.join(__dirname, read), (err, files) => {
        if (err) return console.log(err)

        files.forEach((file) => {
            const folderPath = path.join(__dirname, read, file)
            fs.readFile(folderPath, (err, data) => {
                if (err) console.log(err)

                const user = JSON.parse(data.toString())

                if (user.gender === gender) {
                    fs.rename(folderPath, path.join(__dirname, write, file), (err) => {
                        if (err) console.log(err)
                    })
                }
            })
        })
    })
}

sortFolder('girls', 'male', 'boys')
sortFolder('boys', 'female', 'girls')

