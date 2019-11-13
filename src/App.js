import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Bar from './Bar';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">

                <h1>LOGO</h1>
                <Bar></Bar>
                <p>Pengaturan Persetujuan RAB</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Tambah Skema Persetujuan</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;