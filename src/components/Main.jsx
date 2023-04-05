import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Films from './Films';
import ApiMovie from '../baza/ApiMovie';

const Main = ({ user }) => {
    return (
        <>
            <Navbar user={user} />
            
            <Banner />

            <Films
                isLargeRow
                title={"NETFLIX ORIGINALS"}
                movie_request={ApiMovie.fetchNetflixOriginals}
            />

            <Films
                title={"Trending now"} movie_request={ApiMovie.fetchTrending}
            />

            <Films
                title={"Top Rated"} movie_request={ApiMovie.fetchTopRated}
            />

            <Films
                title={"Action movies"} movie_request={ApiMovie.fetchActionMovies}
            />
            
            <Films
                title={"Comedy movies"} movie_request={ApiMovie.fetchComedyMovies}
            />
            
            <Films
                title={"Horror movies"} movie_request={ApiMovie.fetchHorrorMovies}
            />
            
            <Films
                title={"Romance movies"} movie_request={ApiMovie.fetchRomanceMovies}
            />
            
            <Films
                title={"Documentaries"} movie_request={ApiMovie.fetchDocumentaries}
            />
        </>
    );
}

export default Main;