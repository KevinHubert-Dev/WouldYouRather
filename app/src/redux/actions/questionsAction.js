export const QUESTIONS_LOADED = 'QUESTIONS_LOADED'
export const QUESTION_ANSWERED = 'QUESTION_ANSWERED'
export const QUESTION_CREATED = 'QUESTION_CREATED'

export function questionsLoaded(questions) {
  return {
    type: QUESTIONS_LOADED,
    questions
  }
}

export function questionAnswered(question, userid) {
  return {
    type: QUESTIONS_LOADED,
    question,
    userid
  }
}


export function questionCreated(question) {
  return {
    type: QUESTIONS_LOADED,
    question
  }
}