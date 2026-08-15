// ============================================================
// RECIPE DATA
// ============================================================

const recipes = [

    {
        id: "biryani",
        name: "Vegetable Biryani",
        category: "Indian",
        emoji: "🍛",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=80",
        description: "A flavorful and aromatic rice dish packed with vegetables, spices and delicious Indian flavors.",
        time: "45 min",
        difficulty: "Medium",
        servings: "4",
        rating: "4.8",

        ingredients: [
            "2 cups Basmati rice",
            "1 cup Mixed vegetables",
            "1 Onion",
            "2 Tomatoes",
            "1 tsp Red chilli powder",
            "1 tsp Garam masala",
            "As needed Salt",
            "2 tbsp Cooking oil"
        ],

        instructions: [
            {
                title: "Prepare the rice",
                text: "Wash the basmati rice and cook it until it is almost done. Drain and keep it aside."
            },
            {
                title: "Prepare the vegetables",
                text: "Heat oil in a pan and sauté onions, tomatoes and mixed vegetables until slightly soft."
            },
            {
                title: "Add the spices",
                text: "Add chilli powder, garam masala and salt. Mix everything well and cook for a few minutes."
            },
            {
                title: "Combine everything",
                text: "Add the cooked rice and gently mix it with the vegetables and spices."
            },
            {
                title: "Serve and enjoy",
                text: "Let the biryani rest for a few minutes, garnish with fresh herbs and serve hot."
            }
        ],

        tags: [
            "🌶️ Flavorful",
            "🥕 Vegetable Rich",
            "🍛 Indian Style",
            "👨‍👩‍👧 Family Friendly"
        ]
    },


    // ========================================================
    // PIZZA
    // ========================================================

    {
        id: "pizza",
        name: "Margherita Pizza",
        category: "Italian",
        emoji: "🍕",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        description: "Classic Italian pizza topped with tomato, mozzarella cheese and fresh basil.",
        time: "30 min",
        difficulty: "Easy",
        servings: "2",
        rating: "4.7",

        ingredients: [
            "1 Pizza base",
            "1/2 cup Tomato sauce",
            "150 g Mozzarella cheese",
            "2 Tomatoes",
            "Fresh Basil leaves",
            "1 tbsp Olive oil",
            "1/2 tsp Oregano",
            "A pinch of Salt"
        ],

        instructions: [
            {
                title: "Prepare the base",
                text: "Place the pizza base on a clean baking tray."
            },
            {
                title: "Add tomato sauce",
                text: "Spread tomato sauce evenly over the pizza base."
            },
            {
                title: "Add toppings",
                text: "Add mozzarella cheese, tomato slices and fresh basil leaves."
            },
            {
                title: "Bake the pizza",
                text: "Bake until the cheese melts and the crust becomes golden."
            },
            {
                title: "Serve",
                text: "Slice the pizza and serve it warm."
            }
        ],

        tags: [
            "🍕 Cheesy",
            "🇮🇹 Italian",
            "⚡ Quick",
            "👨‍👩‍👧 Family Friendly"
        ]
    },


    // ========================================================
    // SAMOSA
    // ========================================================

    {
        id: "samosa",
        name: "Crispy Samosa",
        category: "Indian",
        emoji: "🥟",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
        description: "Crispy golden samosas filled with a delicious spiced potato mixture.",
        time: "40 min",
        difficulty: "Medium",
        servings: "4",
        rating: "4.9",

        ingredients: [
            "2 cups All-purpose flour",
            "3 Potatoes",
            "1/2 cup Green peas",
            "1 tsp Garam masala",
            "1/2 tsp Chilli powder",
            "1 tsp Cumin seeds",
            "Salt as needed",
            "Oil for cooking"
        ],

        instructions: [
            {
                title: "Prepare the dough",
                text: "Mix flour, salt and oil with water to make a firm dough."
            },
            {
                title: "Prepare the filling",
                text: "Cook potatoes and peas. Mix them with spices and salt."
            },
            {
                title: "Shape the samosas",
                text: "Roll the dough, cut it and shape each piece into a cone."
            },
            {
                title: "Fill the samosas",
                text: "Place the potato filling inside and seal the edges."
            },
            {
                title: "Cook and serve",
                text: "Cook until golden and crispy. Serve with your favorite chutney."
            }
        ],

        tags: [
            "🥔 Potato Filled",
            "🌶️ Spicy",
            "🥟 Crispy",
            "☕ Tea Time"
        ]
    },


    // ========================================================
    // CHOCOLATE CAKE
    // ========================================================

    {
        id: "cake",
        name: "Chocolate Cake",
        category: "Dessert",
        emoji: "🍰",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
        description: "Soft and delicious chocolate cake with a rich chocolate flavor.",
        time: "50 min",
        difficulty: "Medium",
        servings: "6",
        rating: "4.8",

        ingredients: [
            "1½ cups Flour",
            "1 cup Sugar",
            "1/2 cup Cocoa powder",
            "2 Eggs",
            "1 cup Milk",
            "1/2 cup Butter",
            "1 tsp Baking powder",
            "1 tsp Vanilla essence"
        ],

        instructions: [
            {
                title: "Prepare the batter",
                text: "Mix flour, cocoa powder, baking powder and sugar in a bowl."
            },
            {
                title: "Add wet ingredients",
                text: "Add eggs, milk, butter and vanilla essence."
            },
            {
                title: "Mix well",
                text: "Mix everything until you get a smooth cake batter."
            },
            {
                title: "Bake",
                text: "Pour the batter into a cake pan and bake until completely cooked."
            },
            {
                title: "Decorate and serve",
                text: "Allow the cake to cool before decorating and serving."
            }
        ],

        tags: [
            "🍫 Chocolate",
            "🍰 Sweet",
            "🎂 Celebration",
            "❤️ Popular"
        ]
    },


    // ========================================================
    // PANCAKES
    // ========================================================

    {
        id: "pancakes",
        name: "Fluffy Pancakes",
        category: "Breakfast",
        emoji: "🥞",
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
        description: "Soft and fluffy pancakes perfect for a delicious breakfast.",
        time: "20 min",
        difficulty: "Easy",
        servings: "3",
        rating: "4.6",

        ingredients: [
            "1 cup Flour",
            "1 tbsp Sugar",
            "1 tsp Baking powder",
            "1 Egg",
            "3/4 cup Milk",
            "1 tbsp Butter",
            "A pinch of Salt",
            "Honey for serving"
        ],

        instructions: [
            {
                title: "Mix dry ingredients",
                text: "Mix flour, sugar, baking powder and salt in a bowl."
            },
            {
                title: "Add wet ingredients",
                text: "Add milk, egg and melted butter."
            },
            {
                title: "Prepare batter",
                text: "Mix gently until the batter becomes smooth."
            },
            {
                title: "Cook pancakes",
                text: "Pour the batter onto a heated pan and cook both sides."
            },
            {
                title: "Serve",
                text: "Serve warm with honey or your favorite toppings."
            }
        ],

        tags: [
            "🥞 Breakfast",
            "⚡ Quick",
            "🍯 Sweet",
            "👨‍👩‍👧 Family Friendly"
        ]
    },


    // ========================================================
    // SALAD
    // ========================================================

    {
        id: "salad",
        name: "Fresh Healthy Salad",
        category: "Healthy",
        emoji: "🥗",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
        description: "A fresh and colorful salad packed with vegetables and healthy ingredients.",
        time: "15 min",
        difficulty: "Easy",
        servings: "2",
        rating: "4.5",

        ingredients: [
            "1 Cucumber",
            "2 Tomatoes",
            "1 Carrot",
            "1/2 cup Corn",
            "1/2 cup Lettuce",
            "1 tbsp Lemon juice",
            "1 tsp Olive oil",
            "Salt as needed"
        ],

        instructions: [
            {
                title: "Wash vegetables",
                text: "Wash all vegetables thoroughly."
            },
            {
                title: "Cut vegetables",
                text: "Cut cucumber, tomatoes and carrot into small pieces."
            },
            {
                title: "Combine ingredients",
                text: "Add all vegetables and corn into a large bowl."
            },
            {
                title: "Add dressing",
                text: "Add lemon juice, olive oil and salt."
            },
            {
                title: "Serve fresh",
                text: "Mix everything together and serve immediately."
            }
        ],

        tags: [
            "🥗 Healthy",
            "🥕 Fresh",
            "⚡ Quick",
            "💚 Nutritious"
        ]
    }

];


