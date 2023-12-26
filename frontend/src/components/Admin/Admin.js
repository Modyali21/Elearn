import {StudentTable,TeacherTable,Promote} from '../index'
import './Admin.css'
const Admin = (props) => {
    return (
        <>
        <h1>{props.user.page}</h1>
        {(props.user && props.user.page === 3)?
        (
            <>
                <Promote />
                <StudentTable  />
                <TeacherTable />
            </>
        ):  
        <h1 className='container admin-page'>You are not authorized to open this page. Please login to open this page</h1>
        }  
        </>
        
        
    );
};
export default Admin;
