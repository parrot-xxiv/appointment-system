import { prisma } from '../config/prisma.js'

export const fetchData = async (req, res) => {

    try {
        const testData = await prisma.UserAccount.findFirst()
        console.log(testData)
        res.send(testData)
    }
    catch (err) {
        console.log(err)
        res.sendStatus(500)
    }
}
