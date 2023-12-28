// components/StudentList.tsx
import React, { useState, ChangeEvent } from 'react';

interface Group {
  groupNumber: number;
  students: string[];
}

interface StudentListProps {
  onRandomize: (groups: Group[]) => void;
}

const StudentList: React.FC<StudentListProps> = ({ onRandomize }) => {
  const [students, setStudents] = useState<string>('');
  const [numGroups, setNumGroups] = useState<number>(1); // Start with one group
  const [groups, setGroups] = useState<Group[]>(Array.from({ length: numGroups }, (_, index) => ({ groupNumber: index + 1, students: [] })));

  const handleStudentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setStudents(event.target.value);
  };

  const handleRandomize = () => {
    const studentArray = students.split('\n').filter((student) => student.trim() !== '');
    const shuffledStudents = [...studentArray].sort(() => Math.random() - 0.5);

    const groupedStudents = groups.map((group) => ({
      groupNumber: group.groupNumber,
      students: shuffledStudents.slice((group.groupNumber - 1) * Math.ceil(studentArray.length / numGroups), group.groupNumber * Math.ceil(studentArray.length / numGroups)),
    }));

    onRandomize(groupedStudents);
  };

  const handleAddGroup = () => {
    setNumGroups((prevNumGroups) => prevNumGroups + 1);
    setGroups((prevGroups) => [...prevGroups, { groupNumber: numGroups + 1, students: [] }]);
  };

  return (
    <div className="mb-4">
      <textarea
        rows={10}
        placeholder="Enter Student Names (One Per Line)"
        value={students}
        onChange={handleStudentChange}
        className='w-full px-2 text-black font-bold py-2'
      ></textarea>
      <div className="flex items-center mt-2">
        <input
          type="number"
          placeholder="Number of Groups"
          value={numGroups}
          onChange={(e) => setNumGroups(Number(e.target.value))}
          className='w-1/2 px-2 text-black font-bold py-2'
        />
        <button
          className='bg-blue-500 font-bold px-2 h-10 text-center rounded-lg ml-2 text-white'
          onClick={handleAddGroup}
        >
          Add Group
        </button>
      </div>
      <button
        className='bg-gray-500 font-bold px-2 h-10 text-center rounded-lg w-full mt-2 text-white'
        onClick={handleRandomize}
      >
        Randomize
      </button>

      {/* Display the total number of groups and numbers */}
      <div className="mt-4">
        <p>Total Number of Groups: {numGroups}</p>
        <p>Total Number of Numbers: {numGroups}</p>
      </div>
    </div>
  );
};

export default StudentList;