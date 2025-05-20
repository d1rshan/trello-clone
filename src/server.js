import express from "express"
import dotenv from "dotenv"

dotenv.config()
const app = express()
const PORT = process.env.PORT || 6000

app.use(express.json())
app.use("/api/tiles",tileRoutes)

app.get("/", (req,res) => {
    res.json({"hi": "hello"})
})

app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}...`)
})