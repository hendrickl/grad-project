import React from "react"
import gradients from "../gradients"


/* retourner la liste des tags uniques */

function allTags(list) {
    
    let listTotal = [];
    for (let element of list) {
        if ("tags" in element) {
            listTotal = listTotal.concat(element.tags);
        }
    }

//listTagsUnique = listTagsUnique.concat([el])

    const listTagsUnique = [];
    listTotal.forEach((el) => {
        if (!listTagsUnique.includes(el)) {
            
            listTagsUnique.push(el);
        }
    });
    return listTagsUnique;
}

const uniqueTags = allTags(gradients);
console.log(uniqueTags)


// retourne gradients par élément mappé de uniqueTags


const GradientsSelect = (props) => {
    const { filter, setFilter } = props
    const handleSelectChange = (event) => {
        setFilter(event.target.value)

    }


    return (
        <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">All tags</label>
            <select className="form-select" id="select" value={filter} onChange={handleSelectChange}>
                <option value="tous">All tags</option>
                {uniqueTags.map((el) => {
                    return (
                        <option value={el} key={el}>
                            {el}
                        </option>
                    )
                })}
            </select>
        </div>


    )

}






export default GradientsSelect
