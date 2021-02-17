import React, {useContext} from 'react'
import {GlobalState} from '../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories

    const [category, setCategory] = state.productsAPI.category
    // const [sort, setSort] = state.productsAPI.sort
    const [search, setSearch] = state.productsAPI.search


    const handleCategory = e => {
      console.log(e.target.value)
        setCategory(e.target.value)
        setSearch('')
    }
    // const renderCategories = () => {
    //     let myCategories = [];
    //     for (let category of categories) {
    //       myCategories.push(
    //         <li key={category.name}>
    //           {
    //             category.parentId ? <a
    //               href={`/cid=${category._id}&type=${category.type}`}>
    //               {category.name}
    //             </a> :
    //             <span>{category.name}</span>
    //           }
    //           {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
    //         </li>
    //       );
    //     }
    //     return myCategories;
      // }

    return (
        <div className="filter_menu">
            <div className="row">
            {/* {category.categories > 0 ? renderCategories(category.categories) : null} */}

                <div name="category" value={category} onChange={handleCategory} >
                   
                    {
                        categories.map(category => (
                            <div className='cat' value={"category=" + category._id} key={category._id}>
              {/* <a
              href={`/${category.name}?id=${category._id}&type=${category.name}`}> */}
              <a
              href={`/category/${category._id}`}>
              {category.name}
            </a> 
          
                              
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* {/* <input type="text" value={search} placeholder="Enter your search!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />

            <div className="row sort">
                <span>Sort By: </span>
                <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=oldest'>Oldest</option>
                    <option value='sort=-sold'>Best sales</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
                </select>
            </div> */}
        </div> 
    )
}

export default Filters
