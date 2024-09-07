# Simple Express App Debugging

A simple Node.js Express application that can be used to learn and practice debugging.

## Features

- 6 GET routes for retrieving information.
- 4 POST routes for adding new information.


## How to run

1. **Install dependencies:**
   ```bash
   npm i
   ```

2. **Start the server**
   ```bash
   node index.js
   ```

The server will start on http://localhost:3000.

Running the App
To start the Express server, run:

## How to make a request

GET request:

```bash
curl http://localhost:3000/famous-mountains
```

POST request:

```bash
curl -X POST http://localhost:3000/add-mountain \
-H "Content-Type: application/json" \
-d '{"name": "Mount Kilimanjaro", "height": 5895, "location": "Tanzania"}'
```

## License

MIT

**Free Software, Hell Yeah!**

