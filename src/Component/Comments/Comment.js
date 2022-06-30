import './Comment.css';
import Card from 'react-bootstrap/Card';


const Comment = (props) => {
    return (
        <div className='comment'>
            <Card style={{ width: '22.5rem' }}>
                <Card.Body>
                    <Card.Title>{props.comment.username}</Card.Title>
                    <Card.Text>
                        {props.comment.text}
                    </Card.Text>
                    <Card.Text>
                        {props.comment.note}/5⭐
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}


export default Comment;