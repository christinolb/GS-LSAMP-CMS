'use client'

import Header from "../components/Header";


export default function EventsAndOpportunities() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Get the selected option
    const selectedOption = event.target.options.value;
    const selectedOption2 = event.target.options2.value;


    // Redirect to the selected option's page
    if (selectedOption === "add") {
      if (selectedOption2 === "past") {
          window.location.href = "/add-past";
      } else {
          window.location.href = "/add-present";
      }
    } else if (selectedOption === "edit") {
      if (selectedOption2 === "past") {
          window.location.href = "/edit-past";
      } else {
          window.location.href = "/edit-present";
      }
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
                  <span> an event</span>
                </div>

                <div className="top-div">
                  <span>to </span>
                  <select id="options2" name="options2">
                      <option value="past">past</option>
                      <option value="present">present</option>
                  </select>
                  <span> events.</span>
                </div>

                <div>
                  <input type="submit" value="Proceed" className="mod-stu-submit"/>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}

