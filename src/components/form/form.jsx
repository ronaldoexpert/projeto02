import { useEffect, useState } from "react";

function Form(){    
    const [email, setEmail] = useState("teste");

    return <div>
        <h1>Formulário</h1>
        <label>Email: </label>
        <input type="email" name="email" id="email"
            onChange={(e) => {
                setEmail(e.target.value);
            }} value={email} />
       
    </div>
}

export default Form;