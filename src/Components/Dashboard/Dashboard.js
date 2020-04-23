import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Dashboard.css';
import axios from 'axios';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h2>Reserve a Recruiter</h2>
                <img className= 'recruiters' src="data:image/jpeg;base64,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" alt='pokemon'></img>
                <p>
                    <ul>Name: Melissa</ul>
                    <ul>Current Employer: </ul>
                    <ul>Previous Employers:</ul>
                    <ul>Years of Experience:</ul>
                    <ul>Availability:</ul>
                    <ul>Rate: $25/hr</ul>
                </p>
                <img className= 'recruiters' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-FzRTgKbRRCuzEHyOERWX3uZo8VAe1qeesl2_PmXPsEizLGvc&usqp=CAU" alt='pokemon'></img>
                <p>
                    <ul>Name: Jeremy</ul>
                    <ul>Current Employer: </ul>
                    <ul>Previous Employers:</ul>
                    <ul>Years of Experience:</ul>
                    <ul>Availability:</ul>
                    <ul>Rate: $20/hr</ul>
                </p>
                <img className= 'recruiters' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrXgR8uv5a7U-ZdYXx3NSDCxNl6k4TY2Cp-v4CYGqW0OIPKbFN&usqp=CAU" alt='pokemon'></img>
                <p>
                    <ul>Name: Chin</ul>
                    <ul>Current Employer: </ul>
                    <ul>Previous Employers:</ul>
                    <ul>Years of Experience:</ul>
                    <ul>Availability:</ul>
                    <ul>Rate: $25/hr</ul>
                </p>
                <img className= 'recruiters' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6xSfx7BeiFU0ClyTGBcV_-CzXM6QGvxkUwVNiM22-mq-Lg12N&usqp=CAU" alt='pokemon'></img>
                <p>
                    <ul>Name: Daniel</ul>
                    <ul>Current Employer: </ul>
                    <ul>Previous Employers:</ul>
                    <ul>Years of Experience:</ul>
                    <ul>Availability:</ul>
                    <ul>Rate: $20/hr</ul>
                </p>
                <img className= 'recruiters' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZJV30Uky3l37zz4bPVKne4MyykEIZLeg_MIH3Twv6UGOsmugN&usqp=CAU" alt='pokemon'></img>
                <p>
                    <ul>Name: Kayleigh</ul>
                    <ul>Current Employer: </ul>
                    <ul>Previous Employers:</ul>
                    <ul>Years of Experience:</ul>
                    <ul>Availability:</ul>
                    <ul>Rate: $20/hr</ul>
                </p>
                <img className= 'recruiters' src="data:image/jpeg;base64,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" alt='pokemon'></img>
                <p>
                    <ul>Name: Eric</ul>
                    <ul>Current Employer: </ul>
                    <ul>Previous Employers:</ul>
                    <ul>Years of Experience:</ul>
                    <ul>Availability:</ul>
                    <ul>Rate: $30/hr</ul>
                </p>
                <img className= 'recruiters' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTDqbtBIxnOAsr8dpEHPpUg3OudqB_F9mCLW7wIKh-Yy_-36ol&usqp=CAU" alt='pokemon'></img>
                <p>
                    <ul>Name: Aaron</ul>
                    <ul>Current Employer: </ul>
                    <ul>Previous Employers:</ul>
                    <ul>Years of Experience:</ul>
                    <ul>Availability:</ul>
                    <ul>Rate: $30/hr</ul>
                </p>
            </div>
        )
    }
}

export default Dashboard



// //Dashboard is where users can view their posts, create new posts, and delete posts.
// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import './Dashboard.css';
// import axios from 'axios';

// class Dashboard extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             posts: [],
//             postImage: ''
//         }
//     }

//     //This functionality will ensure that a user that is not logged in cannot view
//     //this page. They will route to the landing page instead.
//     componentDidMount(){
//         if(!this.props.user.email){
//             this.props.history.push('/');
//         }
//         this.getUserPosts()
//     }

//     handleInput = (val) => {
//         this.setState({postImage: val})
//     }

//     getUserPosts = () => {
//         axios.get(`/api/posts/${this.props.user.user_id}`)
//         .then(res => this.setState({posts: res.data}))
//         .catch(err => console.log(err));
//     }

//     createPost = () => {
//         axios.post('/api/post', {id: this.props.user.user_id, postImage: this.state.postImage})
//         .then(() => {
//             this.getUserPosts();
//             this.setState({postImage: ''});
//         })
//         .catch(err => console.log(err));
//     }

//     deletePost = (id) => {
//         axios.delete(`/api/post/${id}`)
//         .then(() => {
//             this.getUserPosts();
//         })
//         .catch(err => console.log(err))
//     }

//     render(){
//         const mappedPosts = this.state.posts.map((post, i) => (
//             <div className='post-box'>
//                 <img key={i} src={post.post_url} alt='mememountain post' className='post-image'/>
//                 <button onClick={() => this.deletePost(post.post_id)}>Delete</button>
//             </div>
//         ))
//         return(
//             <div className='dashboard'>
//                 <input 
//                     value={this.state.postImage}
//                     placeholder='Add Image URL'
//                     onChange={(e) => this.handleInput(e.target.value)}/>
//                 <button onClick={this.createPost}>Post</button>
//                 <h1>Your Recent Posts</h1>
//                 <div className='post-flex'>
//                     {mappedPosts}
//                 </div>
//             </div>
//         )
//     }
// }

// const mapStateToProps = reduxState => reduxState;

// export default connect(mapStateToProps)(Dashboard);
