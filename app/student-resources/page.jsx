'use client'

import Header from "../components/Header";


export default function StudentResources() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get the selected option
    const selectedOption = event.target.options.value;

    // Redirect to the selected option's page
    if (selectedOption === "add") {
    window.location.href = "/add-resource"; // Navigate to /option1 route
    } else if (selectedOption === "edit") {
    window.location.href = "/edit-resource"; // Navigate to /option2 route
    }
  };
  return (
    <>
      <Header pageTitle="Modify: Student Resources" />
      <main>
        <div className="container-center">
          <div className="container">
            <div className="center-divs">
              <form onSubmit={handleSubmit} id="myForm">
                <div className="top-div">
                  <span>I want to </span>
                  <select id="options" name="options">
                      <option value="add">add</option>
                      <option value="edit">edit</option>
                  </select>
                  <span> a resource.</span>
                </div>

                <div>
                  <input type="submit" value="Submit" className="mod-stu-submit"/>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