// ============================================================
// DISPLAY RECIPE CARDS
// ============================================================
function displayRecipes(category = "All") {

    const container =
        document.getElementById("recipeContainer");

    if (!container) {
        return;
    }

    const searchInput =
        document.getElementById("recipeSearch");

    const searchText =
        searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";


    let filteredRecipes = recipes.filter(recipe => {

        // Category matching
        const matchesCategory =
            category === "All" ||
            recipe.category.toLowerCase() ===
            category.toLowerCase();


        // Recipe name matching
        const matchesName =
            recipe.name
                .toLowerCase()
                .includes(searchText);


        // Category search
        const matchesRecipeCategory =
            recipe.category
                .toLowerCase()
                .includes(searchText);


        // Ingredient search
        const matchesIngredient =
            recipe.ingredients.some(ingredient =>
                ingredient
                    .toLowerCase()
                    .includes(searchText)
            );


        // Description search
        const matchesDescription =
            recipe.description
                .toLowerCase()
                .includes(searchText);


        // Search can match ANY of these
        const matchesSearch =
            searchText === "" ||
            matchesName ||
            matchesRecipeCategory ||
            matchesIngredient ||
            matchesDescription;


        return matchesCategory && matchesSearch;

    });


    container.innerHTML = "";


    // No results
    if (filteredRecipes.length === 0) {

        container.innerHTML = `

            <div class="no-results">

                <h2>
                    😔 No recipes found
                </h2>

                <p>
                    Try another recipe name,
                    ingredient or category.
                </p>

            </div>

        `;

        updateRecipeCount(0);

        return;
    }


    // Display results
    filteredRecipes.forEach(recipe => {

        container.innerHTML +=
            createRecipeCard(recipe);

    });


    // Update count
    updateRecipeCount(
        filteredRecipes.length
    );

}



   
    


