import Header from "@/app/components/Header"

export default function Edit_Past() {
    return (
        <>
            <Header pageTitle="Modify: Events & Opportunities" />
            <h2 className="subheading">You are editing a past event.</h2>
            <div className="container-center">
                <form className="container-form">
                    <div className="items">
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="event-title">Event Title</label>
                                <input type="text" id="event-title" name="event-title" required />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="location">Location</label>
                                <input type="text" id="location" name="location" required />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="building">Building</label>
                                <input type="text" id="building" name="building" required />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="room">Room #</label>
                                <input type="text" id="room" name="room" required />
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="date">Date</label>
                                <input type="date" id="date" name="date" required />
                            </div>
                        </div>
                        <div className="item">
                            <div id="side-by-side">
                                <div id="start-time" className="text-input">
                                    <label htmlFor="start-time">Start Time</label>
                                    <input type="time" id="start-time" name="start-time" required />
                                </div>
                                <div className="text-input">
                                    <label htmlFor="end-time">End Time</label>
                                    <input type="time" id="end-time" name="end-time" required />
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className='text-input'>
                                <label htmlFor="event-description">Description</label>
                                <textarea id="event-description" name="event-description" required />
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