import React from 'react';
import axios from 'axios';

class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMovieTitleChange = this.handleMovieTitleChange.bind(this);
        this.handleMovieYearChange = this.handleMovieYearChange.bind(this);
        this.handleMoviePosterChange = this.handleMoviePosterChange.bind(this);
    }

    handleMovieTitleChange(e) {
        this.setState({ Title: e.target.value });
    }

    handleMovieYearChange(e) {
        this.setState({ Year: e.target.value });
    }

    handleMoviePosterChange(e) {
        this.setState({ Poster: e.target.value });
    }

    handleSubmit(e) {
        alert(this.state.Title + "      " + this.state.Year
            + "       " + this.state.Poster);
        e.preventDefault();


        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        };
        

            axios.put('http://localhost:4000/api/movies/'+this.state._id,newMovie)
            .then()
            .catch();
    
            
        this.setState({
            Title: '',
            Year: '',
            Poster: '',
            _id: ''
        });
    }

    componentDidMount() {
        alert(this.props.match.params.id);

        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                _id: response.data._id,
                Title: response.data.title,
                Year : response.data.year,
                Poster: response.data.poster
            })
        })
        .catch();
    }


    render() {
        return (
            <div>
                <h1>Hello from Edit component</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <label>Movie Title</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.handleMovieTitleChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Movie Year</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.Year}
                            onChange={this.handleMovieYearChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <label>Movie Poster Url</label>
                        <textarea
                            row='3'
                            className='form-control'
                            value={this.state.Poster}
                            onChange={this.handleMoviePosterChange}
                        ></textarea>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Edit Movie">
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}

export default Edit;