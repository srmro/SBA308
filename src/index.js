// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"    //course info object
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",   //assignment group object
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",   //assignment info object
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",  //learner submission object
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

function getLearnerData(course, ag, submissions) {

const learners = getLearners(submissions);
console.log(learners);

  // return result;
}

// const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions); //parameters

// console.log(result);

//create a script that gathers data -> processes it -> and outputs a consistent result




//if an assignment is not yet due, don't include it in results
//if the learners submission is late deduct 10% of the total points


//create funtion named getLearnerData(), that should accept these values as parameters
//Order listed (Course Info, AssignmentGroup, [LearnerSubmission])


//output.
//the id of the learner
//the learner's total, weighted average, in assignments
//with more points_possible should be counter for more
//ex. learner with 50/100 on an assignment and 190/200 would have a weighted score of 240/300 = 80%

//each assignment should have a key with it's ID,
//and the value associated with should be the percentage the the learner scored on the assignment. (submission.score/points_possible)

//if assignment not yet due do not assign

//the average or the keyed dictionary scores