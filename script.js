// Car Database
const cars = [
    // Budget Sedans (<$20K)
    {
        name: "Honda Civic",
        price: "$18,000 - $22,000",
        priceMin: 18000,
        priceMax: 22000,
        type: "Budget Sedan",
        emoji: "🚗",
        specs: [
            "2.0L 4-cylinder engine",
            "33 MPG highway",
            "156 HP",
            "Great reliability",
            "Good warranty"
        ],
        category: "sedan",
        bestFor: ["commute", "young", "budget"]
    },
    {
        name: "Toyota Corolla",
        price: "$19,000 - $23,000",
        priceMin: 19000,
        priceMax: 23000,
        type: "Budget Sedan",
        emoji: "🚗",
        specs: [
            "1.8L 4-cylinder engine",
            "31 MPG highway",
            "139 HP",
            "Legendary reliability",
            "Low maintenance costs"
        ],
        category: "sedan",
        bestFor: ["commute", "budget", "reliability"]
    },
    {
        name: "Hyundai Elantra",
        price: "$17,000 - $21,000",
        priceMin: 17000,
        priceMax: 21000,
        type: "Budget Sedan",
        emoji: "🚗",
        specs: [
            "2.0L 4-cylinder engine",
            "32 MPG highway",
            "147 HP",
            "Modern features",
            "10-year warranty"
        ],
        category: "sedan",
        bestFor: ["commute", "budget", "features"]
    },

    // Mid-Range Sedans ($20K-$50K)
    {
        name: "Honda Accord",
        price: "$28,000 - $38,000",
        priceMin: 28000,
        priceMax: 38000,
        type: "Mid-Range Sedan",
        emoji: "🚙",
        specs: [
            "2.0L turbocharged engine",
            "34 MPG highway",
            "252 HP",
            "Spacious interior",
            "Premium comfort features"
        ],
        category: "sedan",
        bestFor: ["commute", "family", "mid-range"]
    },
    {
        name: "Toyota Camry",
        price: "$27,000 - $37,000",
        priceMin: 27000,
        priceMax: 37000,
        type: "Mid-Range Sedan",
        emoji: "🚙",
        specs: [
            "2.5L 4-cylinder engine",
            "32 MPG highway",
            "204 HP",
            "Excellent reliability",
            "Comfortable for long drives"
        ],
        category: "sedan",
        bestFor: ["family", "commute", "mid-range"]
    },
    {
        name: "Mazda6",
        price: "$28,000 - $36,000",
        priceMin: 28000,
        priceMax: 36000,
        type: "Mid-Range Sedan",
        emoji: "🚙",
        specs: [
            "2.5L SKYACTIV engine",
            "33 MPG highway",
            "187 HP",
            "Sporty handling",
            "Premium interior"
        ],
        category: "sedan",
        bestFor: ["commute", "mid-range", "driving"]
    },

    // Luxury Sedans ($50K+)
    {
        name: "BMW 3 Series",
        price: "$55,000 - $65,000",
        priceMin: 55000,
        priceMax: 65000,
        type: "Luxury Sedan",
        emoji: "💎",
        specs: [
            "2.0L turbo inline-6",
            "32 MPG highway",
            "255 HP",
            "Premium interior",
            "Advanced tech suite"
        ],
        category: "sedan",
        bestFor: ["luxury", "driving", "tech"]
    },
    {
        name: "Mercedes-Benz C-Class",
        price: "$60,000 - $75,000",
        priceMin: 60000,
        priceMax: 75000,
        type: "Luxury Sedan",
        emoji: "💎",
        specs: [
            "2.0L turbocharged engine",
            "29 MPG highway",
            "255 HP",
            "Luxurious interior",
            "State-of-the-art safety"
        ],
        category: "sedan",
        bestFor: ["luxury", "comfort", "prestige"]
    },

    // Compact SUVs ($25K-$40K)
    {
        name: "Honda CR-V",
        price: "$28,000 - $37,000",
        priceMin: 28000,
        priceMax: 37000,
        type: "Compact SUV",
        emoji: "🚙",
        specs: [
            "1.5L turbocharged engine",
            "32 MPG highway",
            "190 HP",
            "Excellent cargo space",
            "Great for small families"
        ],
        category: "suv",
        bestFor: ["family", "commute", "compact"]
    },
    {
        name: "Toyota RAV4",
        price: "$27,000 - $36,000",
        priceMin: 27000,
        priceMax: 36000,
        type: "Compact SUV",
        emoji: "🚙",
        specs: [
            "2.5L 4-cylinder engine",
            "28 MPG highway",
            "203 HP",
            "Reliable all-wheel drive",
            "Perfect for families"
        ],
        category: "suv",
        bestFor: ["family", "reliability", "offroad"]
    },

    // Mid-Size SUVs ($40K-$70K)
    {
        name: "Honda Pilot",
        price: "$45,000 - $55,000",
        priceMin: 45000,
        priceMax: 55000,
        type: "Mid-Size SUV",
        emoji: "🚗",
        specs: [
            "3.5L V6 engine",
            "25 MPG highway",
            "280 HP",
            "3-row seating (8 seats)",
            "Perfect for large families"
        ],
        category: "suv",
        bestFor: ["family", "large-family", "work"]
    },
    {
        name: "Toyota 4Runner",
        price: "$52,000 - $62,000",
        priceMin: 52000,
        priceMax: 62000,
        type: "Mid-Size SUV",
        emoji: "🏔️",
        specs: [
            "4.0L V6 engine",
            "21 MPG highway",
            "270 HP",
            "Excellent off-road capability",
            "Built to last"
        ],
        category: "suv",
        bestFor: ["offroad", "family", "adventure"]
    },
    {
        name: "Chevrolet Tahoe",
        price: "$48,000 - $58,000",
        priceMin: 48000,
        priceMax: 58000,
        type: "Mid-Size SUV",
        emoji: "🚙",
        specs: [
            "5.3L V8 engine",
            "23 MPG highway",
            "355 HP",
            "Three rows seating",
            "Powerful towing capacity"
        ],
        category: "suv",
        bestFor: ["family", "work", "large-family"]
    },

    // Luxury SUVs ($70K+)
    {
        name: "BMW X5",
        price: "$70,000 - $85,000",
        priceMin: 70000,
        priceMax: 85000,
        type: "Luxury SUV",
        emoji: "💎",
        specs: [
            "3.0L turbocharged inline-6",
            "26 MPG highway",
            "335 HP",
            "Premium leather interior",
            "Advanced infotainment system"
        ],
        category: "suv",
        bestFor: ["luxury", "family", "tech"]
    },

    // Trucks/Vans
    {
        name: "Ford F-150",
        price: "$35,000 - $65,000",
        priceMin: 35000,
        priceMax: 65000,
        type: "Truck",
        emoji: "🚚",
        specs: [
            "3.5L EcoBoost V6",
            "24 MPG highway",
            "375 HP",
            "Powerful towing",
            "Perfect for work"
        ],
        category: "truck",
        bestFor: ["work", "offroad", "family"]
    },
    {
        name: "Honda Odyssey",
        price: "$38,000 - $48,000",
        priceMin: 38000,
        priceMax: 48000,
        type: "Family Van",
        emoji: "🚐",
        specs: [
            "3.5L V6 engine",
            "28 MPG highway",
            "280 HP",
            "Sliding doors (3)",
            "Excellent for large families"
        ],
        category: "van",
        bestFor: ["family", "large-family", "comfort"]
    }
];

