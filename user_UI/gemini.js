const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAi = new GoogleGenerativeAI("AIzaSyDXYBL6yUkKzVuK2U3hmzJOHJsZ1MVH0Rw");

(async () => {
  try {
    const model = await genAi.getGenerativeModel({
      model: "gemini-1.5-pro",
    });
    const r = await model.generateContent(`const { GoogleGenerativeAI } = require('@google/generative-ai');const genAi = new GoogleGenerativeAI("AIzaSyDXYBL6yUkKzVuK2U3hmzJOHJsZ1MVH0Rw");

(async () => {
  try {
    const model = await genAi.getGenerativeModel({
      model: "gemini-1.5-pro",
    });
    const r = await model.generateContent("");
    console.log(r.response.text());
  } catch (error) {
    console.error('Error:', error);
  }
})();
        
        
        
        `);
    console.log(r.response.text());
  } catch (error) {
    console.error('Error:', error);
  }
})();