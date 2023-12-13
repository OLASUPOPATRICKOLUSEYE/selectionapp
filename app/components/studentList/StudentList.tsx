// components/StudentList.tsx
import React, { useState, ChangeEvent } from 'react';

interface Group {
  supervisor: string;
  students: string[];
}

interface StudentListProps {
  onRandomize: (groups: Group[]) => void;
}

const StudentList: React.FC<StudentListProps> = ({ onRandomize }) => {
  const [students, setStudents] = useState<string>('');
  const [groups, setGroups] = useState<Group[]>([]);

  const handleStudentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setStudents(event.target.value);
  };

  const handleRandomize = () => {
    const studentArray = students.split('\n').filter((student) => student.trim() !== '');
    const shuffledStudents = [...studentArray].sort(() => Math.random() - 0.5);

    const supervisors = ['Mr Adeola O.O', 'Mr Olowooker A.S', 'Mr. Abimbola S.A', 'Mr Oyewo D.T', 'Mrs Bello'];

    const groupedStudents = Array.from({ length: 5 }, (_, index) => ({
      supervisor: supervisors[index],
      students: shuffledStudents.slice(index * Math.ceil(studentArray.length / 5), (index + 1) * Math.ceil(studentArray.length / 5)),
    }));

    setGroups(groupedStudents);
    onRandomize(groupedStudents);
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
      <button
        className='bg-gray-500 font-bold px-2 h-10 text-center rounded-lg w-full mt-2 text-white'
        onClick={handleRandomize}
      >
        Randomize
      </button>
    </div>
  );
};

export default StudentList;
