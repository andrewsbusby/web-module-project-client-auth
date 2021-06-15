import React from 'react';
import AddFriend from './AddFriends';
import { axiosWithAuth } from '../Authorizasion/axiosAuth';


class FriendsList extends React.Component {
    state = {
        friends: []
    }

    getFriends = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            this.setState({...this.state,
                friends: [...res.data]
            })
        })
        .catch(err => {
            console.log(err);
        })

    }
    componentDidMount(){
        this.getFriends()
        }

    render() {
        return (
            <div>
                <AddFriend getFriends={this.getFriends} friends={this.state.friends}/>

                {this.state.friends.map((friend) => {
                    return(
                        <div className='friend-list'>
                            <p className='name'> {friend.name}</p>
                            <p className='age'> {friend.age}</p>
                            <p className='emial'> {friend.email}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default FriendsList;