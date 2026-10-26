
function Students() {
  const students = [
    { id: "SD001", name: "Muhire joseph", trade: "Software Development" },
    { id: "SD002", name: "Munezero Innocecnt", trade: "Multimedia production" },
    { id: "SD003", name: "Abiturije Elysee", trade: "Netorking " },
    { id: "SD004", name: "Mukunzi Josue", trade: "computer system" },
    { id: "SD005", name: "Hakiimana valens", trade: "Software Development" }
  ];

  return (
    <main>
      <h2>Our Students</h2>

      <p>List of students in our class.</p>

      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Trade</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.trade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Students;
