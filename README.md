# Fun Fact & Classify Number API

This API classifies a number and returns its mathematical properties along with a fun fact.

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd into the repo

   ```

2. Install Dependencies:

   ```bash
   pnpm install

   ```

3. Run the Project:

   ```bash
   pnpm run dev

   ```

4. Production Build:
   ```bash
   pnpm run build
   pnpm run start
   ```

## API Documentation

1. Get User Information

   Endpoint: [`GET /api/classify-number?number=<number>`](http://localhost:3000/api/classify-number?number=371)
   Method: GET

2. Response
   The API returns the following JSON response:

   ```json
   {
     "number": 371,
     "is_prime": false,
     "is_perfect": false,
     "properties": ["armstrong", "odd"],
     "digit_sum": 11,
     "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
   }
   ```

3. Example Usage
   You can test the API using curl or any API client:

   ```bash
   curl http://localhost:7000/api/classify-number?number=371

   ```
