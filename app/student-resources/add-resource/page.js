import Header from "../../components/Header"

export default function Add_Resource() {
    return (
        <>
            <Header pageTitle="Modify: Student Resources" />
            <h2 className="subheading">You are adding a resource.</h2>
            <div className="container-center">
                <form className="container-form">
                    <div className="items">
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="Resource Title">Resource Title</label>
                                <input type="text" id="resource-title" name="resource-title" required />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="resource-description">Resource Description</label>
                                <textarea id="resource-description" name="resource-description" required />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="link-name">Link Name</label>
                                <input type="text" id="link-name" name="link-name" required />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="link">Link</label>
                                <input type="text" id="link" name="link" required />
                            </div>
                        </div>
                        <div id="stu-btn-container"  className="item">
                            <button id="stu-btn" className='btn' type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}