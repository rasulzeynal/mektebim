import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { getData } from '../../redux/action';


const CourseTest = ({auth}) => {
  

  useEffect(() => {
   getData();
  },[])
  return (
    <div>
    {auth.data && auth.data.map(user => (
      <h5 key={user.id}>{user.name}</h5>
    ))}
      <p>fetching data</p>
    </div>
  )
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => {
  return {
    getData: () => dispatch(getData())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CourseTest) ;
