export const defaultState = {
  users: [
    {
      id: "U1",
      name: "Dev Tester"
    },
    {
      id: "U2",
      name: "Front End Tester"
    }
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1"
    },
    {
      name: "To Do",
      id: "G2",
      owner: "U2"
    }
  ],
  tasks: [
    {
      name: "Do Tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false
    },
    {
      name: "Do Feature",
      id: "T2",
      group: "G2",
      owner: "U2"
    }
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great Work!!"
    },
    {
      owner: "U2",
      id: "C2",
      task: "T2",
      content: "Needs Updating!"
    }
  ]
};
