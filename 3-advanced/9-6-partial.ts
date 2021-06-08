// 기존의 타입 중에서 부분적인 것만 허용하고 싶을 때

{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | ' low'
  };

  function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>) :ToDo { // fieldsTOupdate 부분적인것들만 update
    return {...todo, ...fieldsToUpdate}; //기존에 ToDo 아이템들을 전부다 복사한다음 그 값에다 업데이트된값들을 다 덮어씌움
  }
  const todo:ToDo = {
    title: 'learn ts',
    description: 'study ~~',
    label: 'study',
    priority:'high'
  };
  const updated = updateToDo(todo,{priority: ' low'});
  console.log(updated);
}