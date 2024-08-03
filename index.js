import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import https from "https";

const app = express();
const PORT = 3000;
const API_url = "https://v6.exchangerate-api.com/v6/aaa6bebaf98f80dc171da2f3/latest/USD";

const config = {
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
};

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get(API_url, config);
        const result = response.data;
        
        const currentcurrency = {
            currentDollar: result.conversion_rates.USD,
            currentPKR: result.conversion_rates.PKR,
        };
        console.log(currentcurrency);

        res.render("index.ejs", { data: currentcurrency });
    } catch (error) {
        console.error(error.message);
        res.render("index.ejs", { error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});
