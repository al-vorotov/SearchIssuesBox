import React, {useEffect, useState} from 'react';
import {getIssues} from "../../services/ajaxSearchIssues";
import {Input} from "../../components";


const SearchIssues = () => {
  const [issues, setIssues] = useState([])
  const getApiCall = (search) => {
    getIssues(search)
        .then((response) => {
          setIssues(response.data.items)
        })
  }
  useEffect(() => {
    getApiCall()
  }, [])

  const handleChangeInput = (e) => {
    getApiCall(e.target.value)
  }
  return (
      <div>
        <h1>React Issue Search</h1>
        <Input onChange={e => handleChangeInput(e)}/>
        {issues.map(item => <p>{item.title}</p>)}
      </div>
  );
};
export default SearchIssues;
