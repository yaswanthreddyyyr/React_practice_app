import React,{Component} from 'react'

import {Link} from 'react-router-dom'
import img from '../logo192.png'

import {connect} from 'react-redux'




class Home extends Component{
    
    
    render(){
        console.log(this.props)
        const {posts}=this.props;
        // const postList =posts.length ? () : (<div className="center">No posts yet</div>)
        const postList=posts.map((post)=>{
            return (
                <div className="post card"  key={post.id}>
                <img src={img} />
                    <div className="card content">
                    <Link to={'/'+post.id}>
                       <span className='card-title'>{post.title}</span>
                        <p>{post.body}</p> 
                    </Link>
                        
                    </div>
                </div>
            )
        })
     return(
        <div className="container">

            <h4 className="center">Home</h4>
            <p>This is home page </p>
            
            {postList}
        </div>

    )   
    }
    
}
const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home)