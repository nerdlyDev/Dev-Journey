
export function CreateTodo(){
    return <div>
        <input style = {{
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
            width: "200px"

        }}type = "text" placeholder="title"/>
        <br></br>
        <input style = {{
            padding: "10px",
            border: "1px solid black",
            borderRadius: "5px",
            width: "200px"
        }} type = "text" placeholder="description"/>

        <button>Create</button>
    </div>
}

