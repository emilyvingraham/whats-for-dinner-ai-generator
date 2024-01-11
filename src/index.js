function displayRecipe(response) {
    console.log("recipe generated");

    new Typewriter('#ai-recipe', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
    });
}

function getRecipe(event) {
    event.preventDefault();
    
    let userInput = document.querySelector("#user-instructions");

    let apiKey = '47ce0ocdabaf4a2e81b031bb9t47a0e0';
    let context = 'Be polite. Follow user instructions:';
    let prompt = `User instructions: Generate 1 dinner recipe with the main ingredient of ${userInput.value}. Do not introduce yourself. Separate each sentence with <br/>. Separate each section with <br/>. Display the recipe title in <strong> element. Display the recipe ingredients in <strong> element. Display recipe instructions in <strong> element. Sign the recipe with "Generated with ❤️ by SheCodes AI" in a <strong> element`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayRecipe);
}
let recipeFormElement = document.querySelector('#recipe-form');
recipeFormElement.addEventListener('submit', getRecipe);
