import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the search input and the response data
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle the search query and make the API call
  const handleSearch = async () => {
    if (inputText.trim() === '') {
      return; // Do nothing if input is empty
    }

    setLoading(true);
    try {
      // Make a POST request to the API endpoint
      const res = await fetch('https://elastiq-backend.onrender.com/classify_review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ review: inputText }),
      });

      const data = await res.json();

      setResponse(data?.sentiment); // Assuming the response is { message: "Generated AI message" }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('An error occurred while fetching the data.');
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="App">
        <h1>Movie review classifier</h1>

        {/* Search bar input */}
        <div className="search-bar">
          <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter movie review to classify..."
          />
          <button onClick={handleSearch} disabled={loading}>
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>

        {/* Display response from API */}
        {response && (
            <div className="response">
              <h3>Generated Response:</h3>
              <p>{response}</p>
            </div>
        )}
      </div>
  );
}

export default App;