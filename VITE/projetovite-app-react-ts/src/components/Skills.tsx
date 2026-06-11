import { Fragment } from "react/jsx-runtime";
import { HardSkills } from "./HardSkills";
import { SoftSkills } from "./SoftSkills";
export function  Skills(){
    return(
       <Fragment>
            <h3>
                Hard Skills:
            </h3>
            <HardSkills />
            <h3>
                Soft Skills:
            </h3>
            <SoftSkills />
        </Fragment> 
    )
}

export default Skills;