// Form submission
document.getElementById('carForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const income = document.getElementById('income').value;
    const familySize = document.getElementById('familySize').value;
    const useCase = document.getElementById('useCase').value;
    
    const recommendations = getRecommendations(age, income, familySize, useCase);
    displayResults(recommendations);
});

function getRecommendations(age, income, familySize, useCase) {
    let scores = cars.map(car => ({
        ...car,
        score: calculateScore(car, age, income, familySize, useCase),
        reasons: []
    }));
    
    // Add reasons for score
    scores = scores.map(carScore => {
        carScore.reasons = getReasons(carScore.car || carScore, age, income, familySize, useCase);
        return carScore;
    });
    
    // Sort by score and return top 3-4
    return scores
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);
}

function calculateScore(car, age, income, familySize, useCase) {
    let score = 50; // Base score
    
    // Price matching based on income
    const incomeRange = {
        low: [0, 30000],
        mid: [30000, 75000],
        high: [75000, 150000],
        luxury: [150000, Infinity]
    };
    
    const [minIncome, maxIncome] = incomeRange[income];
    const avgCost = (car.priceMin + car.priceMax) / 2;
    
    if (avgCost >= minIncome * 0.15 && avgCost <= minIncome * 0.25) {
        score += 25; // Perfect price range (15-25% of income)
    } else if (avgCost >= minIncome * 0.1 && avgCost <= minIncome * 0.4) {
        score += 15; // Acceptable range
    }
    
    // Family size matching
    switch(familySize) {
        case '1':
            if (car.category === 'sedan') score += 20;
            break;
        case '2':
            if (car.category === 'sedan' || car.category === 'suv') score += 20;
            break;
        case '3-4':
            if (car.category === 'suv' || car.category === 'sedan') score += 20;
            else if (car.category === 'van') score += 15;
            break;
        case '5+':
            if (car.category === 'van' || car.category === 'suv') score += 25;
            else if (car.category === 'truck') score += 20;
            break;
    }
    
    // Use case matching
    switch(useCase) {
        case 'commute':
            if (car.category === 'sedan') score += 25;
            else if (car.category === 'suv') score += 10;
            break;
        case 'family':
            if (car.category === 'suv') score += 25;
            else if (car.category === 'van') score += 25;
            else if (car.category === 'sedan') score += 10;
            break;
        case 'offroad':
            if (car.category === 'truck') score += 25;
            else if (car.category === 'suv') score += 20;
            break;
        case 'luxury':
            if (car.type.includes('Luxury')) score += 30;
            break;
        case 'work':
            if (car.category === 'truck') score += 30;
            else if (car.category === 'van') score += 15;
            break;
    }
    
    // Age considerations
    if (age < 25 && income === 'low') score += 10; // Budget-conscious young person
    if (age > 35 && income === 'high') score += 10; // Established professional
    
    return score;
}

