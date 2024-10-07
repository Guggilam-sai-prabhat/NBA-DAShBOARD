import { useState , useEffect} from "react";
import axios  from "axios";
import TeamCard from "./TeamCard";


const NbaDasBoard = () => {
    const [teams , setTeams] = useState([]);
    const [error , setError] = useState(null);
    const[loading , setLoading] = useState(true);
    const[filter , setFilter] = useState("ALL");

    useEffect(() =>{
        const fetchTeams = async () =>{
            try{
                const res = await axios.get("https://api.balldontlie.io/v1/teams" , {
                    headers:{
                        Authorization: 'c2984b35-d166-4d16-b449-8dba85e95be6'
                    }
                });
                // console.log(res.data)
                if(Array.isArray(res.data)){
                    
                    setTeams(res.data)
                }else{
                    setTeams([])
                }
                setLoading(false)

            }catch (err){
                setError("error while fetching")
                setLoading(false)
            }
        };
        fetchTeams();
    } , [])


const handlefilterChnage = (e) => {
    setFilter(e.target.value)

}

if(!Array.isArray(teams)){
    return <p> No teams</p>
}

const filterteams = filter === 'ALL'?teams:teams.filter(team => team.conference === filter)

return (
    <div>
        <select onChange={handlefilterChnage} value = {filter}>
        <option value = "ALL">ALL</option>
        <option value = "WEST">WEST</option>
        <option value = "EAST">EAST</option>

        </select>
        {loading && <p> Loading</p>}
        {error && <p> {error}</p>}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3">
            {
                filterteams.map(team =>{
                    <TeamCard key = {team.id} team = {team}/>
                })
            }

            </div>
       
    </div>
)


    


}

export default NbaDasBoard;
