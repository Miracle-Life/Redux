import {connect} from "react-redux";


function App({testStore}) {
    console.log(testStore)
    return (
        <div>
            <label>
                <input type="text" className="trackInput"/>
            </label>
            <button className="addTrack">Add track</button>
            <ul className="list"> {testStore.map((track, index) =>
                <li key={index}>{track}</li>
            )}</ul>
        </div>
    );
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({})
)(App);
