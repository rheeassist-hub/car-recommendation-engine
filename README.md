# 🚗 Car Recommendation Engine

A simple, responsive web app that recommends cars based on your age, income, family size, and lifestyle needs.

## Features

- **Smart Recommendation Algorithm**: Uses a scoring system based on:
  - Age
  - Income range
  - Family size
  - Primary use case (commute, family, off-road, luxury, work)

- **15+ Car Models**: Including:
  - Budget sedans
  - Mid-range sedans
  - Luxury sedans
  - Compact SUVs
  - Mid-size SUVs
  - Luxury SUVs
  - Trucks and vans

- **Responsive Design**: Works great on desktop, tablet, and mobile devices
- **Client-side Only**: No backend required, completely static HTML/CSS/JS

## Tech Stack

- HTML5
- CSS3 (with modern grid and flexbox)
- Vanilla JavaScript (no frameworks)

## How to Use

1. Fill out the form with your information:
   - Your age
   - Annual income range
   - Family size
   - Primary vehicle use case

2. Click "Get Recommendations"

3. View your top 4 recommended cars with:
   - Specs and features
   - Price range
   - Why each car is suitable for you

## Example Scenarios

- **25yo, $60K income, family of 4** → Mid-size SUV recommendation
- **35yo, $150K income, couple** → Luxury sedan recommendation
- **22yo, $25K income, single** → Budget sedan recommendation

## Deployment

Deployed on Vercel: [Live Demo Link]

## Local Development

```bash
# Simply open index.html in your browser
open index.html
```

Or use a local server:
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

Then visit `http://localhost:8000`

## Project Structure

```
car-recommender/
├── index.html      # Main HTML
├── style.css       # Styling
├── script.js       # Recommendation logic
└── README.md       # This file
```

## License

Free to use and modify.

---

Made with ❤️ for car enthusiasts everywhere!
