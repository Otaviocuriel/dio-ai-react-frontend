import { Fragment } from 'react/jsx-runtime';
import { Skills } from './Skills'

const Profile: React.FC = () => {
    return (
        <Fragment>
            <img 
      src="https://assets.dio.me/odR66-3cLVSUwAcVAwmXdIaemT5GLsRhssECa5Bs3yA/f:webp/h:96/q:80/w:96/L3VzZXJzL3N0dWRlbnQvYWI1MmE5NTItM2IzNC00NWM3LWE4ZjYtZDY3ZjFlNmE5NjA3LmpwZw"
      alt="Otavio"
      style={{ width: '300px', display: 'block', margin: '0 auto' }} 
    />
        

       <h3>
        Otavio Curiel
       </h3>
       <p>
       <b>
         TI
        </b>
       </p> 
       <Skills />
      </Fragment>
         
    )

}

export default Profile;