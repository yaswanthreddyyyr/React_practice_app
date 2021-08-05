import React ,{Component} from 'react'

import {connect } from 'react-redux'
import { deletePost } from '../actions/postActions'
class Post extends Component{

    handleClick=(id)=>{
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }

    // console.log(this.props);
    render(){  
        // const post=this.props.post
        console.log(this.props);    
        return (
            <div className="container">
                <h4>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                {/* {console.log(this.props)} */}
                <div className="center">
                    <button className="btn gray" onClick={this.handleClick}>Delete Post</button>
                </div>
                
            </div>
        )
    }
}

const mapStatetoProps=(state,ownProps)=>{
let id=ownProps.match.params.post_id;

    return{
        // post:state.posts[id-1]
        post:state.posts.find(post=>{
            return(post.id==id)
        })
    }
    
}
const mapDispatchtoProps=(dispatch)=>{
return{
    deletePost:(id)=>{
        dispatch(deletePost(id))
    }
    // deletePost(id)
}

}

export default connect(mapStatetoProps,mapDispatchtoProps)(Post)