// ============================================================
// CREATE RECIPE CARD
// ============================================================

function createRecipeCard(recipe) {

    return `

        <article class="recipe-card">

            <img
                src="${recipe.image}"
                alt="${recipe.name}"
                class="recipe-card-image"
            >

            <div class="recipe-card-content">

                <span class="recipe-card-category">
                    ${recipe.emoji} ${recipe.category}
                </span>

                <h3>
                    ${recipe.name}
                </h3>

                <p>
                    ${recipe.description}
                </p>

                <div class="recipe-card-info">

                    <span>
                        ⏱️ ${recipe.time}
                    </span>

                    <span>
                        ⭐ ${recipe.rating}
                    </span>

                </div>

                <a
                    href="recipe-details.html?id=${recipe.id}"
                    class="view-recipe-btn">

                    View Recipe →
                    
                </a>

            </div>

        </article>

    `;
}


// ============================================================
// FILTER RECIPES
// ============================================================

function filterRecipes(category) {

    displayRecipes(category);


    const buttons =
        document.querySelectorAll(".filter-buttons button");


    buttons.forEach(button => {

        button.classList.remove("filter-active");

    });


    // Find clicked button
    const clickedButton =
        [...buttons].find(button =>
            button.textContent.includes(category)
        );


    if (clickedButton) {

        clickedButton.classList.add("filter-active");

    }

}


// ============================================================
// RECIPE COUNT
// ============================================================

function updateRecipeCount(count) {

    const countElement =
        document.getElementById("recipeCount");

    if (countElement) {

        countElement.textContent =
            `${count} Recipes`;

    }

}


