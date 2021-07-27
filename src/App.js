import {connect} from "react-redux";
import {useRef} from "react";


function App({testStore, onAddTrack}) {
    console.log(testStore)
    const addTrack = () => {
        console.log('addTrack', trackInput.current.value);
        onAddTrack(trackInput.current.value)
        trackInput.current.value = ''
    }
    const trackInput = useRef(null);

    return (
        <div>
            <label>
                <input type="text" ref={trackInput}/>
            </label>
            <button onClick={addTrack.bind(this)} className="addTrack">Add track</button>
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
    dispatch => ({
        onAddTrack: (trackName) => {
            dispatch({type: 'ADD_TRACK', payload: trackName})
        }
    })
)(App);