function getReasons(car, age, income, familySize, useCase) {
    const reasons = [];
    
    // Price reason
    const incomeRange = {
        low: [0, 30000],
        mid: [30000, 75000],
        high: [75000, 150000],
        luxury: [150000, Infinity]
    };
    const [minIncome] = incomeRange[income];
    const avgCost = (car.priceMin + car.priceMax) / 2;
    const percentOfIncome = ((avgCost / minIncome) * 100).toFixed(0);
    
    reasons.push(`💰 ${percentOfIncome}% of income (good value)`);
    
    // Type reason
    reasons.push(`✓ Perfect ${useCase} vehicle`);
    
    // Family reason
    const familySizeText = {
        '1': 'Solo traveler',
        '2': 'Couple-friendly',
        '3-4': 'Small family fit',
        '5+': 'Large family capacity'
    };
    reasons.push(`👨‍👩‍👧‍👦 ${familySizeText[familySize]}`);
    
    return reasons;
}

function displayResults(recommendations) {
    const resultsDiv = document.getElementById('results');
    const recommendationsDiv = document.getElementById('recommendations');
    
    recommendationsDiv.innerHTML = '';
    
    recommendations.forEach((rec, index) => {
        const card = document.createElement('div');
        card.className = 'car-card';
        card.style.animationDelay = `${index * 0.1}s`;
        
        const specsHTML = rec.specs
            .map(spec => `<li><strong>•</strong> ${spec}</li>`)
            .join('');
        
        const reasonsHTML = rec.reasons
            .map(reason => `<p>${reason}</p>`)
            .join('');
        
        card.innerHTML = `
            <div class="emoji">${rec.emoji}</div>
            <h3>${rec.name}</h3>
            <div class="car-price">${rec.price}</div>
            <span class="car-type">${rec.type}</span>
            
            <ul class="car-specs">
                ${specsHTML}
            </ul>
            
            <div class="match-score">
                <h4>Why this car?</h4>
                ${reasonsHTML}
            </div>
        `;
        
        recommendationsDiv.appendChild(card);
    });
    
    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}
