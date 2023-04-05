const classroom = {
  teachers: {
    fulltime: [{ name: "Francis" }],
  },
  students: [{ name: "Chansoo" }, { name: "Tamara" }, { name: "Michael" }],
};

const students = classroom.students;

students.push({ name: "Viktor" });

console.log(classroom);
