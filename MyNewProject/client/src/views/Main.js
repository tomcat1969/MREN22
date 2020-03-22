// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import PersonForm from '../components/PersonForm';
// import PersonList from '../components/PersonList';
// export default () => {
//     const [people, setPeople] = useState([]);
//     const [loaded, setLoaded] = useState(false);
//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/people')
//             .then(res=>{
//                 setPeople(res.data);
//                 setLoaded(true);
//             });
//     },[]);
    
//     const removeFromDom = personId => {
//         setPeople(people.filter(person => person._id != personId));
//     }
    
//     return (
//         <div>
//            <PersonForm/>
//            <hr/>
//            {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
//         </div>
//     )
// }


import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
export default () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
            .then(res =>{ 
                setPeople(res.data)
                setLoaded(true);

            });
    }, [people])
    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId));
    }
    const createPerson = person => {
        console.log("person =",person)
        axios.post('http://localhost:8000/api/people', person)
            .then(res=>{
                console.log(people)
                
                console.log(res.data)
                console.log([...people, res.data])
                setPeople([...people, res.data]);
                console.log(people)
            })
    }
    return (
        <div>
           <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName=""/>
           <hr/>
           {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}
