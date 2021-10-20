const Nav = () =>{
    return(  <div className="nav-bar">
    <a className="navbar nav-link" href="index.html">Navbar</a>
    <a className='home nav-link' href='index.html'>Home</a>
    <a className="about nav-link" >About Us</a>
</div>
)}


const Sidebar = () =>{
    return(  <div className="side-bar">
    <a className='links'>Site1 </a>
    <a className="links">Site2</a>
</div>
)}

const Template = (props)=> {
    return(
        <React.Fragment>
        <Nav />
        <div className="hello">
            
            {props.children}
        </div>
        <Sidebar />
        </React.Fragment>
    )
}