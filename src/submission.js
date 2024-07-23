import {useState} from "react"

function Submission(){

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [email,setEmail]=useState("");
   
    const [contact,setContact]=useState("");
    const [gender,setGender]=useState("");
    const [resume,setResume]=useState("");
    const [url,setUrl]=useState("");
    const [about,setAbout]=useState("");
    const [subjects,setSubjects]=useState({English:false,Hindi:false,Marathi:false})





 function resetall(){

    setFname("");
    setLname("");
    setEmail("");
   
    setContact("");
    setGender("");
    setResume("");
    setUrl("");
    setAbout("");
    setSubjects({English:false,Hindi:false,Marathi:false})
    alert("your data is submitted");

 } 

 const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
        ...prev,
        [sub]: !prev[sub],
    }));
};

  

 const submit_all=(e)=>{
    e.preventDefault();
  // console.error("nothig found");
   const formData = [
    fname,
    lname,
    email,
    contact,
    gender,
    resume,
    url,
    about,
    subjects
  ];
  console.log("Form Data:", formData);
  sessionStorage.setItem("formData", JSON.stringify(formData));
  console.log("Form Data:", formData);
};
    

   




    return (
        <div  style={{ whiteSpace: 'pre-line' }}>
              <h1><b>Submission htmlForm</b></h1>
              <form onSubmit={submit_all}  >
  
<label htmlFor="First-name">First Name:</label>
<input type='text'  value={fname}  onChange={(e)=>setFname(e.target.value)}  id="First-name" placeholder='first name' required/>
<br/>


<label label="Last-name">Last Name:</label>
<input type='text' id="Last-name"  placeholder='last name' required    value={lname}  onChange={(e)=>setLname(e.target.valuee)}  />
<br/>


<label htmlFor="E-mail">Enter Email</label>
<input type="email" id="E-mail"  placeholder='email' required    value={email}  onChange={(e)=>setEmail(e.target.value)} />
<br/>


<label htmlFor="Contact">Contact</label>
<input type='number' id="Contact"  placeholder='contact' required  value={contact}  onChange={(e)=>setContact(e.target.value)} />
<br/>


<label htmlFor="gender">Gender</label>
<input type="radio" name="gender"  id="male" value="male" checked={gender==='male'}  onChange={(e)=>setGender(e.target.value)}  />
<label htmlFor="male">Male</label>
<input type="radio" name="gender"  id="female"  value="female" checked={gender==='female'}  onChange={(e)=>setGender(e.target.value)}/>
<label htmlFor="female">Female</label>

<br/>

<label>Choose your subject</label>
<input type='checkbox' id="english" name="english" value="english"  checked={subjects.English===true} onChange={(e)=>handleSubjectChange("English")} />
<label htmlFor='english'>English</label>
<input type='checkbox' id="hindi" name="hindi" value="hindi"  checked={subjects.Hindi===true} onChange={(e)=>handleSubjectChange("Hindi")}/>
<label htmlFor='hindi'>Hindi</label>
<input type='checkbox' id="marathi" name="marathi" value="marathi"  checked={subjects.Marathi===true} onChange={(e)=>handleSubjectChange("Marathi")}/>
<label htmlFor='marathi'>Marathi</label>
{'\n'}

<label htmlFor="resume">Upload resume</label>
<input type="file" id="resume" value={resume} onChange={(e)=>setResume(e.target.value)}/>
<br/> 

<label htmlFor="url">Enter url</label>
<input type="url"  id="url" value={url} onChange={(e)=>setUrl(e.target.value)} />
<br/>
<label htmlFor="about">About</label>
<textarea  id="about" name="about" cols="10" value={about} onChange={(e)=>setAbout(e.target.value)}></textarea> 
{'\n'}



<h4>Submit OR Reset</h4>

<button  type="button" onClick={resetall}>Reset</button>

<button  type="submit" >Submit</button>

</form>



        </div>
    )

}


export default Submission;