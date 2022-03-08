import { NavLink } from "react-router-dom";

const ContactList = () => {
  return (
    <>
    <section className="contact-search p-3">
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="h3 fw-bold">Contact Manager
                <NavLink to = {'/contacts/add'} className = 'btn btn-primary ms-2' > <i className="fa fa-plus-circle me-2"></i> New </NavLink>
              </p>
              <p className="fst-italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, doloribus tempore? Dignissimos sapiente voluptate aspernatur, doloremque numquam sint totam saepe adipisci dolor assumenda, maiores deleniti tempore dolore itaque distinctio harum.</p>
              <div className="row">
                <div className="col-md-6">
                  <form className="row">
                    <div className="col">
                      <div className="mb-2">
                        <input type="text" className="form-control" placeholder="Search Names"/>  
                      </div>
                    </div>
                    <div className="col">
                      <div className="mb-2">
                        <input type="submit" className="btn btn-outline-dark" value="Search"/>  
                      </div>
                    </div> 
                  </form>  
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-list">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center dflex justify-content-around">
                  <div className="col-md-4">
                  <img src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt="user_icon" className="img-fluid" />
                </div>
                <div className="col-md-7">
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-action">
                      Name : <span className="fw-bold">Rajan</span>  
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Mobile : <span className="fw-bold">9847612744</span>  
                    </li>
                    <li className="list-group-item list-group-item-action">
                      E-mail : <span className="fw-bold">admin@gmail.com</span>  
                    </li>
                  </ul>
                </div>
                <div className="col-md-1 d-flex flex-column align-items-center">
                    <NavLink to = '/contacts/view/:contactId' className= 'btn btn-warning my-1' > <i className="fa fa-eye"></i></NavLink>
                    <NavLink to = '/contacts/edit/:contactId' className= 'btn btn-primary my-1' > <i className="fa fa-pen"></i></NavLink>
                    <button className= 'btn btn-danger my-1' > <i className="fa fa-trash"></i></button>
                </div>

                </div>
              </div>  
            </div>  
          </div>  
        </div>  
      </div>
      
    </section>
    </>
  )
}

export default ContactList;