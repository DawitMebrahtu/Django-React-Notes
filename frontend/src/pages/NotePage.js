import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const NotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  const getNote = async () => {
    console.log('id:',id)
    try {
        let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch note data');
        }
        let data = await response.json();
        setNote(data);
        console.log('dd', data, id);
      }
     catch (error) {
          console.log('four')

      console.error(error);
    }
  };

  useEffect(() => {
    getNote();
  }, [id]);


  return (
    <div>
      <h3>{note?.body}</h3>
    </div>
  );
};

export default NotePage;
