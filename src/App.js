import {connect} from "react-redux";
import {useRef} from "react";
import {getTracks} from "./actions/tracks";


function App({tracks, onAddTrack, onGetTracks, onFindTrack}) {
    console.log(tracks)
    const trackInput = useRef(null);
    const searchInput = useRef(null);
    const addTrack = () => {
        console.log('addTrack', trackInput.current.value);
        onAddTrack(trackInput.current.value)
        trackInput.current.value = ''
    }
    const findTrack = () => {
        console.log('findTrack', searchInput.current.value);
        onFindTrack(searchInput.current.value)
    }
    return (
        <div>

            <div>
                <label>
                    <input type="text" ref={trackInput}/>
                </label>
                <button onClick={addTrack.bind(this)} className="addTrack">Add track</button>
            </div>
            <div>
                <input type="text" ref={searchInput}/>
                <button onClick={findTrack.bind(this)}>Find track</button>
            </div>
            <div>
                <button onClick={onGetTracks}>Get tracks</button>
            </div>
            <ul className="list"> {tracks.map((track, index) =>
                <li key={index}>{track.name}</li>
            )}</ul>
        </div>
    );
}
export default connect(
    state => ({
        tracks: state.tracks.filter(track => track.name.includes(state.filterTracks))
    }),
    dispatch => ({
        onAddTrack(name) {
            const payload = {
                id: Date.now().toString(),
                name
            }
            dispatch({type: 'ADD_TRACK', payload})
        },
        onFindTrack(name) {
            dispatch({type: 'FIND_TRACK', payload: name})
        },
        onGetTracks() {
            dispatch(getTracks())
        }
    })
)(App);
