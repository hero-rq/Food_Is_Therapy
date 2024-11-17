async function submitFood() {
            const foodItems = document.getElementById('food-input').value.split(',').map(item => item.trim()).filter(item => item);

            const response = await fetch('/submit_food', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ food_items: foodItems })
            });

            const data = await response.json();
            alert(data.message);
            document.getElementById('food-input').value = '';

            // Update Lottie animation based on health level
            updateLottieAnimation(data.health_level);

            displayHabitData();
        }

    function updateLottieAnimation(healthLevel) {
    const lottieContainer = document.getElementById('lottie-avatar');
    lottieContainer.innerHTML = ''; // Clear previous animation

    let animationPath = '';
    if (healthLevel === 'healthy') {
        animationPath = '/static/animations/happydog.json';
    } else if (healthLevel === 'average') {
        animationPath = '/static/animations/normaldog.json';
    } else if (healthLevel === 'unhealthy') {
        animationPath = '/static/animations/saddog.json';
    }

    lottie.loadAnimation({
        container: lottieContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath
    });
}

        async function displayHabitData() {
            const response = await fetch('/get_habit_data');
            const data = await response.json();

            const habitOutput = document.getElementById('habit-output');
            habitOutput.innerHTML = '';

            data.forEach(entry => {
                const dateDiv = document.createElement('div');
                dateDiv.className = 'habit-entry';

                const dateHeader = document.createElement('h3');
                dateHeader.innerText = entry.date;
                dateDiv.appendChild(dateHeader);

                const foodsList = document.createElement('p');
                foodsList.innerText = 'Foods: ' + (entry.foods.length > 0 ? entry.foods.join(', ') : 'No data');
                dateDiv.appendChild(foodsList);

                // Add Lottie animation container
                const lottieContainer = document.createElement('div');
                lottieContainer.style.width = '300px';
                lottieContainer.style.height = '300px';
                dateDiv.appendChild(lottieContainer);

        // Determine health level and load the corresponding animation
        let healthLevel = 'average'; // Default value
        if (entry.good_count > entry.bad_count) {
            healthLevel = 'healthy';
        } else if (entry.bad_count > entry.good_count) {
            healthLevel = 'unhealthy';
        }

        let animationPath = '';
        if (healthLevel === 'healthy') {
            animationPath = '/static/animations/happydog.json';
        } else if (healthLevel === 'average') {
            animationPath = '/static/animations/normaldog.json';
        } else if (healthLevel === 'unhealthy') {
            animationPath = '/static/animations/saddog.json';
        }

        // Load Lottie animation
        lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: animationPath
        });

        // Append the habit entry to the output
        habitOutput.appendChild(dateDiv);
    });
}

        // Load habit data on page load
        window.onload = displayHabitData;