import React, { useState } from 'react';
import './Forum.css';

function Forum() {
    const [posts, setPosts] = useState([
        // Initial posts can be here
    ]);
    const [showForm, setShowForm] = useState(false);
    const [newPost, setNewPost] = useState({
        title: '',
        description: '',
        author: ''
    });
    const posts2 = [
        { id: 1, title: "Demon Slayer", description: "Explore the adventures of Tanjiro and his quest.", author: "Mangaka 1", views: 12, answers: 8 },
        { id: 2, title: "Jujutsu Kaisen", description: "Follow the journey of Itadori as he navigates the world of curses.", author: "Mangaka 2", views: 15, answers: 9 },
        { id: 3, title: "One Piece", description: "Join Luffy and his crew in their search for the One Piece.", author: "Mangaka 3", views: 20, answers: 10 }
    ];
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPosts(prevPosts => [...prevPosts, {...newPost, id: prevPosts.length + 1, views: 0, answers: 0}]);
        setNewPost({ title: '', description: '', author: '' });  // Reset form
        setShowForm(false);  // Hide form after submission
    };

    return (
        <div className="forum-container">
            <div className="add-comment">
                <button onClick={() => setShowForm(!showForm)}>Add Comment +</button>
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
                    <button type="submit">Submit</button>
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
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forum;

