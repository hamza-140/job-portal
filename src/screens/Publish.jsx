import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Publish = () => {
  // State variables to store form data
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()
  const handleReturn = () => {
    navigate(-1);
  };
  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/Jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
      });
      if (!response.ok) {
        throw new Error('Failed to add job');
      }
      // Clear form fields on successful submission
      setTitle('');
      setDescription('');
      setIsLoading(false);
      alert('Job added successfully!');
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      alert('Failed to add job');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Publish a New Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="mr-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md"
          disabled={isLoading}
        >
          {isLoading ? 'Adding...' : 'Add Job'}
        </button>
        <button
                  onClick={handleReturn}
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                >
                  Return
                </button>
      </form>
    </div>
  );
};

export default Publish;
