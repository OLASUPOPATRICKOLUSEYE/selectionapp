"use client";
// Import necessary modules and components
import React, { useState } from 'react';
import StudentList from "./components/studentList/StudentList";
import Groups from "./components/groups/Groups";
import * as XLSX from 'xlsx';

interface Group {
  supervisor: string;
  students: string[];
}

const Home: React.FC = () => {
  const [randomizedGroups, setRandomizedGroups] = useState<Group[]>([]);

  const handleRandomize = (groups: Group[]) => {
    setRandomizedGroups(groups);

    // Create Excel workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, XLSX.utils.json_to_sheet(groups), 'Randomized Students');

    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, 'randomized_students.xlsx');
  };

  return (
    <div className='bg-cover bg-center bg-fixed' style={{ backgroundImage: 'url("/bg2.jpg")', minHeight: '100vh' }}>
      <div className="container mx-auto text-center pt-16 p-4 bg-opacity-80">
        <h1 className="text-3xl font-bold mb-4 text-white">ComSci Randomizer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-2 text-white">Enter Student Names</h2>
            <StudentList onRandomize={handleRandomize} />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2 text-white">Randomized Groups</h2>
            <Groups groups={randomizedGroups} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