// ============================================================
// HOME PAGE SEARCH
// ============================================================
function searchFromHome() {

    const input =
        document.getElementById("homeSearch");

    if (!input) return;

    const search =
        input.value.trim();

    // If nothing is entered
    if (search === "") {

        window.location.href = "recipes.html";

        return;
    }

    // Send search text to Recipes page
    window.location.href =
        `recipes.html?search=${encodeURIComponent(search)}`;
}

// ============================================================
// AI RECIPE INSIGHT
// ============================================================


    function setupAIInsightButton() {

    const button =
        document.getElementById("aiinsightButton");

    if (!button) return;

    button.addEventListener("click", function () {

        getAIInsight();

    });

}function getAIInsight() {

    const input =
        document.getElementById("ingredientInput");

    if (!input) {
        return;
    }

    const search =
        input.value.trim().toLowerCase();

    const insightBox =
        document.getElementById("aiinsight");

    if (!insightBox) {
        return;
    }


    // If user hasn't entered anything
    if (search === "") {

        insightBox.innerHTML = `
            <h3>✨ AI Recipe Insight</h3>
            <p>
                Tell me what you're craving and I'll
                suggest a recipe for you!
            </p>
        `;

        return;

    }

      
    


    // Find matching recipes
    const matches =
        recipes.filter(recipe => {

            const nameMatch =
                recipe.name
                    .toLowerCase()
                    .includes(search);

            const categoryMatch =
                recipe.category
                    .toLowerCase()
                    .includes(search);

            const ingredientMatch =
                recipe.ingredients.some(ingredient =>
                    ingredient
                        .toLowerCase()
                        .includes(search)
                );

            return (
                nameMatch ||
                categoryMatch ||
                ingredientMatch
            );

        });


    if (matches.length > 0) {

        const recipe =
            matches[0];

        insightBox.innerHTML = `

            <h3>✨ AI Recipe Insight</h3>

            <p>
                I think you might enjoy
                <strong>${recipe.name}</strong>!
            </p>

            <p>
                🍽️ ${recipe.category} cuisine
                <br>
                ⏱️ Ready in ${recipe.time}
                <br>
                ⭐ Rated ${recipe.rating}/5
            </p>

            <a
                href="recipe-details.html?id=${recipe.id}"
                class="ai-view-button">

                View Recipe →

            </a>

        `;

    } else {

        insightBox.innerHTML = `

            <h3>✨ AI Recipe Insight</h3>

            <p>
                I couldn't find a matching recipe yet.
                Try searching for something like
                <strong>pizza</strong>,
                <strong>cake</strong>,
                <strong>Indian</strong>, or
                <strong>tomato</strong>.
            </p>

        `;

    }

}




// ============================================================
// HOME CATEGORY SEARCH
// ============================================================

function searchCategory(category) {

    window.location.href =
        `recipes.html?category=${encodeURIComponent(category)}`;

}


// ============================================================
// DISPLAY FEATURED RECIPES ON HOME PAGE
// ============================================================

function displayFeaturedRecipes() {

    const container =
        document.getElementById("featuredRecipes");

    if (!container) return;


    const featured =
        recipes.slice(0, 4);


    container.innerHTML = "";


    featured.forEach(recipe => {

        container.innerHTML += createRecipeCard(recipe);

    });

}


// ============================================================
// LOAD SEARCH / CATEGORY FROM URL
// ============================================================

function loadRecipeFilters() {

    const params =
        new URLSearchParams(window.location.search);


    const search =
        params.get("search");

    const category =
        params.get("category");


    const searchInput =
        document.getElementById("recipeSearch");


    if (searchInput && search) {

        searchInput.value = search;

    }


    if (category) {

        displayRecipes(category);

    } else {

        displayRecipes("All");

    }

}


// ============================================================
// RECIPE DETAILS PAGE
// ============================================================

