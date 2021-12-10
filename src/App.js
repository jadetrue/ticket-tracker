import "./App.css";
import team from "../src/models/data";
import {MemberCard} from "./modules/MemberCard";

function App() {
    return (
        <div className="grid grid-cols-4 justify-items-center">
            {team.map((team) => (
                <MemberCard name={team.name} role={team.role}></MemberCard>
            ))}
        </div>
    );
}

export default App;
