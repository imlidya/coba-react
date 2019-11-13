import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            lokasi: 'Coba',
            cabang: '',
            batasanjumlah: null,
            disetujuioleh: '',
            khususDKA: true
        };

        this.state = this.initialState;
        this.handleChangeOption = this.handleChangeOption.bind(this);
        // this.handlebatasanjumlah = this.handlebatasanjumlah.bind(this);
    }

    handleChange = event => {
        const target = event.target;

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);

        let batasanjumlah = this.state.batasanjumlah;
        if (!Number(batasanjumlah)) {
          alert("Batasan jumlah harus number");
        }
    }

    // mySubmitHandler = (event) => {
    //     event.preventDefault();
    //     let batasanjumlah = this.state.batasanjumlah;
    //     if (!Number(batasanjumlah)) {
    //       alert("Batasan jumlah harus number");
    //     }
    // }

    handleChangeOption(event) {
        this.setState({lokasi: event.target.lokasi});
    }

    // handlebatasanjumlah (evt) {
    //     this.setState({ batasanjumlah: evt.target.value });
    // }

    render() {
        const { lokasi, cabang, batasanjumlah, disetujuioleh, khususDKA } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
             <label>Lokasi</label>
             <select value={lokasi} onChange={this.handleChangeOption}>
                <option value="Germany">Germany</option>
                <option value="Spain">Spain</option>
            </select> 
                <label>Cabang</label>
                <input 
                    type="text" 
                    name="cabang" 
                    value={cabang} 
                    onChange={this.handleChange} />
                <label>Batasan Jumlah</label>
                <input 
                    type="text" 
                    name="Batasan Jumlah" 
                    value={batasanjumlah} 
                    onChange={this.handleChange} />
                <label>Disetujui Oleh</label>
                <input 
                    type="text" 
                    name="disetujuioleh" 
                    value={disetujuioleh} 
                    onChange={this.handleChange} />
                <label>KhususDKA</label>
                <input
                    name="khususDKA"
                    type="checkbox"
                    checked={khususDKA}
                    onChange={this.handleChange} />
                <p></p>
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