function loadRecipeDetails() {

    const params =
        new URLSearchParams(window.location.search);


    const recipeId =
        params.get("id");


    if (!recipeId) {

        console.log("No recipe selected.");

        return;

    }


    const recipe =
        recipes.find(item => item.id === recipeId);


    if (!recipe) {

        console.log("Recipe not found.");

        return;

    }


    // --------------------------------------------------------
    // IMAGE
    // --------------------------------------------------------

    const image =
        document.querySelector(".recipe-image-container img");

    if (image) {

        image.src = recipe.image;
        image.alt = recipe.name;

    }


    // --------------------------------------------------------
    // CATEGORY
    // --------------------------------------------------------

    const category =
        document.querySelector(".recipe-category");

    if (category) {

        category.textContent =
            `${recipe.emoji} ${recipe.category.toUpperCase()} CUISINE`;

    }


    // --------------------------------------------------------
    // TITLE
    // --------------------------------------------------------

    const title =
        document.querySelector(".recipe-main-info h1");

    if (title) {

        title.textContent =
            `${recipe.name} ${recipe.emoji}`;

    }


    // --------------------------------------------------------
    // DESCRIPTION
    // --------------------------------------------------------

    const description =
        document.querySelector(".recipe-description");

    if (description) {

        description.textContent =
            recipe.description;

    }


    // --------------------------------------------------------
    // RATING
    // --------------------------------------------------------

    const ratingStrong =
        document.querySelector(".rating strong");

    if (ratingStrong) {

        ratingStrong.textContent =
            recipe.rating;

    }


    // --------------------------------------------------------
    // RECIPE STATS
    // --------------------------------------------------------

    const stats =
        document.querySelectorAll(".recipe-stats > div");


    if (stats.length >= 3) {

        stats[0].querySelector("strong").textContent =
            recipe.time;

        stats[1].querySelector("strong").textContent =
            recipe.difficulty;

        stats[2].querySelector("strong").textContent =
            recipe.servings;

    }


    // --------------------------------------------------------
    // INGREDIENTS
    // --------------------------------------------------------

    const ingredientsList =
        document.querySelector(".ingredients-list");


    if (ingredientsList) {

        ingredientsList.innerHTML = "";


        recipe.ingredients.forEach(ingredient => {

            const parts =
                ingredient.split(" ");


            const amount =
                parts.slice(0, 2).join(" ");


            const name =
                parts.slice(2).join(" ");


            ingredientsList.innerHTML += `

                <li>

                    <span>🥘</span>

                    <strong>
                        ${amount}
                    </strong>

                    ${name}

                </li>

            `;

        });

    }


    // --------------------------------------------------------
    // AI TAGS
    // --------------------------------------------------------

    const tagsContainer =
        document.querySelector(".ai-tags");


    if (tagsContainer) {

        tagsContainer.innerHTML = "";


        recipe.tags.forEach(tag => {

            tagsContainer.innerHTML += `
                <span>${tag}</span>
            `;

        });

    }


    // --------------------------------------------------------
    // AI INSIGHT
    // --------------------------------------------------------

    const aiParagraph =
        document.querySelector(".ai-recipe-card p");


    if (aiParagraph) {

        aiParagraph.textContent =
            `This ${recipe.category.toLowerCase()} recipe is a great choice if you are looking for ${recipe.name.toLowerCase()}. It takes around ${recipe.time} to prepare and is rated ${recipe.rating}/5 by our recipe community.`;

    }


    // --------------------------------------------------------
    // COOKING INSTRUCTIONS
    // --------------------------------------------------------

    const stepsContainer =
        document.querySelector(".steps");


    if (stepsContainer) {

        stepsContainer.innerHTML = "";


        recipe.instructions.forEach((step, index) => {

            const number =
                String(index + 1).padStart(2, "0");


            stepsContainer.innerHTML += `

                <div class="step">

                    <div class="step-number">
                        ${number}
                    </div>

                    <div>

                        <h3>
                            ${step.title}
                        </h3>

                        <p>
                            ${step.text}
                        </p>

                    </div>

                </div>

            `;

        });

    }


    // Store currently viewed recipe
    localStorage.setItem(
        "currentRecipe",
        recipe.id
    );

}


