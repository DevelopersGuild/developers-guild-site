import React, { lazy, Suspense } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import { toast } from 'react-toastify';
import MainLogo from './graphic-assets/Main-Logo.svg'
const GithubBar = lazy(() => import('./GithubBar'));


// toast (anouncement) code information.
// toast.configure();
// toast("First meeting is October 11, 2019 ♎", {
//     autoClose: 6000,
//     pauseOnHover: true,
//     // hideProgressBar: true
// });
// toast code end!

export const Landing: React.FC = () => (
    <React.Fragment>
        <br />
        <Container>
            <Jumbotron>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>

                    <img className="lazyload" style={{ marginRight: 20 }} data-src={MainLogo} alt="Logo" width="150"
                        height="150"
                    />
                    <div>
                        <h1>Developers Guild - De Anza</h1>
                        <p>
                            A project and contribution based programming club.
                        </p>
                        <p>Fridays 1:30PM-4:00PM AT311</p>
                    </div>
                </div>

            </Jumbotron>
            <br />
            <Suspense fallback={<div>Loading...</div>}>
                <GithubBar />
            </Suspense>
            <br />
        </Container>
    </React.Fragment>
)
