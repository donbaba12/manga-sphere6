import React, { useState } from 'react';
import './Forum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Forum() {
    const currentUser = 'Mangaka 1'; 
    const [posts, setPosts] = useState([
        
    ]);
    const [showForm, setShowForm] = useState(false);
    const [editingPost, setEditingPost] = useState(null); 
    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        author: ''
    });
    const [error, setError] = useState('');

    
    const posts2 = [
        { id: 1, title: "Demon Slayer", description: "Explore the adventures of Tanjiro and his quest.", author: "Mangaka 1", views: 12, answers: 8, isHardCoded: true },
        { id: 2, title: "Jujutsu Kaisen", description: "Follow the journey of Itadori as he navigates the world of curses.", author: "Mangaka 2", views: 15, answers: 9, isHardCoded: true },
        { id: 3, title: "One Piece", description: "Join Luffy and his crew in their search for the One Piece.", author: "Mangaka 3", views: 20, answers: 10, isHardCoded: true }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        if (!newPost.title || !newPost.description || !newPost.author) {
            setError('All fields are required!');
            return;
        }

        setError(''); 

        if (editingPost) {
            
            setPosts(prevPosts => prevPosts.map(post =>
                post.id === editingPost.id ? { ...newPost, id: post.id, views: post.views, answers: post.answers } : post
            ));
            setEditingPost(null); 
        } else {
            
            setPosts(prevPosts => [...prevPosts, { ...newPost, id: prevPosts.length + 1, views: 0, answers: 0, isHardCoded: false }]);
        }
        setNewPost({ title: '', description: '', author: '' }); 
        setShowForm(false); 
    };

    const handleEdit = (post) => {
        setEditingPost(post);
        setNewPost({ title: post.title, description: post.description, author: post.author });
        setShowForm(true);
    };

    const handleDelete = (postId) => {
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    };

    return (
        <div className="forum-container">
            <h1 className="page-title">Forum</h1> 
            <div className="add-comment">
                <button onClick={() => setShowForm(!showForm)}>
                    <FontAwesomeIcon icon={faPlus} /> {editingPost ? 'Edit Comment' : 'Add Comment'}
                </button>
            </div>
            <div className="posts">
                {posts2.map(post => (
                    <div key={post.id} className="post">
                        <div className="post-content">
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <p>Author: {post.author}</p>
                        </div>
                        <div className="post-stats">
                            <p>{post.views} views</p>
                            <p>{post.answers} answers</p>
                        </div>
                        {!post.isHardCoded && (
                            <div className="post-actions">
                                <button onClick={() => handleEdit(post)}>
                                    <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button onClick={() => handleDelete(post.id)}>
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Title" 
                        name="title" 
                        value={newPost.title}
                        onChange={handleInputChange}
                        required
                    />
                    <input 
                        type="text" 
                        placeholder="Author" 
                        name="author" 
                        value={newPost.author}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea 
                        placeholder="Description" 
                        name="description" 
                        value={newPost.description}
                        onChange={handleInputChange}
                        required
                    />
                    {error && <p className="error-message">{error}</p>} 
                    <button type="submit">{editingPost ? 'Update' : 'Submit'}</button>
                    <p className="field-required-message">All fields are required.</p> 
                </form>
            )}
            <div className="posts">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="post-content">
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <p>Author: {post.author}</p>
                        </div>
                        <div className="post-stats">
                            <p>{post.views} views</p>
                            <p>{post.answers} answers</p>
                        </div>
                        {!post.isHardCoded && (
                            <div className="post-actions">
                                <button onClick={() => handleEdit(post)}>
                                    <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button onClick={() => handleDelete(post.id)}>
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forum;