// ============================================================
// FAVORITES
// ============================================================

function getFavorites() {

    return JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

}


function addToFavorites() {

    const params =
        new URLSearchParams(window.location.search);


    const recipeId =
        params.get("id");


    if (!recipeId) return;


    let favorites =
        getFavorites();


    if (!favorites.includes(recipeId)) {

        favorites.push(recipeId);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert("❤️ Recipe added to Favorites!");

    } else {

        alert("❤️ This recipe is already in Favorites.");

    }

}


// ============================================================
// DISPLAY FAVORITES
// ============================================================
// ============================================================
// DISPLAY FAVORITES
// ============================================================

function displayFavorites() {

    const container =
        document.getElementById("favoritesContainer");

    const emptyMessage =
        document.getElementById("emptyFavorites");

    const countElement =
        document.getElementById("favoriteCount");

    if (!container) return;


    const favoriteIds = getFavorites();


    const favoriteRecipes =
        recipes.filter(recipe =>
            favoriteIds.includes(recipe.id)
        );


    // Update count
    if (countElement) {
        countElement.textContent = favoriteRecipes.length;
    }


    // Clear old recipes
    container.innerHTML = "";


    // No favorites
    if (favoriteRecipes.length === 0) {

        if (emptyMessage) {
            emptyMessage.style.display = "block";
        }

        return;
    }


    // Hide empty message
    if (emptyMessage) {
        emptyMessage.style.display = "none";
    }


    // Display favorite recipes
    favoriteRecipes.forEach(recipe => {

        container.innerHTML += `

            <article class="recipe-card">

                <img
                    src="${recipe.image}"
                    alt="${recipe.name}"
                    class="recipe-card-image"
                >

                <div class="recipe-card-content">

                    <span class="recipe-card-category">
                        ${recipe.emoji} ${recipe.category}
                    </span>

                    <h3>
                        ${recipe.name}
                    </h3>

                    <p>
                        ${recipe.description}
                    </p>

                    <div class="recipe-card-info">

                        <span>
                            ⏱️ ${recipe.time}
                        </span>

                        <span>
                            ⭐ ${recipe.rating}
                        </span>

                    </div>

                    <a
                        href="recipe-details.html?id=${recipe.id}"
                        class="view-recipe-btn">

                        View Recipe →

                    </a>

                    <button
                        class="remove-favorite-btn"
                        onclick="removeFromFavorites('${recipe.id}')">

                        ❤️ Remove from Favorites

                    </button>

                </div>

            </article>

        `;

    });

}
// ============================================================
// REMOVE FROM FAVORITES
// ============================================================

function removeFromFavorites(recipeId) {

    let favorites = getFavorites();

    favorites = favorites.filter(id => id !== recipeId);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    displayFavorites();

}
function setupLogin() {

    const loginForm =
        document.getElementById("loginForm");

    if (!loginForm) return;

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const message =
            document.getElementById("loginMessage");

        if (email === "" || password === "") {

            message.textContent =
                "Please enter your email and password.";

            return;
        }

        message.textContent =
            "✅ Login form is working!";

    });
}
// ============================================================
// EDIT PROFILE
// ============================================================

function editProfile() {

    const nameElement =
        document.querySelector(".profile-details h1");

    const name =
        prompt("Enter your name:");

    if (!name) return;

    nameElement.textContent =
        `Welcome, ${name}! 👋`;

}
        
                
       
           


           



    

       



// ============================================================
// RUN THE CORRECT FUNCTION FOR EACH PAGE
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupLogin();

        // Recipes page
        if (
            document.getElementById("recipeContainer")
        ) {

            loadRecipeFilters();

        }


        // Home page
        if (
            document.getElementById("featuredRecipes")
        ) {

            displayFeaturedRecipes();

        }


        // Recipe details page
        if (
            document.querySelector(".recipe-detail-hero")
        ) {

            loadRecipeDetails();

        }


        // Favorites page
        if (
            document.getElementById("favoritesContainer")
        ) {

            displayFavorites();

        }

    }
);