import "./UpdateProfile.css"
const UpdateProfile = () => {
    return (
        <div className='update-profile-Container'>
                <form className='update-section'>
                    <h1 className='header'>UPDATE PROFILE INFO</h1>
                    <div className='field'>
                        <label for="email">Email</label>
                        <input  type={"text"} id="email" placeholder={"Email"}/>            
                    </div>
                    <div className='field'>
                        <label for="date">Birthday</label>
                        <input type={"date"} id= "date" placeholder={"Date of Birth"}/>            
                    </div>
                    <div className='field'>
                        <label for="phone">Phone</label>
                        <input id="phone" type="tel" name="phone"  placeholder={"Phone Number"}/>
                    </div>
                    <div className='field'>
                        <label for="school">School</label>
                        <input type={"text"} id="school" placeholder={"School"}/>            
                    </div>
                    <div className='field'>
                        <label for="work">Degree</label>
                        <input type={"text"} id="work" placeholder={"Degree"}/>            
                    </div>
                    <input className='btn btn-primary submit-btn' type={"submit"} value={"Update Profile"}/>
                </form>
        </div>
        
    )
}
export default UpdateProfile;