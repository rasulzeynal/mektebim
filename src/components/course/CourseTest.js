import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { getData } from '../../redux/action';


const CourseTest = ({state}) => {

  useEffect(() => {
    getData()
  },[])
  console.log("datafetch",state)
  return (
    <div>
      <p>fetching data</p>
    </div>
  )
}

const mapStateToProps = store => store;

const mapDispatchToProps = dispatch => {
  return {
    getData : () => dispatch(getData())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CourseTest);
