import { NavLink } from "react-router-dom";

const ViewContact = () => {
  return (
    <>
        <section className="view-contact-intro p-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h3 text-warning fw-bold">View Contact</p>
                <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quia maxime a hic, repellat laudantium, ratione architecto consectetur soluta sapiente harum molestiae vel eos ut voluptas? Odit deleniti saepe perferendis.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="view-contact mt-3">
          <div className="container">
            <div className="row align-items-center">
                <div className="col-md-4">
                  <img src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt="User Icon" className="img-fluid" />
                </div>
                <div className="col-md-8">
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
                    <li className="list-group-item list-group-item-action">
                      Company : <span className="fw-bold">admin@gmail.com</span>  
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Title : <span className="fw-bold">admin@gmail.com</span>  
                    </li>
                    <li className="list-group-item list-group-item-action">
                      Group : <span className="fw-bold">admin@gmail.com</span>  
                    </li>

                  </ul>
                  
                </div>
            </div>
            <div className="row">
              <div className="col">
                <NavLink to = '/contacts/list' className='btn btn-warning'>Back</NavLink>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default ViewContact;