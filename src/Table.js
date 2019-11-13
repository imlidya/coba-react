import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Lokasi</th>
                <th>Cabang</th>
                <th>Batasan Jumlah</th>
                <th>Disetujui Oleh</th>
                <th>Aksi</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.lokasi}</td>
                <td>{row.cabang}</td>
                <td>{row.batasanjumlah}</td>
                <td>{row.disetujuioleh}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Table;