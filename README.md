# Food Is Therapy Application

## Overview

The **Food Is Therapy** is a Flask web application designed to help users:

- Generate healthy recipes based on available ingredients and dietary preferences.
- Track and visualize their eating habits over time.
- Explore new meal ideas based on different styles (e.g., Western, Spicy).
- Receive personalized fortunes with a touch of humor.

## Features

1. **Recipe Generation**: Create healthy and creative recipes using specified ingredients, considering dietary restrictions and calorie limits.

2. **Vegetarian Options**: Generate vegetarian recipes by filtering out non-vegetarian ingredients.

3. **Random Style-Based Recipes**: Choose from predefined styles (Western, Spicy, Non-Spicy, Stay Healthy, Comfort Food) to generate recipes with matching ingredients.

4. **Eating Habit Tracker**: Record daily food intake and visualize good vs. bad food choices over the past week.

5. **Fortune Teller**: Receive a randomly generated food-related question and a humorous fortune based on the user's input.

6. **YouTube Integration**: Fetch and display YouTube videos related to the generated recipes.

## Application Structure

### Backend (`app.py`)

- **Libraries Used**:
  - `flask`: Web framework to handle routes and HTTP requests.
  - `openai`: Interact with OpenAI's GPT models for recipe and fortune generation.
  - `os`, `datetime`, `requests`, `re`: Standard Python libraries for environment variables, date handling, HTTP requests, and regex operations.

- **Key Components**:
  - **Data Storage**: Uses in-memory dictionaries for user habits and ingredient data.
  - **Ingredient Data**: Contains nutritional information for various ingredients.
  - **Substitutions**: Provides alternative ingredients for common dietary restrictions.
  - **Good and Bad Foods**: Lists used to categorize foods in the habit tracker.

- **Routes**:
  - `/`: Home page.
  - `/healthy_meal`: Page to generate recipes based on user-specified ingredients.
  - `/record_it`: Eating habit tracker interface.
  - `/random`: Generate random recipes based on predefined styles.
  - `/fortune_food`: Interactive fortune teller page.
  - `/submit_food`: Endpoint to record user's daily food intake.
  - `/get_habit_data`: Fetches the user's habit data for visualization.
  - `/generate_recipe`: Generates a recipe based on user inputs.
  - `/generate_recipe_vegetarian`: Generates vegetarian recipes.
  - `/generate_recipe_by_style`: Generates recipes based on selected style.
  - `/generate_fortune_question`: Provides a random food-related question.
  - `/generate_fortune`: Generates a personalized fortune based on user input.

- **Functions**:
  - **filter_ingredients**: Filters ingredients based on dietary restrictions.
  - **suggest_substitutions**: Suggests alternative ingredients.
  - **generate_recipe_api**: Interacts with OpenAI API to create recipes.
  - **create_instructions_api**: Generates cooking instructions.
  - **clean_text**: Cleans and formats the text output from the API.
  - **calculate_nutrition**: Calculates total nutritional values of a recipe.
  - **fetch_youtube_video_id**: Fetches a YouTube video ID related to the recipe.
  - **generate_fortune_question**: Generates a random question about food.
  - **generate_fortunes**: Generates a humorous fortune based on user input.

### Frontend (HTML Templates)

- **Templates**:
  - `main.html`: The main landing page.
  - `healthy_meal.html`: Interface for users to input ingredients and dietary restrictions.
  - `record_it.html`: Eating habit tracker page.
  - `something_new.html`: Page to generate random style-based recipes.
  - `fortune_food.html`: Fortune teller interface.

- **Common Elements**:
  - **Input Sections**: Fields for users to enter ingredients, restrictions, or answers.
  - **Buttons**: Triggers for generating recipes, fortunes, or submitting data.
  - **Output Sections**: Displays recipes, instructions, nutritional information, YouTube videos, and fortunes.

