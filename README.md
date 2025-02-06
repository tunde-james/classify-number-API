# Number Classification API

This API classifies a given number and returns interesting mathematical properties along with a fun fact about the number.

## Endpoints

**Base URL:** `https://<your-domain.com>/api`

**Method:** `GET`

**Description:** Classifies a number and returns its mathematical properties and a fun fact.

**Parameters:**

- `number` (query parameter): The number to classify.

**Responses:**

- **200 OK:** Returns a JSON object with the number and its properties.
- **400 Bad Request:** Returns an error if the input is not a valid number.

## Local Setup

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

## Deployment on Render
The API is deployed on Render and is publicly accessible at https://tj-classify-number-api.onrender.com. You can test it by sending a GET request to the https://tj-classify-number-api.onrender.com/api/classify-number endpoint.

**Example Request:**
```bash
curl -X GET https://tj-classify-number-api.onrender.com/api/classify-number?number=371
```

## Example Response (200 OK):

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

## Example Response (400 Bad Request):

```json
{
  "number": "alphabet",
  "error": true
}
```

**Possible Properties**
- **prime:** The number is prime.

- **perfect:** The number is a perfect number.

- **armstrong:** The number is an Armstrong number.

- **odd:** The number is odd.

- **even:** The number is even.

**Error Handling**
- **400 Bad Request:** Returned if the input is not a valid integer.

## Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

## License**
This project is licensed under the MIT License.