const express = require('express');
const app = express();

app.use(express.json());

const { convertStringsToInt, mean, median, mode } = require('./helpers.js');

app.get('/mean', (req, res) => {
    if (req.query.nums === undefined) {
        return res.status(400).json("nums are required");
    }
    const numStrings = req.query.nums.split(',');
    const nums = convertStringsToInt(numStrings);
    if (nums instanceof Error) {
        return res.status(400).json(nums.message);
    }
    const mean_result = mean(nums);
    return res.json({
        'operation': "mean",
        'value': mean_result
    });
})

app.get('/median', (req, res) => {
    if (req.query.nums === undefined) {
        return res.status(400).json("nums are required");
    }
    const numStrings = req.query.nums.split(',');
    const nums = convertStringsToInt(numStrings);
    if (nums instanceof Error) {
        return res.status(400).json(nums.message);
    }
    const medResult = median(nums);
    return res.json({
        'operation': "median",
        'value': medResult
    });
})

app.get('/mode', (req, res) => {
    if (req.query.nums === undefined) {
        return res.status(400).json("nums are required");
    }
    const numStrings = req.query.nums.split(',');
    const nums = convertStringsToInt(numStrings);
    if (nums instanceof Error) {
        return res.status(400).json(nums.message);
    }
    const modeResult = mode(nums);
    return res.json({
        'operation': "mode",
        'value': modeResult
    });
})

app.listen(3000,() => {
    console.log("Server running on port 3000");
});