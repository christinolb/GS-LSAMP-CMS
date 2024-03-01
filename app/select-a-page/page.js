import SelectionButton from "../components/SelectionButton";
import Header from "../components/Header"


export default function Selection(){
    return(
        <>
            <Header pageTitle="Select a Page to Modify" />
            <main className="container-center">
                <div className="container">
                    <div className="center-divs">
                        <div className="top-div">
                            <SelectionButton label={"Student Resources"} page="/student-resources"/>
                        </div>

                        <div>
                            <SelectionButton label={"Events & Opportunities"} page="events-and-opportunities"/>
                        </div>
                    </div>
                </div>
            </main>
        </>
        
    );
}