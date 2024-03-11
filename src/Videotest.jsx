import React, { useState } from 'react'

function videotest() {
    const [videos, setVideos] = useState([]);

    // useEffect(() => {
    //   // Fetch videos from the server (replace 'YOUR_API_ENDPOINT' with your actual API endpoint)
    //   //axios.get('YOUR_API_ENDPOINT/videos')
    //     //.then(response => {
    //       setVideos(response.data);
    //     })
    //     .catch(error => {
    //       console.error('Error fetching videos:', error);
    //     });
    // }, []);
  
    const handleUpload = (event) => {
      // Implement video upload logic here
      // Make a POST request to the server to handle video upload
      // Update the 'videos' state with the new video
    };
  
    const handleDelete = (videoId) => {
      // Implement video delete logic here
      // Make a DELETE request to the server to delete the video
      // Update the 'videos' state by removing the deleted video
    };
  return (
    <div>
      <div>
      <h1 className="text-2xl font-bold mb-4">Video Management</h1>

      <input type="file" onChange={handleUpload} className="mb-4" />

      <div className="grid grid-cols-3 gap-4">
        {videos.map(video => (
          <div key={video.id} className="border p-4">
            <video controls className="w-full h-auto mb-2">
              <source src={video.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={() => handleDelete(video.id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default videotest
