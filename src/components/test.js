import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser } from '../store/userSlice';

const Test = () => {

    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUser())
    },[dispatch])

  return (
    <div>
    {users && users.map((user,i) => <h1 key={i}>{user.name}</h1>)} 
    </div>
  )
}

export default Test