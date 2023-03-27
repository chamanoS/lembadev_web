import React, { useState, useEffect } from "react"
import "./blog.css"
import { blog } from "../../assets/data/data"
import { AiOutlineTags, AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai"
import { Link } from "react-router-dom"


export const Card = () => {
  
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBlog, setFilteredBlog] = useState([]);
  
    useEffect(() => {
      const results = blog.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredBlog(results);
    }, [blog, searchTerm]);
  
    const handleSearch = event => {
      setSearchTerm(event.target.value);
    };
  
    const hasSearchResults = filteredBlog.length > 0;
    const noSearchResultsMessage = "No results found.";
  
    return (
      <>
       <div class="headers">
        <div className="search-box">
          <input type="text" placeholder="Search Posts..." value={searchTerm} onChange={handleSearch} />
        </div>
        <Link to="/create">
          <button class="new-post-btn">Create New Post</button>
        </Link>
      </div>
        <div className="categories">
          <button className="category-btn">All</button>
          <button className="category-btn">Software Development</button>
          <button className="category-btn">Writing</button>
          <button className="category-btn">Money</button>
          <button className="category-btn">Motivation</button>
          <button className="category-btn">Leadership</button>
        </div>
        {hasSearchResults ? (
          <section className='blog'>
            <div className='container grid3'>
              {filteredBlog.map((item) => (
                <div className='box boxItems' key={item.id}>
                  <div className='img'>
                    <img src={item.cover} alt='' />
                  </div>
                  <div className='details'>
                    <div className='date'>
                      <AiOutlineTags className='icon' />
                      <AiOutlineClockCircle className='icon' /> <label htmlFor=''>{item.date}</label>
                      <AiOutlineComment className='icon' /> <label htmlFor=''>27</label>
                      <AiOutlineShareAlt className='icon' /> <label htmlFor=''>SHARE</label>
                    </div>
                    <Link to={`/details/${item.id}`} className='link'>
                      <h4>{item.title}</h4>
                    </Link>
                    <p>{item.desc.slice(0, 180)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          <div className="no-results-message">{noSearchResultsMessage}</div>
        )}
      </>
    );
  };
  

  

