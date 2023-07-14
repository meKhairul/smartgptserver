import axios from "axios";

export const getTextFromGpt = async(inputText) =>{
     const options = {
        method: 'POST',
        url: 'https://chatgpt-api8.p.rapidapi.com/',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '42247aadbamsh0afb9897bc4a253p18d674jsnfa96483a5318',
            'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'
        },
        data: [
            {
            content: inputText ,
            role: 'user'
            }
        ]
        };
    
        try {
            const response = await axios.request(options);
            console.log(response.data.text);
            return response.data.text;
        } catch (error) {
            console.error(error);
            return null;
        }
}


// 'X-RapidAPI-Key': '4c02d50afdmshc9d55cc7f3da291p18a217jsn0efe1b2b49dc',
//     'X-RapidAPI-Host': 'chatgpt-api8.p.rapidapi.com'