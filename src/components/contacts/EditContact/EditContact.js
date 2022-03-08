import { NavLink } from "react-router-dom";

const EditContact = () => {
  return (
    <>
    <section className="add-contact">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h4 text-primary fw-bold">Update Contact</p>
            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero quibusdam eaque reprehenderit. Alias nam esse perferendis quaerat, doloremque ab, iure dolore laudantium ducimus ipsam numquam expedita perspiciatis adipisci quia!</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Name" />  
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Photo Url" />  
                </div>
                <div className="mb-2">
                  <input type="number" className="form-control" placeholder="Mobile" />  
                </div>
                <div className="mb-2">
                  <input type="email" className="form-control" placeholder="Email" />  
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Company Name" />  
                </div>
                <div className="mb-2">
                  <input type="text" className="form-control" placeholder="Title" />  
                </div>
                <div className="mb-2">
                  <select name="" className="form-control">
                    <option value="">Select a Group</option>  
                  </select>
                </div>
                <div className="mb-2">
                  <input type="submit" className="btn btn-primary" value = 'Create' />
                  <NavLink className='btn btn-dark ms-2' to = '/contacts/list'>Cancel</NavLink>
                </div>
              </form>
          </div>
          <div className="col-md-6">
            <img src="https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png" alt="User-Icon" className="img-fluid" />
          </div>
        </div>
      </div>

    </section>
    </>
  )
}

export default EditContact;