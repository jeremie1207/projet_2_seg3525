import './Comments.js';
import '../Home.css';
import React, {useState} from 'react';

const CommentForm = props => {

    const [enteredFullName, setEnteredFullName] = useState('');
    const [enteredSelectNote, setEnteredSelectNote] = useState('');
    const [enteredComment, setEnteredComment] = useState('');
    const [errorFullName, setErrorFullName] = useState('');
    const [errorSelectedNote, setErrorSelectedNote] = useState('');
    const [errorComment, setErrorComment] = useState('');



    const fullNameHandler = event =>{
        setEnteredFullName(event.target.value);
    }

    const selectNoteHandler = event =>{
        setEnteredSelectNote(event.target.value);
    }
    const commentHandler = event =>{
        setEnteredComment(event.target.value);
    }

    

    const commentSubmitHandler = event => {

        event.preventDefault();

        if(enteredFullName === '' || enteredSelectNote === '' || enteredComment === ''){
           if(enteredFullName === ''){
                setErrorFullName('Veuillez entrer votre nom complet.');
           }else{
                setErrorFullName('');
           }
           if(enteredSelectNote === ''){
                setErrorSelectedNote('Veuillez selectionner une note.');
           }else{
                setErrorSelectedNote('');
           }
           if(enteredComment === ''){
                setErrorComment('Veuillez écrire votre commentaire.')
           }else{
                setErrorComment('');
           }
        }
        
        
        else{
            const comment = {
                id:Math.random(),
                username: enteredFullName,
                text: enteredComment,
                note: enteredSelectNote
            }
    
            props.onAddComment(comment);
            setEnteredFullName('');
            setEnteredComment('');
            setEnteredSelectNote('');
            setErrorFullName('');
            setErrorSelectedNote('');
            setErrorComment('');
        }

        
    }


    return (<div className='commentForm' onSubmit={commentSubmitHandler}>
        <h3 className="title">Donnez votre avis sur le service que vous avez reçu</h3>
        <form className='form'>
            <label>Nom complet</label><br />
            <input type='text' placeholder='Nom complet' className='form-input' value={enteredFullName} onChange={fullNameHandler}></input><br />
            <p className='error'>{errorFullName}</p>
            <label>Notez le service reçu sur 5(0 : pour un mauvais service et 5 : pour un service incroyable)</label><br />
            <p className='error'></p>
            <select id="notes" className='form-input' onChange={selectNoteHandler} value={enteredSelectNote}>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select><br />
            <p className='error'>{errorSelectedNote}</p>
            <label>Commentaire</label><br />
            <textarea placeholder='Commentaire' className='textarea form-input' onChange={commentHandler} value={enteredComment}></textarea><br />
            <p className='error'>{errorComment}</p>
            <button type='submit' className='form-input btn'>Commentez</button><br />

        </form>
    </div>);
}

export default CommentForm;