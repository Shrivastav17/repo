import React, { useEffect, useState } from 'react';
import useFetch from '../Functions/usefetch';
import { Link } from 'react-router-dom';
import '../Components/css/style.css';
import '../Components/css/table.css';
import { jsPDF } from 'jspdf';
import * as XLSX from 'xlsx';

export default function Table() {
    const [searchTerm, setSearchTerm] = useState('');
   
    const { data: repo_data, loading, error } = useFetch('repo/showrepo');
    console.log(repo_data);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredData = repo_data && repo_data.filter(({ lanNo, rcNo, make, model }) =>
        (lanNo && lanNo.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (rcNo && rcNo.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (make && make.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (model && model.toLowerCase().includes(searchTerm.toLowerCase()))
    );


    const handleDownloadPdfClick = () => {
        const doc = new jsPDF();
    
        doc.text("Data Report", 10, 10);
        const tableColumn = ["ID", "LAN No", "RC No", "Make", "Model"];
        const tableRows = [];
    
        filteredData.forEach(item => {
          const itemData = [
            item._id,
            item.lanNo,
            item.rcNo,
            item.make,
            item.model,
          ];
          tableRows.push(itemData);
        });
    
        doc.autoTable({
          head: [tableColumn],
          body: tableRows,
        });
    
        doc.save("data-report.pdf");
      };
    
      const handleDownloadExcelClick = () => {
        const worksheet = XLSX.utils.json_to_sheet(filteredData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    
        XLSX.writeFile(workbook, "data-report.xlsx");
      };

    return (
        <div>
            <h2>REPO DATA</h2>
            <div className="container table-data">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="search-input"
                    />
                </div>
                <button type='button' className='btn btn-success float-right' onClick={handleDownloadExcelClick}>Download Pdf</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">LAN Number</th>
                            <th scope="col">RC Number</th>
                            <th scope="col">Make</th>
                            <th scope="col">Model</th>
                            <th scope="col">Timestamp</th>
                            <th scope="col">File</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData && filteredData.map(({ _id, lanNo, rcNo, make, model, timestamp, user_image }) => (
                            <tr key={_id}>
                                <td>{lanNo}</td>
                                <td>{rcNo}</td>
                                <td>{make}</td>
                                <td>{model}</td>
                                <td>{new Date(timestamp).toLocaleString()}</td>
                                <td>
                                    {user_image && (
                                        <a href={`http://localhost:8080/assets/profiles/${user_image}`} target="_blank" rel="noopener noreferrer">View File</a>
                                    )}
                                </td>
                                <td>
                                    <Link to={`/editForm/${_id}`} className='btn btn-success'>
                                        <i className="fa-solid fa-pencil"></i>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}