- **JavaScript Functions**:
  - **AJAX Requests**: Communicate with the backend to fetch data asynchronously.
  - **Event Handlers**: Respond to user interactions like button clicks.
  - **Display Functions**: Update the DOM with the fetched data.

## Setup and Installation

### Prerequisites

- **Python 3.x**
- **Pip** (Python package manager)
- **OpenAI API Key**: Required to interact with OpenAI's GPT models.
- **YouTube Data API Key**: Needed for fetching YouTube videos.

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/hero-rq/Food_Is_Therapy.git
   cd healthy-meal-planner
   ```

2. **Create a Virtual Environment (Optional but Recommended)**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use venv\Scripts\activate
   ```

3. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Set Environment Variables**:
   - **OpenAI API Key**:
     ```bash
     export OPENAI_API_KEY='your-openai-api-key'
     ```
   - **YouTube Data API Key**:
     ```bash
     export YOUTUBE_API_KEY='your-youtube-api-key'
     ```

5. **Run the Application**:
   ```bash
   python app.py
   ```

6. **Access the Application**:
   - Open your web browser and navigate to `http://127.0.0.1:5000/`

## Usage

### 1. Healthy Meal Planner

- **Input Ingredients**: Enter available ingredients and any dietary restrictions.
- **Generate Recipe**: Click the "Generate Recipe" button to create a customized recipe.
- **View Results**: The recipe, instructions, nutritional information, and a related YouTube video will be displayed.

### 2. Eating Habit Tracker

- **Record Intake**: Input the foods you consumed for the day.
- **Submit Data**: Click "Submit Today's Food" to record your intake.
- **View Habits**: Visualize your eating habits over the past week, including good vs. bad food choices.

### 3. Random Style-Based Recipes

- **Choose a Style**: Select from options like Western, Spicy, Non-Spicy, etc.
- **Generate Recipe**: A recipe matching the chosen style will be generated.

### 4. Fortune Teller

- **Receive a Question**: A random food-related question will be displayed.
- **Provide an Answer**: Input your response to the question.
- **Get Your Fortune**: Receive a personalized and humorous fortune based on your input.

## Code Highlights

- **OpenAI Integration**: Utilizes the OpenAI API to generate dynamic content such as recipes, instructions, and fortunes.
- **Data Handling**: In-memory storage for simplicity, with dictionaries to store user habits and ingredient data.
- **Error Handling**: Includes try-except blocks to catch and report errors gracefully.
- **Modular Functions**: Breaks down tasks into reusable functions for clarity and maintainability.
- **API Calls**: Makes external API calls to OpenAI and YouTube, ensuring responses are properly parsed and utilized.

## Customization

- **Adding Ingredients**: You can extend the `INGREDIENTS` dictionary with more items and their nutritional values.
- **Modifying Styles**: Update the `style_ingredients` dictionary in the `/generate_recipe_by_style` route to include new styles or adjust ingredients.
- **Enhancing the Frontend**: Modify the HTML templates and CSS to improve the user interface and experience.
- **Persistent Storage**: Replace in-memory storage with a database like SQLite or PostgreSQL for persistent data management.

## Limitations

- **API Rate Limits**: Be mindful of OpenAI and YouTube API rate limits and usage policies.
- **Data Persistence**: Currently, user data is stored in memory and will reset when the application restarts.
- **Error Messages**: The application may return generic error messages; consider enhancing error handling for better user feedback.

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**: Click the "Fork" button at the top right of this page.
2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/yourusername/healthy-meal-planner.git
   ```
3. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Commit Your Changes**:
   ```bash
   git commit -am 'Add some feature'
   ```
5. **Push to the Branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Create a Pull Request**: Navigate to your forked repository and click the "New Pull Request" button.

## Acknowledgements

- **OpenAI**: For providing the powerful language model APIs.
- **Flask**: For the lightweight and easy-to-use web framework.
- **YouTube Data API**: For enabling video content integration.
