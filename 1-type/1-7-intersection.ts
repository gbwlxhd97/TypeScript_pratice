{
  // Intersection type:& and기능으로 다양한 타입을 하나로 묶어서 사용가능
  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function interwork(person: Student & Worker) {
    console.log(person.name,person.empolyeeId);
  }

  interwork({
    name: 'hi',
    score: 1,
    empolyeeId: 123,
    work: () => {}
  });
}