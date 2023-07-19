import React, { useState, useEffect } from 'react';
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import {Link, useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';

const NotePage = ({history}) => {
	let navigate = useNavigate()

	const { id } = useParams();
	const [note, setNote] = useState(null);

	const getNote = async () => {
	console.log('id:',id)
		let response = await fetch(`http://127.0.0.1:8000/api/notes/${id}`)
		let data = await response.json();
		setNote(data);
		console.log('dd', data, id);
	};


	let updateNote = async () => {
	  fetch(`http://127.0.0.1:8000/api/notes/${id}/update`, {
	    method: 'PUT',
	    headers: {
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify(note)
	  });
	};

  	let handleSubmit = () =>{
  		updateNote()
  		navigate('/')
  	}

	useEffect(() => {
	getNote();
	}, [id]);


	return (
			<div className='note'>
				<div className='note-header'>
					<h3>
							<ArrowLeft onClick={handleSubmit} />
					</h3>
				</div>
			  	<textarea onChange={(e) => {setNote({...note, 'body':e.target.value})}} defaultValue={note?.body}></textarea>
			</div>
	)
}

export default NotePage;
