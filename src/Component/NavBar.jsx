import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changeMode } from '../features/mode/modeReducer';
import { Link } from 'react-router-dom'

function NavBar() {
    const dispatch = useDispatch();
    const lightMode = useSelector(state => state.modeStore.lightMode)
    const handleChangeMode = () => {
        dispatch(changeMode())
    }
    useEffect(() => {
        document.body.style.backgroundColor = lightMode ? 'white' : 'black';
        document.body.style.color = lightMode ? 'black' : 'white'
    }, [lightMode])
    return (




        <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={lightMode ? 'primary' : 'dark'}>

            <div class="container-fluid d-flex justify-content-center align-items-center">
                <Link class="nav-link " aria-current="page" to="/"><h4 style={{padding:'0px 15px  0px 15px'}}>News</h4></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="/">General</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/business">Business</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/health">Health</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/science">Science</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/sports">Sports</Link>
                        </li>


                    </ul>

                </div>
                <div className="form-check form-switch ">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="modeToggle"
                        onChange={handleChangeMode}
                        checked={!lightMode}


                    />
                    <label className="form-check-label" htmlFor="modeToggle" style={{ color: lightMode ? 'black' : 'white' }}>
                        {lightMode && "Light" || "Dark"} Mode
                    </label>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
